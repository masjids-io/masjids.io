import Link from 'next/link'
import * as Icon from 'react-feather'
import Logo from './Logo'
import Menu from './Menu'
import MenuMobile from './MenuMobile'

export default function Header4({ navColor, logo, scroll, navToggled, navHandle }: any) {
    return (
        <>
            <header className={`header -container js-header ${scroll ? "is-sticky" : ""}`}>
                <div className="header__bar js-header-bar">
                    <div className="container">
                        <div className="row justify-between items-center">
                            <div className="col-2">
                                <Logo logo={logo} />
                            </div>
                            <div className="col-auto">
                                <div className="header__right d-flex items-center">
                                    <div className="">
                                        <Menu navColor={navColor} />
                                        <MenuMobile navToggled={navToggled} />
                                    </div>
                                    <div className="md:d-none ml-30">
                                        <Link href="/login" className="button -sm -green text-white">Sign in</Link>
                                    </div>
                                    <div className="header__menu justify-center items-center relative d-none md:d-flex" onClick={navHandle}>
                                        <button type="button" className={`d-flex items-center justify-center js-nav-open ${navToggled ? "pointer-events-none opac-0" : "opac-1"}`} onClick={navHandle}>
                                            <Icon.Menu className="text-black size-32 str-width-1" />
                                        </button>
                                        <button type="button"
                                            className={`d-flex items-center justify-center absolute-y-center right-0  js-nav-close ${navToggled ? "pointer-events-none opac-1" : "opac-0"}`}>
                                            Close
                                            <Icon.X className="text-black size-32 str-width-1 ml-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}