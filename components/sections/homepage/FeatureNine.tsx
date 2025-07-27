import Link from 'next/link'
import * as Icon from 'react-feather'

import Image from 'next/image'
export default function FeatureNine() {
    return (
        <>
            <section className="layout-pt-sm layout-pb-lg">
                <div className="container">
                    <div className="row y-gap-48 justify-between items-center">
                        <div className="col-xl-7 col-lg-7">                           
                            <div className="image-group -type-2">
                                <Image width="100" height="100" sizes="100vw" data-atropos-offset={-5} src="/img/about-1/about/pattern.png" alt="image" />
                                <Image width="200" height="300" sizes="100vw" data-atropos-offset={0} className="shadow-card" src="/img/about-5/about/images.png" alt="image" />
                                <Image width="400" height="400" sizes="100vw" data-atropos-offset={5} className="shadow-card" src="/img/about-5/about/images-1.png" alt="image" />
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="wow animate__animated animate__fadeIn">
                                <div className="sectionHeading ">
                                    <h2 className="sectionHeading__title">IT solutions for your business.</h2>
                                    <p className="sectionHeading__text mt-20">Praesent sollicitudin felis a ornare volutpat. Nullam malesuada sem sit amet semper tristique. Donec nec neque lectus. Nunc mattis, lectus eu lacinia pre tium, nisl nisi interdum tortor.</p>
                                </div>
                            </div>
                            <div className="mt-24 y-gap-20">
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
                            <div className="wow animate__animated animate__fadeIn">
                                <Link href="/services/services-2" className="button -md -dark text-white rounded-8 mt-40">Explore</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
