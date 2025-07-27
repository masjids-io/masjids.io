interface Props {
    title?: boolean
    layoutPt?: string
    layoutPb?: string
    mt?: string
}
import Image from 'next/image'
export default function ClientOne({ title, layoutPt, layoutPb, mt }: Props) {
    return (
        <>
            <section className={`layout-pt-${layoutPt ? layoutPt : "sm"} layout-pb-${layoutPb ? layoutPb : "sm"}`}>
                <div className="container">

                    {title &&
                        <div className="row justify-center">
                            <div className="col text-center">
                                <p className="text-lg text-dark-1 wow animate__animated animate__fadeInUp">Trusted by the world’s best</p>
                            </div>
                        </div>
                    }
                    <div className={`row y-gap-32 justify-between sm:justify-start items-center mt-${mt ? mt : "64"}  wow animate__animated animate__fadeInUp`}>
                        <div className="col-lg-auto col-md-2 col-4">
                            <div className="d-flex justify-center items-center px-4">
                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/1.svg" alt="clients image" />
                            </div>
                        </div>
                        <div className="col-lg-auto col-md-2 col-4">
                            <div className="d-flex justify-center items-center px-4">
                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/2.svg" alt="clients image" />
                            </div>
                        </div>
                        <div className="col-lg-auto col-md-2 col-4">
                            <div className="d-flex justify-center items-center px-4">
                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/3.svg" alt="clients image" />
                            </div>
                        </div>
                        <div className="col-lg-auto col-md-2 col-4">
                            <div className="d-flex justify-center items-center px-4">
                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/4.svg" alt="clients image" />
                            </div>
                        </div>
                        <div className="col-lg-auto col-md-2 col-4">
                            <div className="d-flex justify-center items-center px-4">
                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/5.svg" alt="clients image" />
                            </div>
                        </div>
                        <div className="col-lg-auto col-md-2 col-4">
                            <div className="d-flex justify-center items-center px-4">
                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/6.svg" alt="clients image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}