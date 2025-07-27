
import * as Icon from 'react-feather'

import Image from 'next/image'
export default function CtaSix() {
    return (
        <>
            <section className="pt-80 pb-80 relative">
                <div className="absolute-full-center px-60 lg:px-24 sm:px-0 z-1">
                    <div className="bg-image rounded-30 js-lazy" style={{ backgroundImage: 'url("./img/home-10/cta/bg.png")' }} />
                </div>
                <div className="shape -bottom -right--40 z-1 float-animation-sm lg:d-none">
                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-10/cta/Saly-14.png" alt="image" />
                </div>
                <div className="container relative z-2">
                    <div className="row y-gap-48 justify-between md:justify-center items-center">
                        <div className="col-xl-4 col-lg-5 col-md-6">
                            <div className="atropos -no-shadow js-atropos">
                                <div className="atropos-scale">
                                    <div className="atropos-rotate">
                                        <div className="atropos-inner overflow-visible d-flex justify-end">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/home-10/cta/cart.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <div className="sectionHeading ">
                                    <h2 className="sectionHeading__title">Open a masjidsio account <br className="md:d-none" />in a few minutes</h2>
                                </div>
                                <p className="mt-4">Join the more than 400,000 users</p>
                                <form action="POST" className="mt-32">
                                    <div className="form-group d-flex">
                                        <input className="py-20 px-24 w-1/1 rounded-8 bg-light-4" placeholder="Phone Number" type="text" />
                                        <button className="button py-20 px-20 -blue-2 text-white rounded-8 ml-20" type="submit">
                                            <Icon.ArrowRight className="icon size-20" />
                                        </button>
                                    </div>
                                </form>
                                <div className="row y-gap-10 mt-32">
                                    <div className="col-auto">
                                        <a href="#" className="button -store bg-dark-2 text-white">
                                            <div className="button__icon">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/icons/apple.svg" alt="icon" />
                                            </div>
                                            <div className="button__content text-white">
                                                <div>Download on the</div>
                                                <div>Apple Store</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-auto">
                                        <a href="#" className="button -store bg-dark-2 text-white">
                                            <div className="button__icon">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/icons/google.svg" alt="icon" />
                                            </div>
                                            <div className="button__content text-white">
                                                <div>Get in on</div>
                                                <div>Google Play</div>
                                            </div>
                                        </a>
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
