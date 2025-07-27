import Link from 'next/link'

export default function CtaFour() {
    return (
        <>
            <section className="layout-pt-sm layout-pb-sm section-bg-color">
                <div className="section-bg-color__item -wide bg-blue-dark" />
                <div className="container">
                    <div className="row y-gap-24 justify-between items-center">
                        <div className="col-md-6">
                            <h3 className="text-30 text-white lh-14">Contact us today if you would like to know more about what our SEO services</h3>
                        </div>
                        <div className="col-md-auto">
                            <Link href="/contact/contact-1" className="button -md -white text-dark-1">Get Started</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
