
import Image from 'next/image'
export default function ClientTwo() {
    return (
        <>
            <section className="layout-pt-md layout-pb-lg">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col text-center">
                            <div className="sectionHeading ">
                                <div className="sectionHeading__subtitle">
                                    <span>Partners</span>
                                </div>
                                <h2 className="sectionHeading__title">We work with the best brands</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row y-gap-32 justify-between sm:justify-center pt-60">
                        <div className="col-lg-auto col-md-auto col-6">
                            <div className="d-flex justify-center items-center size-120 bg-white rounded-full shadow-card">
                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="col-7" src="/img/clients/1.svg" alt="clients image" />
                            </div>
                        </div>
                        <div className="col-lg-auto col-md-auto col-4 mt-40 md:mt-0">
                            <div className="d-flex justify-center items-center size-120 bg-white rounded-full shadow-card">
                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="col-7" src="/img/clients/2.svg" alt="clients image" />
                            </div>
                        </div>
                        <div className="col-lg-auto col-md-auto col-6">
                            <div className="d-flex justify-center items-center size-120 bg-white rounded-full shadow-card">
                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="col-7" src="/img/clients/3.svg" alt="clients image" />
                            </div>
                        </div>
                        <div className="col-lg-auto col-md-auto col-4 mt-40 md:mt-0">
                            <div className="d-flex justify-center items-center size-120 bg-white rounded-full shadow-card">
                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="col-7" src="/img/clients/4.svg" alt="clients image" />
                            </div>
                        </div>
                        <div className="col-lg-auto col-md-auto col-6">
                            <div className="d-flex justify-center items-center size-120 bg-white rounded-full shadow-card">
                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="col-7" src="/img/clients/5.svg" alt="clients image" />
                            </div>
                        </div>
                        <div className="col-lg-auto col-md-auto col-4 mt-40 md:mt-0">
                            <div className="d-flex justify-center items-center size-120 bg-white rounded-full shadow-card">
                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="col-7" src="/img/clients/6.svg" alt="clients image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
