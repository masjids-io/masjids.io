import Link from "next/link"

import Image from 'next/image'
export default function Home3_Section8() {
    return (
        <>
            <section className="layout-pt-lg layout-pb-sm">
                <div className="container">
                    {/* row start */}
                    <div className="row">
                        <div className="col-xl-7 col-lg-9">
                            <div className="sectionHeading ">
                                <h2 className="sectionHeading__title">
                                    Choose a plan that's right for you.
                                </h2>
                            </div>
                            <p className="pr-100 lg:pr-0 mt-12">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna
                            </p>
                        </div>
                    </div>
                    {/* row end */}
                    {/* row start */}
                    <div className="row x-gap-32 y-gap-32 layout-pt-sm">
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white border-light">
                                    <div className="text-xl lh-1 fw-600">Basic</div>
                                    <h3 className="text-3xl fw-700 mt-4">Free</h3>
                                    <div>per month</div>
                                    <div className="mt-48">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/pricing/1/1.png" alt="image" />
                                    </div>
                                    <div className="d-flex justify-center mt-80">
                                        <Link

                                            href="faq"
                                            className="button -md -light-purple text-black"
                                        >
                                            Join This Plan
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <div className="relative rounded-16 pt-80 pb-60 px-40 text-center shadow-card bg-white border-purple">
                                    <div className="text-xl lh-1 fw-600 text-purple">Professional</div>
                                    <h3 className="text-3xl fw-700 text-purple mt-4">$599.95</h3>
                                    <div>per month</div>
                                    <div className="mt-48">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/pricing/1/2.png" alt="image" />
                                    </div>
                                    <div className="d-flex justify-center mt-80">
                                        <Link

                                            href="faq"
                                            className="button -md -purple text-white"
                                        >
                                            Join This Plan
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white border-light">
                                    <div className="text-xl lh-1 fw-600">Business</div>
                                    <h3 className="text-3xl fw-700 mt-4">$999.95</h3>
                                    <div>per month</div>
                                    <div className="mt-48">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/pricing/1/3.png" alt="image" />
                                    </div>
                                    <div className="d-flex justify-center mt-80">
                                        <Link

                                            href="faq"
                                            className="button -md -light-purple text-black"
                                        >
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