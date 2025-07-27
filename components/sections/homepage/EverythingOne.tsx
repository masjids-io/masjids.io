'use client'
import Image from 'next/image'
import Link from "next/link"
import { useState } from "react"

export default function EverythingOne() {
    const [active, setActive] = useState(1)

    const handleOnClick = (index: number) => {
        setActive(index)
    }
    return (
        <>
            <section className="layout-pt-lg layout-pb-lg bg-light-2 relative">
                <div className="md:d-none absolute-full-center z-1">
                    <Image width="0" height="0" sizes="100vw"
                        className="float-animation w-1/1 h-1/1 object-fit-cover"
                        src="/img/home-2/tabs/shapes.png"
                        alt="image"
                    />
                </div>
                {/* container start */}
                <div className="container relative z-2">
                    {/* row start */}
                    <div className="row justify-center text-center">
                        <div className="col-xl-6 col-lg-7">
                            <div className="sectionHeading ">
                                <h2 className="sectionHeading__title wow animate__animated animate__fadeInUp">Everything you need</h2>
                                <p className="sectionHeading__text mt-20 wow animate__animated animate__fadeInUp">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* row end */}
                    <div className="row pt-60 sm:pt-40">
                        <div className="col-12">
                            <div className="tabs -lines js-tabs">
                                <div className="tabs__controls text-center js-tabs-controls">
                                    <button
                                        className={`tabs__button sm:pb-12 js-tabs-button ${active == 1 ? "is-active" : ""}`}
                                        onClick={() => handleOnClick(1)}
                                    >
                                        <span className="text-xl sm:text-base fw-600">Documents</span>
                                    </button>
                                    <button
                                        className={`tabs__button sm:pb-12 js-tabs-button ${active == 2 ? "is-active" : ""}`}
                                        onClick={() => handleOnClick(2)}
                                    >
                                        <span className="text-xl sm:text-base fw-600">Create Event</span>
                                    </button>
                                    <button
                                        className={`tabs__button sm:pb-12 js-tabs-button ${active == 3 ? "is-active" : ""}`}
                                        onClick={() => handleOnClick(3)}
                                    >
                                        <span className="text-xl sm:text-base fw-600">Meeting</span>
                                    </button>
                                    <button
                                        className={`tabs__button sm:pb-12 js-tabs-button ${active == 4 ? "is-active" : ""}`}
                                        onClick={() => handleOnClick(4)}
                                    >
                                        <span className="text-xl sm:text-base fw-600">Sessions</span>
                                    </button>
                                </div>
                                <div className="tabs__content mt-40 js-tabs-content">
                                    <div className={`tabs__pane -tab-item-1  ${active == 1 ? "is-active" : ""}`}>
                                        <div className="row justify-between items-center">
                                            <div className="col-lg-4 order-lg-1 order-2">
                                                <div className="wow animate__animated animate__fadeIn">
                                                    <h3 className="text-30">
                                                        Real time project status monitoring
                                                    </h3>
                                                </div>
                                                <div className="wow animate__animated animate__fadeIn">
                                                    <p className="pr-30 mt-30">
                                                        Facere dapibus nullam, exercitationem, vitae! Suscipit
                                                        aliquet fringilla vestibulum ornare, asperiores.
                                                        Condimentum? Officiis suscipit, id praesent dolorum iure
                                                    </p>
                                                </div>
                                                <div className="wow animate__animated animate__fadeIn">
                                                    <Link
                                                        href="/services/services-1"
                                                        className="button -md -blue-dark rounded-8 text-white mt-30"
                                                    >
                                                        Get Started
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 order-lg-2 order-1">
                                                <Image width="0" height="0" sizes="100vw"
                                                    src="/img/home-2/images/browser.png"
                                                    alt="image"
                                                    className="initial-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tabs__pane -tab-item-2  ${active == 2 ? "is-active" : ""}`}>
                                        <div className="row justify-between items-center">
                                            <div className="col-lg-4 order-lg-1 order-2">
                                                <div className="wow animate__animated animate__fadeIn">
                                                    <h3 className="text-30">Create Event</h3>
                                                </div>
                                                <div className="wow animate__animated animate__fadeIn">
                                                    <p className="pr-30 mt-30">
                                                        Facere dapibus nullam, exercitationem, vitae! Suscipit
                                                        aliquet fringilla vestibulum ornare, asperiores.
                                                        Condimentum? Officiis suscipit, id praesent dolorum iure
                                                    </p>
                                                </div>
                                                <div className="wow animate__animated animate__fadeIn">
                                                    <Link
                                                        href="/services/services-1"
                                                        className="button -md -blue-dark rounded-8 text-white mt-30"
                                                    >
                                                        Get Started
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 order-lg-2 order-1">
                                                <Image width="0" height="0" sizes="100vw"
                                                    src="/img/home-2/images/browser.png"
                                                    alt="image"
                                                    className="initial-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tabs__pane -tab-item-3  ${active == 3 ? "is-active" : ""}`}>
                                        <div className="row justify-between items-center">
                                            <div className="col-lg-4 order-lg-1 order-2">
                                                <div className="wow animate__animated animate__fadeIn">
                                                    <h3 className="text-30">Meetings</h3>
                                                </div>
                                                <div className="wow animate__animated animate__fadeIn">
                                                    <p className="pr-30 mt-30">
                                                        Facere dapibus nullam, exercitationem, vitae! Suscipit
                                                        aliquet fringilla vestibulum ornare, asperiores.
                                                        Condimentum? Officiis suscipit, id praesent dolorum iure
                                                    </p>
                                                </div>
                                                <div className="wow animate__animated animate__fadeIn">
                                                    <Link
                                                        href="/services/services-1"
                                                        className="button -md -blue-dark rounded-8 text-white mt-30"
                                                    >
                                                        Get Started
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 order-lg-2 order-1">
                                                <Image width="0" height="0" sizes="100vw"
                                                    src="/img/home-2/images/browser.png"
                                                    alt="image"
                                                    className="initial-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tabs__pane -tab-item-4  ${active == 4 ? "is-active" : ""}`}>
                                        <div className="row justify-between items-center">
                                            <div className="col-lg-4 order-lg-1 order-2">
                                                <div className="wow animate__animated animate__fadeIn">
                                                    <h3 className="text-30">Sessions</h3>
                                                </div>
                                                <div className="wow animate__animated animate__fadeIn">
                                                    <p className="pr-30 mt-30">
                                                        Facere dapibus nullam, exercitationem, vitae! Suscipit
                                                        aliquet fringilla vestibulum ornare, asperiores.
                                                        Condimentum? Officiis suscipit, id praesent dolorum iure
                                                    </p>
                                                </div>
                                                <div className="wow animate__animated animate__fadeIn">
                                                    <Link
                                                        href="/services/services-1"
                                                        className="button -md -blue-dark rounded-8 text-white mt-30"
                                                    >
                                                        Get Started
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 order-lg-2 order-1">
                                                <Image width="0" height="0" sizes="100vw"
                                                    src="/img/home-2/images/browser.png"
                                                    alt="image"
                                                    className="initial-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* container end */}
            </section>

        </>
    )
}

