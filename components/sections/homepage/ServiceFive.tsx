import Link from 'next/link'

import Image from 'next/image'
export default function ServiceFive() {
    return (
        <>
            <section className="layout-pt-lg layout-pb-lg section-bg-color">
                <div className="section-bg-color__item -full rounded-0 bg-light-4" />
                <div className="container">
                    <div className="row y-gap-60 items-center">
                        <div className="col-xl-6 col-lg-7 order-lg-1 order-2">
                            <div className="row y-gap-32">
                                <div className="col-sm-6">
                                    <div className="js-rellax">
                                        <div className="py-50 px-40 bg-white rounded-16 shadow-card  ">
                                            <div className="size-80 rounded-full d-flex justify-center items-center bg-blue-light">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/solutions/branding.svg" alt="icon" />
                                            </div>
                                            <h4 className="text-xl fw-600 mt-20">Branding</h4>
                                            <p className="mt-10">There is no one universal solution in online marketing .</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="js-rellax">
                                        <div className="py-50 px-40 bg-white rounded-16 shadow-card  ">
                                            <div className="size-80 rounded-full d-flex justify-center items-center bg-yellow-light">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/solutions/ui-design.svg" alt="icon" />
                                            </div>
                                            <h4 className="text-xl fw-600 mt-20">UI/UX Design</h4>
                                            <p className="mt-10">There is no one universal solution in online marketing .</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="js-rellax">
                                        <div className="py-50 px-40 bg-white rounded-16 shadow-card  mt--20 md:mt-0">
                                            <div className="size-80 rounded-full d-flex justify-center items-center bg-red-light">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/solutions/animate.svg" alt="icon" />
                                            </div>
                                            <h4 className="text-xl fw-600 mt-20">Animation</h4>
                                            <p className="mt-10">There is no one universal solution in online marketing .</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="js-rellax">
                                        <div className="py-50 px-40 bg-white rounded-16 shadow-card mt-30 md:mt-0 ">
                                            <div className="size-80 rounded-full d-flex justify-center items-center bg-green-light">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/solutions/seo.svg" alt="icon" />
                                            </div>
                                            <h4 className="text-xl fw-600 mt-20">SEO  Backlinks</h4>
                                            <p className="mt-10">There is no one universal solution in online marketing .</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 offset-xl-1 col-lg-5 col-md-8 order-lg-2 order-1">
                            <div className="sectionHeading ">
                                <div className="sectionHeading__subtitle">
                                    <span>services</span>
                                </div>
                                <h2 className="sectionHeading__title">Best solutions for you</h2>
                                <p className="sectionHeading__text mt-20">Praesent sollicitudin felis a ornare volutpat. Nullam malesuada sem sit amet semper tristique. Donec nec neque lectus. Nunc mattis, lectus eu lacinia pre tium, nisl nisi interdum tortor.</p>
                            </div>
                            <div className="mt-30">
                                <Link href='/services-1' className='button -md -accent rounded-8 text-white'>All Services</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
