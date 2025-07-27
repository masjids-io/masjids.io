
export default function CounterTwo() {
    return (
        <>
            <section className="layout-pt-lg layout-pb-lg section-bg-color">
                <div className="section-bg-color__item bg-orange rounded-8">
                    <div className="rounded-8 bg-image js-rellax js-lazy" style={{ backgroundImage: 'url("../img/sections/bg.png")' }} />
                </div>
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-xl-8 col-lg-9">
                            <div className="sectionHeading -light">
                                <h2 className="sectionHeading__title">Forming strong and trusted connections with our clients</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row y-gap-48 pt-60">
                        <div className="col-lg-3 col-6">
                            <div className="text-center">
                                <div className="text-50 text-white fw-700">28k</div>
                                <h5 className="text-white text-lg">Projects</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="text-center">
                                <div className="text-50 text-white fw-700">100+</div>
                                <h5 className="text-white text-lg">Locations</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="text-center">
                                <div className="text-50 text-white fw-700">120%</div>
                                <h5 className="text-white text-lg">Growth</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="text-center">
                                <div className="text-50 text-white fw-700">22k</div>
                                <h5 className="text-white text-lg">Customers</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
