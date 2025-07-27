import Image from 'next/image'
import Link from 'next/link'

export default function Home2_Section3() {
    return (
        <>
            <section className="layout-pt-md layout-pb-md">
                <div data-anim-wrap="" className="container">
                    <div className="row y-gap-48 items-center justify-between">
                        <div className="col-xl-6 col-lg-6">
                            <div className="shapes-2 relative">
                                <div
                                    className="js-rellax22"
                                >
                                    <Image width="0" height="0" sizes="100vw"
                                        className="shapes-2-img-1 initial-img wow animate__animated animate__zoomIn"
                                        src="/img/home-2/images/1.png"
                                        alt="image"
                                    />
                                </div>
                                <div
                                    className="js-rellax22"
                                >
                                    <Image width="0" height="0" sizes="100vw"
                                        className="shapes-2-img-2 shadow-card z-2 wow animate__animated animate__zoomIn"
                                        src="/img/home-2/images/2.png"
                                        alt="image"
                                        data-wow-delay=".4s"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className=" wow animate__animated animate__fadeInUp">
                                <div className="sectionHeading wow animate__animated animate__fadeInUp">
                                    <h2 className="sectionHeading__title">We are 100% involved</h2>
                                </div>
                            </div>
                            <div className=" wow animate__animated animate__fadeInUp">
                                <p className="text-lg mt-20 pr-100 lg:pr-0 wow animate__animated animate__fadeInUp">
                                    The template is really nice and offers quite a large set of options.
                                    It is beautiful and the coding is done quickly and seamlessly.
                                    Thank you!
                                </p>
                            </div>
                            <div className=" wow animate__animated animate__fadeInUp">
                                <Link
                                    href="/about/about-1"
                                    className="button -md -blue-light rounded-8 text-blue-dark mt-30 wow animate__animated animate__fadeInUp"
                                >
                                    Discover More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}