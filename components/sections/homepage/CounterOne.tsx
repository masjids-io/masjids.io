import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})

export default function CounterOne() {
    return (
        <>
            <section className="layout-pt-sm layout-pb-lg">
                <div className="container">
                    <div className="row y-gap-48">
                        <div className="col-lg-3 col-6">
                            <div className="numCounter">
                                <div className="numCounter__number text-3xl text-dark-1 fw-700 js-counter-num">
                                    <CounterUp count={150} time={1} />+
                                </div>
                                <h5 className="numCounter__title text-dark text-lg">Partner Masjids</h5>
                                <div className="numCounter__line mt-20" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="numCounter">
                                <div className="numCounter__number text-3xl text-dark-1 fw-700 js-counter-num">
                                    <CounterUp count={75} time={1} />K+
                                </div>
                                <h5 className="numCounter__title text-dark text-lg">Community Members</h5>
                                <div className="numCounter__line mt-20" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="numCounter">
                                <div className="numCounter__number text-3xl text-dark-1 fw-700 js-counter-num">
                                    <CounterUp count={250} time={1} />K+
                                </div>
                                <h5 className="numCounter__title text-dark text-lg">Announcements Sent</h5>
                                <div className="numCounter__line mt-20" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="numCounter">
                                <div className="numCounter__number text-3xl text-dark-1 fw-700 js-counter-num">
                                    <CounterUp count={12} time={1} />
                                </div>
                                <h5 className="numCounter__title text-dark text-lg">Countries Reached</h5>
                                <div className="numCounter__line mt-20" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}