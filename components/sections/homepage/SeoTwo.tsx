'use client'
import Link from 'next/link'
import { useState } from "react"

import Image from 'next/image'
export default function SeoTwo() {
    const [active, setActive] = useState(1)
    const handleOnClick = (index: number) => {
        setActive(index)
    }

    return (
        <>
            <section className="layout-pt-sm layout-pb-lg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tabs -lines js-tabs">
                                <div className="tabs__content js-tabs-content">
                                    <div className={`tabs__pane -tab-item-1  ${active == 1 ? "is-active" : ""}`}>
                                        <div className="row y-gap-40 justify-between items-center">
                                            <div className="col-xl-7 col-lg-6">
                                                <div className="atropos -no-shadow js-atropos">
                                                    <div className="atropos-scale">
                                                        <div className="atropos-rotate">
                                                            <div className="atropos-inner overflow-visible d-flex justify-end">
                                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/home-6/images/1.png" alt="image" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-6">
                                                <div className="sectionHeading ">
                                                    <h2 className="sectionHeading__title">The complete digital SEO agency</h2>
                                                </div>
                                                <p className="pr-64 mt-24">We develop enjoyable consumer experiences, from digital strategy and content to media and analysis. Leading to meaningful results and satisfied clients.</p>
                                                <Link href="/about/about-1" className="button -md -red-2 text-white mt-32">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tabs__pane -tab-item-2  ${active == 2 ? "is-active" : ""}`}>
                                        <div className="row y-gap-40 justify-between items-center">
                                            <div className="col-xl-7 col-lg-6">
                                                <div className="atropos -no-shadow js-atropos">
                                                    <div className="atropos-scale">
                                                        <div className="atropos-rotate">
                                                            <div className="atropos-inner overflow-visible d-flex justify-end">
                                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/home-3/images/Frame-1.png" alt="image" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-6">
                                                <div className="sectionHeading ">
                                                    <h2 className="sectionHeading__title">The complete digital SEO agency</h2>
                                                </div>
                                                <p className="pr-64 mt-24">We develop enjoyable consumer experiences, from digital strategy and content to media and analysis. Leading to meaningful results and satisfied clients.</p>
                                                <Link href="/about/about-1" className="button -md -red-2 text-white mt-32">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tabs__pane -tab-item-3  ${active == 3 ? "is-active" : ""}`}>
                                        <div className="row y-gap-40 justify-between items-center">
                                            <div className="col-xl-7 col-lg-6">
                                                <div className="atropos -no-shadow js-atropos">
                                                    <div className="atropos-scale">
                                                        <div className="atropos-rotate">
                                                            <div className="atropos-inner overflow-visible d-flex justify-end">
                                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/home-6/images/1.png" alt="image" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-6">
                                                <div className="sectionHeading ">
                                                    <h2 className="sectionHeading__title">The complete digital SEO agency</h2>
                                                </div>
                                                <p className="pr-64 mt-24">We develop enjoyable consumer experiences, from digital strategy and content to media and analysis. Leading to meaningful results and satisfied clients.</p>
                                                <Link href="/about/about-1" className="button -md -red-2 text-white mt-32">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabs__controls row justify-center text-center mt-64 js-tabs-controls">
                                    <div className="col-lg-3 col-md-4">
                                        <button className={`tabs__button d-flex direction-column items-center js-tabs-button sm:pb-12 ${active == 1 ? "is-active" : ""}`} onClick={() => handleOnClick(1)}>
                                            <i className="icon text-30 icon-drawing mb-20" />
                                            <span className="text-xl sm:text-base fw-600">Complete digital agency</span>
                                        </button>
                                    </div>
                                    <div className="col-lg-3 col-md-4 sm:mt-32">
                                        <button className={`tabs__button d-flex direction-column items-center js-tabs-button sm:pb-12 ${active == 2 ? "is-active" : ""}`} onClick={() => handleOnClick(2)}>
                                            <i className="icon text-30 icon-process mb-20" />
                                            <span className="text-xl sm:text-base fw-600">Custom made projects</span>
                                        </button>
                                    </div>
                                    <div className="col-lg-3 col-md-4 sm:mt-32">
                                        <button className={`tabs__button d-flex direction-column items-center js-tabs-button sm:pb-12 ${active == 3 ? "is-active" : ""}`} onClick={() => handleOnClick(3)}>
                                            <i className="icon text-30 icon-task mb-20" />
                                            <span className="text-xl sm:text-base fw-600">Advanced SEO performance</span>
                                        </button>
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
