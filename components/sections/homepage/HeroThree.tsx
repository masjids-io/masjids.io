import Link from "next/link"

import Image from 'next/image'
export default function HeroThree() {
    return (
        <>
            <section className="masthead -type-3">
                <div className="masthead__bg">
                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-3/masthead/bg.png" alt="bg" />
                </div>
                <div className="container">
                    <div className="row y-gap-64">
                        <div className="col-xl-6 col-lg-6 col-md-10">
                            <div className="masthead__content relative z-2">
                                <div data-split="lines">
                                    <h1 className="masthead__title text-white">
                                        Automate all your
                                        <br className="lg:d-none" /> notifications.
                                    </h1>
                                </div>
                                <div data-split="lines">
                                    <p className="masthead__text text-white pt-24">
                                        Millions of companies of all sizes from startups to Fortune
                                        500s use Stripes software and APIs to accept payments, send
                                        payouts, and manage their businesses online.
                                    </p>
                                </div>
                                <div className="masthead__buttons row y-gap-10 x-gap-16 pt-40 sm:pt-24">
                                    <div className="col-auto">
                                        <Link href="/login" className="button -md -dark text-white">
                                            Start Now
                                        </Link>
                                    </div>
                                    <div className="col-auto">
                                        <Link
                                            href="/contact/contact-2"
                                            className="button -md -outline-white text-white"
                                        >
                                            Contact Sales
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="masthead__image relative z-1">
                                <Image width="0" height="0" sizes="100vw" src="/img/home-3/masthead/image.png" alt="phones" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}