import Image from 'next/image'
import Link from "next/link"

export default function Deliver() {
    return (
        <>
            <section className="layout-pt-lg layout-pb-sm bg-light-5">
                <div className="container">
                    <div className="row y-gap-48 justify-between items-center">
                        <div className="col-xl-4 col-lg-5 col-md-10">
                            <div className="wow animate__animated animate__fadeIn">
                                <div className="sectionHeading ">
                                    <h2 className="sectionHeading__title">
                                        Deliver a personal experience at scale.
                                    </h2>
                                    <p className="sectionHeading__text mt-20">
                                        Burke blow off arse gutted mate what a plonker cup of tea
                                        fantastic get stuffed mate!
                                    </p>
                                </div>
                            </div>
                            <div className="row y-gap-32 pt-40 pr-20 lg:pt-0">
                                <div className="col-lg-12 col-sm-6">
                                    <div className="d-flex md:direction-column">
                                        <div className="d-flex justify-center items-center flex-grow size-64 bg-red-light rounded-full mr-20 sm:mr-0">
                                            <div className="icon icon-sketch text-30 text-red" />
                                        </div>
                                        <div className="md:mt-20">
                                            <h4 className="text-xl fw-600 lh-1">Awesome Design</h4>
                                            <p className="mt-12">
                                                Duis aute irure dolor reprehen derit in volu velit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-6">
                                    <div className="d-flex md:direction-column">
                                        <div className="d-flex justify-center items-center flex-grow size-64 bg-green-light rounded-full mr-20 sm:mr-0">
                                            <div className="icon icon-color-palette text-30 text-green-dark" />
                                        </div>
                                        <div className="md:mt-20">
                                            <h4 className="text-xl fw-600 lh-1">Easy Customize</h4>
                                            <p className="mt-12">
                                                Duis aute irure dolor reprehen derit in volu velit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wow animate__animated animate__fadeIn">
                                <Link
                                    href="/about/about-1"
                                    className="button -md text-white -purple mt-30"
                                >
                                    Discover More
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <Image
                                width="0"
                                height="0"
                                sizes="100vw"
                                //
                                className="initial-img"
                                src="/img/home-3/images/Frame-1.png"
                                alt="image"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}