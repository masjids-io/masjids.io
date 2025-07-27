'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"




export default function PortfolioSliderOne() {
    const data = [
        { img: "1" },
        { img: "2" },
        { img: "3" },
        { img: "4" },
        { img: "5" },
        { img: "6" },
    ]

    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                pagination={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
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
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper pt-5"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                        <div className="relative hover-group h:zoom overflow-hidden rounded-8">
                            <div className="ratio ratio-3:4 bg-image h:zoom__item rounded-8 js-lazy" style={{ backgroundImage: `url("../img/portfolio/cards/${item.img}.jpg")` }} />
                            <div className="d-flex items-end py-30 px-30 absolute-full-center opac-0 | t-base hg:opacity-100">
                                <div className="absolute-full-center bg-accent opac-80 rounded-8 z-1" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-2" />
                                <div className="relative z-3">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">Billboard</h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

