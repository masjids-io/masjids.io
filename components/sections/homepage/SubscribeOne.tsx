
export default function SubscribeOne() {
    return (
        <>
            <section className="layout-pt-lg layout-pb-lg section-bg-color">
                <div className="section-bg-color__item bg-blue-darker -wide">
                    <div className="h-1/1 js-rellax">
                        <div className="bg-image rounded-16 js-lazy" style={{ backgroundImage: 'url("../img/home-6/images/bg.png")' }} />
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-xl-8 col-lg-9 col-md-11">
                            <div className="sectionHeading -light">
                                <h2 className="sectionHeading__title">Get your free SEO Analysis</h2>
                            </div>
                            <p className="text-white opac-80 px-80 lg:px-0 mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                        </div>
                    </div>
                    <div className="row justify-center pt-60 sm:pt-40">
                        <div className="col-xl-9 col-lg-10">
                            <form className="row y-gap-20 x-gap-20 justify-center" action="post">
                                <div className="col-lg-4">
                                    <input className="w-1/1 px-32 py-16 bg-white rounded-200 text-black" type="text" placeholder="Your Website URL" />
                                </div>
                                <div className="col-lg-4">
                                    <input className="w-1/1 px-32 py-16 bg-white rounded-200 text-black" type="email" placeholder="Email" />
                                </div>
                                <div className="col-lg-2">
                                    <button className="button -md -red-2 text-white" type="submit">Check Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
