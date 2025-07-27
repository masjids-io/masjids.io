'use client'
import Image from 'next/image'
import { useState } from "react"

export default function ApiIntergration() {
    const [active, setActive] = useState(1)

    const handleOnClick = (index: number) => {
        setActive(index)
    }
    return (
        <>
            <section className="layout-pt-sm layout-pb-sm">
                <div className="container">
                    <div className="tabs -active-3 pt-60 js-tabs">
                        <div className="row y-gap-64 justify-between items-center">
                            <div className="col-xl-4 col-lg-5">
                                <div className="wow animate__animated animate__fadeIn">
                                    <div className="sectionHeading ">
                                        <h2 className="sectionHeading__title wow animate__animated animate__fadeInUp">API Integration</h2>
                                    </div>
                                </div>
                                <div className="tabs__controls tabs-line row y-gap-40 pt-60 sm:pt-40 js-tabs-controls">
                                    <div className="col-12 relative z-2">
                                        <div
                                            className={`tabs__button rounded-8 js-tabs-button ${active == 1 ? "is-active" : ""}`}
                                            onClick={() => handleOnClick(1)}
                                        >
                                            <div className="d-flex sm:direction-column hover-group">
                                                <div className="-tab-active d-flex justify-center items-center flex-grow size-60 rounded-20 text-xl fw-600 bg-light-4 | hg:bg-blue-dark hg:text-white t-base wow animate__animated animate__fadeInUp">
                                                    1
                                                </div>
                                                <div className="ml-40 sm:ml-0 sm:mt-20 wow animate__animated animate__fadeInUp">
                                                    <h4 className="text-xl fw-600 lh-1">Register your API</h4>
                                                    <p className="mt-10 wow animate__animated animate__fadeInUp">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                        Amet aut autem eum laudantium quas recusandae.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 relative z-2">
                                        <div
                                            className={`tabs__button rounded-8 js-tabs-button ${active == 2 ? "is-active" : ""}`}
                                            onClick={() => handleOnClick(2)}
                                        >
                                            <div className="d-flex sm:direction-column hover-group">
                                                <div className="-tab-active d-flex justify-center items-center flex-grow size-60 rounded-20 text-xl fw-600 bg-light-4 | hg:bg-blue-dark hg:text-white t-base wow animate__animated animate__fadeInUp">
                                                    2
                                                </div>
                                                <div className="ml-40 sm:ml-0 sm:mt-20">
                                                    <h4 className="text-xl fw-600 lh-1 wow animate__animated animate__fadeInUp">
                                                        Start adding content
                                                    </h4>
                                                    <p className="mt-10 wow animate__animated animate__fadeInUp">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                        Amet aut autem eum laudantium quas recusandae.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 relative z-2">
                                        <div
                                            className={`tabs__button rounded-8 js-tabs-button ${active == 3 ? "is-active" : ""}`}
                                            onClick={() => handleOnClick(3)}
                                        >
                                            <div className="d-flex sm:direction-column hover-group">
                                                <div className="-tab-active d-flex justify-center items-center flex-grow size-60 rounded-20 text-xl fw-600 bg-light-4 | hg:bg-blue-dark hg:text-white t-base wow animate__animated animate__fadeInUp">
                                                    3
                                                </div>
                                                <div className="ml-40 sm:ml-0 sm:mt-20">
                                                    <h4 className="text-xl fw-600 lh-1 wow animate__animated animate__fadeInUp">Unlock your device</h4>
                                                    <p className="mt-10 wow animate__animated animate__fadeInUp">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                        Amet aut autem eum laudantium quas recusandae.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="tabs__content js-tabs-content">
                                    <div className={`tabs__pane -tab-item-1  ${active == 1 ? "is-active" : ""}`}>
                                        <div className="wow animate__animated animate__fadeIn">
                                            <div className="atropos -no-shadow js-atropos">
                                                <div className="atropos-scale">
                                                    <div className="atropos-rotate">
                                                        <div className="atropos-inner overflow-visible d-flex justify-center items-center">
                                                            <Image
                                                                width="0"
                                                                height="0"
                                                                sizes="100vw"
                                                                // style={{ width: "auto", height: "auto" }}
                                                                data-atropos-offset={0}
                                                                className="initial-img relative z-1"
                                                                src="/img/home-2/api/bg.png"
                                                                alt="image"
                                                            />
                                                            <div className="absolute-center z-2">
                                                                <Image
                                                                    width="0"
                                                                    height="0"
                                                                    sizes="100vw"
                                                                    style={{ width: "auto", height: "auto" }}
                                                                    data-atropos-offset={5}
                                                                    className="max-w-100"
                                                                    src="/img/home-2/api/1.png"
                                                                    alt="image"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tabs__pane -tab-item-2  ${active == 2 ? "is-active" : ""}`}>
                                        <div className="wow animate__animated animate__fadeIn">
                                            <div className="atropos -no-shadow js-atropos">
                                                <div className="atropos-scale">
                                                    <div className="atropos-rotate">
                                                        <div className="atropos-inner overflow-visible d-flex justify-center items-center">
                                                            <Image
                                                                width="0"
                                                                height="0"
                                                                sizes="100vw"
                                                                // style={{ width: "auto", height: "auto" }}
                                                                data-atropos-offset={0}
                                                                className="initial-img relative z-1"
                                                                src="/img/home-2/api/bg.png"
                                                                alt="image"
                                                            />
                                                            <div className="absolute-center z-2">
                                                                <Image
                                                                    width="0"
                                                                    height="0"
                                                                    sizes="100vw"
                                                                    // style={{ width: "auto", height: "auto" }}
                                                                    data-atropos-offset={5}
                                                                    className="max-w-100"
                                                                    src="/img/home-2/api/2.png"
                                                                    alt="image"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tabs__pane -tab-item-1  ${active == 3 ? "is-active" : ""}`}>
                                        <div className="wow animate__animated animate__fadeIn">
                                            <div className="atropos -no-shadow js-atropos">
                                                <div className="atropos-scale">
                                                    <div className="atropos-rotate">
                                                        <div className="atropos-inner overflow-visible d-flex justify-center items-center">
                                                            <Image
                                                                width="0"
                                                                height="0"
                                                                sizes="100vw"
                                                                style={{ width: "auto", height: "auto" }}
                                                                data-atropos-offset={0}
                                                                className="initial-img relative z-1"
                                                                src="/img/home-2/api/bg.png"
                                                                alt="image"
                                                            />
                                                            <div className="absolute-center z-2">
                                                                <Image
                                                                    width="0"
                                                                    height="0"
                                                                    sizes="100vw"
                                                                    style={{ width: "auto", height: "auto" }}
                                                                    data-atropos-offset={5}
                                                                    className="max-w-100"
                                                                    src="/img/home-2/api/3.png"
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
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}