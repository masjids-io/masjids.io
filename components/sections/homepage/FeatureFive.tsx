'use client'
import Link from 'next/link'
import { useState } from "react"

import Image from 'next/image'
export default function FeatureFive() {
    const [active, setActive] = useState(1)

    const handleOnClick = (index: number) => {
        setActive(index)
    }
    return (
        <>
            <section className="layout-pt-lg layout-pb-lg">
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div className="sectionHeading ">
                                <h2 className="sectionHeading__title">Everything you need</h2>
                                <p className="sectionHeading__text mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-60 sm:pt-40">
                        <div className="col-12">
                            <div className="tabs js-tabs">
                                <div className="tabs__controls js-tabs-controls">
                                    <div className=" row justify-center">
                                        <div className="col-xl-7 col-lg-9">
                                            <div className="row tabs-group">
                                                <div className="col-md">
                                                    <button className={`tabs__button text-lg px-20 py-16 rounded-200 text-purple-3 fw-600 js-tabs-button  ${active == 1 ? "is-active" : ""}`} onClick={() => handleOnClick(1)} type="button">
                                                        View Likes  Dislikes
                                                    </button>
                                                </div>
                                                <div className="col-md">
                                                    <button className={`tabs__button text-lg px-20 py-16 rounded-200 text-purple-3 fw-600 js-tabs-button  ${active == 2 ? "is-active" : ""}`} onClick={() => handleOnClick(2)} type="button">
                                                        New Personal Profile
                                                    </button>
                                                </div>
                                                <div className="col-md">
                                                    <button className={`tabs__button text-lg px-20 py-16 rounded-200 text-purple-3 fw-600 js-tabs-button  ${active == 3 ? "is-active" : ""}`} onClick={() => handleOnClick(3)} type="button">
                                                        Promoting A Brand
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabs__content mt-64 js-tabs-content">
                                    <div className={`tabs__pane -tab-item-1  ${active == 1 ? "is-active" : ""}`}>
                                        <div className="row y-gap-40 justify-between items-center">
                                            <div className="col-xl-4 col-lg-5 order-lg-1 order-2">
                                                <h4 className="lh-14 text-32">Real time project status monitoring</h4>
                                                <p className="mt-24">Facere dapibus nullam, exercitationem, vitae! Suscipit aliquet fringilla vestibulum ornare, asperiores. Condimentum? Officiis suscipit, id praesent dolorum iure</p>
                                                <Link href="/services/services-1" className="button -md -purple-3 text-white mt-40">Get Started</Link>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
                                                <div className="shapes-2 relative">
                                                    <div className="atropos -no-shadow js-atropos">
                                                        <div className="atropos-scale">
                                                            <div className="atropos-rotate">
                                                                <div className="atropos-inner overflow-visible d-flex justify-end">
                                                                    <Image width="0" height="0" sizes="100vw" data-atropos-offset={0} className="shapes-2-img-1 initial-img" src="/img/home-2/images/1.png" alt="image" />
                                                                    <Image width="0" height="0" sizes="100vw" data-atropos-offset={5} className="shapes-2-img-2 shadow-card z-2" src="/img/home-2/images/2.png" alt="image" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tabs__pane -tab-item-2  ${active == 2 ? "is-active" : ""}`}>
                                        <div className="row y-gap-40 justify-between items-center">
                                            <div className="col-xl-4 col-lg-5 order-lg-1 order-2">
                                                <h4 className="lh-14 text-32">Important Features for Digital Marketing</h4>
                                                <p className="mt-24">Facere dapibus nullam, exercitationem, vitae! Suscipit aliquet fringilla vestibulum ornare, asperiores. Condimentum? Officiis suscipit, id praesent dolorum iure</p>
                                                <Link href="/services/services-2" className="button -md -purple-3 text-white mt-40">Get Started</Link>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
                                                <div className="shapes-2 relative">
                                                    <div className="atropos -no-shadow js-atropos">
                                                        <div className="atropos-scale">
                                                            <div className="atropos-rotate">
                                                                <div className="atropos-inner overflow-visible d-flex justify-end">
                                                                    <Image width="0" height="0" sizes="100vw" data-atropos-offset={0} className="shapes-2-img-1 initial-img" src="/img/home-7/tabs/1.png" alt="image" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tabs__pane -tab-item-3  ${active == 3 ? "is-active" : ""}`}>
                                        <div className="row y-gap-40 justify-between items-center">
                                            <div className="col-xl-4 col-lg-5 order-lg-1 order-2">
                                                <h4 className="lh-14 text-32">An Impact Via Social Networking Platforms.</h4>
                                                <p className="mt-24">Facere dapibus nullam, exercitationem, vitae! Suscipit aliquet fringilla vestibulum ornare, asperiores. Condimentum? Officiis suscipit, id praesent dolorum iure</p>
                                                <Link href="/services/services-3" className="button -md -purple-3 text-white mt-40">Get Started</Link>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
                                                <div className="shapes-2 relative">
                                                    <div className="atropos -no-shadow js-atropos">
                                                        <div className="atropos-scale">
                                                            <div className="atropos-rotate">
                                                                <div className="atropos-inner overflow-visible d-flex justify-end">
                                                                    <Image width="0" height="0" sizes="100vw" data-atropos-offset={0} className="shapes-2-img-1 initial-img" src="/img/home-7/tabs/2.png" alt="image" />
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
                    </div>
                </div>
            </section>
        </>
    )
}
