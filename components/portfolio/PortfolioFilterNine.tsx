'use client'
import Isotope from "isotope-layout"
import Link from "next/link"

import { useCallback, useEffect, useRef, useState } from "react"
interface IsotopeInstance {
    arrange(options: { filter: string }): void
}

import Image from 'next/image'
export default function PortfolioFilterNine() {
    // Isotope
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
            <div className="works-row masonry -col-4 pt-60 sm:pt-40 js-masonry js-masonry-no-filter">
                <div className="masonry__sizer" />
                <div className="masonry__item -no-ratio  e_commerce">
                    <div>
                        <div className="ratio ratio-48:50 hover-group">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover z-1" src="/img/portfolio/cards/1.jpg" alt="image" />
                            <div className="px-10 py-10 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="d-flex justify-center items-center w-1/1 h-1/1 relative">
                                    <div className="bg-white absolute-full-center" />
                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                    <div className="text-center relative z-2">
                                        <div className="x-gap-10 y-gap-10">
                                            <a href="#" className="decoration-none">#marketing</a>
                                            <a href="#" className="decoration-none">#design</a>
                                            <a href="#" className="decoration-none">#developer</a>
                                        </div>
                                        <h4 className="text-2xl fw-600 mt-16">Billboard</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  e_commerce digital_design">
                    <div>
                        <div className="ratio ratio-48:50 hover-group">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover z-1" src="/img/portfolio/cards/2.jpg" alt="image" />
                            <div className="px-10 py-10 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="d-flex justify-center items-center w-1/1 h-1/1 relative">
                                    <div className="bg-white absolute-full-center" />
                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                    <div className="text-center relative z-2">
                                        <div className="x-gap-10 y-gap-10">
                                            <a href="#" className="decoration-none">#marketing</a>
                                            <a href="#" className="decoration-none">#design</a>
                                            <a href="#" className="decoration-none">#developer</a>
                                        </div>
                                        <h4 className="text-2xl fw-600 mt-16">Creative Science</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  web_design digital_design branding">
                    <div>
                        <div className="ratio ratio-48:50 hover-group">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover z-1" src="/img/portfolio/cards/3.jpg" alt="image" />
                            <div className="px-10 py-10 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="d-flex justify-center items-center w-1/1 h-1/1 relative">
                                    <div className="bg-white absolute-full-center" />
                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                    <div className="text-center relative z-2">
                                        <div className="x-gap-10 y-gap-10">
                                            <a href="#" className="decoration-none">#marketing</a>
                                            <a href="#" className="decoration-none">#design</a>
                                            <a href="#" className="decoration-none">#developer</a>
                                        </div>
                                        <h4 className="text-2xl fw-600 mt-16">Air Plane</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  e_commerce branding">
                    <div>
                        <div className="ratio ratio-48:50 hover-group">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover z-1" src="/img/portfolio/cards/10.jpg" alt="image" />
                            <div className="px-10 py-10 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="d-flex justify-center items-center w-1/1 h-1/1 relative">
                                    <div className="bg-white absolute-full-center" />
                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                    <div className="text-center relative z-2">
                                        <div className="x-gap-10 y-gap-10">
                                            <a href="#" className="decoration-none">#marketing</a>
                                            <a href="#" className="decoration-none">#design</a>
                                            <a href="#" className="decoration-none">#developer</a>
                                        </div>
                                        <h4 className="text-2xl fw-600 mt-16">Lewis Baker</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  web_design digital_design branding">
                    <div>
                        <div className="ratio ratio-48:50 hover-group">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover z-1" src="/img/portfolio/cards/17.jpg" alt="image" />
                            <div className="px-10 py-10 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="d-flex justify-center items-center w-1/1 h-1/1 relative">
                                    <div className="bg-white absolute-full-center" />
                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                    <div className="text-center relative z-2">
                                        <div className="x-gap-10 y-gap-10">
                                            <a href="#" className="decoration-none">#marketing</a>
                                            <a href="#" className="decoration-none">#design</a>
                                            <a href="#" className="decoration-none">#developer</a>
                                        </div>
                                        <h4 className="text-2xl fw-600 mt-16">AG. Avent</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  web_design e_commerce branding">
                    <div>
                        <div className="ratio ratio-48:50 hover-group">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover z-1" src="/img/portfolio/cards/8.jpg" alt="image" />
                            <div className="px-10 py-10 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="d-flex justify-center items-center w-1/1 h-1/1 relative">
                                    <div className="bg-white absolute-full-center" />
                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                    <div className="text-center relative z-2">
                                        <div className="x-gap-10 y-gap-10">
                                            <a href="#" className="decoration-none">#marketing</a>
                                            <a href="#" className="decoration-none">#design</a>
                                            <a href="#" className="decoration-none">#developer</a>
                                        </div>
                                        <h4 className="text-2xl fw-600 mt-16">Fortune Art</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  e_commerce">
                    <div>
                        <div className="ratio ratio-48:50 hover-group">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover z-1" src="/img/portfolio/cards/16.jpg" alt="image" />
                            <div className="px-10 py-10 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="d-flex justify-center items-center w-1/1 h-1/1 relative">
                                    <div className="bg-white absolute-full-center" />
                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                    <div className="text-center relative z-2">
                                        <div className="x-gap-10 y-gap-10">
                                            <a href="#" className="decoration-none">#marketing</a>
                                            <a href="#" className="decoration-none">#design</a>
                                            <a href="#" className="decoration-none">#developer</a>
                                        </div>
                                        <h4 className="text-2xl fw-600 mt-16">Virtual Payment</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  e_commerce digital_design">
                    <div>
                        <div className="ratio ratio-48:50 hover-group">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover z-1" src="/img/portfolio/cards/18.jpg" alt="image" />
                            <div className="px-10 py-10 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="d-flex justify-center items-center w-1/1 h-1/1 relative">
                                    <div className="bg-white absolute-full-center" />
                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                    <div className="text-center relative z-2">
                                        <div className="x-gap-10 y-gap-10">
                                            <a href="#" className="decoration-none">#marketing</a>
                                            <a href="#" className="decoration-none">#design</a>
                                            <a href="#" className="decoration-none">#developer</a>
                                        </div>
                                        <h4 className="text-2xl fw-600 mt-16">Good Food</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  digital_design web_design branding">
                    <div>
                        <div className="ratio ratio-48:50 hover-group">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover z-1" src="/img/portfolio/cards/9.jpg" alt="image" />
                            <div className="px-10 py-10 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="d-flex justify-center items-center w-1/1 h-1/1 relative">
                                    <div className="bg-white absolute-full-center" />
                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                    <div className="text-center relative z-2">
                                        <div className="x-gap-10 y-gap-10">
                                            <a href="#" className="decoration-none">#marketing</a>
                                            <a href="#" className="decoration-none">#design</a>
                                            <a href="#" className="decoration-none">#developer</a>
                                        </div>
                                        <h4 className="text-2xl fw-600 mt-16">Enterprice Silver</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  e_commerce web_design branding">
                    <div>
                        <div className="ratio ratio-48:50 hover-group">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover z-1" src="/img/portfolio/cards/8.jpg" alt="image" />
                            <div className="px-10 py-10 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="d-flex justify-center items-center w-1/1 h-1/1 relative">
                                    <div className="bg-white absolute-full-center" />
                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                    <div className="text-center relative z-2">
                                        <div className="x-gap-10 y-gap-10">
                                            <a href="#" className="decoration-none">#marketing</a>
                                            <a href="#" className="decoration-none">#design</a>
                                            <a href="#" className="decoration-none">#developer</a>
                                        </div>
                                        <h4 className="text-2xl fw-600 mt-16">Billboard</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  web_design digital_design branding">
                    <div>
                        <div className="ratio ratio-48:50 hover-group">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover z-1" src="/img/portfolio/cards/20.jpg" alt="image" />
                            <div className="px-10 py-10 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="d-flex justify-center items-center w-1/1 h-1/1 relative">
                                    <div className="bg-white absolute-full-center" />
                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                    <div className="text-center relative z-2">
                                        <div className="x-gap-10 y-gap-10">
                                            <a href="#" className="decoration-none">#marketing</a>
                                            <a href="#" className="decoration-none">#design</a>
                                            <a href="#" className="decoration-none">#developer</a>
                                        </div>
                                        <h4 className="text-2xl fw-600 mt-16">Creative Science</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  web_design e_commerce branding">
                    <div>
                        <div className="ratio ratio-48:50 hover-group">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover z-1" src="/img/portfolio/cards/6.jpg" alt="image" />
                            <div className="px-10 py-10 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="d-flex justify-center items-center w-1/1 h-1/1 relative">
                                    <div className="bg-white absolute-full-center" />
                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                    <div className="text-center relative z-2">
                                        <div className="x-gap-10 y-gap-10">
                                            <a href="#" className="decoration-none">#marketing</a>
                                            <a href="#" className="decoration-none">#design</a>
                                            <a href="#" className="decoration-none">#developer</a>
                                        </div>
                                        <h4 className="text-2xl fw-600 mt-16">Air Plane</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}