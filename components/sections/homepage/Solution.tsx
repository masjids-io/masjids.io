import Link from "next/link"

import Image from 'next/image'
export default function Solution() {
    return (
        <>
            <section className="layout-pt-2xl layout-pb-lg">
                <div className="container">
                    <div className="row y-gap-40 justify-between items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="atropos -no-shadow js-atropos">
                                <div className="atropos-scale">
                                    <div className="atropos-rotate">
                                        <div className="atropos-inner overflow-visible d-flex justify-end">
                                            <Image width="0" height="0" sizes="100vw" className="initial-img" src="/img/home-3/images/Frame.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-10">
                            <div className="wow animate__animated animate__fadeIn">
                                <div className="sectionHeading ">
                                    <h2 className="sectionHeading__title">A complete solution for developers & designers</h2>
                                </div>
                            </div>
                            <div className="wow animate__animated animate__fadeIn">
                                <p className="pr-100 lg:pr-0 mt-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                            </div>
                            <div className="wow animate__animated animate__fadeIn">
                                <Link href="/services/services-1" className="button -md text-purple -light-purple mt-30">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}