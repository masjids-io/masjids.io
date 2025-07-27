'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"



import Image from 'next/image'
export default function ShopSliderOne() {
    const data = [
        { img: "placed.png" },
        { img: "cuebiq.png" },
        { img: "factual.png" },
    ]
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={8}
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
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 8,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper pt-5"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                        <a href="#"><Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src={`assets/imgs/page/homepage1/${item.img}`} alt="Genz" /></a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
