import Layout from '@/components/layout/Layout'
import dynamic from 'next/dynamic'
import * as Icon from 'react-feather'
import Link from 'next/link' // Added for the new demo link

const LeafletMap = dynamic(() => import('@/components/elements/LeafletMap'), {
    ssr: false,
})

import Image from 'next/image'
export default function Contact1() {
    return (
        <>
            <Layout>
                <div>
                    <section className="page-header -base -">
                        <div className="page-header__bg">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/page-header/bg-light.png" alt="Page header" />
                        </div>
                        <div className="page-header__content">
                            <div className="row justify-center text-center">
                                <div className="col-lg-9 col-md-10">
                                    <div>
                                        {/* Content from Contact2 */}
                                        <h1 className="page-header__title lh-14">Contact Us</h1>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-9 col-md-10">
                                    <div className="px-20">
                                        {/* Content from Contact2 */}
                                        <p className="page-header__text">Connect with us to learn more about how we can empower your mosque with technology. We're here to help.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="layout-pt-lg layout-pb-sm">
                        <div className="container">
                            <div className="row g-0 y-gap-48 row-dividers-dark">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="d-flex direction-column text-center px-48">
                                        {/* Content adapted from Contact2 */}
                                        <h3 className="text-22 fw-600">Email Us</h3>
                                        <p className="mt-16">For all inquiries, please send us an email. We'll get back to you as soon as possible.</p>
                                        <a className="text-16 fw-600 mt-20" href="#">salaam@masjids.io</a>
                                        <div className="mt-20">
                                            {/* Placeholder to keep structure */}
                                            <span className="text-transparent">_</span>
                                        </div>
                                        <div className="mt-20">
                                             {/* Placeholder to keep structure */}
                                            <span className="text-transparent">_</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="d-flex direction-column text-center px-48">
                                        {/* Content adapted from Contact2 */}
                                        <h3 className="text-22 fw-600">Follow Us</h3>
                                        <p className="mt-16">Follow us on our social media channels to stay up to date with the latest news and updates.</p>
                                        <div className="socials -small-2 d-flex justify-center items-center mt-20" style={{gap: '10px'}}>
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
                                <div className="col-lg-4 col-sm-6">
                                    <div className="d-flex direction-column text-center px-48">
                                         {/* Content adapted from Contact2 */}
                                        <h3 className="text-22 fw-600">Community Support</h3>
                                        <p className="mt-16">Join our community forums to get help and connect with other users and mosque leaders.</p>
                                        <a className="text-16 fw-600 mt-20" href="#">support@masjids.io</a>
                                        <a className="buttom -simple text-accent fw-600 mt-20" href="#">Join the Forum</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="layout-pt-sm layout-pb-lg">
                        <div className="container">
                            <div className="row justify-center text-center">
                                <div className="col-auto">
                                    <div className="sectionHeading ">
                                        <div className="sectionHeading__subtitle">
                                            {/* Content from Contact2 */}
                                            <span>CONTACT FORM</span>
                                        </div>
                                        {/* Content from Contact2 */}
                                        <h2 className="sectionHeading__title">Send Us a Message</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-center pt-60 sm:pt-40">
                                <div className="col-lg-10">
                                    <form action="#" className="contact-form row y-gap-40">
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
                                                        {/* Content from Contact2 */}
                                                        I agree to the Masjids.io Privacy Policy.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <button className="button -md -accent -uppercase text-white">Send Your Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* This element is kept as requested */}
                    
                    <section className="layout-pt-lg layout-pb-lg">
                        <div className="container">
                            <div className="row g-0 y-gap-40 row-dividers-dark">
                                <div className="col-sm-6">
                                    <div className="d-flex direction-column text-center px-60 md:px-30">
                                        <div>
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/contact/1/laptop-2.svg" alt="Icon" />
                                        </div>
                                        {/* Content adapted from Contact2 */}
                                        <h3 className="text-xl fw-600 mt-16">Request a Demo</h3>
                                        <p className="mt-16">Ready to empower your mosque? See how our platform works with a personalized demo from our team. Click below to schedule a call.</p>
                                        <Link href="#" className="button -md -accent -uppercase text-white mt-20" style={{maxWidth: '250px', margin: '20px auto 0'}}>
                                            Request a Demo
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex direction-column text-center px-60 md:px-30">
                                        <div>
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/contact/1/laptop-1.svg" alt="Icon" />
                                        </div>
                                        {/* Content adapted from Contact2 */}
                                        <h3 className="text-xl fw-600 mt-16">General Inquiries</h3>
                                        <p className="mt-16">Have other questions or need more information about what we offer? Feel free to drop us a line at our main contact email <a className="text-accent underline" href="#">salaam@masjids.io</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>

        </>
    )
}