import Link from 'next/link'

import Image from 'next/image'
export default function CreativeVisionOne() {
    return (
        <>
            <section className="layout-pt-sm layout-pb-sm">
                <div className="container">
                    <div className="row y-gap-48 justify-between items-center">
                        <div className="col-xl-5 col-lg-5 col-md-10">
                            <div className="pr-48 lg:pr-0">
                                <div className="sectionHeading ">
                                    <div className="sectionHeading__subtitle">
                                        <span>Creative Vision</span>
                                    </div>
                                    <h2 className="sectionHeading__title">We develop  create digital future.</h2>
                                    <p className="sectionHeading__text mt-20">Praesent sollicitudin felis a ornare volutpat. Nullam malesuada sem sit amet semper tristique. Donec nec neque lectus. Nunc mattis, lectus eu lacinia pre tium, nisl nisi interdum tortor.</p>
                                </div>
                                <Link href="/about/about-1" className="button -md rounded-8 -light-accent text-accent mt-40">About Us</Link>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <div className="image-group -type-1">
                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-1/about/pattern.png" alt="image" />
                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-1/about/back.png" alt="image" />
                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-1/about/front.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
