'use client'
import Link from 'next/link'
import { useState } from "react"
import * as Icon from 'react-feather'

import Image from 'next/image'
export default function FeatureEleven() {
    const [active, setActive] = useState(1)

    const handleOnClick = (index: number) => {
        setActive(index)
    }
    return (
        <>
            <section className="layout-pt-sm layout-pb-sm">
                <div className="container">
                    <div className="row y-gap-32 justify-between md:justify-center items-center">
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="wow animate__animated animate__fadeIn">
                                <div className="d-flex justify-center items-center">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/home-10/images/1.png" alt="image" />
                                    <div className="atropos -no-shadow absolute z-2 js-atropos">
                                        <div className="atropos-scale">
                                            <div className="atropos-rotate">
                                                <div className="atropos-inner overflow-visible">
                                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} data-atropos-offset={0} className="max-w-100" src="/img/home-10/images/2.png" alt="image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="wow animate__animated animate__fadeIn">
                                <div className="sectionHeading ">
                                    <h2 className="sectionHeading__title">Put money in your hands</h2>
                                </div>
                            </div>
                            <div className="wow animate__animated animate__fadeIn">
                                <p className="mt-32">We develop enjoyable consumer experiences, from digital strategy and content to media and analysis. Leading to meaningful results and satisfied clients.</p>
                                <p className="mt-24">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eligendi esse, facilis fugit inventore iste itaque labore magni minima minus molestiae neque nesciunt nihil nobis nulla, quaerat quibusdam repellat sequi!</p>
                            </div>
                            <div className="wow animate__animated animate__fadeIn">
                                <Link href="/contact/contact-4" className="button -md text-white -dark-8 mt-40">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="layout-pt-sm layout-pb-sm">
                <div className="container">
                    <div className="tabs -active-3 pt-60 js-tabs">
                        <div className="row y-gap-32 justify-between md:justify-center items-center">
                            <div className="col-xl-5 col-lg-6 order-lg-1 order-2">
                                <div className="wow animate__animated animate__fadeIn">
                                    <div className="sectionHeading ">
                                        <h2 className="sectionHeading__title">We're helping send<br /> money abroad</h2>
                                    </div>
                                </div>
                                <div className="tabs__controls tabs-line row y-gap-40 pt-60 sm:pt-40 js-tabs-controls">
                                    <div className="col-12 relative z-2">
                                        <div className={`tabs__button rounded-8 js-tabs-button ${active == 1 ? "is-active" : ""}`} onClick={() => handleOnClick(1)}>
                                            <div className="d-flex sm:direction-column hover-group">
                                                <div className="-tab-active d-flex justify-center items-center flex-grow size-60 rounded-20 text-xl fw-600 bg-light-4 | hg:bg-blue-dark hg:text-white t-base">
                                                    1
                                                </div>
                                                <div className="ml-40 sm:ml-0 sm:mt-20">
                                                    <h4 className="text-xl fw-600 lh-1">Register your API</h4>
                                                    <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut autem eum laudantium quas recusandae.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 relative z-2">
                                        <div className={`tabs__button rounded-8 js-tabs-button ${active == 2 ? "is-active" : ""}`} onClick={() => handleOnClick(2)}>
                                            <div className="d-flex sm:direction-column hover-group">
                                                <div className="-tab-active d-flex justify-center items-center flex-grow size-60 rounded-20 text-xl fw-600 bg-light-4 | hg:bg-blue-dark hg:text-white t-base">
                                                    2
                                                </div>
                                                <div className="ml-40 sm:ml-0 sm:mt-20">
                                                    <h4 className="text-xl fw-600 lh-1">Start adding content</h4>
                                                    <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut autem eum laudantium quas recusandae.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 relative z-2">
                                        <div className={`tabs__button rounded-8 js-tabs-button ${active == 3 ? "is-active" : ""}`} onClick={() => handleOnClick(3)}>
                                            <div className="d-flex sm:direction-column hover-group">
                                                <div className="-tab-active d-flex justify-center items-center flex-grow size-60 rounded-20 text-xl fw-600 bg-light-4 | hg:bg-blue-dark hg:text-white t-base">
                                                    3
                                                </div>
                                                <div className="ml-40 sm:ml-0 sm:mt-20">
                                                    <h4 className="text-xl fw-600 lh-1">Unlock your device</h4>
                                                    <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut autem eum laudantium quas recusandae.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wow animate__animated animate__fadeIn">
                                    <Link href="/contact/contact-3" className="button -md -dark text-white mt-48">Learn More</Link>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 col-md-8 order-lg-2 order-1">
                                <div className="tabs__content js-tabs-content">
                                    <div className={`tabs__pane -tab-item-1  ${active == 1 ? "is-active" : ""}`}>
                                        <div className="wow animate__animated animate__fadeIn">
                                            <div>
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="js-rellax initial-img" src="/img/home-10/images/3.png" alt="image" />
                                            </div>
                                            <div className="absolute-center pt-60 col-11">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="js-rellax max-w-100 " src="/img/home-10/images/4.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tabs__pane -tab-item-2  ${active == 2 ? "is-active" : ""}`}>
                                        <div className="atropos -no-shadow js-atropos">
                                            <div className="atropos-scale">
                                                <div className="atropos-rotate">
                                                    <div className="atropos-inner overflow-visible d-flex justify-center items-center">
                                                        <Image width="0" height="0" sizes="100vw" data-atropos-offset={0} className="initial-img relative z-1" src="/img/home-2/api/bg.png" alt="image" />
                                                        <div className="absolute-center z-2">
                                                            <Image width="0" height="0" sizes="100vw"  style={{ width: "auto", height: "auto" }}  className="max-w-100" src="/img/home-2/api/2.png" alt="image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tabs__pane -tab-item-3  ${active == 3 ? "is-active" : ""}`}>
                                        <div className="atropos -no-shadow js-atropos">
                                            <div className="atropos-scale">
                                                <div className="atropos-rotate">
                                                    <div className="atropos-inner overflow-visible d-flex justify-center items-center">
                                                        <Image width="0" height="0" sizes="100vw" data-atropos-offset={0} className="initial-img relative z-1" src="/img/home-2/api/bg.png" alt="image" />
                                                        <div className="absolute-center z-2">
                                                            <Image width="0" height="0" sizes="100vw"  style={{ width: "auto", height: "auto" }} className="max-w-100" src="/img/home-2/api/3.png" alt="image" />
                                                        </div>
                                                    </div>
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
            <section className="layout-pt-sm layout-pb-lg">
                <div className="container">
                    <div className="row y-gap-32 justify-between md:justify-center items-center">
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="wow animate__animated animate__fadeIn">
                                <div className="d-flex justify-center items-center">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/home-10/images/5.png" alt="image" />
                                    <div className="atropos -no-shadow absolute z-2 js-atropos">
                                        <div className="atropos-scale">
                                            <div className="atropos-rotate">
                                                <div className="atropos-inner overflow-visible">
                                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} data-atropos-offset={0} className="max-w-100" src="/img/home-10/images/6.png" alt="image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="wow animate__animated animate__fadeIn">
                                <div className="sectionHeading ">
                                    <h2 className="sectionHeading__title">Get paid and use the cash.<br /> All with Front Pay.</h2>
                                </div>
                            </div>
                            <div className="mt-20 y-gap-20">
                                <div className="d-flex items-center">
                                    <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                                        <Icon.Check className="icon size-14 text-black" />
                                    </div>
                                    <h5 className="text-lg fw-600">Installation Guide</h5>
                                </div>
                                <div className="d-flex items-center">
                                    <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                                        <Icon.Check className="icon size-14 text-black" />
                                    </div>
                                    <h5 className="text-lg fw-600">Easy setup process</h5>
                                </div>
                                <div className="d-flex items-center">
                                    <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                                        <Icon.Check className="icon size-14 text-black" />
                                    </div>
                                    <h5 className="text-lg fw-600">Live call support</h5>
                                </div>
                                <div className="d-flex items-center">
                                    <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                                        <Icon.Check className="icon size-14 text-black" />
                                    </div>
                                    <h5 className="text-lg fw-600">Start a private group video call</h5>
                                </div>
                            </div>
                            <div className="wow animate__animated animate__fadeIn">
                                <Link href="/contact/contact-2" className="button -md text-white -dark-8 mt-40">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
