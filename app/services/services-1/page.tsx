import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import * as Icon from 'react-feather'
import Image from 'next/image'

export default function Services1() {
    return (
        <>
            <Layout>
                <div>
                    <section className="page-header -base -">
                        <div className="page-header__bg">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/page-header/bg-light.png" alt="Page header" />
                        </div>
                        <div className="page-header__content">
                            <div className="row justify-center text-center">
                                <div className="col-lg-9 col-md-10">
                                    <div>
                                        <h1 className="page-header__title lh-14">The All-In-One Platform for Your Masjid Comunity</h1>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-9 col-md-10">
                                    <div className="px-20">
                                        <p className="page-header__text">From websites and mobile apps to donations and communications, we have you covered. Manage your community with our easy-to-use tools.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Core Features Section */}
                    <section className="layout-pt-lg layout-pb-sm">
                        <div className="container">
                            <div className="row y-gap-32">
                                <div className="col-lg-3 col-sm-6">
                                    <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                                        <div className="size-80 rounded-full d-flex justify-center items-center bg-blue-light">
                                            <Image width={40} height={40} src="/img/about-4/solutions/masjid.svg" alt="icon" />
                                        </div>
                                        <h4 className="text-xl fw-600 mt-20">masjids.io</h4>
                                        <p className="mt-10">A modern cloud platform for masjids.</p>
                                        <Link href="https://www.masjids.io/" target='_blank' className="button -simple text-accent fw-600 underline mt-12">Learn More</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                                        <div className="size-80 rounded-full d-flex justify-center items-center bg-yellow-light">
                                            <Image width={40} height={40} src="/img/about-4/solutions/nikkah.svg" alt="icon" />
                                        </div>
                                        <h4 className="text-xl fw-600 mt-20">nikkah.io</h4>
                                        <p className="mt-10">A matrimonial platform for Muslims designed ground up to match the needs of the Muslim community.</p>
                                        <Link href="https://nikkah.io/" target='_blank' className="button -simple text-accent fw-600 underline mt-12">Learn More</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                                        <div className="size-80 rounded-full d-flex justify-center items-center bg-green-light">
                                            <Image width={40} height={40} src="/img/about-4/solutions/adhan.svg" alt="icon" />
                                        </div>
                                        <h4 className="text-xl fw-600 mt-20">adhan.io</h4>
                                        <p className="mt-10">An innovative adhan app to foster greater masjid engagement.</p>
                                        <Link href="https://adhan.io/" target='_blank' className="button -simple text-accent fw-600 underline mt-12">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="layout-pt-sm">
                        <div className="container">
                            <div className="row justify-center text-center">
                                <div className="col-auto">
                                    <div className="sectionHeading ">
                                        <div className="sectionHeading__subtitle">
                                            <span>how it works</span>
                                        </div>
                                        <h2 className="sectionHeading__title">Manage Everything From One Place</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* Final CTA Section */}
                    <section className="layout-pt-sm layout-pb-lg">
                        <div className="container">
                            <div className="relative rounded-16">
                                <div className="absolute-full-center z--1">
                                    <div className="bg-image rounded-16 js-lazy" style={{ backgroundImage: 'url("/img/home-1/cta/cta.png")' }} />
                                </div>
                                <div className="py-50 px-64">
                                    <div className="row y-gap-32 justify-between items-center">
                                        <div className="col-auto">
                                            <h3 className="text-30 lh-15 text-white">Empower Your Masjid Today.</h3>
                                        </div>
                                        <div className="col-auto">
                                            <button className="button -md -white text-accent">Choose Your Plan</button>
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