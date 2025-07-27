'use client'
import { useState } from "react"

import Image from 'next/image'
export default function ServiceTwo() {
    const [active, setActive] = useState(1)

    const handleOnClick = (index: number) => {
        setActive(index)
    }
    return (
        <>
            <section className="layout-pt-sm section-bg-color-margin">
                <div className="section-bg-color-margin__item bg-dark-9" />
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-xl-7 col-lg-8 col-md-10">
                            <div className="sectionHeading -light">
                                <h2 className="sectionHeading__title">
                                    Start the right way Start with masjidsio
                                </h2>
                            </div>
                            <p className="text-lg text-white opac-60 mt-20 px-48">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna
                            </p>
                        </div>
                    </div>
                    <div className="tabs -active-1 pt-60 sm:pt-40 js-tabs">
                        <div className="tabs__controls row x-gap-20 y-gap-20 justify-center js-tabs-controls">
                            <div className="col-auto">
                                <button
                                    className={`text-white button -bg-title-dark rounded-200 py-12 px-24 js-tabs-button ${active == 1 ? "is-active" : ""}`}
                                    onClick={() => handleOnClick(1)}
                                >
                                    Inbox
                                </button>
                            </div>
                            <div className="col-auto">
                                <button
                                    className={`text-white button -bg-title-dark rounded-200 py-12 px-24 js-tabs-button ${active == 2 ? "is-active" : ""}`}
                                    onClick={() => handleOnClick(2)}
                                >
                                    Calendar
                                </button>
                            </div>
                            <div className="col-auto">
                                <button
                                    className={`text-white button -bg-title-dark rounded-200 py-12 px-24 js-tabs-button ${active == 3 ? "is-active" : ""}`}
                                    onClick={() => handleOnClick(3)}
                                >
                                    Invoicing
                                </button>
                            </div>
                            <div className="col-auto">
                                <button
                                    className={`text-white button -bg-title-dark rounded-200 py-12 px-24 js-tabs-button ${active == 4 ? "is-active" : ""}`}
                                    onClick={() => handleOnClick(4)}
                                >
                                    Reporting
                                </button>
                            </div>
                        </div>
                        <div className="tabs__content mt-16 js-tabs-content">
                            <div className={`tabs__pane -tab-item-1  ${active == 1 ? "is-active" : ""}`}>
                                <div className="row justify-center">
                                    <div className="col-xl-10 col-lg-11">
                                        <Image width="0" height="0" sizes="100vw" className="initial-img" src="/img/tabs/2/1.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className={`tabs__pane -tab-item-2  ${active == 2 ? "is-active" : ""}`}>
                                <div className="row justify-center">
                                    <div className="col-xl-10 col-lg-11">
                                        <Image width="0" height="0" sizes="100vw" className="initial-img" src="/img/tabs/2/2.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className={`tabs__pane -tab-item-3  ${active == 3 ? "is-active" : ""}`}>
                                <div className="row justify-center">
                                    <div className="col-xl-10 col-lg-11">
                                        <Image width="0" height="0" sizes="100vw" className="initial-img" src="/img/tabs/2/3.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className={`tabs__pane -tab-item-4  ${active == 4 ? "is-active" : ""}`}>
                                <div className="row justify-center">
                                    <div className="col-xl-10 col-lg-11">
                                        <Image width="0" height="0" sizes="100vw" className="initial-img" src="/img/tabs/2/1.png" alt="image" />
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