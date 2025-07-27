import ProjectSliderOne from '@/components/slider/ProjectSliderOne'
import Link from 'next/link'

export default function ProjectOne() {
    return (
        <>
            <section className="layout-pt-lg layout-pb-sm">
                <div className="container">
                    <div className="row y-gap-16 justify-between items-center">
                        <div className="col-md-6">
                            <div className="sectionHeading ">
                                <h2 className="sectionHeading__title">Global experts</h2>
                            </div>
                        </div>
                        <div className="col-md-auto">
                            <Link href="/login" className="button -simple text-orange text-16 fw-600">Start Your Project</Link>
                        </div>
                    </div>
                    <div className="sectionSlider relative pt-60 md:pt-40">
                        <ProjectSliderOne />
                    </div>
                </div>
            </section>
        </>
    )
}
