import Link from "next/link"

export default function CtaThree() {
    return (
        <>
            <section className="layout-pt-sm layout-pb-lg">
                <div className="container">
                    <div className="row y-gap-24 justify-between items-center">
                        <div className="col-md-6">
                            <div className="sectionHeading ">
                                <h2 className="sectionHeading__title">
                                    One tool for your entire team. Get started now!
                                </h2>
                            </div>
                        </div>
                        <div className="col-auto">
                            <Link href="/services/services-1" className="button -md text-white -dark">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}