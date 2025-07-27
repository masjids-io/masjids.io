'use client'
import Link from 'next/link'
import { useState } from "react"
import * as Icon from 'react-feather'

export default function PricingSix() {
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
                                    <span>Plans</span>
                                </div>
                                <h2 className="sectionHeading__title">Simple Pricing</h2>
                            </div>
                            <div className="price-switch mt-32 justify-center">
                                <span>Monthly</span>
                                <div className="form-switch">
                                    <div className="switch" onClick={handlePricing}>
                                        <input type="checkbox" />
                                        <span className="switch__slider" />
                                    </div>
                                </div>
                                <span>Annually Save 30%</span>
                            </div>
                        </div>
                    </div>
                    <div className="row x-gap-32 y-gap-32 layout-pt-sm">
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white shadow-card">
                                    <div className="text-xl lh-1 fw-600">Basic</div>
                                    <div className="switch-content js-switch-content">
                                        <h3 className="text-3xl fw-700 mt-4">{pricing ? "Free" : "Free"}</h3>
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
                                        <Link href="/about/about-2" className="button -md -outline-dark text-black -uppercase">
                                            Get started
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white shadow-card">
                                    <div className="badge absolute-x-center top-30 bg-accent text-white">Most Popular</div>
                                    <div className="text-xl lh-1 fw-600">Professional</div>
                                    <div className="switch-content js-switch-content">
                                        <h3 className="text-3xl fw-700 mt-4">${pricing ? "599.95" : "899.95"}</h3>
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
                                        <Link href="/about/about-1" className="button -md -dark-8 text-white -uppercase">
                                            Get started
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white shadow-card">
                                    <div className="text-xl lh-1 fw-600">Business</div>
                                    <div className="switch-content js-switch-content">
                                        <h3 className="text-3xl fw-700 mt-4">${pricing ? "999.95" : "1299.95"}</h3>
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
                                        <Link href="/about/about-2" className="button -md -outline-dark text-black -uppercase">
                                            Get started
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
