import TestimonialSliderSeven from '@/components/slider/TestimonialSliderSeven'

export default function TestimonialSeven() {
    return (
        <>
            <section className="layout-pt-lg layout-pb-lg section-bg-color">
                <div className="section-bg-color__item -wide bg-light-6" />
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-xl-7 col-lg-8 col-md-10">
                            <div className="sectionHeading ">
                                <h2 className="sectionHeading__title">Trusted from our clients</h2>
                                <p className="sectionHeading__text mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                            </div>
                        </div>
                    </div>
                    <div className="sectionSlider overflow-hidden pt-60 sm:pt-40 js-sectionSlider" data-cursor-slider="slider" data-gap={30} data-slider-col="base-3 lg-3 md-2 sm-1">
                        <div className="swiper-wrapper">
                            <TestimonialSliderSeven />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
