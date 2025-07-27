import Link from 'next/link'

export default function CtaFive() {
    return (
        <>
            <section className="layout-pt-lg layout-pb-lg relative">
                <div>
                    <div className="absolute-full-center z--1 bg-image js-lazy" style={{ backgroundImage: 'url("../img/page-header/bg-image-blog.jpg")' }} />
                    <div className="absolute-full-center z-1 bg-black opac-50" />
                </div>
                <div className="container relative z-2">
                    <div className="row justify-center text-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="sectionHeading -light">
                                <h2 className="sectionHeading__title">Want to learn more about how we help clients in strategy  corporate finance?</h2>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-8">
                            <p className="text-white mt-30">Let's collaborate and make an impact with our cross-discipline approach to design and deveopment.</p>
                            <Link href="/contact/contact-4" className="button -md -orange text-white rounded-8 mt-40">Get In Touch</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
