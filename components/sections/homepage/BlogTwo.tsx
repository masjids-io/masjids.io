import Link from 'next/link'

import Image from 'next/image'
export default function BlogTwo() {
    return (
        <>
            <section className="layout-pt-sm layout-pb-sm">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-xl-6 col-lg-7 col-md-10 text-center">
                            <div className="sectionHeading ">
                                <h2 className="sectionHeading__title">Latest news</h2>
                                <p className="sectionHeading__text mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                            </div>
                        </div>
                    </div>
                    <div className="row y-gap-32 pt-60 sm:pt-40">
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <Link href="blog-single-1" className="ratio ratio-37:25">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover rounded-8" src="/img/blog/single/1.jpg" alt="image" />
                                    <div className="d-flex justify-end items-start absolute-full-center py-10 px-10">
                                        <div className="px-12 py-4 bg-white rounded-8">
                                            <p>Web Design</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className="mt-20">
                                    <a href="#" className="d-block decoration-none mb-8">November 23, 2024</a>
                                    <h3 className="text-xl lh-16 fw-600">Problems everyone has when working remotely and how to solve them</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <Link href="blog-single-1" className="ratio ratio-37:25">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover rounded-8" src="/img/blog/single/2.jpg" alt="image" />
                                    <div className="d-flex justify-end items-start absolute-full-center py-10 px-10">
                                        <div className="px-12 py-4 bg-white rounded-8">
                                            <p>Web Design</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className="mt-20">
                                    <a href="#" className="d-block decoration-none mb-8">November 23, 2024</a>
                                    <h3 className="text-xl lh-16 fw-600">The best remote UX and UI design conferences to attend in 2020</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <Link href="blog-single-1" className="ratio ratio-37:25">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover rounded-8" src="/img/blog/single/3.jpg" alt="image" />
                                    <div className="d-flex justify-end items-start absolute-full-center py-10 px-10">
                                        <div className="px-12 py-4 bg-white rounded-8">
                                            <p>Web Design</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className="mt-20">
                                    <a href="#" className="d-block decoration-none mb-8">November 23, 2024</a>
                                    <h3 className="text-xl lh-16 fw-600">How can you help your team transition to remote with this</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
