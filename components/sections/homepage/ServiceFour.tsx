
export default function ServiceScrollNav() {
    return (
        <>
            <section>
                <div className="relative z-5 js-pin-menu">
                    <div className="row justify-center border-bottom-dark text-center bg-white js-tabs-controls">
                        <div className="col-xl-2 col-md-3 col-4 px-0">
                            <a href="#quality" className="decoration-none py-24 flex-center sm:pb-12 js-pin-menu-link js-scroll-to-id">
                                <i className="icon text-25 mr-8 icon-diamond" />
                                <span className="text-xl sm:text-base fw-600">Quality</span>
                            </a>
                        </div>
                        <div className="col-xl-2 col-md-3 col-4 px-0">
                            <a href="#responsive" className="decoration-none py-24 flex-center sm:pb-12 js-pin-menu-link js-scroll-to-id">
                                <i className="icon text-25 mr-8 icon-responsive" />
                                <span className="text-xl sm:text-base fw-600">Responsive</span>
                            </a>
                        </div>
                        <div className="col-xl-2 col-md-3 col-4 px-0">
                            <a href="#reliability" className="decoration-none py-24 flex-center sm:pb-12 js-pin-menu-link js-scroll-to-id">
                                <i className="icon text-25 mr-8 icon-quality" />
                                <span className="text-xl sm:text-base fw-600">Reliability</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
