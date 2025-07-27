'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


import Image from 'next/image'
export default function TestimonialSliderFive() {
    const data = [
        { img: "placed.png" },
        { img: "cuebiq.png" },
        { img: "factual.png" },
    ]
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
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
                className="swiper-wrapper"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                        <div className="text-center">
                            <div>
                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="size-96 border-10-white rounded-full" src="/img/avatars/1.png" alt="image" />
                            </div>
                            <h4 className="text-xl fw-600 text-white mt-40">Great quality!</h4>
                            <p className="text-16 lh-17 text-white opca-80 mt-12">Nam voluptatibus quia ut sapiente aliquam sit consequatur aliquid. Aut magnam magnam in expedita voluptatem quo quasi neque et nulla perspiciatis sed consequuntur odio.</p>
                            <div className="mt-40">
                                <div className="text-lg fw-600 text-white">Devon Lane</div>
                                <div className="text-white">Team Leader, Paypal</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
