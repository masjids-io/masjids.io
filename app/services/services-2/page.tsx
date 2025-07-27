
'use client'
import { useEffect } from 'react'
import AccordionOne from '@/components/elements/AccordionOne'
import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import * as Icon from 'react-feather'

import Image from 'next/image'
export default function Services2() {
    useEffect(() => {
        const handleClick = (event:any) => {
            const target = event.target.closest('[data-switch]')
            if (!target) return

            const trigger = target.getAttribute('data-switch')
            if (!trigger) return

            const elementsToToggle = document.querySelectorAll(trigger)

            elementsToToggle.forEach(element => {
                element.classList.toggle('is-active')
            })
        }

        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])
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
                            <div className="row justify-between">
                                <div className="col-xl-4 col-lg-5">
                                    <div className="sectionHeading ">
                                        <div className="sectionHeading__subtitle">
                                            <span>services</span>
                                        </div>
                                        <h2 className="sectionHeading__title">We help to create strategies, design  development.</h2>
                                    </div>
                                    <button className="button -md -uppercase -accent text-white mt-32">More Services</button>
                                </div>
                                <div className="col-xl-6 col-lg-7">
                                    <div className="row y-gap-60 md:pt-60">
                                        <div className="col-sm-6">
                                            <div className="size-icon-50">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-2/icons/pen.svg" alt="icon" />
                                            </div>
                                            <h4 className="text-xl fw-600 lh-13 mt-20">Brand Strategy<br />  Art Direction</h4>
                                            <p className="mt-16">The template is really nice and offers quite a large set of options. It is beautiful and the coding is done quickly and seamlessly. Thank you!</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="size-icon-50">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-2/icons/web-design.svg" alt="icon" />
                                            </div>
                                            <h4 className="text-xl fw-600 lh-13 mt-20">UX/UI Design <br /> Website/App Design</h4>
                                            <p className="mt-16">The template is really nice and offers quite a large set of options. It is beautiful and the coding is done quickly and seamlessly. Thank you!</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="size-icon-50">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-2/icons/color-palette.svg" alt="icon" />
                                            </div>
                                            <h4 className="text-xl fw-600 lh-13 mt-20">Typography<br />  Video Production</h4>
                                            <p className="mt-16">The template is really nice and offers quite a large set of options. It is beautiful and the coding is done quickly and seamlessly. Thank you!</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="size-icon-50">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-2/icons/shape-builder.svg" alt="icon" />
                                            </div>
                                            <h4 className="text-xl fw-600 lh-13 mt-20">Marketing Campaigns <br /> Content Creation</h4>
                                            <p className="mt-16">The template is really nice and offers quite a large set of options. It is beautiful and the coding is done quickly and seamlessly. Thank you!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-sm">
                        <div className="container">
                            <div className="row justify-center text-center">
                                <div className="col-xl-6 col-lg-7">
                                    <div className="sectionHeading ">
                                        <h2 className="sectionHeading__title">How It Works</h2>
                                        <p className="sectionHeading__text mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row y-gap-48 pt-60 md:pt-48">
                                <div className="col-lg-3 col-sm-6">
                                    <div className="px-24 text-center hover-group">
                                        <div className="d-flex justify-center items-center size-120 mx-auto rounded-full bg-white shadow-card | hg:bg-text-dark t-base">
                                            <i className="icon icon-drawing-1 text-3xl | hg:text-white t-base" />
                                        </div>
                                        <div className="mt-30">
                                            <h4 className="text-xl lh-12">Create Project</h4>
                                            <p className="mt-10">The latest design trends meet hand-crafted templates in masjidsio Collection.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="px-24 text-center hover-group">
                                        <div className="d-flex justify-center items-center size-120 mx-auto rounded-full bg-white shadow-card | hg:bg-text-dark t-base">
                                            <i className="icon icon-process text-3xl | hg:text-white t-base" />
                                        </div>
                                        <div className="mt-30">
                                            <h4 className="text-xl lh-12">Making Plan</h4>
                                            <p className="mt-10">The latest design trends meet hand-crafted templates in masjidsio Collection.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="px-24 text-center hover-group">
                                        <div className="d-flex justify-center items-center size-120 mx-auto rounded-full bg-white shadow-card | hg:bg-text-dark t-base">
                                            <i className="icon icon-task text-3xl | hg:text-white t-base" />
                                        </div>
                                        <div className="mt-30">
                                            <h4 className="text-xl lh-12">Custom Task Views</h4>
                                            <p className="mt-10">The latest design trends meet hand-crafted templates in masjidsio Collection.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="px-24 text-center hover-group">
                                        <div className="d-flex justify-center items-center size-120 mx-auto rounded-full bg-white shadow-card | hg:bg-text-dark t-base">
                                            <i className="icon icon-one-finger-click text-3xl | hg:text-white t-base" />
                                        </div>
                                        <div className="mt-30">
                                            <h4 className="text-xl lh-12">One Click Install</h4>
                                            <p className="mt-10">The latest design trends meet hand-crafted templates in masjidsio Collection.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* pricing */}
                    <section className="layout-pt-sm layout-pb-sm">
                        {/* container start */}
                        <div className="container">
                            {/* row start */}
                            <div className="row justify-center text-center">
                                <div className="col-xl-7 col-lg-9">
                                    <div className="sectionHeading ">
                                        <div className="sectionHeading__subtitle">
                                            <span>Plans</span>
                                        </div>
                                        <h2 className="sectionHeading__title">Simple Pricing</h2>
                                    </div>
                                    <div className="price-switch mt-32 justify-center">
                                        <span>Monthly</span>
                                        <div className="form-switch">
                                            <div className="switch" data-switch=".js-switch-content">
                                                <input type="checkbox" />
                                                <span className="switch__slider" />
                                            </div>
                                        </div>
                                        <span>Annually Save 30%</span>
                                    </div>
                                </div>
                            </div>
                            {/* row end */}
                            {/* row start */}
                            <div className="row x-gap-32 y-gap-32 layout-pt-sm">
                                <div className="col-lg-4 col-md-6">
                                    <div>
                                        <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white border-light">
                                            <div className="text-xl lh-1 fw-600">Basic</div>
                                            <div className="switch-content js-switch-content">
                                                <h3 className="text-3xl fw-700 mt-4">Free</h3>
                                                <h3 className="text-3xl fw-700 mt-4">Free</h3>
                                            </div>
                                            <div>per month</div>
                                            <p className="text-left mt-32">Standard listing submission, active for<br /> 30 days.</p>
                                            <ul className="y-gap-18 pt-32">
                                                <li className="d-flex items-center">
                                                    <Icon.Check className="size-14 text-accent mr-10" />
                                                    <p className="lh-13">All Operating Supported</p>
                                                </li>
                                                <li className="d-flex items-center">
                                                    <Icon.Check className="size-14 text-accent mr-10" />
                                                    <p className="lh-13">Great Interface</p>
                                                </li>
                                                <li className="d-flex items-center">
                                                    <Icon.Check className="size-14 text-accent mr-10" />
                                                    <p className="lh-13">Allows encryption</p>
                                                </li>
                                                <li className="d-flex items-center">
                                                    <Icon.Check className="size-14 text-accent mr-10" />
                                                    <p className="lh-13">Face recognized system</p>
                                                </li>
                                                <li className="d-flex items-center">
                                                    <Icon.Check className="size-14 text-accent mr-10" />
                                                    <p className="lh-13">24/7 Full support</p>
                                                </li>
                                            </ul>
                                            <div className="d-flex justify-center mt-40">
                                                <Link href="/services/services-3" className="button -md -outline-dark text-black -uppercase">
                                                    Get started
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div>
                                        <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-light-4">
                                            <div className="badge absolute-x-center top-30 bg-accent text-white">Most Popular</div>
                                            <div className="text-xl lh-1 fw-600">Professional</div>
                                            <div className="switch-content js-switch-content">
                                                <h3 className="text-3xl fw-700 mt-4">$599.95</h3>
                                                <h3 className="text-3xl fw-700 mt-4">$899.95</h3>
                                            </div>
                                            <div>per month</div>
                                            <p className="text-left mt-32">Standard listing submission, active for<br /> 30 days.</p>
                                            <ul className="y-gap-18 pt-32">
                                                <li className="d-flex items-center">
                                                    <Icon.Check className="size-14 text-accent mr-10" />
                                                    <p className="lh-13">All Operating Supported</p>
                                                </li>
                                                <li className="d-flex items-center">
                                                    <Icon.Check className="size-14 text-accent mr-10" />
                                                    <p className="lh-13">Great Interface</p>
                                                </li>
                                                <li className="d-flex items-center">
                                                    <Icon.Check className="size-14 text-accent mr-10" />
                                                    <p className="lh-13">Allows encryption</p>
                                                </li>
                                                <li className="d-flex items-center">
                                                    <Icon.Check className="size-14 text-accent mr-10" />
                                                    <p className="lh-13">Face recognized system</p>
                                                </li>
                                                <li className="d-flex items-center">
                                                    <Icon.Check className="size-14 text-accent mr-10" />
                                                    <p className="lh-13">24/7 Full support</p>
                                                </li>
                                            </ul>
                                            <div className="d-flex justify-center mt-40">
                                                <Link href="/services/services-3" className="button -md -accent text-white -uppercase">
                                                    Get started
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div>
                                        <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white border-light">
                                            <div className="text-xl lh-1 fw-600">Business</div>
                                            <div className="switch-content js-switch-content">
                                                <h3 className="text-3xl fw-700 mt-4">$999.95</h3>
                                                <h3 className="text-3xl fw-700 mt-4">$1299.95</h3>
                                            </div>
                                            <div>per month</div>
                                            <p className="text-left mt-32">Standard listing submission, active for<br /> 30 days.</p>
                                            <ul className="y-gap-18 pt-32">
                                                <li className="d-flex items-center">
                                                    <Icon.Check className="size-14 text-accent mr-10" />
                                                    <p className="lh-13">All Operating Supported</p>
                                                </li>
                                                <li className="d-flex items-center">
                                                    <Icon.Check className="size-14 text-accent mr-10" />
                                                    <p className="lh-13">Great Interface</p>
                                                </li>
                                                <li className="d-flex items-center">
                                                    <Icon.Check className="size-14 text-accent mr-10" />
                                                    <p className="lh-13">Allows encryption</p>
                                                </li>
                                                <li className="d-flex items-center">
                                                    <Icon.Check className="size-14 text-accent mr-10" />
                                                    <p className="lh-13">Face recognized system</p>
                                                </li>
                                                <li className="d-flex items-center">
                                                    <Icon.Check className="size-14 text-accent mr-10" />
                                                    <p className="lh-13">24/7 Full support</p>
                                                </li>
                                            </ul>
                                            <div className="d-flex justify-center mt-40">
                                                <Link href="/services/services-3" className="button -md -outline-dark text-black -uppercase">
                                                    Get started
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* row end */}
                        </div>
                        {/* container end */}
                    </section>
                    {/* faq */}
                    <section className="layout-pt-sm layout-pb-sm">
                        <div className="container">
                            <div className="row justify-between">
                                <div className="col-xl-4 col-lg-5">
                                    <div className="sectionHeading ">
                                        <div className="sectionHeading__subtitle">
                                            <span>GET HELP (HELP CENTER)</span>
                                        </div>
                                        <h2 className="sectionHeading__title">Frequently asked questions.</h2>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-7">
                                    <AccordionOne />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* clients */}
                    <section className="layout-pt-sm layout-pb-lg">
                        <div className="container">
                            <div className="row justify-center">
                                <div className="col text-center">
                                    <p className="text-lg text-dark-1">Trusted by the world best</p>
                                </div>
                            </div>
                            <div className="row y-gap-32 justify-between items-center mt-64">
                                <div className="col-lg-auto col-md-auto col-4">
                                    <div className="d-flex justify-center items-center px-4">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/1.svg" alt="clients image" />
                                    </div>
                                </div>
                                <div className="col-lg-auto col-md-auto col-4">
                                    <div className="d-flex justify-center items-center px-4">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/2.svg" alt="clients image" />
                                    </div>
                                </div>
                                <div className="col-lg-auto col-md-auto col-4">
                                    <div className="d-flex justify-center items-center px-4">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/3.svg" alt="clients image" />
                                    </div>
                                </div>
                                <div className="col-lg-auto col-md-auto col-4">
                                    <div className="d-flex justify-center items-center px-4">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/4.svg" alt="clients image" />
                                    </div>
                                </div>
                                <div className="col-lg-auto col-md-auto col-4">
                                    <div className="d-flex justify-center items-center px-4">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/5.svg" alt="clients image" />
                                    </div>
                                </div>
                                <div className="col-lg-auto col-md-auto col-4">
                                    <div className="d-flex justify-center items-center px-4">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/6.svg" alt="clients image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>

        </>
    )
}