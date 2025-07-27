'use client'
import Atropos from 'atropos/react'

import Image from 'next/image'
export default function SuccessOne() {
    return (
        <>
            <section className="layout-pt-lg layout-pb-lg">
                <div className="container">
                    <div className="row y-gap-48 justify-between items-center">
                        <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
                            <div>
                                <div className="atropos -no-shadow js-atropos wow animate__animated animate__zoomIn">
                                    <div className="atropos-scale">
                                        <div className="atropos-rotate">
                                            <div className="atropos-inner overflow-visible d-flex justify-center">

                                                <div className="relative z-2">
                                                    <Atropos data-atropos-offset={-5}>
                                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/phones/phone.png" alt="phone" />
                                                    </Atropos>
                                                </div>

                                                <div className="absolute-full-center"  >
                                                    <Atropos data-atropos-offset={-5}>
                                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/phones/circle.png" alt="phone" />
                                                    </Atropos>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-5 col-lg-6 order-lg-2 order-1">
                            <div className="sectionHeading animated">
                                <div className="sectionHeading__subtitle wow animate__animated animate__fadeInUp">
                                    <span>Modernize Your Operations</span>
                                </div>
                                <h2 className="sectionHeading__title wow animate__animated animate__fadeInUp">A Platform Built For Growth</h2>
                            </div>
                            <div className="row y-gap-60 pt-60 sm:pt-32">
                                <div className="col-12 wow animate__animated animate__fadeInUp">
                                    <div
                                        className="d-flex sm:direction-column"
                                    >
                                        <div className="d-flex justify-center items-center flex-grow size-icon-80 rounded-30 bg-accent-light mr-20 sm:mr-0">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/success/letter.svg" alt="icon" />
                                        </div>
                                        <div className="sm:mt-20">
                                            <h4 className="text-xl fw-600 lh-1">Seamless Communication</h4>
                                            <p className="mt-12">
                                                Instantly send announcements and push notifications to your entire community. Keep everyone engaged and informed about news and events.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                                    <div
                                        className="d-flex sm:direction-column"
                                    >
                                        <div className="d-flex justify-center items-center flex-grow size-icon-80 rounded-30 bg-accent-light mr-20 sm:mr-0">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/success/package-delivery.svg" alt="icon" />
                                        </div>
                                        <div className="sm:mt-20">
                                            <h4 className="text-xl fw-600 lh-1">Streamlined Donations</h4>
                                            <p className="mt-12">
                                                Provide a secure and convenient platform for members to make one-time or recurring donations. Easily manage fundraising campaigns.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                                    <div
                                        className="d-flex sm:direction-column"
                                    >
                                        <div className="d-flex justify-center items-center flex-grow size-icon-80 rounded-30 bg-accent-light mr-20 sm:mr-0">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/success/layout.svg" alt="icon" />
                                        </div>
                                        <div className="sm:mt-20">
                                            <h4 className="text-xl fw-600 lh-1">Centralized Management</h4>
                                            <p className="mt-12">
                                                Manage prayer times, events, and finances from a single dashboard. Simplify your administrative tasks and focus on your community.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}