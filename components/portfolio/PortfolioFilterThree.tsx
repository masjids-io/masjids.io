'use client'
import Isotope from "isotope-layout"
import Link from "next/link"

import { useCallback, useEffect, useRef, useState } from "react"
interface IsotopeInstance {
    arrange(options: { filter: string }): void
}
export default function PortfolioFilterTwo() {
    const isotope = useRef<IsotopeInstance | null>(null) // Define the type for isotope ref
    const [filterKey, setFilterKey] = useState<string>("*")

    useEffect(() => {
        setTimeout(() => {
            if (isotope.current === null) {
                isotope.current = new Isotope(".works-row", {
                    itemSelector: ".masonry__item",
                    // layoutMode: "fitRows",
                    percentPosition: true,
                    masonry: {
                        columnWidth: ".masonry__item",
                    }
                })
            }
        }, 1000)
    }, [])

    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])

    const handleFilterKeyChange = useCallback((key: string) => () => {
        setFilterKey(key)
    }, [])

    const activeBtn = (value: string) => (value === filterKey ? "active" : "")
    return (
        <>

            <div className="row justify-center">
                <div className="col-auto">
                    <div className="filter-button-group">
                        <button className={`button text-base mr-20 ${activeBtn("*")}`} onClick={handleFilterKeyChange("*")} data-filter="*">All
                            Projects</button>
                        <button className={`button text-base mr-20`} onClick={handleFilterKeyChange("e_commerce")} data-filter=".e_commerce">E-Commerce</button>
                        <button className={`button text-base mr-20`} onClick={handleFilterKeyChange("digital_design")} data-filter=".digital_design">Digital
                            Design</button>
                        <button className={`button text-base mr-20`} onClick={handleFilterKeyChange("web_design")} data-filter=".branding">Branding</button>
                        <button className={`button text-base mr-20`} onClick={handleFilterKeyChange("branding")} data-filter=".web_design">Web
                            Design</button>
                    </div>
                </div>
            </div>
            <div className="works-row masonry -col-3 -gap-32 pt-60 md:pt-40 js-masonry js-masonry-no-filter">
                <div className="masonry__sizer" />
                <div className="masonry__item -no-ratio  e_commerce">
                    <div data-cursor="" data-cursor-label-light="view" className="h:zoom">
                        <div className="relative rounded-8 overflow-hidden">
                            <div
                                className="ratio ratio-37:40 bg-image h:zoom__item rounded-8 js-lazy"
                                style={{ backgroundImage: 'url("../img/portfolio/cards/1.jpg")' }}
                            />
                            <Link
                                href="/portfolio/portfolio-single-1"
                                className="absolute-full-center z-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  e_commerce digital_design">
                    <div data-cursor="" data-cursor-label-light="view" className="h:zoom">
                        <div className="relative rounded-8 overflow-hidden">
                            <div
                                className="ratio ratio-37:40 bg-image h:zoom__item rounded-8 js-lazy"
                                style={{ backgroundImage: 'url("../img/portfolio/cards/2.jpg")' }}
                            />
                            <Link
                                href="/portfolio/portfolio-single-1"
                                className="absolute-full-center z-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  web_design digital_design branding">
                    <div data-cursor="" data-cursor-label-light="view" className="h:zoom">
                        <div className="relative rounded-8 overflow-hidden">
                            <div
                                className="ratio ratio-37:40 bg-image h:zoom__item rounded-8 js-lazy"
                                style={{ backgroundImage: 'url("../img/portfolio/cards/3.jpg")' }}
                            />
                            <Link
                                href="/portfolio/portfolio-single-1"
                                className="absolute-full-center z-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  e_commerce branding">
                    <div data-cursor="" data-cursor-label-light="view" className="h:zoom">
                        <div className="relative rounded-8 overflow-hidden">
                            <div
                                className="ratio ratio-37:40 bg-image h:zoom__item rounded-8 js-lazy"
                                style={{ backgroundImage: 'url("../img/portfolio/cards/10.jpg")' }}
                            />
                            <Link
                                href="/portfolio/portfolio-single-1"
                                className="absolute-full-center z-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  web_design digital_design branding">
                    <div data-cursor="" data-cursor-label-light="view" className="h:zoom">
                        <div className="relative rounded-8 overflow-hidden">
                            <div
                                className="ratio ratio-37:40 bg-image h:zoom__item rounded-8 js-lazy"
                                style={{ backgroundImage: 'url("../img/portfolio/cards/11.jpg")' }}
                            />
                            <Link
                                href="/portfolio/portfolio-single-1"
                                className="absolute-full-center z-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  web_design e_commerce branding">
                    <div data-cursor="" data-cursor-label-light="view" className="h:zoom">
                        <div className="relative rounded-8 overflow-hidden">
                            <div
                                className="ratio ratio-37:40 bg-image h:zoom__item rounded-8 js-lazy"
                                style={{ backgroundImage: 'url("../img/portfolio/cards/14.jpg")' }}
                            />
                            <Link
                                href="/portfolio/portfolio-single-1"
                                className="absolute-full-center z-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  e_commerce">
                    <div data-cursor="" data-cursor-label-light="view" className="h:zoom">
                        <div className="relative rounded-8 overflow-hidden">
                            <div
                                className="ratio ratio-37:40 bg-image h:zoom__item rounded-8 js-lazy"
                                style={{ backgroundImage: 'url("../img/portfolio/cards/12.jpg")' }}
                            />
                            <Link
                                href="/portfolio/portfolio-single-1"
                                className="absolute-full-center z-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  e_commerce digital_design">
                    <div data-cursor="" data-cursor-label-light="view" className="h:zoom">
                        <div className="relative rounded-8 overflow-hidden">
                            <div
                                className="ratio ratio-37:40 bg-image h:zoom__item rounded-8 js-lazy"
                                style={{ backgroundImage: 'url("../img/portfolio/cards/13.jpg")' }}
                            />
                            <Link
                                href="/portfolio/portfolio-single-1"
                                className="absolute-full-center z-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  digital_design web_design branding">
                    <div data-cursor="" data-cursor-label-light="view" className="h:zoom">
                        <div className="relative rounded-8 overflow-hidden">
                            <div
                                className="ratio ratio-37:40 bg-image h:zoom__item rounded-8 js-lazy"
                                style={{ backgroundImage: 'url("../img/portfolio/cards/15.jpg")' }}
                            />
                            <Link
                                href="/portfolio/portfolio-single-1"
                                className="absolute-full-center z-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}