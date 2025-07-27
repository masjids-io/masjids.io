'use client'
import * as Icon from 'react-feather'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function ProjectSliderOne() {
    const data = [
        {
            title: "Mobile Data",
            img: "1.jpg"
        },
        {
            title: "Financial Advisory",
            img: "2.jpg"
        },
        {
            title: "Business Contracts",
            img: "3.jpg"
        },
        {
            title: "Integration Dynamic",
            img: "4.jpg"
        },
        {
            title: "Mobile Data",
            img: "1.jpg"
        },
        {
            title: "Financial Advisory",
            img: "2.jpg"
        },
        {
            title: "Business Contracts",
            img: "3.jpg"
        },
        {
            title: "Integration Dynamic",
            img: "4.jpg"
        },
    ]

    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                pagination={{
                    type: "progressbar",
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[Autoplay, Pagination, Navigation]}
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
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper z-1"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                        <div className="atropos -no-shadow js-atropos">
                            <div className="atropos-scale">
                                <div className="atropos-rotate">
                                    <div className="atropos-inner">
                                        <div className="relative w-1/1">
                                            <div>
                                                <div className="ratio ratio-3:4 bg-image rounded-8 js-lazy" style={{ backgroundImage: `url(../img/blog/single-2/${item.img})` }} />

                                                <div className="absolute-full-center gradient-content rounded-8" />
                                            </div>
                                            <div className="absolute-full-center d-flex items-end py-30 px-30 pr-48">
                                                <div data-atropos-offset={6}>
                                                    <h4 className="text-xl fw-600 text-white">{item.title}</h4>
                                                    <p className="text-white mt-8">Achieve virtually any design and layout from within the one template.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="nav -slider -absolute-center z-5 px-30 justify-between md:justify-center md:pt-60 sm:pt-40">
                <div className="nav__item -left js-prev">
                    <Icon.ArrowLeft className="icon" />
                </div>
                <div className="nav__item -right ml-20 js-next">
                    <Icon.ArrowRight className="icon" />
                </div>
            </div>
            <div className="scrollbar -slider mt-60 md:mt-40 js-scrollbar" />
        </>
    )
}
