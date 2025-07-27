import Link from 'next/link'

import Image from 'next/image'
export default function Reliability() {
    return (
        <>
            <section id="reliability" className="layout-pt-sm layout-pb-lg">
                <div className="container">
                    <div className="row y-gap-48 justify-between items-center">
                        <div className="col-xl-6 col-lg-6 col-md-10">
                            <div className="wow animate__animated animate__fadeIn">
                                <div className="sectionHeading ">
                                    <h2 className="sectionHeading__title">A software development and tech consulting
                                        agency</h2>
                                </div>
                            </div>
                            <div className="row y-gap-32 pt-40 pr-100 lg:pr-0">
                                <div className="col-lg-12 col-sm-6">
                                    <div className="d-flex md:direction-column">
                                        <div className="size-64 mr-20 sm:mr-0">
                                            <div className="d-flex justify-center items-center flex-grow size-64 bg-red-light rounded-full">
                                                <div className="icon icon-sketch text-30 text-red" />
                                            </div>
                                        </div>
                                        <div className="md:mt-20">
                                            <h4 className="text-xl fw-600 lh-1">Awesome Design</h4>
                                            <p className="mt-12">Duis aute irure dolor reprehen derit in volu velit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-6">
                                    <div className="d-flex md:direction-column">
                                        <div className="size-64 mr-20 sm:mr-0">
                                            <div className="d-flex justify-center items-center flex-grow size-64 bg-green-light rounded-full">
                                                <div className="icon icon-color-palette text-30 text-green-dark" />
                                            </div>
                                        </div>
                                        <div className="md:mt-20">
                                            <h4 className="text-xl fw-600 lh-1">Easy Customize</h4>
                                            <p className="mt-12">Duis aute irure dolor reprehen derit in volu velit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wow animate__animated animate__fadeIn">
                                <Link href='/about-1' className='button -md -light-accent text-accent mt-40'>DiscoverMore</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="wow animate__animated animate__fadeIn">
                                <div className="atropos -no-shadow js-atropos">
                                    <div className="atropos-scale">
                                        <div className="atropos-rotate">
                                            <div className="atropos-inner">
                                                <Image width="0" height="0" sizes="100vw" className="initial-img" src="/img/home-4/images/3.png" alt="image" />
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
