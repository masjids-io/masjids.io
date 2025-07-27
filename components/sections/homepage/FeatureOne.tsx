import FeatureTabOne from "@/components/elements/FeatureTabOne"

export default function FeatureOne() {
    return (
        <>
            <section className="layout-pt-md layout-pb-lg section-bg-color">
                <div className="section-bg-color__item -wide" />
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-auto">
                            <div className="sectionHeading ">
                                <div className="sectionHeading__subtitle">
                                    <span>A COMPLETE SOLUTION</span>
                                </div>
                                <h2 className="sectionHeading__title">Manage Your Masjid With Ease</h2>
                            </div>
                        </div>
                    </div>
                    <FeatureTabOne />
                </div>
            </section>
        </>
    )
}