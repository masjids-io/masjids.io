import Link from 'next/link'

import Image from 'next/image'
export default function Footer3() {
    return (
        <>
            <div className="svg-shape">
                <svg
                    width={1920}
                    height={290}
                    viewBox="0 0 1920 290"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 240L1920 0V290H0V240Z" fill="#F7F9FC" />
                </svg>
            </div>

            <footer className="footer -type-4 pt-40 bg-light-5">
                <div className="footer__top">
                    <div className="container">
                        <div className="row y-gap-48 justify-content-between">
                            <div className="col-lg-3 col-5">
                                <div className="footer__item">
                                    <div className="footer__logo text-dark-1">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/general/logo-dark.svg" alt="logo" />
                                    </div>
                                    <p className="mt-16">
                                        Carefully crafted and powerful HTML5 template, it's perfect to
                                        showcase your startup or software
                                    </p>
                                    <div className="y-gap-32 pt-30">
                                        <div className="">
                                            <div className="text-lg opac-50">Toll Free Customer Care</div>
                                            <div className="text-xl fw-600">+(1) 123 456 7890</div>
                                        </div>
                                        <div className="">
                                            <div className="text-lg opac-50">Need live support?</div>
                                            <div className="text-xl fw-600">hi@masjidsio.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-5">
                                <div className="footer__item">
                                    <h3 className="text-xl lh-1 fw-600">Links</h3>
                                    <div className="footer__content y-gap-10 mt-40">
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="/">
                                                Home
                                            </Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link
                                                className="decoration-none"

                                                href="/about/about-1"
                                            >
                                                About
                                            </Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="/faq">
                                                Pages
                                            </Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link
                                                className="decoration-none"

                                                href="/shop-list"
                                            >
                                                Shop
                                            </Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link
                                                className="decoration-none"

                                                href="/services/services-1"
                                            >
                                                Features
                                            </Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link
                                                className="decoration-none"

                                                href="/pricing"
                                            >
                                                Pricing
                                            </Link>
                                        </div>
                                        <div className="footer__content__item">
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
                            <div className="col-lg-2 col-5">
                                <div className="footer__item">
                                    <h3 className="footer__title text-xl lh-1 fw-600">Company</h3>
                                    <div className="footer__content y-gap-10 mt-40">
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="/terms">
                                                Customers
                                            </Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="/terms">
                                                Enterprise
                                            </Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="/terms">
                                                Partners
                                            </Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="/terms">
                                                Jobs
                                            </Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="/terms">
                                                Blog
                                            </Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="/terms">
                                                Newsroom
                                            </Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="/terms">
                                                Sessions
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-5">
                                <div className="footer__item">
                                    <h3 className="footer__title text-xl lh-1 fw-600">Legal</h3>
                                    <div className="footer__content y-gap-10 mt-40">
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="/#">
                                                Terms of use
                                            </Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="/#">
                                                Terms  conditions
                                            </Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="/#">
                                                Privacy policy
                                            </Link>
                                        </div>
                                        <div className="footer__content__item">
                                            <Link className="decoration-none" href="/#">
                                                Coolie policy
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-5">
                                <div className="footer__item pl-40 lg:pl-0">
                                    <h3 className="footer__title text-xl lh-1 fw-600">
                                        Download the App
                                    </h3>
                                    <div className="row y-gap-20 pt-40">
                                        <div className="col-12">
                                            <Link

                                                href="/#"
                                                className="button -store bg-dark-2 text-white"
                                            >
                                                <div className="button__icon">
                                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/icons/apple.svg" alt="" />
                                                </div>
                                                <div className="button__content text-white">
                                                    <div>Download on the</div>
                                                    <div>Apple Store</div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-12">
                                            <Link

                                                href="/#"
                                                className="button -store bg-dark-2 text-white"
                                            >
                                                <div className="button__icon">
                                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/icons/google.svg" alt="" />
                                                </div>
                                                <div className="button__content text-white">
                                                    <div>Get in on</div>
                                                    <div>Google Play</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-between items-center py-30 border-top-dark mt-80">
                            <div className="col-auto">
                                <div className="footer__bottom_text">© Copyright 2024. masjidsio - Your one-stop shop for masjid technology</div>
                            </div>
                            <div className="col-auto">
                                <div className="socials">
                                    <div>
                                        <Link href="/#">
                                            <i className="fa fa-facebook" aria-hidden="true" />
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="/#">
                                            <i className="fa fa-twitter" aria-hidden="true" />
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="/#">
                                            <i className="fa fa-instagram" aria-hidden="true" />
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="/#">
                                            <i className="fa fa-linkedin" aria-hidden="true" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}