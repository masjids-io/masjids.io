import Image from 'next/image'
export default function AboutOne() {
    return (
        <>
            <section className="layout-pt-sm layout-pb-sm overflow-visible">
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-auto">
                            <div className="sectionHeading">
                                <div className="sectionHeading__subtitle wow animate__animated animate__fadeInUp">
                                    <span>Built for Masjids</span>
                                </div>
                                <h2 className="sectionHeading__title wow animate__animated animate__fadeInUp">The All-in-One Masjid Platform</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row y-gap-32 pt-80 md:pt-60 sm:pt-24">
                        <div className="col-md-6 wow animate__animated animate__fadeInUp">
                            <div
                                className="d-flex rounded-8 py-40 pr-60 pl-50 md:px-34 md:py-34 sm:px-30 sm:py-30 md:direction-column bg-white shadow-card hover-up"
                            >
                                <div className="mr-48 md:mr-0">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/company/timer.svg" alt="icon" />
                                </div>
                                <div className="md:mt-20">
                                    <h4 className="text-xl fw-600 lh-1">Accurate Prayer Times</h4>
                                    <p className="mt-20 md:mt-12">
                                        Display real-time prayer schedules and iqamah times. Keep your congregation informed and connected to the daily prayers with ease.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow animate__animated animate__fadeInUp">
                            <div
                                className="d-flex rounded-8 py-40 pr-60 pl-50 md:px-34 md:py-34 sm:px-30 sm:py-30 md:direction-column bg-white shadow-card hover-up"
                            >
                                <div className="mr-48 md:mr-0">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/company/touch.svg" alt="icon" />
                                </div>
                                <div className="md:mt-20">
                                    <h4 className="text-xl fw-600 lh-1">Community Engagement</h4>
                                    <p className="mt-20 md:mt-12">
                                        Send instant announcements via push notifications. Keep everyone up-to-date with events, news, and live streams from your Masjid.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow animate__animated animate__fadeInUp">
                            <div
                                className="d-flex rounded-8 py-40 pr-60 pl-50 md:px-34 md:py-34 sm:px-30 sm:py-30 md:direction-column bg-white shadow-card hover-up"
                            >
                                <div className="mr-48 md:mr-0">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/company/pen-tool.svg" alt="icon" />
                                </div>
                                <div className="md:mt-20">
                                    <h4 className="text-xl fw-600 lh-1">Simple Management</h4>
                                    <p className="mt-20 md:mt-12">
                                        Control everything from a single, intuitive dashboard. Customize your platform with your Masjid's branding for a perfect user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}