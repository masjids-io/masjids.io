
export default function Footer5() {
    return (
        <>
            <footer className="footer -type-4 overflow-hidden relative">
                <div className="absolute-full-center z-1">
                    <div className="bg-image js-lazy" style={{ backgroundImage: 'url("../img/home-5/footer/bg.png")' }} />
                </div>
                <div className="footer__top relative z-2">
                    <div className="container">
                        <div className="row y-gap-48 justify-between">
                            <div className="col-xl-5 col-lg-6">
                                <div>
                                    <p className="text-25 lh-17 text-white">
                                        To inquire for a new project or just to say hi, email us at <span className="fw-700">info@masjidsio.com</span>
                                    </p>
                                    <div className="y-gap-32 pt-48">
                                        <div>
                                            <div className="text-white opac-70 text-lg opac-50">Toll Free Customer Care</div>
                                            <div className="text-white text-xl fw-600">+(1) 123 456 7890</div>
                                        </div>
                                        <div>
                                            <div className="text-white opac-70 text-lg opac-50">Need live support?</div>
                                            <div className="text-white text-xl fw-600">hi@masjidsio.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p className="text-25 lh-17 text-white">
                                    How Can We<br /> Help?
                                </p>
                                <form action="post" className="contact-form -light row y-gap-60 pt-60 sm:pt-40">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Full Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" placeholder="Your Email" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Your Company" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Your Phone Number" />
                                    </div>
                                    <div className="col-12">
                                        <textarea name="message" id="message" rows={1} placeholder="Your Message" defaultValue={""} />
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="button -md -accent rounded-8 text-white">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row y-gap-20 justify-between items-center py-48 mt-60">
                            <div className="col-sm-6">
                                <div className="d-flex x-gap-20 text-white">
                                    <div>
                                        <a className="decoration-none" href="#">Fb</a>
                                    </div>
                                    <div>
                                        <a className="decoration-none" href="#">Be</a>
                                    </div>
                                    <div>
                                        <a className="decoration-none" href="#">Insta</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <p className="text-white">© Copyright 2024. masjidsio - Your one-stop shop for masjid technology</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}