'use client'
import { useState } from "react"

import Image from 'next/image'
export default function AccordionOne() {
    const [active, setActive] = useState<number>(1)

    const handleOnClick = (index: number) => {
        setActive(index)
    }
    return (
        <>
            <div className="tabs -button-bg-white pt-60 js-tabs">
                <div className="row y-gap-48 items-center">
                    <div className="col-xl-5 col-lg-6">
                        <div className="tabs__controls js-tabs-controls">
                            <div className=" wow animate__animated animate__fadeInUp">
                                <div
                                    className={`tabs__button rounded-8 js-tabs-button ${active == 1 ? "is-active" : ""}`}
                                    onClick={() => handleOnClick(1)}
                                >
                                    <div className="d-flex rounded-8 py-36 pr-20 pl-50 md:px-30 | hover-group h:bg-white">
                                        <div className="d-flex justify-center items-center flex-grow size-icon-50 mr-40 md:mr-32">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/features/laptop.svg" alt="icon" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl fw-600 lh-1">Prayer Schedules</h4>
                                            <p className="mt-12">
                                                Provide accurate, real-time prayer and iqamah times for your community.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" wow animate__animated animate__fadeInUp" data-wow-delay='0.4s'>
                                <div
                                    className={`tabs__button rounded-8 js-tabs-button ${active == 3 ? "is-active" : ""}`}
                                    onClick={() => handleOnClick(3)}
                                >
                                    <div className="d-flex rounded-8 py-36 pr-20 pl-50 md:px-30 | hover-group h:bg-white">
                                        <div className="d-flex justify-center items-center flex-grow size-icon-50 mr-40 md:mr-32">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/features/shapes.svg" alt="icon" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl fw-600 lh-1">Community Engagement</h4>
                                            <p className="mt-12">
                                                Connect with members through announcements, event calendars, and services.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-6">
                        <div className="tabs__content js-tabs-content">
                            <div className={`tabs__pane -tab-item-1  ${active == 1 ? "is-active" : ""}`}>
                                <div className="atropos -no-shadow js-atropos">
                                    <div className="atropos-scale">
                                        <div className="atropos-rotate">
                                            <div className="atropos-inner overflow-visible d-flex justify-end">
                                                <Image
                                                    width="0"
                                                    height="0"
                                                    sizes="100vw"

                                                    className="initial-img"
                                                    src="/img/home-1/phones/phone-circle.png"
                                                    alt="image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tabs__pane -tab-item-2  ${active == 2 ? "is-active" : ""}`}>
                                <div className="atropos -no-shadow js-atropos">
                                    <div className="atropos-scale">
                                        <div className="atropos-rotate">
                                            <div className="atropos-inner overflow-visible d-flex justify-end">
                                                <Image
                                                    width="0"
                                                    height="0"
                                                    sizes="100vw"

                                                    className="initial-img"
                                                    src="/img/home-1/phones/phone-circle.png"
                                                    alt="image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tabs__pane -tab-item-3  ${active == 3 ? "is-active" : ""}`}>
                                <div className="atropos -no-shadow js-atropos">
                                    <div className="atropos-scale">
                                        <div className="atropos-rotate">
                                            <div className="atropos-inner overflow-visible d-flex justify-end">
                                                <Image
                                                    width="0"
                                                    height="0"
                                                    sizes="100vw"

                                                    className="initial-img"
                                                    src="/img/home-1/phones/phone-circle.png"
                                                    alt="image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}