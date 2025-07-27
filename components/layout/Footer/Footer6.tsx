import Link from 'next/link'
import * as Icon from 'react-feather'

import Image from 'next/image'
export default function Footer6() {
    return (
        <>
            <footer className="footer -type-3">
                <div className="footer__top">
                    <div className="container">
                        <div className="row y-gap-48 justify-content-between">
                            <div className="col-lg-4 col-sm-6">
                                <div className="footer__item">
                                    <div className="footer__logo ">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/general/logo-dark.svg" alt="logo" />
                                    </div>
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
                            <div className="col-lg-2 col-sm-6">
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
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer__item">
                                    <h3 className="footer__title text-xl lh-1 fw-600">Legal</h3>
                                    <div className="footer__content y-gap-10 mt-40">
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="terms">Terms of use</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="terms">Terms
                                                conditions</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="terms">Privacy
                                                policy</Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="terms">Coolie
                                                policy</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="y-gap-48">
                                    <div className="footer__socials">
                                        <h3 className="text-xl lh-1 fw-600">Follow Us</h3>
                                        <div className="socials mt-40">
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
                                    </div>
                                    <div>
                                        <h3 className="footer__title text-xl lh-1 fw-600">Subscribe</h3>
                                        <div className="footer__content mt-24">
                                            <div className="footer__newsletter form-newsletter -simple">
                                                <form action="POST">
                                                    <div className="form-group">
                                                        <input className="rounded-200 bg-light-4" placeholder="Your Email" type="email" />
                                                        <button className="button -red-2 text-white ml-10" type="submit">
                                                            <Icon.ArrowRight className="icon size-20" />
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-center py-30 mt-40">
                            <div className="col-auto">
                                <div className="footer__bottom_text">© Copyright 2024. masjidsio - Your one-stop shop for masjid technology</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
