'use client'
import { useState } from 'react'
import * as Icon from 'react-feather'
interface ActiveState {
    status: boolean
    key: number
}

export default function FaqFour() {
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
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-xl-6 col-lg-7">
                            <div className="sectionHeading ">
                                <h2 className="sectionHeading__title">Have a question?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-center pt-60 sm:pt-40">
                        <div className="col-lg-6 col-md-10">
                            <div className="accordion -bordered md:mt-24 js-accordion">
                                <div className={active.key == 1 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(1)}>
                                    <div className="accordion__button text-black">
                                        <div className="accordion__icon">
                                            <Icon.Plus className="icon" />
                                            <Icon.Minus className="icon" />
                                        </div>
                                        <button className="text-lg md:text-base fw-600 text-black"> What does the package include?</button>
                                    </div>
                                    <div className="accordion__content" style={active.key == 1 ? { maxHeight: 202 } : { maxHeight: 0 }}>
                                        <div className="accordion__content__inner">
                                            <p>When you buy masjidsio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
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
                                    <div className="accordion__content" style={active.key == 2 ? { maxHeight: 202 } : { maxHeight: 0 }}>
                                        <div className="accordion__content__inner">
                                            <p>When you buy masjidsio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
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
                                    <div className="accordion__content" style={active.key == 3 ? { maxHeight: 202 } : { maxHeight: 0 }}>
                                        <div className="accordion__content__inner">
                                            <p>When you buy masjidsio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={active.key == 4 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(4)}>
                                    <div className="accordion__button text-black">
                                        <div className="accordion__icon">
                                            <Icon.Plus className="icon" />
                                            <Icon.Minus className="icon" />
                                        </div>
                                        <button className="text-lg md:text-base fw-600 text-black">Can I suggest a new feature?</button>
                                    </div>
                                    <div className="accordion__content" style={active.key == 4 ? { maxHeight: 202 } : { maxHeight: 0 }}>
                                        <div className="accordion__content__inner">
                                            <p>When you buy masjidsio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={active.key == 5 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(5)}>
                                    <div className="accordion__button text-black">
                                        <div className="accordion__icon">
                                            <Icon.Plus className="icon" />
                                            <Icon.Minus className="icon" />
                                        </div>
                                        <button className="text-lg md:text-base fw-600 text-black">How to restore your chat history?</button>
                                    </div>
                                    <div className="accordion__content" style={active.key == 5 ? { maxHeight: 202 } : { maxHeight: 0 }}>
                                        <div className="accordion__content__inner">
                                            <p>When you buy masjidsio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="accordion -bordered md:mt-24 js-accordion">
                                <div className={active.key == 6 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(6)}>
                                    <div className="accordion__button text-black">
                                        <div className="accordion__icon">
                                            <Icon.Plus className="icon" />
                                            <Icon.Minus className="icon" />
                                        </div>
                                        <button className="text-lg md:text-base fw-600 text-black"> What does the package include?</button>
                                    </div>
                                    <div className="accordion__content" style={active.key == 6 ? { maxHeight: 202 } : { maxHeight: 0 }}>
                                        <div className="accordion__content__inner">
                                            <p>When you buy masjidsio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={active.key == 7 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(7)}>
                                    <div className="accordion__button text-black">
                                        <div className="accordion__icon">
                                            <Icon.Plus className="icon" />
                                            <Icon.Minus className="icon" />
                                        </div>
                                        <button className="text-lg md:text-base fw-600 text-black">How does the 14-day trial work?</button>
                                    </div>
                                    <div className="accordion__content" style={active.key == 7 ? { maxHeight: 202 } : { maxHeight: 0 }}>
                                        <div className="accordion__content__inner">
                                            <p>When you buy masjidsio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={active.key == 8 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(8)}>
                                    <div className="accordion__button text-black">
                                        <div className="accordion__icon">
                                            <Icon.Plus className="icon" />
                                            <Icon.Minus className="icon" />
                                        </div>
                                        <button className="text-lg md:text-base fw-600 text-black">How do I pay for your service?</button>
                                    </div>
                                    <div className="accordion__content" style={active.key == 8 ? { maxHeight: 202 } : { maxHeight: 0 }}>
                                        <div className="accordion__content__inner">
                                            <p>When you buy masjidsio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={active.key == 9 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(9)}>
                                    <div className="accordion__button text-black">
                                        <div className="accordion__icon">
                                            <Icon.Plus className="icon" />
                                            <Icon.Minus className="icon" />
                                        </div>
                                        <button className="text-lg md:text-base fw-600 text-black">Can I suggest a new feature?</button>
                                    </div>
                                    <div className="accordion__content" style={active.key == 9 ? { maxHeight: 202 } : { maxHeight: 0 }}>
                                        <div className="accordion__content__inner">
                                            <p>When you buy masjidsio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={active.key == 10 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(10)}>
                                    <div className="accordion__button text-black">
                                        <div className="accordion__icon">
                                            <Icon.Plus className="icon" />
                                            <Icon.Minus className="icon" />
                                        </div>
                                        <button className="text-lg md:text-base fw-600 text-black">How to restore your chat history?</button>
                                    </div>
                                    <div className="accordion__content" style={active.key == 10 ? { maxHeight: 202 } : { maxHeight: 0 }}>
                                        <div className="accordion__content__inner">
                                            <p>When you buy masjidsio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
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