import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import '@/public/css/vendors.css'
import '@/public/css/animate.min.css'
import '@/public/css/main.css'

import "swiper/css"
import "swiper/css/navigation"

export default function layout(  {
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
  return (
    <>
    {children}
    </>
  )
}
