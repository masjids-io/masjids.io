import Accordion2 from '@/components/elements/Accordion2'

export default function FaqTwo() {
    return (
        <>
            <section className="layout-pt-sm layout-pb-xl">
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-xl-6 col-lg-7">
                            <div className="sectionHeading ">
                                <h2 className="sectionHeading__title wow animate__animated animate__fadeInUp">Have a question?</h2>
                                <p className="sectionHeading__text mt-20 wow animate__animated animate__fadeInUp">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-center pt-60 sm:pt-40">
                        <div className="col-xl-8 col-lg-9">
                            <div className="accordion -bordered md:mt-24 js-accordion wow animate__animated animate__fadeInUp">
                                <Accordion2 title="What does the package include?" content="When you buy masjidsio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren." />
                                <Accordion2 title="How does the 14-day trial work?" content="When you buy masjidsio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren." />
                                <Accordion2 title="How do I pay for your service?" content="When you buy masjidsio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren." />
                                <Accordion2 title=" Can I suggest a new feature?" content="When you buy masjidsio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren." />
                                <Accordion2 title="How to restore your chat history?" content="When you buy masjidsio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}