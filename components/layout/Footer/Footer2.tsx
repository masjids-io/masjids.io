import Link from 'next/link'

import Image from 'next/image'
export default function Footer2() {
    return (
        <>
            <footer className="footer -type-2 relative z-1">
                <div className="footer__bg absolute-full-center z--1">
                    <div className="bg-image js-lazy" style={{ backgroundImage: 'url("../img/home-2/footer/bg.png")' }} />
                </div>
                <div className="footer__top">
                    <div className="container">
                        <div className="row y-gap-48 justify-content-between">
                            <div className="col-lg-4 col-sm-6">
                                <div className="footer__item">
                                    <div className="footer__logo  text-white">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/general/logo-flat.svg" alt="logo" />
                                    </div>
                                    <div className="y-gap-32 pt-30">
                                        <div className="">
                                            <div className="text-lg text-white opac-50">
                                                Toll Free Customer Care
                                            </div>
                                            <div className="text-xl fw-600 text-white">
                                                +(1) 123 456 7890
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="text-lg text-white opac-50">
                                                Need live support?
                                            </div>
                                            <div className="text-xl fw-600 text-white">hi@masjidsio.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <div className="footer__item">
                                    <h3 className="text-xl lh-1 fw-600 text-white">Links</h3>
                                    <div className="footer__content y-gap-10 mt-40">
                                        <div className="footer__content__item text-white">
                                            <Link className="decoration-none" href="/">
                                                Home
                                            </Link>
                                        </div>
                                        <div className="footer__content__item text-white">
                                            <Link
                                                className="decoration-none"

                                                href="/about/about-1"
                                            >
                                                About
                                            </Link>
                                        </div>
                                        <div className="footer__content__item text-white">
                                            <Link className="decoration-none" href="/faq">
                                                Pages
                                            </Link>
                                        </div>
                                        <div className="footer__content__item text-white">
                                            <Link
                                                className="decoration-none"

                                                href="/shop-list"
                                            >
                                                Shop
                                            </Link>
                                        </div>
                                        <div className="footer__content__item text-white">
                                            <Link
                                                className="decoration-none"

                                                href="/services/services-1"
                                            >
                                                Features
                                            </Link>
                                        </div>
                                        <div className="footer__content__item text-white">
                                            <Link
                                                className="decoration-none"

                                                href="/pricing"
                                            >
                                                Pricing
                                            </Link>
                                        </div>
                                        <div className="footer__content__item text-white">
                                            <Link
                                                className="decoration-none"

                                                href="/contact/contact-1"
                                            >
                                                Contact
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer__item">
                                    <h3 className="footer__title text-xl lh-1 fw-600 text-white">
                                        Legal
                                    </h3>
                                    <div className="footer__content y-gap-10 mt-40">
                                        <div className="footer__content__item text-white">
                                            <Link className="decoration-none" href="/terms">
                                                Terms of use
                                            </Link>
                                        </div>
                                        <div className="footer__content__item text-white">
                                            <Link className="decoration-none" href="/terms">
                                                Terms  conditions
                                            </Link>
                                        </div>
                                        <div className="footer__content__item text-white">
                                            <Link className="decoration-none" href="/terms">
                                                Privacy policy
                                            </Link>
                                        </div>
                                        <div className="footer__content__item text-white">
                                            <Link className="decoration-none" href="/terms">
                                                Coolie policy
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="y-gap-48">
                                    <div className="footer__socials">
                                        <h3 className="text-xl lh-1 fw-600 text-white">Follow Us</h3>
                                        <div className="socials mt-40">
                                            <div>
                                                <Link href="/#" className="text-white">
                                                    <i className="fa fa-facebook" aria-hidden="true" />
                                                </Link>
                                            </div>
                                            <div>
                                                <Link href="/#" className="text-white">
                                                    <i className="fa fa-twitter" aria-hidden="true" />
                                                </Link>
                                            </div>
                                            <div>
                                                <Link href="/#" className="text-white">
                                                    <i className="fa fa-instagram" aria-hidden="true" />
                                                </Link>
                                            </div>
                                            <div>
                                                <Link href="/#" className="text-white">
                                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="footer__title text-xl lh-1 fw-600 text-white">
                                            Subscribe
                                        </h3>
                                        <div className="footer__content mt-24">
                                            <div className="footer__newsletter form-newsletter -simple">
                                                <form action="POST">
                                                    <div className="form-group">
                                                        <input placeholder="Your Email" type="email" />
                                                        <button
                                                            className="button -green rounded-8 ml-10"
                                                            type="submit"
                                                        >
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
                                                                className="feather feather-arrow-right icon text-white size-20"
                                                            >
                                                                <line x1={5} y1={12} x2={19} y2={12} />
                                                                <polyline points="12 5 19 12 12 19" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-center py-30 border-top-light mt-120 md:mt-60">
                            <div className="col-auto">
                                <div className="footer__bottom_text text-white">
                                    © Copyright 2024. masjidsio - Your one-stop shop for masjid technology
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}