import Link from 'next/link'

import Image from 'next/image'
import VideoPopup from '@/components/elements/VideoPopup'
export default function HeroEight() {
    return (
        <>
            <section className="masthead -type-8">
                <div className="masthead__bg">
                    <div className="js-rellax">
                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-9/header/bg.png" alt="image" />
                        <div id="js-particles-1" data-particles-image="./img/part/3/1.png" data-particles-image-width={120} data-particles-image-size={30} className="absolute-full-center z-3" />
                        <div id="js-particles-2" data-particles-image="./img/part/3/2.png" data-particles-image-width={120} className="absolute-full-center z-3" />
                        <div id="js-particles-3" data-particles-image="./img/part/3/3.png" data-particles-image-size={30} className="absolute-full-center z-3" />
                    </div>
                </div>
                <div className="container">
                    <div className="row items-center y-gap-64">
                        <div className="col-xl-7 col-lg-9 col-md-10">
                            <div className="masthead__content relative z-2">
                                <h1 className="masthead__title">
                                    Complete <span className="text-orange-3">SEO</span> <br className="sm:d-none" />tools for business
                                </h1>
                                <p className="masthead__text pt-24">
                                    Passionate about solving problems through creative<br className="sm:d-none" /> and digital products.
                                </p>
                                <div className="masthead__buttons row y-gap-20 x-gap-24 items-center pt-40 sm:pt-24">
                                    <div className="col-auto">
                                        <Link href="/contact/contact-1" className="button -md -orange-3 rounded-8 text-white">Get In Touch</Link>
                                    </div>
                                    <div className="col-auto">
                                        <p>Hotline: <span className="text-orange-3">(733) 860-2906</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="masthead__image">
                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-9/header/image.png" alt="image" />
                                <VideoPopup style={1}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
