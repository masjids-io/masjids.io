import Link from 'next/link'

import VideoPopup from '@/components/elements/VideoPopup'
import Image from 'next/image'
export default function HeroNine() {
    return (
        <>
            <section className="masthead -type-9">
                <div className="masthead__bg relative">
                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-10/header/bg.png" alt="image" />
                    <div id="js-particles-1" data-particles-image-number={5} data-particles-image-size={8} data-particles-image="./img/part/4/1.png" className="absolute-full-center z-3" />
                    <div id="js-particles-2" data-particles-image-number={5} data-particles-image-size={8} data-particles-image="./img/part/4/2.png" className="absolute-full-center z-3" />
                    <div id="js-particles-3" data-particles-image-number={5} data-particles-image-size={8} data-particles-image="./img/part/4/3.png" className="absolute-full-center z-3" />
                </div>
                <div className="container">
                    <div className="row items-center justify-between y-gap-20 md:justify-center">
                        <div className="col-xl-6 col-lg-6 col-md-10">
                            <div className="masthead__content md:text-center relative z-2">
                                <h1 className="masthead__title">
                                    A better way<br className="sm:d-none" /> to manage money.
                                </h1>
                                <p className="masthead__text pt-24">
                                    Besides its beautiful design. DashCore is an incredibly rich<br className="sm:d-none" /> core framework for you to showcase your App.
                                </p>
                                <div className="masthead__buttons row y-gap-20 x-gap-24 md:justify-center items-center pt-40 sm:pt-24">
                                    <div className="col-auto">
                                        <Link href="/contact/contact-2" className="button -md -dark-8 text-white">Get In Touch</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="wow animate__animated animate__fadeIn">
                                <div className="masthead__image relative z-1">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-10/header/image.png" alt="image" />
                                    <VideoPopup style={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
