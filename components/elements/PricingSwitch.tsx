'use client'
import { useEffect } from 'react'

const PricingSwitch = () => {
    useEffect(() => {
        const handleClick = (event: any) => {
            const target = event.target.closest('[data-switch]')
            if (!target) return

            const trigger = target.getAttribute('data-switch')
            if (!trigger) return

            const elementsToToggle = document.querySelectorAll(trigger)

            elementsToToggle.forEach(element => {
                element.classList.toggle('is-active')
            })
        }

        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    return null
}

export default PricingSwitch
