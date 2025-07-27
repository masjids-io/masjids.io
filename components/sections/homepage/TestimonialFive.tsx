import TestimonialSliderFive from '@/components/slider/TestimonialSliderFive'

export default function TestimonialFive() {
    return (
        <>
            <section className="layout-pt-lg layout-pb-lg bg-accent relative">
                <div className="absolute-full-center z-1">
                    <div className="h-1/1 js-rellax">
                        <div className="bg-image js-lazy" style={{ backgroundImage: 'url("../img/home-5/images/bg.png")' }} />
                    </div>
                </div>
                <div className="container relative z-2">
                    <div className="row justify-center text-center">
                        <div className="col-auto">
                            <div className="sectionHeading -light">
                                <div className="sectionHeading__subtitle">
                                    <span>testimonials</span>
                                </div>
                                <h2 className="sectionHeading__title">What Our Clients Say</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-center pt-60 sm:pt-40">
                        <div className="col-xl-6 col-lg-7 col-md-10">
                            <div className="sectionSlider overflow-hidden js-sectionSlider" data-cursor-slider="slider" data-gap={30} data-slider-col="base-1 lg-1 md-1 sm-1" data-pagination>
                                <div className="swiper-wrapper">
                                    <TestimonialSliderFive />
                                </div>
                                <div className="pagination -slider -white mt-64 js-pagination" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
