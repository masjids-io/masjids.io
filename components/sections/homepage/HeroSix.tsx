import Link from 'next/link'

import Image from 'next/image'
export default function HeroSix() {
    return (
        <>
            <section className="masthead -type-6">
                <div className="masthead__bg">
                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-6/header/bg.png" alt="image" />
                    <div id="js-particles-1" data-particles-image-number={1} data-particles-image="./img/part/2/1.png" className="absolute-full-center" />
                    <div id="js-particles-2" data-particles-image-number={1} data-particles-image="./img/part/2/2.png" data-particles-image-width={150} className="absolute-full-center" />
                    <div id="js-particles-3" data-particles-image-number={1} data-particles-image="./img/part/2/3.png" className="absolute-full-center" />
                    <div id="js-particles-4" data-particles-image-number={1} data-particles-image="./img/part/2/4.png" className="absolute-full-center" />
                    <div id="js-particles-5" data-particles-image-number={1} data-particles-image="./img/part/2/5.png" data-particles-image-width={150} className="absolute-full-center" />
                    <div id="js-particles-6" data-particles-image-number={1} data-particles-image="./img/part/2/6.png" className="absolute-full-center" />
                    <div id="js-particles-7" data-particles-image-number={1} data-particles-image="./img/part/2/7.png" className="absolute-full-center" />
                    <div id="js-particles-8" data-particles-image-number={1} data-particles-image="./img/part/2/8.png" className="absolute-full-center" />
                    <div id="js-particles-9" data-particles-image-number={1} data-particles-image="./img/part/2/9.png" className="absolute-full-center" />
                    <div id="js-particles-10" data-particles-image-number={1} data-particles-image="./img/part/2/10.png" className="absolute-full-center" />
                    <div id="js-particles-11" data-particles-image-number={1} data-particles-image="./img/part/2/11.png" data-particles-image-width={150} className="absolute-full-center" />
                </div>
                <div className="container">
                    <div className="row items-center y-gap-64 md:justify-center">
                        <div className="col-xl-7 col-lg-9 col-md-10">
                            <div className="masthead__content md:text-center relative js-rellax z-2">
                                <h1 className="masthead__title">
                                    Complete <span className="text-red-2">SEO</span> <br className="md:d-none" />tools for business
                                </h1>
                                <p className="masthead__text pt-24">
                                    Passionate about solving problems through creative<br className="sm:d-none" /> and digital products.
                                </p>
                                <div className="masthead__buttons row y-gap-20 x-gap-24 md:justify-center items-center pt-40 sm:pt-24">
                                    <div className="col-auto">
                                        <Link href="/contact/contact-1" className="button -md -red-2 text-white">Get In Touch</Link>
                                    </div>
                                    <div className="col-auto">
                                        <p>Hotline: <span className="text-red-2">(733) 860-2906</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-auto">
                            <div className="masthead__image relative z-1">
                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-6/header/image.svg" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
