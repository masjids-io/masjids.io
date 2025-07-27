import Image from 'next/image'
export default function FeatureTwo() {
    return (
        <>
            <section className="layout-pt-lg layout-pb-md">
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-xl-6 col-lg-7">
                            <div className="sectionHeading ">
                                <h2 className="sectionHeading__title wow animate__animated animate__fadeInUp">Awesome Features</h2>
                                <p className="sectionHeading__text mt-20 wow animate__animated animate__fadeInUp">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row x-gap-60 y-gap-48 pt-60 sm:pt-40">
                        <div className="col-lg-4 col-sm-6 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                            <div className="d-flex sm:direction-column">
                                <div className="d-flex justify-center items-center flex-grow size-icon-100 rounded-full bg-red-light mr-30 sm:mr-0">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-2/features/sketch.svg" alt="icon" />
                                </div>
                                <div className="sm:mt-20">
                                    <h4 className="text-xl fw-600 lh-1">Awesome design</h4>
                                    <p className="mt-12">
                                        Duis aute irure dolor reprehen derit in volu velit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                            <div className="d-flex sm:direction-column">
                                <div className="d-flex justify-center items-center flex-grow size-icon-100 rounded-full bg-green-light mr-30 sm:mr-0">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-2/features/color-palette.svg" alt="icon" />
                                </div>
                                <div className="sm:mt-20">
                                    <h4 className="text-xl fw-600 lh-1">Easy Customize</h4>
                                    <p className="mt-12">
                                        Duis aute irure dolor reprehen derit in volu velit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 wow animate__animated animate__fadeInUp" data-wow-delay=".6s">
                            <div className="d-flex sm:direction-column">
                                <div className="d-flex justify-center items-center flex-grow size-icon-100 rounded-full bg-yellow-light mr-30 sm:mr-0">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-2/features/secure-data.svg" alt="icon" />
                                </div>
                                <div className="sm:mt-20">
                                    <h4 className="text-xl fw-600 lh-1">Extreme Security</h4>
                                    <p className="mt-12">
                                        Duis aute irure dolor reprehen derit in volu velit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}