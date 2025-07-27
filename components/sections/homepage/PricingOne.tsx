'use client'
import Link from "next/link"
import { useState } from "react"
import * as Icon from 'react-feather'

export default function PricingOne() {
    const [pricing, setPricing] = useState(false)
    const handlePricing = () => setPricing(!pricing)
    return (
        <>
            <section className="layout-pt-lg layout-pb-sm">
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-xl-7 col-lg-9">
                            <div className="sectionHeading ">
                                <div className="sectionHeading__subtitle">
                                    <span>PLANS</span>
                                </div>
                                <h2 className="sectionHeading__title">Simple, Transparent Pricing</h2>
                            </div>
                            <div className="price-switch mt-32 justify-center">
                                <span>Monthly</span>
                                <div className="form-switch">
                                    <div className="switch" onClick={handlePricing}>
                                        <input type="checkbox" />
                                        <span className="switch__slider" />
                                    </div>
                                </div>
                                <span>Annually Save 20%</span>
                            </div>
                        </div>
                    </div>
                    <div className="row x-gap-32 y-gap-32 layout-pt-sm">
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white border-light">
                                    <div className="text-xl lh-1 fw-600">Starter</div>
                                    <div className="switch-content js-switch-content">
                                        <h3 className="text-3xl fw-700 mt-4">{pricing ? "Free" : "Free"}</h3>
                                    </div>
                                    <div>Forever</div>
                                    <p className="text-left mt-32">
                                        Essential features to get your Masjid connected and engage your community.
                                    </p>
                                    <ul className="y-gap-18 pt-32">
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Prayer Times & Qibla</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Announcements</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Community Portal</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Hijri Calendar</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Basic Support</p>
                                        </li>
                                    </ul>
                                    <div className="d-flex justify-center mt-40">
                                        <Link
                                            href="/contact"
                                            className="button -md -outline-dark text-black -uppercase"
                                        >
                                            Get started
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-light-4">
                                    <div className="badge absolute-x-center top-30 bg-accent text-white">
                                        Most Popular
                                    </div>
                                    <div className="text-xl lh-1 fw-600">Professional</div>
                                    <div className="switch-content js-switch-content">
                                        <h3 className="text-3xl fw-700 mt-4">${pricing ? "79" : "99"}</h3>
                                    </div>
                                    <div className="">per month</div>
                                    <p className="text-left mt-32">
                                        The complete solution for growing Masjids to engage members and streamline operations.
                                    </p>
                                    <ul className="y-gap-18 pt-32">
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Everything in Starter</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Online Donations</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Event Management</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Live Streaming</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Push Notifications</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Priority Support</p>
                                        </li>
                                    </ul>
                                    <div className="d-flex justify-center mt-40">
                                        <Link
                                            href="/contact"
                                            className="button -md -accent text-white -uppercase"
                                        >
                                            Get started
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white border-light">
                                    <div className="text-xl lh-1 fw-600">Enterprise</div>
                                    <div className="switch-content js-switch-content">
                                        <h3 className="text-3xl fw-700 mt-4">Custom</h3>
                                    </div>
                                    <div>per month</div>
                                    <p className="text-left mt-32">
                                        Tailored for large organizations with advanced needs and dedicated support.
                                    </p>
                                    <ul className="y-gap-18 pt-32">
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Everything in Professional</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Multi-Platform Apps</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Advanced Finance Tools</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Custom Branding</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Dedicated Support</p>
                                        </li>
                                    </ul>
                                    <div className="d-flex justify-center mt-40">
                                        <Link
                                            href="/contact"
                                            className="button -md -outline-dark text-black -uppercase"
                                        >
                                            Contact Us
                                        </Link>
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
