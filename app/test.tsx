import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"

import 'bootstrap/dist/css/bootstrap.min.css';

import '@/public/css/vendors.css'
import '@/public/css/animate.min.css'
import '@/public/css/main.css'

import "swiper/css"
import "swiper/css/navigation"
import AuthProvider from "./povider";

const nunito = Work_Sans({
    weight: ['300','400','500','600', '700', '800'],
    subsets: ["latin"]

})

export const metadata: Metadata = {
    title: "masjidsio - Your one-stop shop for masjid technology",
    description: "Your one-stop shop for masjid technology",
    icons: {
        icon: '/favicon.ico',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={nunito.className}>
                <AuthProvider>
                {children}
                </AuthProvider>
                </body>
        </html>
    )
}
