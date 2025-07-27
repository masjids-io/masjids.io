'use client'
import Image from 'next/image'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


export default function TestimonialSliderTwo() {
    const data = [
        { img: "1" },
        { img: "2" },
        { img: "3" },
        { img: "5" },
        { img: "4" },
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
                        <div className="d-flex direction-column pl-56 py-60 pr-64 md:px-40 md:py-40 border-light rounded-16 testimonials-active__item">
                            <div className="testimonials-quote">
                                <i className="icon icon-testimonials-quote" />
                            </div>
                            <div className="d-flex items-center">
                                <div className="size-60 mr-20">
                                    <Image width="0" height="0" sizes="100vw"
                                        className="initial-img rounded-full"
                                        src={`/img/avatars/${item.img}.png`}
                                        alt="image"
                                    />
                                </div>
                                <div className="">
                                    <div className="text-lg fw-600 text-dark-1">Devon Lane</div>
                                    <div className="">Team Leader, Paypal</div>
                                </div>
                            </div>
                            <p className="text-lg lh-18 mt-40 md:mt-20">
                                The template is really nice and offers quite a large set of
                                options. It is beautiful and the coding is done quickly and
                                seamlessly. Thank you!
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

