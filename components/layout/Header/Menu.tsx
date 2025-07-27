import Link from 'next/link'

export default function Menu({ navColor }: any) {

     
    return (
        <>
            <div className="menu js-menu">
                <div className="menu__container">
                    <div className="mobile__back js-nav-list-back pointer-events-none">
                        <Link href="#">Home</Link>
                    </div>

                    <ul className="nav js-navList">
                        <li className={`${navColor} menu-item-has-children`}>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li className={`${navColor} menu-item-has-children`}>
                            <Link href="/services/services-1">
                                Apps
                            </Link>
                        </li>
                        <li className={`${navColor} menu-item-has-children`}>
                            <Link href="/comingsoon">
                                Documentation
                            </Link>
                        </li>
                        <li className={`${navColor} menu-item-has-children`}>
                            <Link href="/contact/contact-2">
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mobile__footer js-mobile-footer">
                    <div className="mobile__copyright">
                        <p>© Copyright 2025. masjidsio</p>
                    </div>
                    <div className="mobile__socials">
                        <Link href="/#">
                            <i className="fa fa-facebook" aria-hidden="true" />
                        </Link>
                        <Link href="/#">
                            <i className="fa fa-twitter" aria-hidden="true" />
                        </Link>
                        <Link href="/#">
                            <i className="fa fa-instagram" aria-hidden="true" />
                        </Link>
                        <Link href="/#">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}