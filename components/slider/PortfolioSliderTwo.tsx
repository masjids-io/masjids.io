'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


import Image from 'next/image'
export default function PortfolioSliderTwo() {
    const data = [
        { img: "slider-1" },
        { img: "slider-2" },
        { img: "slider-3" },
        { img: "slider-1" },
        { img: "slider-2" },
        { img: "slider-3" },
    ]

    return (
        <>
            <div className="sectionSlider relative">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    // pagination={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    navigation={{
                        prevEl: ".js-prev",
                        nextEl: ".js-next",
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        575: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        767: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        991: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1199: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1350: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="swiper-wrapper pt-5"
                >
                    {data.map((item, i) => (
                        <SwiperSlide className="swiper-slide" key={i}>
                            <div className="ratio ratio-97:55">
                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover rounded-8" src={`/img/portfolio/single/2/${item.img}.jpg`} alt="Image" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="nav -slider -absolute-center z-5 px-30 justify-between md:justify-center md:pt-60 sm:pt-40">
                    <div data-cursor className="nav__item -left js-prev" tabIndex={0} role="button" aria-label="Previous slide">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left icon"><line x1={19} y1={12} x2={5} y2={12} /><polyline points="12 19 5 12 12 5" /></svg>
                    </div>
                    <div data-cursor className="nav__item -right ml-20 js-next" tabIndex={0} role="button" aria-label="Next slide">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right icon"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
                    </div>
                </div>
            </div>
        </>
    )
}
