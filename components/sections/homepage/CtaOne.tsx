import Image from 'next/image'
export default function CtaOne() {
    return (
        <>
            <section className="section-bg-color wow animate__animated animate__zoomIn">
                <div className="section-bg-color__item" />
                <div className="container">
                    <div className="row justify-between">
                        <div className="col-lg-6">
                            <div className="layout-pt-md layout-pb-md">
                                <div className="sectionHeading ">
                                    <div className="sectionHeading__subtitle">
                                        <span>Start today</span>
                                    </div>
                                    <h2 className="sectionHeading__title">Download the App</h2>
                                    <p className="sectionHeading__text mt-20">
                                        New features. New appearance. No risk and
                                        <br /> credit card required.
                                    </p>
                                </div>
                                <div className="row y-gap-10 mt-32">
                                    <div className="col-auto">
                                        <a

                                            href="#"
                                            className="button -store bg-dark-2 text-white"
                                        >
                                            <div className="button__icon">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/icons/apple.svg" alt="icon" />
                                            </div>
                                            <div className="button__content text-white">
                                                <div>Download on the</div>
                                                <div>Apple Store</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-auto">
                                        <a

                                            href="#"
                                            className="button -store bg-dark-2 text-white"
                                        >
                                            <div className="button__icon">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/icons/google.svg" alt="icon" />
                                            </div>
                                            <div className="button__content text-white">
                                                <div>Get in on</div>
                                                <div>Google Play</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto relative">
                            <div className="cta-image">
                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/cta/group-1.png" alt="cta image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}