import TestimonialSliderThree from "@/components/slider/TestimonialSliderThree"
import TestimonialSliderThree2 from '@/components/slider/TestimonialSliderThree2'
import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})

export default function TestimonialThree() {
    return (
        <>
            <section className="layout-pt-md layout-pb-lg bg-dark-9">
                <div className="container">
                    <div className="row justify-center relative layout-pb-sm">
                        <div className="col-xl-8 col-lg-9 col-md-11">
                            <div
                                className="sectionSlider overflow-hidden js-sectionSlider"
                                data-cursor-slider="slider"
                                data-gap={30}
                                data-slider-col="base-1 lg-1 md-1 sm-1"
                            >
                                <div className="swiper-wrapper">
                                    <TestimonialSliderThree2 />
                                </div>
                                <div className="nav -slider -absolute-center justify-between md:justify-center md:pt-60 sm:pt-40">
                                    <div
                                        data-cursor=""
                                        className="button -outline-white d-flex justify-center items-center text-white size-60 -left js-prev"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-arrow-left icon"
                                        >
                                            <line x1={19} y1={12} x2={5} y2={12} />
                                            <polyline points="12 19 5 12 12 5" />
                                        </svg>

                                    </div>
                                    <div
                                        data-cursor=""
                                        className="button -outline-white d-flex justify-center items-center text-white size-60 -right ml-20 js-next"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-arrow-right icon"
                                        >
                                            <line x1={5} y1={12} x2={19} y2={12} />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-center">
                        <div className="col-xl-10 col-lg-11">
                            <div className="row y-gap-48 justify-center layout-pt-sm layout-pb-sm">
                                <div className="col-lg-3 col-6">
                                    <div className="d-flex justify-center">
                                        <div
                                            className="numCounter -small direction-row"
                                            data-counter={773}
                                        >
                                            <div className="numCounter__line mt-24 mr-20" />
                                            <div className="">
                                                <div className="numCounter__number text-3xl text-white fw-700 js-counter-num">
                                                    <CounterUp count={773} time={1} />
                                                </div>
                                                <h5 className="numCounter__title text-white opac-50 text-lg">
                                                    Components
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="d-flex justify-center">
                                        <div
                                            className="numCounter -small direction-row"
                                            data-counter={1254}
                                        >
                                            <div className="numCounter__line mt-24 mr-20" />
                                            <div className="">
                                                <div className="numCounter__number text-3xl text-white fw-700 js-counter-num">
                                                    <CounterUp count={1254} time={1} />
                                                </div>
                                                <h5 className="numCounter__title text-white opac-50 text-lg">
                                                    Downloads
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="d-flex justify-center">
                                        <div
                                            className="numCounter -small direction-row"
                                            data-counter={14941}
                                        >
                                            <div className="numCounter__line mt-24 mr-20" />
                                            <div className="">
                                                <div className="numCounter__number text-3xl text-white fw-700 js-counter-num">
                                                    <CounterUp count={14941} time={1} />
                                                </div>
                                                <h5 className="numCounter__title text-white opac-50 text-lg">
                                                    Followers
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="d-flex justify-center">
                                        <div
                                            className="numCounter -small direction-row"
                                            data-counter={1254}
                                        >
                                            <div className="numCounter__line mt-24 mr-20" />
                                            <div className="">
                                                <div className="numCounter__number text-3xl text-white fw-700 js-counter-num">
                                                    <CounterUp count={1254} time={1} />
                                                </div>
                                                <h5 className="numCounter__title text-white opac-50 text-lg">
                                                    New users
                                                </h5>
                                            </div>
                                        </div>
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