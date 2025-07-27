import Link from 'next/link'

import Image from 'next/image'
export default function Footer4() {
    return (
        <>
            <footer className="footer -type-4  relative">
                <div className="absolute-full-center z-1">
                    <div className="bg-image bg-pos-unset js-lazy" style={{ backgroundImage: 'url("../img/footer-7/bg.png")' }} />
                </div>
                <div className="container layout-pb-lg relative z-2">
                    <div className="row items-center">
                        <div className="col-lg-6">
                            <div className="sectionHeading">
                                <h2 className="sectionHeading__title">Stay in the know</h2>
                                <p className="sectionHeading__text mt-20">Get special offers on the latest developments
                                    from Front.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="masthead__form mt-30">
                                <div className="form-newsletter">
                                    <form action="post">
                                        <div className="form-group">
                                            <input className="shadow-card" type="email" placeholder="Enter Your Email Address" />
                                            <button className="button -md -accent rounded-8 text-white" type="submit">Get Started</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__top relative z-2">
                    <div className="container">
                        <div className="row y-gap-48 justify-content-between">
                            <div className="col-lg-4 col-5">
                                <div className="footer__item">
                                    <div className="footer__logo text-dark-1">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/general/logo-dark.svg" alt="logo" />
                                    </div>
                                    <p className="mt-16">
                                        Carefully crafted and powerful HTML5 template, it's perfect to showcase your
                                        startup or software
                                    </p>
                                    <div className="y-gap-32 pt-30">
                                        <div>
                                            <div className="text-lg opac-50">Toll Free Customer Care</div>
                                            <div className="text-xl fw-600">+(1) 123 456 7890</div>
                                        </div>
                                        <div>
                                            <div className="text-lg opac-50">Need live support?</div>
                                            <div className="text-xl fw-600">hi@masjidsio.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 offset-lg-1 col-5">
                                <div className="footer__item">
                                    <h3 className="text-xl lh-1 fw-600">Links</h3>
                                    <div className="footer__content y-gap-10 mt-40">
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="/">Home</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="/about/about-1">About</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="faq">Pages</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="shop-list">Shop</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="/services/services-1">Features</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="pricing">Pricing</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="/contact/contact-1">Contact</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-5">
                                <div className="footer__item">
                                    <h3 className="footer__title text-xl lh-1 fw-600">Company</h3>
                                    <div className="footer__content y-gap-10 mt-40">
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="terms">Customers</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="terms">Enterprise</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="terms">Partners</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="terms">Jobs</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="terms">Blog</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="terms">Newsroom</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="terms">Sessions</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-5">
                                <div className="footer__item">
                                    <h3 className="footer__title text-xl lh-1 fw-600">Legal</h3>
                                    <div className="footer__content y-gap-10 mt-40">
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="#">Terms of use</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="#">Terms
                                                conditions</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="#">Privacy policy</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="#">Coolie policy</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-center items-center text-center py-30 mt-80">
                            <div className="col-auto">
                                <div className="socials justify-center">
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
                                <div className="footer__bottom_text mt-20">© Copyright 2024. masjidsio - Your one-stop shop for masjid technology</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}