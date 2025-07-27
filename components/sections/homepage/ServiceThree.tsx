
import Image from 'next/image'
export default function ServiceThree() {
    return (
        <>
            <section className="layout-pt-lg layout-pb-xs">
                <div className="container">
                    <div className="row x-gap-10 y-gap-20">
                        <div className="col-lg col-sm-6">
                            <div className="feature-hover text-center pt-60 pb-40 px-30 md:pt-30 md:pb-30 rounded-16 bg-white">
                                <div className="d-flex direction-column items-center">
                                    <div>
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/features/timer.svg" alt="icon" />
                                    </div>
                                    <h4 className="text-xl fw-600 mt-20">Real time activity</h4>
                                    <p className="feature-hover__content mt-20">Front template can be easily customized
                                        with its cutting-edge components and features.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6">
                            <div className="feature-hover text-center pt-60 pb-40 px-30 md:pt-30 md:pb-30 rounded-16 bg-white">
                                <div className="d-flex direction-column items-center">
                                    <div>
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/features/cloud-storage.svg" alt="icon" />
                                    </div>
                                    <h4 className="text-xl fw-600 mt-20">Instant deploy</h4>
                                    <p className="feature-hover__content mt-20">Front template can be easily customized
                                        with its cutting-edge components and features.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6">
                            <div className="feature-hover text-center pt-60 pb-40 px-30 md:pt-30 md:pb-30 rounded-16 bg-white">
                                <div className="d-flex direction-column items-center">
                                    <div>
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/features/touch.svg" alt="icon" />
                                    </div>
                                    <h4 className="text-xl fw-600 mt-20">Easy integrations</h4>
                                    <p className="feature-hover__content mt-20">Front template can be easily customized
                                        with its cutting-edge components and features.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6">
                            <div className="feature-hover text-center pt-60 pb-40 px-30 md:pt-30 md:pb-30 rounded-16 bg-white">
                                <div className="d-flex direction-column items-center">
                                    <div>
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/features/pen-tool.svg" alt="icon" />
                                    </div>
                                    <h4 className="text-xl fw-600 mt-20">Perfect UI/UX</h4>
                                    <p className="feature-hover__content mt-20">Front template can be easily customized
                                        with its cutting-edge components and features.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6">
                            <div className="feature-hover text-center pt-60 pb-40 px-30 md:pt-30 md:pb-30 rounded-16 bg-white">
                                <div className="d-flex direction-column items-center">
                                    <div>
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/features/phone-chat.svg" alt="icon" />
                                    </div>
                                    <h4 className="text-xl fw-600 mt-20">Friendly support</h4>
                                    <p className="feature-hover__content mt-20">Front template can be easily customized
                                        with its cutting-edge components and features.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
