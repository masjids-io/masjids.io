import Link from "next/link"
import * as Icon from 'react-feather'

export default function Home2_Section8() {
    return (
        <>
            <section className="layout-pt-lg layout-pb-lg bg-light-2">
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-xl-6 col-lg-7">
                            <div className="sectionHeading ">
                                <h2 className="sectionHeading__title wow animate__animated animate__fadeInUp">
                                    Simple Pricing for Your Team
                                </h2>
                                <p className="sectionHeading__text mt-20 wow animate__animated animate__fadeInUp">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row x-gap-32 y-gap-32 pt-60 sm:pt-40">
                        <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeInUp">
                            <div>
                                <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white border-light">
                                    <div className="text-xl lh-1 fw-600">Basic</div>
                                    <h3 className="text-3xl fw-700 mt-4">Free</h3>
                                    <div>per month</div>
                                    <p className="text-left mt-32">
                                        Standard listing submission, active for
                                        <br /> 30 days.
                                    </p>
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
                                        <Link

                                            href="/services/services-2"
                                            className="button -md rounded-8 -blue-dark text-white"
                                        >
                                            Get started
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                            <div>
                                <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-blue-dark">
                                    <div className="badge absolute-x-center top-30 bg-accent-dark text-white">
                                        Most Popular
                                    </div>
                                    <div className="text-xl lh-1 fw-600 text-white">Professional</div>
                                    <h3 className="text-3xl fw-700 text-white mt-4">$599.95</h3>
                                    <div className="text-white opac-50">per month</div>
                                    <p className="text-left text-white mt-32">
                                        Standard listing submission, active for
                                        <br /> 30 days.
                                    </p>
                                    <ul className="y-gap-18 pt-32">
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 text-white mr-10" />
                                            <p className="lh-13 text-white">All Operating Supported</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 text-white mr-10" />
                                            <p className="lh-13 text-white">Great Interface</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 text-white mr-10" />
                                            <p className="lh-13 text-white">Allows encryption</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 text-white mr-10" />
                                            <p className="lh-13 text-white">Face recognized system</p>
                                        </li>
                                        <li className="d-flex items-center">
                                            <Icon.Check className="size-14 text-white mr-10" />
                                            <p className="lh-13 text-white">24/7 Full support</p>
                                        </li>
                                    </ul>
                                    <div className="d-flex justify-center mt-40">
                                        <Link

                                            href="/services/services-1"
                                            className="button -md -white rounded-8 text-blue-dark"
                                        >
                                            Get started
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                            <div>
                                <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white border-light">
                                    <div className="text-xl lh-1 fw-600">Business</div>
                                    <h3 className="text-3xl fw-700 mt-4">$999.95</h3>
                                    <div>per month</div>
                                    <p className="text-left mt-32">
                                        Standard listing submission, active for
                                        <br /> 30 days.
                                    </p>
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
                                        <Link

                                            href="/services/services-2"
                                            className="button -md rounded-8 -blue-dark text-white"
                                        >
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