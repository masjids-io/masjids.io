import Layout from '@/components/layout/Layout'
import AboutOne from '@/components/sections/homepage/AboutOne'
import AppOne from '@/components/sections/homepage/AppOne'
import BenefitsOne from '@/components/sections/homepage/BenefitsOne'
import ClientOne from '@/components/sections/homepage/ClientOne'
import CounterOne from '@/components/sections/homepage/CounterOne'
import CtaOne from '@/components/sections/homepage/CtaOne'
import FaqOne from '@/components/sections/homepage/FaqOne'
import FeatureOne from '@/components/sections/homepage/FeatureOne'
import HeroOne from '@/components/sections/homepage/HeroOne'
import PricingOne from '@/components/sections/homepage/PricingOne'
import SuccessOne from '@/components/sections/homepage/SuccessOne'
import TestimonialOne from '@/components/sections/homepage/TestimonialOne'


export default function Home1() {
    
    return (
        <>
            <Layout
                headerLayout={1}
                footerLayout={1}
                logo="logo" // logo, logo-flat, logo-5
                verticalLine={true} // if vertical line true, show vertical line show
            >
                <HeroOne bgPath="home-1/masthead" />
                <AboutOne />
                <BenefitsOne />
                <SuccessOne />
                <FeatureOne />
                <TestimonialOne />
                <CounterOne />
                <PricingOne />
                <FaqOne />
            </Layout>
        </>
    )
}
