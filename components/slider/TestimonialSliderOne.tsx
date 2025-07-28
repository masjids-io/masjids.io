'use client'
import React from 'react'

import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'



export default function TestimonialSliderOne() {

    return (
        <>
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={50}
                slidesPerView={2}
                navigation={{
                    prevEl: ".js-prev",
                    nextEl: ".js-next",
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                }}
            >
                <SwiperSlide className="swiper-slide">
                    <div className="testimonials -small">
                        <h4 className="testimonials__title text-xl fw-600 text-dark-1">
                            A Game-Changer for Management
                        </h4>
                        <p className="testimonials__text mt-20">
                            "Managing announcements, prayer times, and donations used to be a fragmented process. Masjids.io brought everything into one simple dashboard, saving our team countless hours every week."
                        </p>
                        <div className="testimonials__author mt-24">
                            <div className="testimonials__name text-lg fw-600 text-dark-1">
                                Abdullah Rahman
                            </div>
                            <div className="testimonials__position">
                                President, Al-Ikhlas Mosque
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="testimonials -small">
                        <h4 className="testimonials__title text-xl fw-600 text-dark-1">
                            Our Community Feels More Connected
                        </h4>
                        <p className="testimonials__text mt-20">
                            "The mobile app has been fantastic. Getting instant notifications for events and prayer times keeps everyone in the loop. It feels like our community is more united and engaged than ever before."
                        </p>
                        <div className="testimonials__author mt-24">
                            <div className="testimonials__name text-lg fw-600 text-dark-1">
                                Fatima Yusuf
                            </div>
                            <div className="testimonials__position">
                                Youth Coordinator, An-Noor Islamic Center
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="testimonials -small">
                        <h4 className="testimonials__title text-xl fw-600 text-dark-1">
                            An Essential Tool for Every Masjid
                        </h4>
                        <p className="testimonials__text mt-20">
                            "From live streaming lectures to managing services, this platform is indispensable. It's a comprehensive tool that truly understands the needs of a modern masjid. Highly recommended."
                        </p>
                        <div className="testimonials__author mt-24">
                            <div className="testimonials__name text-lg fw-600 text-dark-1">
                                Imam Khalid Ibrahim
                            </div>
                            <div className="testimonials__position">
                                Resident Scholar, Dar Al-Hikmah
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="nav -slider justify-end md:justify-start mt-60 md:mt-32">
                <div className="nav__item -left js-prev">
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
                <div className="nav__item -right ml-20 js-next">
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
        </>


    )
}