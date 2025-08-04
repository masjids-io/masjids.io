'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import * as Icon from 'react-feather'
import Image from 'next/image'
import * as adhan from 'adhan'
import moment from 'moment'
import AuthProtectionWrapper from '@/components/wrappers/AuthProtectionWrapper'

// Define the TypeScript type for the masjid data from the API
type Masjid = {
    id: string;
    name: string;
    location: string;
    isVerified: boolean;
    address: {
        addressLine1: string;
        addressLine2: string;
        zoneCode: string;
        postalCode: string;
        city: string;
        countryCode: string;
    };
    phoneNumber: {
        countryCode: string;
        number: string;
    };
    prayerConfig: {
        method: string; // Method from API is a string
        fajrAngle: number;
        ishaAngle: number;
        highLatitudeRule: string; // Rule from API is a string
        adjustments: {
            fajrAdjustment: number;
            dhuhrAdjustment: number;
            asrAdjustment: number;
            maghribAdjustment: number;
            ishaAdjustment: number;
        }
    };
};

type PrayerTimes = {
    Fajr: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
};

// Helper function to map API method string to the correct adhan.js function
const getAdhanMethod = (apiMethod: string) => {
    switch (apiMethod) {
        case 'MUSLIM_WORLD_LEAGUE': return adhan.CalculationMethod.MuslimWorldLeague();
        case 'EGYPTIAN': return adhan.CalculationMethod.Egyptian();
        case 'KARACHI': return adhan.CalculationMethod.Karachi();
        case 'UMM_AL_QURA': return adhan.CalculationMethod.UmmAlQura();
        case 'DUBAI': return adhan.CalculationMethod.Dubai();
        case 'MOON_SIGHTING_COMMITTEE': return adhan.CalculationMethod.MoonsightingCommittee();
        case 'NORTH_AMERICA': return adhan.CalculationMethod.NorthAmerica();
        case 'KUWAIT': return adhan.CalculationMethod.Kuwait();
        case 'QATAR': return adhan.CalculationMethod.Qatar();
        case 'SINGAPORE': return adhan.CalculationMethod.Singapore();
        case 'OTHER': return adhan.CalculationMethod.Other();
        default: return adhan.CalculationMethod.MuslimWorldLeague(); // Sensible fallback
    }
};

// Helper function to map API rule string to the correct adhan.js enum
const getHighLatitudeRule = (apiRule: string) => {
    switch (apiRule) {
        case 'MIDDLE_OF_THE_NIGHT': return adhan.HighLatitudeRule.MiddleOfTheNight;
        case 'SEVENTH_OF_THE_NIGHT': return adhan.HighLatitudeRule.SeventhOfTheNight;
        case 'TWILIGHT_ANGLE': return adhan.HighLatitudeRule.TwilightAngle;
        default: return adhan.HighLatitudeRule.MiddleOfTheNight;
    }
}


