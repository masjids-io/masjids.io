import Link from 'next/link'

export default function Footer8() {
    return (
        <>
            <footer className="footer -type-1">
                <div className="container">
                    <div className="row y-gap-16 justify-between items-center sm:justify-center sm:text-center">
                        <div className="col-md-auto">
                            <div className="footer__left text-white">
                                <Link href="/about/about-1">Privacy  Cookie Policy</Link> | <Link href="/about/about-1">Terms of
                                    Service</Link>
                            </div>
                        </div>
                        <div className="footer__center">
                            <span className="footer__copyright text-white">
                                © Copyright 2024. masjidsio - Your one-stop shop for masjid technology
                            </span>
                        </div>
                        <div className="col-md-auto">
                            <div className="footer__right">
                                <div className="footer__socials socials sm:justify-center">
                                    <Link href="/about/about-1" className="socials__item text-white">
                                        <i className="fa fa-facebook" aria-hidden="true" />
                                    </Link>
                                    <Link href="/about/about-1" className="socials__item text-white">
                                        <i className="fa fa-twitter" aria-hidden="true" />
                                    </Link>
                                    <Link href="/about/about-1" className="socials__item text-white">
                                        <i className="fa fa-instagram" aria-hidden="true" />
                                    </Link>
                                    <Link href="/about/about-1" className="socials__item text-white">
                                        <i className="fa fa-linkedin" aria-hidden="true" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}