import TestimonialSliderTwo from '@/components/slider/TestimonialSliderTwo'

export default function TestimonialTwo() {
    return (
        <>
            <section className="layout-pt-md layout-pb-lg">
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-xl-6 col-lg-7">
                            <div className="sectionHeading ">
                                <h2 className="sectionHeading__title wow animate__animated animate__fadeInUp">User Review  Feedback</h2>
                                <p className="sectionHeading__text mt-20 wow animate__animated animate__fadeInUp">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-lg">
                    <div className="row pt-60 sm:pt-40">
                        <div
                            className="sectionSlider testimonials-active overflow-hidden sm:overflow-visible js-sectionSlider"
                            data-cursor-slider="slider"
                        >
                            <TestimonialSliderTwo />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}