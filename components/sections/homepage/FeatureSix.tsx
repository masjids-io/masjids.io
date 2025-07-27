
import Image from 'next/image'
export default function FeatureSix() {
    return (
        <>
            <section className="layout-pt-sm layout-pb-sm">
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div className="sectionHeading ">
                                <h2 className="sectionHeading__title">Social Media Is The Buzzword Among Start-Up Firms.</h2>
                            </div>
                            <p className="px-80 lg:px-0 mt-20">New social networking sites are proving to be easy money churners.</p>
                        </div>
                    </div>
                    <div className="row justify-center pt-60 md:pt-48">
                        <div className="col-xl-8 col-lg-10">
                            <div className="atropos -no-shadow js-atropos">
                                <div className="atropos-scale">
                                    <div className="atropos-rotate">
                                        <div className="atropos-inner overflow-visible d-flex justify-end">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-7/images/1.png" alt="image" className="initial-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
