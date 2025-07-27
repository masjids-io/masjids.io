'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


export default function TestimonialSliderSeven() {
    const data = [
        { img: "placed.png" },
        { img: "cuebiq.png" },
        { img: "factual.png" },
    ]

    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={3}
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
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
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
                        <div className="size-80">
                            <div className="bg-image rounded-full js-lazy" style={{ backgroundImage: 'url("../img/avatars/1.png")' }} />
                        </div>
                        <h4 className="text-xl fw-600 mt-30">Design Quality</h4>
                        <p className="mt-20">The template is really nice and offers quite a large set of options. It is beautiful and the coding is done quickly and seamlessly. Thank you!</p>
                        <div className="mt-30">
                            <h5 className="text-lg fw-600">Gabriel Nolan</h5>
                            <p className="mt-4">Team Leader, Paypal</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
