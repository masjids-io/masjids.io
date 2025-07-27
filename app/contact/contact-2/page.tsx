import Layout from '@/components/layout/Layout'
import * as Icon from 'react-feather'
import Link from 'next/link'

import Image from 'next/image'
export default function Contact2() {
    return (
        <>
            <Layout>
                <div>

                    <section className="page-header -base -">
                        <div className="page-header__bg">
                            <Image width={1800} height={400} className="initial-img" src="/img/page-header/bg-light.png" alt="Page header" />
                        </div>
                        <div className="page-header__content">
                            <div className="row justify-center text-center">
                                <div className="col-lg-9 col-md-10">
                                    <div>
                                        <h1 className="page-header__title lh-14">Contact Us</h1>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-9 col-md-10">
                                    <div className="px-20">
                                        <p className="page-header__text">Connect with us to learn more about how we can empower your mosque with technology. We're here to help.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="layout-pt-lg layout-pb-lg">
                        <div className="container">
                            <div className="row justify-center">
                                <div className="col-lg-8">
                                    <div className="row y-gap-32 justify-between">
                                        <div className="col-md-5">
                                            <div className="sectionHeading ">
                                                <h2 className="sectionHeading__title">Get in Touch</h2>
                                            </div>
                                            <div className="d-flex items-center mt-20">
                                                <div className="d-flex justify-center items-center size-60 rounded-full bg-accent-light text-accent">
                                                    <Icon.Mail className="size-24" />
                                                </div>
                                                <div className="ml-20">
                                                    <div className="text-lg text-dark-1 fw-500">Email Us</div>
                                                    <div className="text-base text-dark-1 mt-4">salaam@masjids.io</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="sectionHeading ">
                                                <h2 className="sectionHeading__title">Follow Us</h2>
                                            </div>
                                            <div className="d-flex y-gap-10 justify-between mt-20">
                                                <div className="d-flex items-center">
                                                    <div className="socials -small-2">
                                                        <Link href="#" className="d-flex justify-center items-center size-40 rounded-full bg-accent-light text-accent">
                                                            <Icon.Facebook />
                                                        </Link>
                                                        <Link href="#" className="d-flex justify-center items-center size-40 rounded-full bg-accent-light text-accent">
                                                            <Icon.Twitter />
                                                        </Link>
                                                        <Link href="#" className="d-flex justify-center items-center size-40 rounded-full bg-accent-light text-accent">
                                                            <Icon.Instagram />
                                                        </Link>
                                                        <Link href="#" className="d-flex justify-center items-center size-40 rounded-full bg-accent-light text-accent">
                                                            <Icon.Linkedin />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="layout-pt-lg layout-pb-lg bg-light-3">
                        <div className="container">
                            <div className="row justify-center text-center">
                                <div className="col-auto">
                                    <div className="sectionHeading ">
                                        <div className="sectionHeading__subtitle">
                                            <span>CONTACT FORM</span>
                                        </div>
                                        <h2 className="sectionHeading__title">Send Us a Message</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-center pt-60 sm:pt-40">
                                <div className="col-lg-10">
                                    <form action="post" className="contact-form row y-gap-40">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="name" placeholder="Full Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" name="email" placeholder="Your Email Address" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="subject" placeholder="Your Subject" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="phone" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea name="message" rows={4} placeholder="Message" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <div className="form-checkbox">
                                                    <div className="checkbox">
                                                        <input type="checkbox" />
                                                        <div className="checkbox__mark">
                                                            <Icon.Check className="checkbox__icon" />
                                                        </div>
                                                    </div>
                                                    <label htmlFor="items">
                                                        I agree to the Masjids.io Privacy Policy.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <div className="form-group">
                                                <button className="button -md -accent -uppercase text-white">Send Your Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section className="layout-pt-lg layout-pb-lg">
                        <div className="container">
                            <div className="row justify-center text-center">
                                <div className="col-xl-5 col-lg-6">
                                    <div className="sectionHeading ">
                                        <h2 className="sectionHeading__title">Ready to Empower Your Mosque?</h2>
                                    </div>
                                    <Link href="/demo">
                                    <button className="button -md -accent -uppercase text-white mt-30">Request a Demo</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>

        </>
    )
}