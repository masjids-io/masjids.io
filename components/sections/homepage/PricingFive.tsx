import Link from 'next/link'
import * as Icon from 'react-feather'

import Image from 'next/image'
export default function PricingFive() {
    return (
        <>
            <section className="layout-pt-lg layout-pb-sm">
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-xl-7 col-lg-8 col-md-10">
                            <div className="sectionHeading ">
                                <h2 className="sectionHeading__title">Choose a plan that's right for you</h2>
                                <p className="sectionHeading__text mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                            </div>
                        </div>
                    </div>
                    <div className="row x-gap-32 y-gap-32 layout-pt-sm">
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white shadow-card">
                                    <div className="text-xl lh-1 fw-600">Basic</div>
                                    <h3 className="text-3xl fw-700 mt-4">Free</h3>
                                    <div>per month</div>
                                    <div className="pt-32">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/pricing/3/1.svg" alt="image" />
                                    </div>
                                    <p className="text-left mt-32">Standard listing submission, active for<br /> 30 days.</p>
                                    <ul className="y-gap-18 pt-40">
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">All Operating Supported</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Great Interface</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Allows encryption</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Face recognized system</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">24/7 Full support</p>
                                        </li>
                                    </ul>
                                    <div className="d-flex justify-center mt-40">
                                        <Link href="faq" className="button -md -dark-4 -uppercase col-12 text-white">
                                            Join This Plan
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white shadow-card">
                                    <div className="text-xl lh-1 fw-600 text-red-2">Professional</div>
                                    <h3 className="text-3xl fw-700 text-red-2 mt-4">$599.95</h3>
                                    <div>per month</div>
                                    <div className="pt-32">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/pricing/3/2.svg" alt="image" />
                                    </div>
                                    <p className="text-left mt-32">Standard listing submission, active for<br /> 30 days.</p>
                                    <ul className="y-gap-18 pt-40">
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">All Operating Supported</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Great Interface</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Allows encryption</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Face recognized system</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">24/7 Full support</p>
                                        </li>
                                    </ul>
                                    <div className="d-flex justify-center mt-40">
                                        <Link href="faq" className="button -md -red-2 -uppercase col-12 text-white">
                                            Join This Plan
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white shadow-card">
                                    <div className="text-xl lh-1 fw-600">Business</div>
                                    <h3 className="text-3xl fw-700 mt-4">$999.95</h3>
                                    <div>per month</div>
                                    <div className="pt-32">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/pricing/3/3.svg" alt="image" />
                                    </div>
                                    <p className="text-left mt-32">Standard listing submission, active for<br /> 30 days.</p>
                                    <ul className="y-gap-18 pt-40">
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">All Operating Supported</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Great Interface</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Allows encryption</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">Face recognized system</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 mr-10" />
                                            <p className="lh-13">24/7 Full support</p>
                                        </li>
                                    </ul>
                                    <div className="d-flex justify-center mt-40">
                                        <Link href="faq" className="button -md -dark-4 -uppercase col-12 text-white">
                                            Join This Plan
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* row end */}
                </div>
            </section>
        </>
    )
}
