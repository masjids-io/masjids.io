
import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import * as Icon from 'react-feather'

import Image from 'next/image'
export default function ServicesSingle() {
    return (
        <>
            <Layout>
                <section className="page-header -base -">
                    <div className="page-header__bg">
                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/page-header/bg-light.png" alt="Page header" />
                    </div>
                    <div className="page-header__content">
                        <div className="row justify-center text-center">
                            <div className="col-lg-9 col-md-10">
                                <div>
                                    <h1 className="page-header__title lh-14">Mobile Data</h1>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-9 col-md-10">
                                <div className="px-20">
                                    <p className="page-header__text">With we want to optimize the customization process so your team can save time when building websites.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="layout-pt-lg layout-pb-lg">
                    <div className="container">
                        <div className="row justify-center">
                            <div className="col-xl-8 col-lg-9 col-md-11">
                                <div className="row">
                                    <div className="col-12 mb-40">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/services/4/1.jpg" alt="image" className="initial-img" />
                                        <p className="mt-30">Mauris eu nisi eget nisi imperdiet vestibulum. Nunc sodales vehicula risus. Suspendisse id mauris sodales, blandit tortor eu, sodales justo. Morbi tincidunt, ante vel suscipit volutpat, turpis enim volutpSectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. Ut vel placerat eros, eu tincidunt velit. Consectetur adipiscing elit, adipiscing elit, sed do.</p>
                                        <div className="pt-30 y-gap-20">
                                            <div className="d-flex items-center">
                                                <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                                                    <Icon.Check className="icon size-14 text-black" />
                                                </div>
                                                <h5 className="text-lg fw-600">Installation Guide</h5>
                                            </div>
                                            <div className="d-flex items-center">
                                                <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                                                    <Icon.Check className="icon size-14 text-black" />
                                                </div>
                                                <h5 className="text-lg fw-600">Easy setup process</h5>
                                            </div>
                                            <div className="d-flex items-center">
                                                <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                                                    <Icon.Check className="icon size-14 text-black" />
                                                </div>
                                                <h5 className="text-lg fw-600">Live call support</h5>
                                            </div>
                                            <div className="d-flex items-center">
                                                <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                                                    <Icon.Check className="icon size-14 text-black" />
                                                </div>
                                                <h5 className="text-lg fw-600">Start a private group video call</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/services/4/2.jpg" alt="image" className="initial-img" />
                                    </div>
                                    <div className="col-md-6 sm:mt-30">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/services/4/3.jpg" alt="image" className="initial-img" />
                                    </div>
                                    <div className="col-12 mt-30">
                                        <div>
                                            <h4 className="text-xl fw-600">Explore the city and new places</h4>
                                            <p className="mt-20">Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized metrics after resource-leveling processes. Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.</p>
                                        </div>
                                        <div className="mt-30">
                                            <h4 className="text-xl fw-600">Impress your audience</h4>
                                            <p className="mt-20">Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized metrics after resource-leveling processes. Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.</p>
                                        </div>
                                    </div>
                                    <div className="col-12 layout-pt-lg">
                                        <div className="py-60 px-60 bg-white shadow-card rounded-8">
                                            <h4 className="text-xl fw-600">Get in Touch</h4>
                                            <form action="post" className="contact-form row y-gap-40 pt-48">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <input type="text" name="name" placeholder="Name" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <input type="email" name="email" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <textarea name="message" rows={4} placeholder="Message" defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <button className="button -md -accent -uppercase text-white" type="submit">Submit</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="layout-pt-lg layout-pb-lg section-bg-color">
                    <div className="section-bg-color__item -wide bg-accent-light" />
                    <div className="container">
                        <div className="row justify-center text-center">
                            <div className="col-auto">
                                <div className="sectionHeading ">
                                    <div className="sectionHeading__subtitle">
                                        <span>Services</span>
                                    </div>
                                    <h2 className="sectionHeading__title">You may also like</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row y-gap-32 pt-60 sm:pt-40">
                            <div className="col-lg-3 col-sm-6">
                                <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                                    <div className="size-80 rounded-full d-flex justify-center items-center bg-blue-light">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/solutions/branding.svg" alt="icon" />
                                    </div>
                                    <h4 className="text-xl fw-600 mt-20">Branding</h4>
                                    <p className="mt-10">There is no one universal solution in online marketing</p>
                                    <Link href="/services/services-1" className="button -simple text-accent fw-600 underline mt-12">Discover Now</Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                                    <div className="size-80 rounded-full d-flex justify-center items-center bg-yellow-light">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/solutions/ui-design.svg" alt="icon" />
                                    </div>
                                    <h4 className="text-xl fw-600 mt-20">UI/UX Design</h4>
                                    <p className="mt-10">There is no one universal solution in online marketing</p>
                                    <Link href="/services/services-1" className="button -simple text-accent fw-600 underline mt-12">Discover Now</Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                                    <div className="size-80 rounded-full d-flex justify-center items-center bg-red-light">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/solutions/animate.svg" alt="icon" />
                                    </div>
                                    <h4 className="text-xl fw-600 mt-20">Animation</h4>
                                    <p className="mt-10">There is no one universal solution in online marketing</p>
                                    <Link href="/services/services-1" className="button -simple text-accent fw-600 underline mt-12">Discover Now</Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                                    <div className="size-80 rounded-full d-flex justify-center items-center bg-green-light">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/solutions/seo.svg" alt="icon" />
                                    </div>
                                    <h4 className="text-xl fw-600 mt-20">SEO  Backlinks</h4>
                                    <p className="mt-10">There is no one universal solution in online marketing</p>
                                    <Link href="/services/services-1" className="button -simple text-accent fw-600 underline mt-12">Discover Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* clients */}
                <section className="layout-pt-lg layout-pb-lg">
                    <div className="container">
                        <div className="row justify-center">
                            <div className="col text-center">
                                <p className="text-lg text-dark-1">Trusted by the world best</p>
                            </div>
                        </div>
                        <div className="row y-gap-32 justify-between items-center mt-64">
                            <div className="col-lg-auto col-md-auto col-4">
                                <div className="d-flex justify-center items-center px-4">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/1.svg" alt="clients image" />
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-auto col-4">
                                <div className="d-flex justify-center items-center px-4">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/2.svg" alt="clients image" />
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-auto col-4">
                                <div className="d-flex justify-center items-center px-4">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/3.svg" alt="clients image" />
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-auto col-4">
                                <div className="d-flex justify-center items-center px-4">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/4.svg" alt="clients image" />
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-auto col-4">
                                <div className="d-flex justify-center items-center px-4">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/5.svg" alt="clients image" />
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-auto col-4">
                                <div className="d-flex justify-center items-center px-4">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/6.svg" alt="clients image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}