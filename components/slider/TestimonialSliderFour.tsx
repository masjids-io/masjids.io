'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function TestimonialSliderFour() {
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
                className="swiper-wrapper pt-5"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                        <div className="testimonials -small">
                            <h4 className="text-xl fw-600">Great quality!</h4>
                            <p className="text-xl lh-18 mt-20">Nam voluptatibus quia ut sapiente aliquam sit consequatur aliquid. Aut magnam magnam in expedita voluptatem quo quasi neque et nulla perspiciatis sed consequuntur odio.</p>
                            <div className="mt-30">
                                <h5 className="text-lg fw-600">Gabriel Nolan</h5>
                                <p className="mt-4">Consultant</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
