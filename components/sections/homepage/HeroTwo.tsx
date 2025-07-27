import Image from 'next/image'

export default function HeroTwo() {
    return (
        <>
            <section className="masthead -type-2 relative">
                <div className="masthead__bg">
                    <Image width="0" height="0" sizes="100vw"
                        className="initial-img object-fit-cover"
                        src="/img/home-2/masthead/bg.png"
                        alt="bg"
                    />
                </div>
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-12">
                            <div className="masthead__content text-center">
                                <h1
                                    className="masthead__title text-white wow animate__animated animate__fadeInUp"
                                >
                                    Let your imagination run wild
                                </h1>
                                <p
                                    className="masthead__text text-white mt-20 wow animate__animated animate__fadeInUp"
                                >
                                    Build responsive, mobile-first projects on the web with the world's
                                    most popular
                                    <br className="md:d-none" /> front-end component library.
                                </p>
                                <div
                                    className="masthead__form mt-30"
                                >
                                    <div className="form-newsletter mx-auto wow animate__animated animate__fadeInUp">
                                        <form action="post">
                                            <div className="form-group">
                                                <input type="email" placeholder="Enter Your Email Address" />
                                                <button
                                                    className="button -md -green rounded-8 text-white"
                                                    type="submit"
                                                >
                                                    Get Started
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div
                                    className="masthead__image relative mt-48"
                                >
                                    <div className="atropos -no-shadow js-atropos">
                                        <div className="atropos-scale">
                                            <div className="atropos-rotate">
                                                <div className="atropos-inner overflow-visible d-flex justify-center items-center">
                                                    <Image width="0" height="0" sizes="100vw"
                                                        className="initial-img relative z-1"
                                                        src="/img/home-2/masthead/shapes.png"
                                                        alt="Image"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-10 col-12 absolute-center z-2">
                                        <Image width="0" height="0" sizes="100vw"
                                            style={{ width: "auto", height: "auto" }}
                                            className="max-w-100 wow animate__animated animate__zoomIn"
                                            src="/img/home-2/masthead/image.png"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}