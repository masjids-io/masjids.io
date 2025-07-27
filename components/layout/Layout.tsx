'use client'
import { useEffect, useState } from 'react'

import Footer1 from './Footer/Footer1'


import Header1 from './Header/Header1'
import Header11 from './Header/Header11'

interface LayoutProps {
    headerLayout?: Number
    footerLayout?: Number
    children?: React.ReactNode
    bgColor?: string
    navColor?: string
    logo?: string
    verticalLine?: boolean
}

export default function Layout({ headerLayout, footerLayout, children, bgColor, navColor, logo, verticalLine }: LayoutProps) {
    const [scroll, setScroll] = useState<boolean>(false)
    const [navToggled, setNavToggled] = useState<boolean>(false)
    const navHandle = () => setNavToggled(!navToggled)
    useEffect(() => {
        const WOW: any = require('wowjs');
        (window as any).wow = new WOW.WOW({
            live: false
        });

        // Initialize WOW.js
        (window as any).wow.init()
        
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <div className="barba-container">
                <main className='main-content'>
                    {!headerLayout && < Header1 navColor={navColor} scroll={scroll} logo={logo} navToggled={navToggled} navHandle={navHandle} />}
                    {headerLayout == 1 ? < Header1 navColor={navColor} scroll={scroll} logo={logo} navToggled={navToggled} navHandle={navHandle} /> : null}
                    {headerLayout == 11 ? < Header11 navColor={navColor} scroll={scroll} logo={logo} navToggled={navToggled} navHandle={navHandle} /> : null}

                    {verticalLine &&
                        <div className="lines -vertical-lines">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    }
                    <div className="content-wrapper  js-content-wrapper">
                        {children}
                    </div>

                    {footerLayout == 1 ? < Footer1 /> : null}
                </main>
            </div>
        </>
    )
}