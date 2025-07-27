'use client'
import Link from 'next/link'
import { useState } from "react"
import * as Icon from 'react-feather'

interface NavToggledMobileSubmenu {
    status?: boolean
    key?: number
}

interface MenuMobileProps {
    navToggled: boolean
}

export default function MenuMobile({ navToggled }: MenuMobileProps) {
    const [navToggledMobileSubmenu, setNavToggledMobileSubmenu] = useState<NavToggledMobileSubmenu>({
        status: false,
        key: 0
    })

    const navHandleMobile = (key: number) => {
        if (navToggledMobileSubmenu.key === key) {
            setNavToggledMobileSubmenu({
                status: false,
                key
            })
        } else {
            setNavToggledMobileSubmenu({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className={`menu d-none js-menu ${navToggled ? "is-active mobile-menu-open" : ""}`}>
                <div className="menu__container">
                    <div className="mobile__back js-nav-list-back pointer-events-none" style={navToggled ? { opacity: 0, transform: 'translate(0px, -16px)' } : {}}>
                        <Link href="/">Home</Link>
                    </div>

                    <ul className={`nav js-navList ${navToggled ? "is-active is-list-displayed" : ""}`}>
                        <li className={`menu-item-has-children ${navToggledMobileSubmenu.key == 1 ? 'submenu-open' : ''}`}>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li className={`menu-item-has-children ${navToggledMobileSubmenu.key == 2 ? 'submenu-open' : ''}`}>
                            <Link href="/services/services-1">
                                Apps
                            </Link>
                        </li>

                        <li className={`menu-item-has-children ${navToggledMobileSubmenu.key == 3 ? 'submenu-open' : ''}`}>
                            <Link href="/comingsoon">
                                Documentation
                            </Link>
                        </li>

                        <li className={`menu-item-has-children ${navToggledMobileSubmenu.key == 3 ? 'submenu-open' : ''}`}>
                            <Link href="/contact/contact-2">
                                Contact us
                            </Link>
                        </li>
                    </ul>

                    <div className="mobile-menu__buttons px-24 pt-48">
                        <Link href="/register" className="button -sm -outline-white d-block text-center mb-16">
                            Sign up
                        </Link>
                        <Link href="/login" className="button -sm -dark d-block text-center text-white">
                            Log in
                        </Link>
                    </div>
                </div>
                <div className="mobile__footer js-mobile-footer">
                    <div className="mobile__copyright">
                        <p>© Copyright 2024. masjidsio </p>
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