export default function MasjidSingle() {
    const [activeTab, setActiveTab] = useState(1);
    const [masjidData, setMasjidData] = useState<Masjid | null>(null);
    const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const params = useParams();
    const id = params.id as string;

    useEffect(() => {
        if (!id) return;

        const fetchMasjidData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`/api/masjids/${id}`);
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || "Failed to fetch masjid data.");
                }
                const result = await response.json();
                
                if (!result.Masjid) {
                    throw new Error("Masjid data not found in response.");
                }
                
                const data: Masjid = result.Masjid;
                setMasjidData(data);

                // --- Calculate Prayer Times ---
                // NOTE: Using fallback coordinates. A real app would store lat/lng with the masjid.
                const coordinates = new adhan.Coordinates(-8.5833, 116.1167);
                
                // --- FIX: Use the helper function to get the correct calculation parameters ---
                const prayerParams = getAdhanMethod(data.prayerConfig.method);
                
                // Apply custom angles and high latitude rule
                if (data.prayerConfig.fajrAngle) prayerParams.fajrAngle = data.prayerConfig.fajrAngle;
                if (data.prayerConfig.ishaAngle) prayerParams.ishaAngle = data.prayerConfig.ishaAngle;
                if (data.prayerConfig.highLatitudeRule) {
                    prayerParams.highLatitudeRule = getHighLatitudeRule(data.prayerConfig.highLatitudeRule);
                }
                
                // Manually create the adjustments object in the correct format
                if (data.prayerConfig.adjustments) {
                    prayerParams.adjustments = {
                        fajr: data.prayerConfig.adjustments.fajrAdjustment || 0,
                        sunrise: 0, // Add the required 'sunrise' property
                        dhuhr: data.prayerConfig.adjustments.dhuhrAdjustment || 0,
                        asr: data.prayerConfig.adjustments.asrAdjustment || 0,
                        maghrib: data.prayerConfig.adjustments.maghribAdjustment || 0,
                        isha: data.prayerConfig.adjustments.ishaAdjustment || 0,
                    };
                }

                const date = new Date();
                const prayers = new adhan.PrayerTimes(coordinates, date, prayerParams);

                setPrayerTimes({
                    Fajr: moment(prayers.fajr).format("hh:mm A"),
                    Dhuhr: moment(prayers.dhuhr).format("hh:mm A"),
                    Asr: moment(prayers.asr).format("hh:mm A"),
                    Maghrib: moment(prayers.maghrib).format("hh:mm A"),
                    Isha: moment(prayers.isha).format("hh:mm A"),
                });

            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMasjidData();
    }, [id]);

    const imageStyle = {
        width: '100%',
        minWidth: '100%',
        height: 'auto',
    };

    if (loading) {
        return <Layout><div>Loading...</div></Layout>;
    }

    if (error) {
        return <Layout><div>Error: {error}</div></Layout>;
    }

    if (!masjidData) {
        return <Layout><div>Masjid not found.</div></Layout>;
    }

    return (
        <>
        <AuthProtectionWrapper>
            <Layout>
                <div>
                    <section className="pt-100 layout-pb-sm">
                        <div className="container pt-100 md:pt-60 sm:pt-40">
                            <div className="row y-gap-60 items-center">
                                <div className="col-lg-6">
                                    <div className="ratio ratio-62:60">
                                        <Image width="0" height="0" sizes="100vw" style={imageStyle} className="absolute-full-center rounded-8 object-fit-cover" src="/img/forms/bg.png" alt="Masjid image" />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="pl-40 pb-80 lg:pl-0 md:pb-0">
                                        <h2 className="text-32 mt-4 d-flex items-center">
                                            {masjidData.name}
                                            {masjidData.isVerified && (
                                                <span className="d-inline-flex ml-10" style={{ color: '#35B27D' }}>
                                                    <Icon.CheckCircle size={28} />
                                                </span>
                                            )}
                                        </h2>
                                        
                                        <div className="mt-30">
                                            <p>A central place of worship and community gathering in {masjidData.address.city}, {masjidData.location}. Welcoming visitors and locals for daily prayers and events.</p>
                                        </div>

                                        <div className="pt-30">
                                            <p><b>Address:</b> {`${masjidData.address.addressLine1}, ${masjidData.address.addressLine2}, ${masjidData.address.city}, ${masjidData.address.postalCode}, ${masjidData.location}`}</p>
                                            <p><b>Phone:</b> +{masjidData.phoneNumber.countryCode} {masjidData.phoneNumber.number}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="layout-pt-sm layout-pb-lg">
                        <div className="tabs -active-accent js-tabs">
                            <div className="row pt-30 border-top-dark">
                                <div className="col-12">
                                    <div className="tabs__controls d-flex justify-center js-tabs-controls">
                                        <button className={`tabs__button js-tabs-button ${activeTab === 1 ? "is-active" : ""}`} onClick={() => setActiveTab(1)} type="button">
                                            Description
                                        </button>
                                        <button className={`tabs__button js-tabs-button ml-32 ${activeTab === 2 ? "is-active" : ""}`} onClick={() => setActiveTab(2)} type="button">
                                            Prayer Times
                                        </button>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="tabs__content pt-60 js-tabs-content">
                                                <div className={`tabs__pane -tab-item-1 ${activeTab === 1 ? "is-active" : ""}`}>
                                                    <div className="row justify-center">
                                                        <div className="col-xl-8 col-lg-9 col-md-11">
                                                            <h4 className="text-xl fw-600">About The Masjid</h4>
                                                            <p className="mt-20">
                                                                Established as a cornerstone of the local Muslim community, {masjidData.name} stands as a beacon of faith and unity. Its architecture blends modern design with traditional Islamic motifs, creating a serene and inspiring atmosphere for worship.
                                                                <br /><br />
                                                                The masjid serves not only as a prayer hall but also as a vibrant community center, offering educational programs for all ages, social services, and interfaith dialogue initiatives. Our mission is to foster a deeper understanding of Islam and to serve the needs of our community in accordance with Islamic principles of peace, compassion, and justice.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={`tabs__pane -tab-item-2 ${activeTab === 2 ? "is-active" : ""}`}>
                                                    <div className="row justify-center">
                                                        <div className="col-xl-6 col-lg-8 col-md-10">
                                                            <h3 className="text-22 fw-600 text-center">Today's Prayer Times</h3>
                                                            {prayerTimes ? (
                                                                <>
                                                                    <ul className="list-group mt-32">
                                                                        <li className="list-group-item d-flex justify-content-between align-items-center py-3">Fajr <span className="text-lg fw-600">{prayerTimes.Fajr}</span></li>
                                                                        <li className="list-group-item d-flex justify-content-between align-items-center py-3">Dhuhr <span className="text-lg fw-600">{prayerTimes.Dhuhr}</span></li>
                                                                        <li className="list-group-item d-flex justify-content-between align-items-center py-3">Asr <span className="text-lg fw-600">{prayerTimes.Asr}</span></li>
                                                                        <li className="list-group-item d-flex justify-content-between align-items-center py-3">Maghrib <span className="text-lg fw-600">{prayerTimes.Maghrib}</span></li>
                                                                        <li className="list-group-item d-flex justify-content-between align-items-center py-3">Isha <span className="text-lg fw-600">{prayerTimes.Isha}</span></li>
                                                                    </ul>
                                                                    <p className="text-center mt-20 text-sm text-capitalize">
                                                                        Calculation Method: {masjidData.prayerConfig.method.replace(/_/g, " ")}
                                                                    </p>
                                                                </>
                                                            ) : (
                                                                <p>Calculating prayer times...</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
            </AuthProtectionWrapper>
        </>
    )
}
