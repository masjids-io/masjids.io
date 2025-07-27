import TestimonialSliderFour from '@/components/slider/TestimonialSliderFour'

import Image from 'next/image'
export default function TestimonialFour() {
    return (
        <>
            <section className="layout-pt-lg layout-pb-sm relative">
                <div className="shape -center-bottom -right-0 md:d-none js-rellax">
                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-4/shapes/1.png" alt="shape" />
                </div>
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-auto">
                            <div className="sectionHeading ">
                                <div className="sectionHeading__subtitle">
                                    <span>EXPLORE NEW PLACES</span>
                                </div>
                                <h2 className="sectionHeading__title">What our customers say</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row y-gap-40 items-center">
                        <div className="col-xl-5 col-lg-6">
                            <Image width="0" height="0" sizes="100vw" className="initial-img" src="/img/home-4/images/5.png" alt="image" />
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="pl-48 lg:pl-0">
                                <div className="sectionSlider overflow-hidden js-sectionSlider" data-cursor-slider="slider" data-gap={30} data-slider-col="base-1 lg-1 md-1 sm-1">
                                    <div className="swiper-wrapper">
                                        <TestimonialSliderFour />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
