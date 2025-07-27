import Link from 'next/link'

import Image from 'next/image'
export default function Footer7() {
    return (
        <>
            <footer className="footer -type-4 relative">
                <div className="absolute-full-center px-30 pb-30 sm:px-0 sm:pb-0 z-1">
                    <div className="w-1/1 h-1/1 bg-purple-3 rounded-tl-120" />
                </div>
                <div className="container layout-pb-lg relative z-2">
                    <div className="row justify-center items-center text-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="sectionHeading -light">
                                <h2 className="sectionHeading__title">Stay in the know</h2>
                            </div>
                            <p className="text-white mt-20">Get special offers on the latest developments from Front.
                            </p>
                            <div className="form-newsletter mx-auto mt-32">
                                <form action="post">
                                    <div className="form-group">
                                        <input className="shadow-card rounded-200" type="email" placeholder="Enter Your Email Address" />
                                        <button className="button -md -orange sm:px-20 rounded-200 text-white" type="submit">Get Started</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__top relative z-2">
                    <div className="container">
                        <div className="row y-gap-48 justify-content-between">
                            <div className="col-lg-4 col-5">
                                <div className="footer__item">
                                    <div className="footer__logo text-white">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/general/logo-flat.svg" alt="logo" />
                                    </div>
                                    <p className="text-white mt-16">
                                        Carefully crafted and powerful HTML5 template, it's perfect to showcase your
                                        startup or software
                                    </p>
                                    <div className="y-gap-32 pt-30">
                                        <div>
                                            <div className="text-white text-lg opac-50">Toll Free Customer Care</div>
                                            <div className="text-white text-xl fw-600">+(1) 123 456 7890</div>
                                        </div>
                                        <div>
                                            <div className="text-white text-lg opac-50">Need live support?</div>
                                            <div className="text-white text-xl fw-600">hi@masjidsio.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 offset-lg-1 col-5">
                                <div className="footer__item">
                                    <h3 className="text-white text-xl lh-1 fw-600">Links</h3>
                                    <div className="footer__content y-gap-10 mt-40">
                                        <div className="footer__content__item">
                                            <Link className="decoration-none text-white" href="/">Home</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none text-white" href="/about/about-1">About</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none text-white" href="faq">Pages</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none text-white" href="shop-list">Shop</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none text-white" href="/services/services-1">Features</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none text-white" href="pricing">Pricing</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none text-white" href="/contact/contact-1">Contact</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-5">
                                <div className="footer__item">
                                    <h3 className="footer__title text-white text-xl lh-1 fw-600">Company</h3>
                                    <div className="footer__content y-gap-10 mt-40">
                                        <div className="footer__content__item">
                                            <Link className="decoration-none text-white" href="terms">Customers</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none text-white" href="terms">Enterprise</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none text-white" href="terms">Partners</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none text-white" href="terms">Jobs</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none text-white" href="terms">Blog</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none text-white" href="terms">Newsroom</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none text-white" href="terms">Sessions</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-5">
                                <div className="footer__item">
                                    <h3 className="footer__title text-white text-xl lh-1 fw-600">Legal</h3>
                                    <div className="footer__content y-gap-10 mt-40">
                                        <div className="footer__content__item">
                                            <Link className="decoration-none text-white" href="terms">Terms
                                                of use</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none text-white" href="terms">Terms
                                                conditions</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none text-white" href="terms">Privacy policy</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none text-white" href="terms">Coolie policy</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-center items-center text-center pt-20 pb-80 sm:pb-30 mt-80">
                            <div className="col-auto">
                                <div className="socials justify-center text-white">
                                    <div>
                                        <a href="#">
                                            <i className="fa fa-facebook" aria-hidden="true" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#">
                                            <i className="fa fa-twitter" aria-hidden="true" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#">
                                            <i className="fa fa-instagram" aria-hidden="true" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#">
                                            <i className="fa fa-linkedin" aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                                <div className="text-white mt-20">© Copyright 2024. masjidsio - Your one-stop shop for masjid technology</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}