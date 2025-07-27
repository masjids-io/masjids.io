import Link from 'next/link'

import Image from 'next/image'
export default function FeatureSeven() {
    return (
        <>
            <section className="layout-pt-md layout-pb-sm">
                <div className="container">
                    <div className="row y-gap-40 justify-between items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="d-flex justify-center items-center relative">
                                <div className="absolute-full-center z-1">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/home-7/images/rect.png" alt="image" />
                                </div>
                                <div className="relative z-2 float-animation">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="max-w-100" src="/img/home-7/images/2.png" alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="sectionHeading ">
                                <h2 className="sectionHeading__title">An Impact Via Social Networking Platforms.</h2>
                            </div>
                            <p className="mt-20">Grursus mal suada faci lisis Lorem ipsum dolarorit ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum dolocons is suada a and fadolorit to the consectetur elit.</p>
                            <Link href="/about/about-1" className="button -md -purple text-white mt-32">Learn More</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
