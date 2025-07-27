'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import * as Icon from 'react-feather'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from "react"
interface IsotopeInstance {
    arrange(options: { filter: string }): void
}
export default function PortfolioFilterSeven() {
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
            <div className="works-row masonry -col-4 -gap-32 pt-60 sm:pt-40 js-masonry js-masonry-no-filter">
                <div className="masonry__sizer" />
                <div className="masonry__item -no-ratio  e_commerce">
                    <div className="h:zoom">
                        <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/1.jpg" alt="image" />
                            <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="absolute-center">
                                    <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                        <Icon.ArrowRight className="icon ml-5 text-white" />
                                    </div>
                                </div>
                                <div className="relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">Billboard</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  e_commerce digital_design">
                    <div className="h:zoom">
                        <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/2.jpg" alt="image" />
                            <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="absolute-center">
                                    <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                        <Icon.ArrowRight className="icon ml-5 text-white" />
                                    </div>
                                </div>
                                <div className="relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">Creative Science</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  web_design digital_design branding">
                    <div className="h:zoom">
                        <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/3.jpg" alt="image" />
                            <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="absolute-center">
                                    <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                        <Icon.ArrowRight className="icon ml-5 text-white" />
                                    </div>
                                </div>
                                <div className="relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">Air Plane</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  e_commerce branding">
                    <div className="h:zoom">
                        <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/10.jpg" alt="image" />
                            <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="absolute-center">
                                    <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                        <Icon.ArrowRight className="icon ml-5 text-white" />
                                    </div>
                                </div>
                                <div className="relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">Lewis Baker</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  web_design digital_design branding">
                    <div className="h:zoom">
                        <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/18.jpg" alt="image" />
                            <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="absolute-center">
                                    <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                        <Icon.ArrowRight className="icon ml-5 text-white" />
                                    </div>
                                </div>
                                <div className="relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">AG. Avent</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  web_design e_commerce branding">
                    <div className="h:zoom">
                        <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/7.jpg" alt="image" />
                            <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="absolute-center">
                                    <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                        <Icon.ArrowRight className="icon ml-5 text-white" />
                                    </div>
                                </div>
                                <div className="relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">Fortune Art</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  e_commerce">
                    <div className="h:zoom">
                        <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/16.jpg" alt="image" />
                            <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="absolute-center">
                                    <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                        <Icon.ArrowRight className="icon ml-5 text-white" />
                                    </div>
                                </div>
                                <div className="relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">Virtual Payment</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  e_commerce digital_design">
                    <div className="h:zoom">
                        <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/17.jpg" alt="image" />
                            <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="absolute-center">
                                    <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                        <Icon.ArrowRight className="icon ml-5 text-white" />
                                    </div>
                                </div>
                                <div className="relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">Good Food</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  digital_design web_design branding">
                    <div className="h:zoom">
                        <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/20.jpg" alt="image" />
                            <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="absolute-center">
                                    <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                        <Icon.ArrowRight className="icon ml-5 text-white" />
                                    </div>
                                </div>
                                <div className="relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">Enterprice Silver</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  e_commerce web_design branding">
                    <div className="h:zoom">
                        <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/8.jpg" alt="image" />
                            <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="absolute-center">
                                    <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                        <Icon.ArrowRight className="icon ml-5 text-white" />
                                    </div>
                                </div>
                                <div className="relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">Billboard</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  web_design digital_design branding">
                    <div className="h:zoom">
                        <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/5.jpg" alt="image" />
                            <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="absolute-center">
                                    <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                        <Icon.ArrowRight className="icon ml-5 text-white" />
                                    </div>
                                </div>
                                <div className="relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">Creative Science</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  web_design e_commerce branding">
                    <div className="h:zoom">
                        <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/9.jpg" alt="image" />
                            <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="absolute-center">
                                    <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                        <Icon.ArrowRight className="icon ml-5 text-white" />
                                    </div>
                                </div>
                                <div className="relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-white">#marketing</a>
                                        <a href="#" className="decoration-none text-white">#design</a>
                                        <a href="#" className="decoration-none text-white">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 text-white mt-16">Air Plane</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}