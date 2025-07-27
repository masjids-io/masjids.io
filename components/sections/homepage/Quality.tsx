import Link from 'next/link'
import * as Icon from 'react-feather'

import Image from 'next/image'
export default function Quality() {
    return (
        <>
            <section id="quality" className="layout-pt-sm layout-pb-sm relative">
                <div className="absolute-full-center d-flex justify-end z-1 js-rellax">
                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/shapes/2.png" alt="shape" />
                </div>
                <div className="container relative z-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="mt-40">
                                <div className="row y-gap-40 justify-between items-center">
                                    <div className="col-xl-5 col-lg-6 order-lg-1 order-2">
                                        <div className="sectionHeading ">
                                            <h2 className="sectionHeading__title">Super clean user interface for easier
                                                use.</h2>
                                        </div>
                                        <p className="pr-64 mt-32">Burke blow off arse gutted mate what a plonker cup of
                                            tea fantastic get stuffed mate!</p>
                                        <div className="pt-32 y-gap-20">
                                            <div className="d-flex items-center">
                                                <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                                                    <Icon.Check className="icon size-14 text-black" />
                                                </div>
                                                <h5 className="text-lg fw-600">Installation Guide</h5>
                                            </div>
                                            <div className="d-flex items-center">
                                                <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                                                    <Icon.Check className="icon size-14 text-black" />
                                                </div>
                                                <h5 className="text-lg fw-600">Easy setup process</h5>
                                            </div>
                                            <div className="d-flex items-center">
                                                <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                                                    <Icon.Check className="icon size-14 text-black" />
                                                </div>
                                                <h5 className="text-lg fw-600">Live call support</h5>
                                            </div>
                                            <div className="d-flex items-center">
                                                <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                                                    <Icon.Check className="icon size-14 text-black" />
                                                </div>
                                                <h5 className="text-lg fw-600">Start a private group video call</h5>
                                            </div>
                                        </div>
                                        <Link href='/about-1' className='button -md -accent text-white mt-40'>Discover More</Link>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
                                        <div className="wow animate__animated animate__fadeIn">
                                            <div className="atropos -no-shadow js-atropos">
                                                <div className="atropos-scale">
                                                    <div className="atropos-rotate">
                                                        <div className="atropos-inner">
                                                            <Image width="0" height="0" sizes="100vw" className="initial-img" src="/img/tabs/3/1.png" alt="image" />
                                                        </div>
                                                    </div>
                                                </div>
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
