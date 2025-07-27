'use client'
import Isotope from "isotope-layout"
import Image from 'next/image'
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import * as Icon from 'react-feather'
interface IsotopeInstance {
    arrange(options: { filter: string }): void
}
export default function PortfolioFilterHoverEffect() {
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
            <div className="works-row masonry -col-3 -gap-32 js-masonry js-masonry-no-filter">
                <div className="masonry__sizer" />
                <div className="masonry__item -no-ratio">
                    <div className="h:zoom">
                        <div className="relative hover-group overflow-hidden rounded-8">
                            <div className="ratio ratio-37:40 h:zoom__item bg-image rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/1.jpg")' }} />
                            <div className="text-white absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-2 opac-60 rounded-8 absolute-full-center z-1" />
                                <div className="d-flex justify-center items-center text-xl fw-600 absolute-full-center z-2">
                                    view project
                                    <Icon.ArrowRight className="icon ml-12" />
                                </div>
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-3" />
                            </div>
                        </div>
                        <div className="mt-20">
                            <div className="x-gap-10 y-gap-10">
                                <a href="#" className="decoration-none text-sm">#marketing</a>
                                <a href="#" className="decoration-none text-sm">#design</a>
                                <a href="#" className="decoration-none text-sm">#developer</a>
                            </div>
                            <h4 className="text-2xl fw-600 mt-16">Billboard</h4>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio">
                    <div className="h:zoom">
                        <div className="relative hover-group overflow-hidden rounded-8">
                            <div className="ratio ratio-37:40 h:zoom__item bg-image rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/2.jpg")' }} />
                            <div className="text-white absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-2 opac-60 rounded-8 absolute-full-center z-1" />
                                <div className="d-flex justify-center items-center text-xl fw-600 absolute-full-center z-2">
                                    view project
                                    <Icon.ArrowRight className="icon ml-12" />
                                </div>
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-3" />
                            </div>
                        </div>
                        <div className="mt-20">
                            <div className="x-gap-10 y-gap-10">
                                <a href="#" className="decoration-none text-sm">#marketing</a>
                                <a href="#" className="decoration-none text-sm">#design</a>
                                <a href="#" className="decoration-none text-sm">#developer</a>
                            </div>
                            <h4 className="text-2xl fw-600 mt-16">Creative Science</h4>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio">
                    <div className="h:zoom">
                        <div className="relative hover-group overflow-hidden rounded-8">
                            <div className="ratio ratio-37:40 h:zoom__item bg-image rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/3.jpg")' }} />
                            <div className="text-white absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-2 opac-60 rounded-8 absolute-full-center z-1" />
                                <div className="d-flex justify-center items-center text-xl fw-600 absolute-full-center z-2">
                                    view project
                                    <Icon.ArrowRight className="icon ml-12" />
                                </div>
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-3" />
                            </div>
                        </div>
                        <div className="mt-20">
                            <div className="x-gap-10 y-gap-10">
                                <a href="#" className="decoration-none text-sm">#marketing</a>
                                <a href="#" className="decoration-none text-sm">#design</a>
                                <a href="#" className="decoration-none text-sm">#developer</a>
                            </div>
                            <h4 className="text-2xl fw-600 mt-16">Air Plane</h4>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio">
                    <div data-cursor-label="view" className="h:zoom">
                        <div className="relative hover-group overflow-hidden rounded-8">
                            <div className="ratio ratio-37:40 h:zoom__item bg-image rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/1.jpg")' }} />
                            <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-2" />
                        </div>
                        <div className="mt-20">
                            <div className="x-gap-10 y-gap-10">
                                <a href="#" className="decoration-none text-sm">#marketing</a>
                                <a href="#" className="decoration-none text-sm">#design</a>
                                <a href="#" className="decoration-none text-sm">#developer</a>
                            </div>
                            <h4 className="text-2xl fw-600 mt-16">Billboard</h4>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio">
                    <div data-cursor-label="view" className="h:zoom">
                        <div className="relative hover-group overflow-hidden rounded-8">
                            <div className="ratio ratio-37:40 h:zoom__item bg-image rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/2.jpg")' }} />
                            <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-2" />
                        </div>
                        <div className="mt-20">
                            <div className="x-gap-10 y-gap-10">
                                <a href="#" className="decoration-none text-sm">#marketing</a>
                                <a href="#" className="decoration-none text-sm">#design</a>
                                <a href="#" className="decoration-none text-sm">#developer</a>
                            </div>
                            <h4 className="text-2xl fw-600 mt-16">Creative Science</h4>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio">
                    <div data-cursor-label="view" className="h:zoom">
                        <div className="relative hover-group overflow-hidden rounded-8">
                            <div className="ratio ratio-37:40 h:zoom__item bg-image rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/3.jpg")' }} />
                            <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-2" />
                        </div>
                        <div className="mt-20">
                            <div className="x-gap-10 y-gap-10">
                                <a href="#" className="decoration-none text-sm">#marketing</a>
                                <a href="#" className="decoration-none text-sm">#design</a>
                                <a href="#" className="decoration-none text-sm">#developer</a>
                            </div>
                            <h4 className="text-2xl fw-600 mt-16">Air Plane</h4>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio">
                    <div data-cursor-label-light="view" className="h:zoom">
                        <div className="relative hover-group overflow-hidden rounded-8">
                            <div className="ratio ratio-37:40 h:zoom__item bg-image rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/1.jpg")' }} />
                            <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-2" />
                        </div>
                        <div className="mt-20">
                            <div className="x-gap-10 y-gap-10">
                                <a href="#" className="decoration-none text-sm">#marketing</a>
                                <a href="#" className="decoration-none text-sm">#design</a>
                                <a href="#" className="decoration-none text-sm">#developer</a>
                            </div>
                            <h4 className="text-2xl fw-600 mt-16">Billboard</h4>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio">
                    <div data-cursor-label-light="view" className="h:zoom">
                        <div className="relative hover-group overflow-hidden rounded-8">
                            <div className="ratio ratio-37:40 h:zoom__item bg-image rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/2.jpg")' }} />
                            <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-2" />
                        </div>
                        <div className="mt-20">
                            <div className="x-gap-10 y-gap-10">
                                <a href="#" className="decoration-none text-sm">#marketing</a>
                                <a href="#" className="decoration-none text-sm">#design</a>
                                <a href="#" className="decoration-none text-sm">#developer</a>
                            </div>
                            <h4 className="text-2xl fw-600 mt-16">Creative Science</h4>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio">
                    <div data-cursor-label-light="view" className="h:zoom">
                        <div className="relative hover-group overflow-hidden rounded-8">
                            <div className="ratio ratio-37:40 h:zoom__item bg-image rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/3.jpg")' }} />
                            <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-2" />
                        </div>
                        <div className="mt-20">
                            <div className="x-gap-10 y-gap-10">
                                <a href="#" className="decoration-none text-sm">#marketing</a>
                                <a href="#" className="decoration-none text-sm">#design</a>
                                <a href="#" className="decoration-none text-sm">#developer</a>
                            </div>
                            <h4 className="text-2xl fw-600 mt-16">Air Plane</h4>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  e_commerce">
                    <div className="h:zoom">
                        <div className="relative hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img rounded-8 h:zoom__item" src="/img/portfolio/cards/special/1.jpg" alt="image" />
                            <div className="d-flex items-end px-20 py-20 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="w-1/1 rounded-8 bg-white shadow-card px-20 py-20 relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-sm">#marketing</a>
                                        <a href="#" className="decoration-none text-sm">#design</a>
                                        <a href="#" className="decoration-none text-sm">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 mt-16">Billboard</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  e_commerce digital_design">
                    <div className="h:zoom">
                        <div className="relative hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img rounded-8 h:zoom__item" src="/img/portfolio/cards/special/2.jpg" alt="image" />
                            <div className="d-flex items-end px-20 py-20 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="w-1/1 rounded-8 bg-white shadow-card px-20 py-20 relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-sm">#marketing</a>
                                        <a href="#" className="decoration-none text-sm">#design</a>
                                        <a href="#" className="decoration-none text-sm">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 mt-16">Creative Science</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item -no-ratio  web_design digital_design branding">
                    <div className="h:zoom">
                        <div className="relative hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img rounded-8 h:zoom__item" src="/img/portfolio/cards/special/3.jpg" alt="image" />
                            <div className="d-flex items-end px-20 py-20 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="w-1/1 rounded-8 bg-white shadow-card px-20 py-20 relative z-2">
                                    <div className="x-gap-10 y-gap-10">
                                        <a href="#" className="decoration-none text-sm">#marketing</a>
                                        <a href="#" className="decoration-none text-sm">#design</a>
                                        <a href="#" className="decoration-none text-sm">#developer</a>
                                    </div>
                                    <h4 className="text-2xl fw-600 mt-16">Air Plane</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masonry__item   e_commerce">
                    <div className="ratio h:zoom">
                        <div className="absolute-full-center hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="object-fit-cover absolute-full-center h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/1.jpg" alt="image" />
                            <div className="d-flex items-end px-48 py-48 lg:px-32 lg:py-32 sm:px-24 sm:py-24 gradient-content rounded-8 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="absolute-center">
                                    <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                        <Icon.ArrowRight className="icon text-white" />
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
                <div className="masonry__item   e_commerce digital_design">
                    <div className="ratio h:zoom">
                        <div className="absolute-full-center hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="object-fit-cover absolute-full-center h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/2.jpg" alt="image" />
                            <div className="d-flex items-end px-48 py-48 lg:px-32 lg:py-32 sm:px-24 sm:py-24 gradient-content rounded-8 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="absolute-center">
                                    <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                        <Icon.ArrowRight className="icon text-white" />
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
                <div className="masonry__item   web_design digital_design branding">
                    <div className="ratio h:zoom">
                        <div className="absolute-full-center hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="object-fit-cover absolute-full-center h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/3.jpg" alt="image" />
                            <div className="d-flex items-end px-48 py-48 lg:px-32 lg:py-32 sm:px-24 sm:py-24 gradient-content rounded-8 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="absolute-center">
                                    <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                        <Icon.ArrowRight className="icon text-white" />
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
                <div className="masonry__item -no-ratio  e_commerce">
                    <div className="h:zoom">
                        <div className="ratio ratio-37:40 hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover z-1 h:zoom__item rounded-8" src="/img/portfolio/cards/1.jpg" alt="image" />
                            <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="absolute-center">
                                    <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                        <Icon.ArrowRight className="icon text-white" />
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
                        <div className="ratio ratio-37:40 hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover z-1 h:zoom__item rounded-8" src="/img/portfolio/cards/2.jpg" alt="image" />
                            <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="absolute-center">
                                    <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                        <Icon.ArrowRight className="icon text-white" />
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
                        <div className="ratio ratio-37:40 hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover z-1 h:zoom__item rounded-8" src="/img/portfolio/cards/3.jpg" alt="image" />
                            <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="absolute-center">
                                    <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                        <Icon.ArrowRight className="icon text-white" />
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
                <div className="masonry__item -no-ratio  e_commerce">
                    <div className="h:zoom">
                        <div className="ratio ratio-37:40 hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center rounded-8 h:zoom__item object-fit-cover z-1" src="/img/portfolio/cards/1.jpg" alt="image" />
                            <div className="d-flex justify-center items-center absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-1 rounded-8 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="text-center relative z-2">
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
                        <div className="ratio ratio-37:40 hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center rounded-8 h:zoom__item object-fit-cover z-1" src="/img/portfolio/cards/2.jpg" alt="image" />
                            <div className="d-flex justify-center items-center absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-1 rounded-8 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="text-center relative z-2">
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
                        <div className="ratio ratio-37:40 hover-group overflow-hidden rounded-8">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center rounded-8 h:zoom__item object-fit-cover z-1" src="/img/portfolio/cards/3.jpg" alt="image" />
                            <div className="d-flex justify-center items-center absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="bg-dark-1 rounded-8 opac-80 absolute-full-center" />
                                <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                <div className="text-center relative z-2">
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
                <div className="masonry__item -no-ratio  e_commerce">
                    <div>
                        <div className="ratio ratio-37:40 hover-group">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center rounded-8 object-fit-cover z-1" src="/img/portfolio/cards/1.jpg" alt="image" />
                            <div className="px-10 py-10 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="d-flex justify-center items-center w-1/1 h-1/1 relative">
                                    <div className="bg-white rounded-8 absolute-full-center" />
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
                        <div className="ratio ratio-37:40 hover-group">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center rounded-8 object-fit-cover z-1" src="/img/portfolio/cards/2.jpg" alt="image" />
                            <div className="px-10 py-10 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="d-flex justify-center items-center w-1/1 h-1/1 relative">
                                    <div className="bg-white rounded-8 absolute-full-center" />
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
                        <div className="ratio ratio-37:40 hover-group">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center rounded-8 object-fit-cover z-1" src="/img/portfolio/cards/3.jpg" alt="image" />
                            <div className="px-10 py-10 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                <div className="d-flex justify-center items-center w-1/1 h-1/1 relative">
                                    <div className="bg-white rounded-8 absolute-full-center" />
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
                <div className="masonry__item -no-ratio  e_commerce">
                    <div className="relative hover-group h:zoom overflow-hidden rounded-8">
                        <div className="ratio ratio-37:40 bg-image h:zoom__item rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/1.jpg")' }} />
                        <div className="d-flex items-end py-30 px-30 absolute-full-center opac-0 | t-base hg:opacity-100">
                            <div className="d-flex justify-center items-center absolute-full-center bg-orange opac-80 rounded-8 z-1">
                                <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                    <Icon.ArrowRight className="icon text-white" />
                                </div>
                            </div>
                            <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-3" />
                            <div className="relative z-4">
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
                <div className="masonry__item -no-ratio  e_commerce digital_design">
                    <div className="relative hover-group h:zoom overflow-hidden rounded-8">
                        <div className="ratio ratio-37:40 bg-image h:zoom__item rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/2.jpg")' }} />
                        <div className="d-flex items-end py-30 px-30 absolute-full-center opac-0 | t-base hg:opacity-100">
                            <div className="d-flex justify-center items-center absolute-full-center bg-orange opac-80 rounded-8 z-1">
                                <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                    <Icon.ArrowRight className="icon text-white" />
                                </div>
                            </div>
                            <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-3" />
                            <div className="relative z-4">
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
                <div className="masonry__item -no-ratio  web_design digital_design branding">
                    <div className="relative hover-group h:zoom overflow-hidden rounded-8">
                        <div className="ratio ratio-37:40 bg-image h:zoom__item rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/3.jpg")' }} />
                        <div className="d-flex items-end py-30 px-30 absolute-full-center opac-0 | t-base hg:opacity-100">
                            <div className="d-flex justify-center items-center absolute-full-center bg-orange opac-80 rounded-8 z-1">
                                <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                    <Icon.ArrowRight className="icon text-white" />
                                </div>
                            </div>
                            <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-3" />
                            <div className="relative z-4">
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
        </>
    )
}