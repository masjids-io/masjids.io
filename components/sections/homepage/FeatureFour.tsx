
import Image from 'next/image'
export default function FeaturesFour() {
    return (
        <>
            <section className="layout-pt-lg layout-pb-lg">
                <div className="container">
                    {/* row start */}
                    <div className="row justify-center text-center">
                        <div className="col-xl-8 col-lg-9">
                            <div className="sectionHeading ">
                                <h2 className="sectionHeading__title">Few Simple Steps for Successful Business</h2>
                            </div>
                            <p className="px-80 lg:px-0 mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                        </div>
                    </div>
                    {/* row end */}
                    {/* row start */}
                    <div className="row x-gap-32 y-gap-32 layout-pt-sm">
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <div className="px-40 text-center">
                                    <div>
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/pricing/1/1.png" alt="image" />
                                    </div>
                                    <div className="mt-40">
                                        <h4 className="text-xl fw-600">
                                            <span className="text-red">01</span>
                                            Project Introduction
                                        </h4>
                                        <p className="mt-16">Achieve virtually any design and layout from within the one template.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <div className="px-40 text-center">
                                    <div>
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/pricing/1/2.png" alt="image" />
                                    </div>
                                    <div className="mt-40">
                                        <h4 className="text-xl fw-600">
                                            <span className="text-red">02</span>
                                            Research  Concept
                                        </h4>
                                        <p className="mt-16">Achieve virtually any design and layout from within the one template.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <div className="px-40 text-center">
                                    <div>
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/pricing/1/3.png" alt="image" />
                                    </div>
                                    <div className="mt-40">
                                        <h4 className="text-xl fw-600">
                                            <span className="text-red">03</span>
                                            Project Termination
                                        </h4>
                                        <p className="mt-16">Achieve virtually any design and layout from within the one template.</p>
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
