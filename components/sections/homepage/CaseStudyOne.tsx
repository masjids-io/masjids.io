'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import * as Icon from 'react-feather'

import { useCallback, useEffect, useRef, useState } from "react"
interface IsotopeInstance {
    arrange(options: { filter: string }): void
}
export default function CaseStudyOne() {
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
            <section className="layout-pt-lg layout-pb-lg">
                <div className="section-filter">
                    <div className="container">
                        <div className="row justify-between items-end">
                            <div className="col-md-5">
                                <div className="sectionHeading ">
                                    <div className="sectionHeading__subtitle">
                                        <span>Case Studies</span>
                                    </div>
                                    <h2 className="sectionHeading__title">Our latest works</h2>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="d-flex justify-end pb-12">
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
                        </div>
                        <div className="works-row masonry -col-2 -gap-fancy pt-60 sm:pt-40 js-masonry js-masonry-no-filter">
                            <div className="masonry__sizer" />
                            <div className="masonry__item -no-ratio  e_commerce">
                                <div className=" mt-80 md:mt-0 ">
                                    <div className="relative hover-group">
                                        <div className="rounded-8">
                                            <div className="ratio ratio-37:40 bg-image rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/1.jpg")' }} />
                                        </div>
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
                            <div className="masonry__item -no-ratio  e_commerce digital_design">
                                <div>
                                    <div className="relative hover-group">
                                        <div className="rounded-8">
                                            <div className="ratio ratio-37:40 bg-image rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/2.jpg")' }} />
                                        </div>
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
                            <div className="masonry__item -no-ratio  web_design digital_design branding">
                                <div>
                                    <div className="relative hover-group">
                                        <div className="rounded-8">
                                            <div className="ratio ratio-37:40 bg-image rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/10.jpg")' }} />
                                        </div>
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
                            <div className="masonry__item -no-ratio  e_commerce branding">
                                <div>
                                    <div className="relative hover-group">
                                        <div className="rounded-8">
                                            <div className="ratio ratio-37:40 bg-image rounded-8 js-lazy" style={{ backgroundImage: 'url("../img/portfolio/cards/11.jpg")' }} />
                                        </div>
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
                                        <h4 className="text-2xl fw-600 mt-16">Lewis Baker</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
