import Link from 'next/link'

import Image from 'next/image'
export default function Responsive() {
    return (
        <>
            <section id="responsive" className="layout-pt-sm layout-pb-lg relative">
                <div className="absolute-full-center z-1">
                    <Image width="0" height="0" sizes="100vw" src="/img/shapes/1.png" alt="shape" />
                </div>
                <div className="container relative z-2">
                    <div className="row y-gap-40 justify-between items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="wow animate__animated animate__fadeIn">
                                <div className="atropos -no-shadow js-atropos">
                                    <div className="atropos-scale">
                                        <div className="atropos-rotate">
                                            <div className="atropos-inner">
                                                <Image width="0" height="0" sizes="100vw" className="initial-img" src="/img/home-4/images/2.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="wow animate__animated animate__fadeIn">
                                <div className="sectionHeading ">
                                    <h2 className="sectionHeading__title">With efficiency to unlock more opportunities
                                    </h2>
                                </div>
                            </div>
                            <div className="pr-100 lg:pr-0 mt-30">
                                <p>Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford
                                    butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras
                                    tickety-boo squiffy. </p>
                                <p className="mt-16">Starkers dropped a clanger lurgy is cack excuse my French what a
                                    plonker blower!</p>
                                <Link href="/about/about-1" className="button -md -light-accent text-accent mt-40">Discover
                                    More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
