'use client'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'
export default function ScreenshotsSlider() {
    return (
        <>
            <Swiper
                spaceBetween={150}
                slidesPerView={3}
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                    el: '.js-pagination'
                }}
            >
                <SwiperSlide>
                    <div className="phone-slider-image">
                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/appScreens/iPhone-1.jpg" alt="phone image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="phone-slider-image">
                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/appScreens/iPhone-2.jpg" alt="phone image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="phone-slider-image">
                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/appScreens/iPhone-3.jpg" alt="phone image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="phone-slider-image">
                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/appScreens/iPhone-1.jpg" alt="phone image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="phone-slider-image">
                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/appScreens/iPhone-2.jpg" alt="phone image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="phone-slider-image">
                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/appScreens/iPhone-3.jpg" alt="phone image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="phone-slider-image">
                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/appScreens/iPhone-1.jpg" alt="phone image" />
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className="pagination -slider -white mt-48 js-pagination"></div>
        </>
    )
}