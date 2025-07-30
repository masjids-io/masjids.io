import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import * as Icon from 'react-feather'
import Image from 'next/image'

export default function Comingsoon() {
    return (
        <>
            <Layout
                headerLayout={1}
                logo="logo" // logo, logo-flat, logo-5
                verticalLine={true} // if vertical line true, show vertical line show
            >
                <>
                    <section className="page-header -base -">
                        <div className="page-header__bg">
                            <Image width="0" height="0" sizes="200vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/page-header/bg-light.png" alt="Page header" />
                        </div>
                        <div className="page-header__content">
                            <div className="row justify-center text-center">
                                <div className="col-lg-9 col-md-10">
                                    <div>
                                        <h1 className="page-header__title lh-14">Coming Soon</h1>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-9 col-md-10">
                                    <div className="px-20">
                                        <p className="page-header__text">We’re working hard to bring you something amazing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            </Layout>
        </>
    )
}