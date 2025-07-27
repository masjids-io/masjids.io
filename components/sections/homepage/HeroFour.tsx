import Link from 'next/link'

import Image from 'next/image'
export default function HeroFour() {
    return (
        <>
            <section className="masthead -type-4">
                <div className="masthead__bg">
                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-4/header/bg.svg" alt="image" />
                </div>
                <div className="container">
                    <div className="row items-center y-gap-64">
                        <div className="col-xl-6 col-lg-6 col-md-10">
                            <div className="masthead__content relative z-2">
                                <div data-split="lines">
                                    <h1 className="masthead__title">
                                        Integrated<br className="lg:d-none" /> masjidsio marketing
                                    </h1>
                                </div>
                                <div data-split="lines">
                                    <p className="masthead__text pt-24 pr-64">
                                        Millions of companies of all sizes from startups to Fortune 500s use
                                        Stripes software and APIs to accept payments, send payouts, and manage
                                        their businesses online.
                                    </p>
                                </div>
                                <div className="masthead__buttons row y-gap-10 x-gap-16 pt-40 sm:pt-24">
                                    <div className="col-auto">
                                        <Link href="/about/about-1" className="button -md -accent text-white">Start Now</Link>
                                    </div>
                                    <div className="col-auto">
                                        <Link href="/contact/contact-1" className="button -md -white text-dark-1">Contact
                                            Sales</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="masthead__image relative z-1">
                                <div className="atropos -no-shadow js-atropos">
                                    <div className="atropos-scale">
                                        <div className="atropos-rotate">
                                            <div className="atropos-inner">
                                                <Image width="0" height="0" sizes="100vw" src="/img/home-4/header/image.png" alt="image" />
                                            </div>
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
