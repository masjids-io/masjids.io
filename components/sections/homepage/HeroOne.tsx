'use client'
import Atropos from 'atropos/react'


interface Props {
    bgPath?: string
    textWhite?: string
}

import Image from 'next/image'
export default function HeroOne({ bgPath, textWhite }: Props) {
    return (
        <>
            <section className="masthead -type-1 overflow-hidden">
                <div className="masthead__bg wow animate__animated animate__fadeIn overflow-hidden relative">
                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src={`/img/${bgPath}/bg.png`} alt="bg" />
                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="wow animate__animated animate__fadeInUp" src="/img/home-1/masthead/rect.svg" alt="bg" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6">
                            <div className="masthead__content relative z-2">
                                <div className="masthead__subtitle wow animate__animated animate__fadeInUp">
                                    <span>Your one-stop shop for masjid technology. Explore prayer times, events, donations, and more — all in one place.</span>
                                </div>
                                <h1 className={`masthead__title wow animate__animated animate__fadeInUp ${textWhite}`}>
                                    Find a <span className={`${textWhite ? '' : 'text-accent'}`}>Masjid</span>
                                </h1>

                                {/* Deskripsi dari desain masjids.io */}
                                <p className={`masthead__text wow animate__animated animate__fadeInUp ${textWhite}`}>
                                    Find masjids near you or search by city, area, or name. <br className="sm:d-none" />
                                    Stay connected with your local Islamic community.
                                </p>

                                {/* search */}
                                <div className="masthead__search mt-32 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                    {/* Use a relative container instead of input-group */}
                                    <div className="modern-search-wrapper">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Search by city, area, or name..."
                                            aria-label="Find a Masjid"
                                        />
                                        <button className="modern-search-button" type="submit" aria-label="Search">
                                            {/* Using a high-quality SVG icon for sharpness */}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                {/* end search */}

                                <div className="masthead__buttons row y-gap-10 pt-32 md:pt-20">
                                    <div className="col-auto text-white wow animate__animated animate__fadeInUp">
                                        <a href="#" className="button -store bg-dark-2 text-white">
                                            <div className="button__icon wow animate__animated animate__fadeInUp">
                                                {/* <Image  width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/icons/globe-solid-full.svg" alt="" /> */}
                                            </div>
                                            <div className="button__content">
                                                <div>View our program</div>
                                                <div>Get started</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-auto col-lg-6">
                            <div className="masthead__image relative z-1">
                                <Atropos
                                    shadow={false}
                                    data-atropos-offset={-5}
                                >
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/masthead/phones.png" alt="phone" />
                                </Atropos>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}