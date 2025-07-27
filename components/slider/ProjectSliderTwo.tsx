'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import Image from 'next/image'
export default function ProjectSliderTwo() {
    const data = [
        { img: "1.jpg" },
        { img: "2.jpg" },
        { img: "3.jpg" },
        { img: "1.jpg" },
    ]
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                // pagination={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[Autoplay, Navigation, Pagination]}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                className="swiper-wrapper pt-5"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                        <div className="ratio ratio-8:5">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover" src={`/img/about-2/slider/${item.img}`} alt="image" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

