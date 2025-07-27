'use client'
import { useState } from "react"
import * as Icon from 'react-feather'
interface ActiveState {
    status: boolean
    key: number
}

import Image from 'next/image'
export default function CreativeProcessOne() {
    const [active, setActive] = useState<ActiveState>({
        status: false,
        key: 1,
    })

    const handleToggle = (key: number) => {
        if (active.key === key) {
            setActive({
                ...active,
                status: false,
            })
        } else {
            setActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <section className="layout-pt-sm layout-pb-lg">
                <div className="container-fluid px-0 md:container md:px-20">
                    <div className="row y-gap-48 items-center">
                        <div className="col-xl-6 col-lg-5">
                            <div className="wow animate__animated animate__fadeIn">
                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img rounded-8" src="/img/about-5/images/img.jpg" alt="image" />
                            </div>
                        </div>
                        <div className="col-xl-4 offset-lg-1 col-lg-5">
                            <div className="wow animate__animated animate__fadeIn">
                                <div className="sectionHeading ">
                                    <h2 className="sectionHeading__title">The Creative Process</h2>
                                    <p className="sectionHeading__text mt-20">Praesent sollicitudin felis a ornare volutpat. Nullam malesuada sem sit amet semper tristique. Donec nec neque lectus. Nunc mattis, lectus eu lacinia pre tium, nisl nisi interdum tortor.</p>
                                </div>
                            </div>
                            <div className="accordion -bordered mt-24 js-accordion">
                                <div className={active.key == 1 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(1)}>
                                    <div className="accordion__button text-black">
                                        <div className="accordion__icon">
                                            <Icon.Plus className="icon" />
                                            <Icon.Minus className="icon" />
                                        </div>
                                        <button className="text-lg md:text-base fw-600 text-black">What does the package include?</button>
                                    </div>
                                    <div className="accordion__content" style={active.key == 1 ? { maxHeight: 150 } : { maxHeight: 0 }}>
                                        <div className="accordion__content__inner">
                                            <p>When you buy masjidsio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={active.key == 2 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(2)}>
                                    <div className="accordion__button text-black">
                                        <div className="accordion__icon">
                                            <Icon.Plus className="icon" />
                                            <Icon.Minus className="icon" />
                                        </div>
                                        <button className="text-lg md:text-base fw-600 text-black">How does the 14-day trial work?</button>
                                    </div>
                                    <div className="accordion__content" style={active.key == 2 ? { maxHeight: 150 } : { maxHeight: 0 }}>
                                        <div className="accordion__content__inner">
                                            <p>When you buy masjidsio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={active.key == 3 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(3)}>
                                    <div className="accordion__button text-black">
                                        <div className="accordion__icon">
                                            <Icon.Plus className="icon" />
                                            <Icon.Minus className="icon" />
                                        </div>
                                        <button className="text-lg md:text-base fw-600 text-black">How do I pay for your service?</button>
                                    </div>
                                    <div className="accordion__content" style={active.key == 3 ? { maxHeight: 150 } : { maxHeight: 0 }}>
                                        <div className="accordion__content__inner">
                                            <p>When you buy masjidsio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.</p>
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
