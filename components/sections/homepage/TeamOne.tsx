
import Image from 'next/image'
export default function TeamOne() {
    return (
        <>
            <section className="layout-pt-lg layout-pb-sm">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col text-center">
                            <div className="sectionHeading ">
                                <div className="sectionHeading__subtitle">
                                    <span>Meet our</span>
                                </div>
                                <h2 className="sectionHeading__title">Team</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row y-gap-32 pt-60 sm:pt-40">
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div>
                                <div className="ratio ratio-27:33 rounded-8">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover rounded-8" src="/img/team/1.jpg" alt="Image" />
                                </div>
                                <div className="mt-20">
                                    <h4 className="text-xl fw-600">Albert Flores</h4>
                                    <p className="mt-4">President of Sales</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div>
                                <div className="ratio ratio-27:33 rounded-8">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover rounded-8" src="/img/team/2.jpg" alt="Image" />
                                </div>
                                <div className="mt-20">
                                    <h4 className="text-xl fw-600">Jerome Bell</h4>
                                    <p className="mt-4">Marketing Coordinator</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div>
                                <div className="ratio ratio-27:33 rounded-8">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover rounded-8" src="/img/team/3.jpg" alt="Image" />
                                </div>
                                <div className="mt-20">
                                    <h4 className="text-xl fw-600">Darlene Robertson</h4>
                                    <p className="mt-4">Dog Trainer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div>
                                <div className="ratio ratio-27:33 rounded-8">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover rounded-8" src="/img/team/4.jpg" alt="Image" />
                                </div>
                                <div className="mt-20">
                                    <h4 className="text-xl fw-600">Theresa Webb</h4>
                                    <p className="mt-4">Theresa Webb</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
