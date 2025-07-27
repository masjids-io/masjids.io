'use client'
import { useState } from "react"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

interface CounterUpProps {
    count: number
    time: number
}

export default function CounterUp({ count, time }: CounterUpProps) {
    const [counterOn, setCounterOn] = useState(false)

    return (
        <>
            <VisibilitySensor
                onChange={(isVisible: any) => {
                    if (isVisible) {
                        setCounterOn(true)
                    }
                }}
                delayedCall
            >
                <CountUp end={counterOn ? count : 0} duration={time} redraw={true}>
                    {({ countUpRef }) => <span ref={countUpRef}></span>}
                </CountUp>
            </VisibilitySensor>
        </>
    )
}
