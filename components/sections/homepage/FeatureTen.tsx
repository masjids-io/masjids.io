
import Image from 'next/image'
export default function FeatureTen() {
    return (
        <>
            <section className="layout-pt-sm layout-pb-lg">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-auto text-center">
                            <div className="sectionHeading ">
                                <h2 className="sectionHeading__title">Powerful Features</h2>
                                <p className="sectionHeading__text mt-20">Start building fast, beautiful and modern looking websites in no time using our theme.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row y-gap-64 x-gap-100 pt-60 sm:pt-40">
                        <div className="col-lg-4 col-sm-6">
                            <div className="text-center">
                                <div className="size-icon-50 mx-auto">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-3/icons/1.svg" alt="icon" />
                                </div>
                                <h4 className="text-xl fw-600 lh-15 mt-20">Flexible planning</h4>
                                <p className="mt-10">Great free UI package based on Bootstrap 4 that includes the most important components and features.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="text-center">
                                <div className="size-icon-50 mx-auto">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-3/icons/2.svg" alt="icon" />
                                </div>
                                <h4 className="text-xl fw-600 lh-15 mt-20">Actionable results</h4>
                                <p className="mt-10">Great free UI package based on Bootstrap 4 that includes the most important components and features.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="text-center">
                                <div className="size-icon-50 mx-auto">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-3/icons/3.svg" alt="icon" />
                                </div>
                                <h4 className="text-xl fw-600 lh-15 mt-20">Tons of variables</h4>
                                <p className="mt-10">Great free UI package based on Bootstrap 4 that includes the most important components and features.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="text-center">
                                <div className="size-icon-50 mx-auto">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-3/icons/4.svg" alt="icon" />
                                </div>
                                <h4 className="text-xl fw-600 lh-15 mt-20">Extended color palette</h4>
                                <p className="mt-10">Great free UI package based on Bootstrap 4 that includes the most important components and features.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="text-center">
                                <div className="size-icon-50 mx-auto">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-3/icons/5.svg" alt="icon" />
                                </div>
                                <h4 className="text-xl fw-600 lh-15 mt-20">Integrated plugins</h4>
                                <p className="mt-10">Great free UI package based on Bootstrap 4 that includes the most important components and features.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="text-center">
                                <div className="size-icon-50 mx-auto">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-3/icons/6.svg" alt="icon" />
                                </div>
                                <h4 className="text-xl fw-600 lh-15 mt-20">Friendly support</h4>
                                <p className="mt-10">Great free UI package based on Bootstrap 4 that includes the most important components and features.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
