import ScreenshotsSlider from "@/components/elements/ScreenshotsSlider"
import Image from 'next/image'

export default function AppOne() {
    return (
        <>
            <section className="layout-pt-md layout-pb-md home-1-slider section-bg-color">
                <div className="section-bg-color__item -wide bg-dark-1" />
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-auto">
                            <div className="sectionHeading -light">
                                <div className="sectionHeading__subtitle">
                                    <span>SELECTION OF OUR SEVICE</span>
                                </div>
                                <h2 className="sectionHeading__title">An Intuitive App For Your Community</h2>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row justify-center pt-60 sm:pt-40 overflow-hidden"
                        data-cursor-slider="slider"
                    >
                        <div className="col-auto">
                            <div
                                className="sectionSlider"
                                data-cursor-slider="slider"
                            >
                                <div className="phone-slider-image__bg">
                                    <Image
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        style={{ width: 'auto', height: 'auto' }}
                                        src="/img/home-1/appScreens/iphone-12-pro-max--pacific-blue.png"
                                        alt="phone image"
                                    />
                                </div>
                                <ScreenshotsSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
