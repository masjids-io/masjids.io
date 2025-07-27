import Image from 'next/image'
import Link from 'next/link'
import * as Icon from 'react-feather'
export default function Footer9() {
    return (
        <>
            <footer className="footer -type-4 layout-pb-lg bg-dark-11">
                <div className="container">
                    <div className="row justify-between y-gap-48">
                        <div className="col-lg-7 col-md-6 order-lg-1 order-2">
                            <form action="POST">
                                <div className="form-group d-flex">
                                    <input className="py-24 px-24 w-1/1 rounded-8 bg-light-4" placeholder="Your Email" type="email" />
                                    <button className="button py-24 px-24 -orange text-white rounded-8 ml-20" type="submit">
                                        <Icon.ArrowRight className="icon size-20" />
                                    </button>
                                </div>
                            </form>
                            <div className="row y-gap-48 pt-48 justify-between">
                                <div className="col-lg-4 col-sm-6">
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
                                <div className="col-lg-4 col-sm-6">
                                    <div className="footer__item">
                                        <h3 className="footer__title text-white text-xl lh-1 fw-600">Legal</h3>
                                        <div className="footer__content y-gap-10 mt-40">
                                            <div className="footer__content__item">
                                                <Link className="decoration-none text-white" href="terms">Terms of use</Link>
                                            </div>
                                            <div className="footer__content__item">
                                                <Link className="decoration-none text-white" href="terms">Terms  conditions</Link>
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
                                <div className="col-lg-4 col-sm-6">
                                    <div className="footer__item">
                                        <h3 className="footer__title text-white text-xl lh-1 fw-600">Social</h3>
                                        <div className="footer__content y-gap-10 mt-40">
                                            <div className="footer__content__item">
                                                <Link className="decoration-none text-white" href="#">Linkedin</Link>
                                            </div>
                                            <div className="footer__content__item">
                                                <Link className="decoration-none text-white" href="#">Twitter</Link>
                                            </div>
                                            <div className="footer__content__item">
                                                <Link className="decoration-none text-white" href="#">Facebook</Link>
                                            </div>
                                            <div className="footer__content__item">
                                                <Link className="decoration-none text-white" href="#">Instagram</Link>
                                            </div>
                                            <div className="footer__content__item">
                                                <Link className="decoration-none text-white" href="#">Pinterest</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 order-lg-2 order-1">
                            <div>
                                <div className="footer__logo text-white">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/general/logo-flat.svg" alt="logo" />
                                </div>
                                <p className="text-white mt-20">
                                    Praesent sollicitudin felis a ornare volutpat. Nullam malesuada sem sit amet
                                    semper tristique. Donec nec neque lectus.
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
                    </div>
                    <div className="row mt-60">
                        <div className="col-auto">
                            <div className="text-white">© Copyright 2024. masjidsio - Your one-stop shop for masjid technology</div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}