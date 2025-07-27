'use client'
import Layout from '@/components/layout/Layout'
import ProjectSliderOne from '@/components/slider/ProjectSliderOne'
import TestimonialSliderOne from '@/components/slider/TestimonialSliderOne'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState } from 'react'
import * as Icon from 'react-feather'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
interface ActiveState {
    status: boolean
    key: number
}

import Image from 'next/image'
export default function Services3() {
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
            <Layout>
                <div>
                    <section className="page-header -base -">
                        <div className="page-header__bg">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/page-header/bg-light.png" alt="Page header" />
                        </div>
                        <div className="page-header__content">
                            <div className="row justify-center text-center">
                                <div className="col-lg-9 col-md-10">
                                    <div>
                                        <h1 className="page-header__title lh-14">Our Services</h1>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-9 col-md-10">
                                    <div className="px-20">
                                        <p className="page-header__text">With we want to optimize the customization process so your team can save time when building websites.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-lg layout-pb-sm">
                        <div className="container">
                            <div className="row y-gap-48 justify-between items-center">
                                <div className="col-xl-7 col-lg-7">
                                    <div className="atropos -no-shadow js-atropos">
                                        <div className="atropos-scale">
                                            <div className="atropos-rotate">
                                                <div className="atropos-inner">
                                                    <div className="image-group -type-2">
                                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }}  data-atropos-offset={-5} src="/img/about-1/about/pattern.png" alt="image" />
                                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }}  data-atropos-offset={0} className="shadow-card" src="/img/about-5/about/images.png" alt="image" />
                                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }}  data-atropos-offset={5} className="shadow-card" src="/img/about-5/about/images-1.png" alt="image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5">
                                    <div className="wow animate__animated animate__fadeIn">
                                        <div className="sectionHeading ">
                                            <h2 className="sectionHeading__title">IT solutions for your business.</h2>
                                            <p className="sectionHeading__text mt-20">Praesent sollicitudin felis a ornare volutpat. Nullam malesuada sem sit amet semper tristique. Donec nec neque lectus. Nunc mattis, lectus eu lacinia pre tium, nisl nisi interdum tortor.</p>
                                        </div>
                                    </div>
                                    <div className="mt-24 y-gap-20">
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
                                        <Link href="/about/about-5" className="button -md -dark text-white rounded-8 mt-40">Explore</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-sm">
                        <div className="container">
                            <div className="row justify-between">
                                <div className="col-xl-4 col-lg-5">
                                    <div className="sectionHeading ">
                                        <div className="sectionHeading__subtitle">
                                            <span>How our process works</span>
                                        </div>
                                        <h2 className="sectionHeading__title">Simple 4-Step System</h2>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-7">
                                    <div className="accordion -simple md:mt-24 js-accordion">
                                        <div className={active.key == 1 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(1)}>
                                            <div className="accordion__button text-black">
                                                <div className="accordion__icon">
                                                    <Icon.Plus className="icon" />
                                                    <Icon.Minus className="icon" />
                                                </div>
                                                <button className="text-lg md:text-base fw-600 text-black">01 Strategy</button>
                                            </div>
                                            <div className="accordion__content" style={active.key == 1 ? { maxHeight: 98 } : { maxHeight: 0 }}>
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
                                                <button className="text-lg md:text-base fw-600 text-black">02 Design</button>
                                            </div>
                                            <div className="accordion__content" style={active.key == 2 ? { maxHeight: 98 } : { maxHeight: 0 }}>
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
                                                <button className="text-lg md:text-base fw-600 text-black">03 Operation</button>
                                            </div>
                                            <div className="accordion__content" style={active.key == 3 ? { maxHeight: 98 } : { maxHeight: 0 }}>
                                                <div className="accordion__content__inner">
                                                    <p>When you buy masjidsio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={active.key == 4 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(4)}>
                                            <div className="accordion__button text-black">
                                                <div className="accordion__icon">
                                                    <Icon.Plus className="icon" />
                                                    <Icon.Minus className="icon" />
                                                </div>
                                                <button className="text-lg md:text-base fw-600 text-black">04 Launch</button>
                                            </div>
                                            <div className="accordion__content" style={active.key == 4 ? { maxHeight: 98 } : { maxHeight: 0 }}>
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
                    <section className="layout-pt-sm layout-pb-sm">
                        <div className="container">
                            <div className="row y-gap-16 justify-between items-center">
                                <div className="col-md-6">
                                    <div className="sectionHeading ">
                                        <h2 className="sectionHeading__title">Services</h2>
                                    </div>
                                </div>
                                <div className="col-md-auto">
                                    <Link href="/login" className="button -simple text-accent text-16 fw-600">Start Your Project</Link>
                                </div>
                            </div>
                            <div className="sectionSlider relative pt-60 md:pt-40 js-sectionSlider">
                                <ProjectSliderOne />
                            </div>
                        </div>
                    </section>
                    {/* testimonials */}
                    <section className="layout-pt-lg layout-pb-sm">
                        <div className="container">
                            <div className="row y-gap-32 justify-between">
                                <div className="col-xl-3 col-lg-4">
                                    <div className="sectionHeading">
                                        <div className="sectionHeading__subtitle">
                                            <span>EXPLORE NEW PLACES</span>
                                        </div>
                                        <h2 className="sectionHeading__title">What our customers say</h2>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-8">
                                    <div className="sectionSlider overflow-hidden js-sectionSlider" data-cursor-slider="slider" data-gap={55} data-slider-col="base-2 lg-2 md-2 sm-1">
                                        <div className="swiper-wrapper">
                                            <TestimonialSliderOne />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* counter */}
                    <section className="layout-pt-sm layout-pb-sm">
                        <div className="container">
                            <div className="row y-gap-48">
                                <div className="col-lg-3 col-6">
                                    <div className="numCounter">
                                        <div className="numCounter__number text-3xl text-dark-1 fw-700"><CounterUp count={773} time={1} /></div>
                                        <h5 className="numCounter__title text-dark text-lg">Components</h5>
                                        <div className="numCounter__line mt-20" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="numCounter">
                                        <div className="numCounter__number text-3xl text-dark-1 fw-700"><CounterUp count={1254} time={1} /></div>
                                        <h5 className="numCounter__title text-dark text-lg">Downloads</h5>
                                        <div className="numCounter__line mt-20" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="numCounter">
                                        <div className="numCounter__number text-3xl text-dark-1 fw-700"><CounterUp count={14941} time={1} /></div>
                                        <h5 className="numCounter__title text-dark text-lg">Followers</h5>
                                        <div className="numCounter__line mt-20" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="numCounter">
                                        <div className="numCounter__number text-3xl text-dark-1 fw-700"><CounterUp count={1254} time={1} /></div>
                                        <h5 className="numCounter__title text-dark text-lg">New users</h5>
                                        <div className="numCounter__line mt-20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-lg">
                        <div className="container">
                            <div className="row justify-center text-center">
                                <div className="col-auto">
                                    <div className="sectionHeading ">
                                        <h2 className="sectionHeading__title">We help startups launch and succeed very fast</h2>
                                        <p className="sectionHeading__text mt-20">We appreciate your trust greatly! Our clients choose us and our products<br className="md:d-none" /> because they know we are the best.</p>
                                    </div>
                                    <Link href="/about/about-3" className="button -md -accent text-white mt-40 md:mt-30">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}