import TestimonialSliderOne from '@/components/slider/TestimonialSliderOne'

export default function TestimonialOne() {
    return (
        <>
            <section className="layout-pt-lg layout-pb-sm">
                <div className="container">
                    <div className="row y-gap-32 justify-between">
                        <div className="col-xl-3 col-lg-4">
                            <div className="sectionHeading">
                                <div className="sectionHeading__subtitle wow animate__animated animate__fadeInUp">
                                    <span>COMMUNITY VOICES</span>
                                </div>
                                <h2 className="sectionHeading__title wow animate__animated animate__fadeInUp">Why Mosque Leaders Choose Us</h2>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div
                                className="sectionSlider overflow-hidden js-sectionSlider"
                            >
                                <TestimonialSliderOne />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}