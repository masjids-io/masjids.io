'use client'
import Layout from '@/components/layout/Layout'
import { useState } from 'react'

import * as Icon from 'react-feather'

import Image from 'next/image'
export default function MasjidSingle() {
    const [active, setActive] = useState(1)

    const handleOnClick = (index: number) => {
        setActive(index)
    }

    // Dummy data based on the provided API response
    const masjidData = {
        "id": "fac6a64f-75c6-4e52-b0be-25968d4a1b4a",
        "name": "Masjid al-ihklas",
        "location": "Indonesia",
        "isVerified": true,
        "address": {
            "addressLine1": "Jl. Langko No. 80",
            "addressLine2": "Pejanggik",
            "zoneCode": "83125",
            "postalCode": "83000",
            "city": "Mataram",
            "countryCode": "ID"
        },
        "phoneNumber": {
            "countryCode": "62",
            "number": "87812345678",
        },
        "prayerConfig": {
            "method": "MUSLIM_WORLD_LEAGUE",
        }
    };

    const prayerTimes = {
        Fajr: "05:10 AM",
        Dhuhr: "12:25 PM",
        Asr: "03:48 PM",
        Maghrib: "06:30 PM",
        Isha: "07:45 PM"
    };

    const imageStyle = {
        width: '100%',
        minWidth: '100%',
        height: 'auto',
    }

    return (
        <>
            <Layout >
                <div>
                    <section className="pt-100 layout-pb-sm">
                        <div className="container pt-100 md:pt-60 sm:pt-40">
                            <div className="row y-gap-60 items-center">
                                <div className="col-lg-6">
                                    {/* Image Gallery */}
                                    <div className="js-shop-slider">
                                        <div className="shopSingle-preview__image js-slider-slider">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div className="ratio ratio-62:60">
                                                        <Image width="0" height="0" sizes="100vw" style={imageStyle} className="absolute-full-center rounded-8 object-fit-cover" src="/img/forms/bg.png" alt="Masjid image" />
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="ratio ratio-62:60">
                                                        <Image width="0" height="0" sizes="100vw" style={imageStyle} className="absolute-full-center rounded-8 object-fit-cover" src="/img/forms/bg.png" alt="Masjid image" />
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="ratio ratio-62:60">
                                                        <Image width="0" height="0" sizes="100vw" style={imageStyle} className="absolute-full-center rounded-8 object-fit-cover" src="/img/forms/bg.png" alt="Masjid image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="pl-40 pb-80 lg:pl-0 md:pb-0">
                                        {/* Masjid Name and Verification */}
                                        <h2 className="text-32 mt-4 d-flex items-center">
                                            {masjidData.name}
                                            {masjidData.isVerified && (
                                                <span className="d-inline-flex ml-10" style={{ color: '#35B27D' }}>
                                                    <Icon.CheckCircle size={28} />
                                                </span>
                                            )}
                                        </h2>
                                        
                                        {/* Short Description */}
                                        <div className="mt-30">
                                            <p>A central place of worship and community gathering in {masjidData.address.city}, {masjidData.location}. Welcoming visitors and locals for daily prayers and events.</p>
                                        </div>

                                        {/* Masjid Details */}
                                        <div className="pt-30">
                                            <p><b>Address:</b> {`${masjidData.address.addressLine1}, ${masjidData.address.addressLine2}, ${masjidData.address.city}, ${masjidData.address.postalCode}, ${masjidData.location}`}</p>
                                            <p><b>Phone:</b> +{masjidData.phoneNumber.countryCode} {masjidData.phoneNumber.number}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Tabs for Description and Prayer Times */}
                    <section className="layout-pt-sm layout-pb-lg">
                        <div className="tabs -active-accent js-tabs">
                            <div className="row pt-30 border-top-dark">
                                <div className="col-12">
                                    <div className="tabs__controls d-flex justify-center js-tabs-controls">
                                        <button className={`tabs__button js-tabs-button ${active == 1 ? "is-active" : ""}`} onClick={() => handleOnClick(1)} type="button">
                                            Description
                                        </button>
                                        <button className={`tabs__button js-tabs-button ml-32 ${active == 2 ? "is-active" : ""}`} onClick={() => handleOnClick(2)} type="button">
                                            Prayer Times
                                        </button>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="tabs__content pt-60 js-tabs-content">
                                                {/* Description Pane */}
                                                <div className={`tabs__pane -tab-item-1  ${active == 1 ? "is-active" : ""}`}>
                                                    <div className="row justify-center">
                                                        <div className="col-xl-8 col-lg-9 col-md-11">
                                                            <h4 className="text-xl fw-600">About The Masjid</h4>
                                                            <p className="mt-20">
                                                                Established as a cornerstone of the local Muslim community, Masjid al-ihklas stands as a beacon of faith and unity. Its architecture blends modern design with traditional Islamic motifs, creating a serene and inspiring atmosphere for worship.
                                                                <br /><br />
                                                                The masjid serves not only as a prayer hall but also as a vibrant community center, offering educational programs for all ages, social services, and interfaith dialogue initiatives. Our mission is to foster a deeper understanding of Islam and to serve the needs of our community in accordance with Islamic principles of peace, compassion, and justice.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Prayer Times Pane */}
                                                <div className={`tabs__pane -tab-item-2  ${active == 2 ? "is-active" : ""}`}>
                                                    <div className="row justify-center">
                                                        <div className="col-xl-6 col-lg-8 col-md-10">
                                                            <h3 className="text-22 fw-600 text-center">Today's Prayer Times</h3>
                                                            <ul className="list-group mt-32">
                                                                <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                                                                    Fajr <span className="text-lg fw-600">{prayerTimes.Fajr}</span>
                                                                </li>
                                                                <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                                                                    Dhuhr <span className="text-lg fw-600">{prayerTimes.Dhuhr}</span>
                                                                </li>
                                                                <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                                                                    Asr <span className="text-lg fw-600">{prayerTimes.Asr}</span>
                                                                </li>
                                                                <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                                                                    Maghrib <span className="text-lg fw-600">{prayerTimes.Maghrib}</span>
                                                                </li>
                                                                <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                                                                    Isha <span className="text-lg fw-600">{prayerTimes.Isha}</span>
                                                                </li>
                                                            </ul>
                                                            <p className="text-center mt-20 text-sm">
                                                                Calculation Method: {masjidData.prayerConfig.method.replace(/_/g, " ")}
                                                            </p>
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
        </>
    )
}