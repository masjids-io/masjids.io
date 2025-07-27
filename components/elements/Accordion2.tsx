'use client'
import { useState } from "react"

export default function Accordion2(props: any) {
    const [isShowing, setIsShowing] = useState(false)

    const toggle = () => {
        setIsShowing(!isShowing)
    }

    return (
        <div className="accordion__item">
            <button
                onClick={toggle}
                type="button"
                className="accordion__button text-black text-lg md:text-base fw-600"
            >

                <p>
                    <span
                        className="mr-10"
                        style={{ display: isShowing ? "none" : "inline-block" }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-plus icon"
                        >
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>

                    </span>
                    <span
                        className="mr-10"
                        style={{ display: isShowing ? "inline-block" : "none" }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-minus icon"
                        >
                            <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>

                    </span>
                    {props.title}
                </p>
            </button>

            <div className="accordion__content__inner p-4"
                style={{ display: isShowing ? "block" : "none", padding: "5px" }}
                dangerouslySetInnerHTML={{
                    __html: props.content
                }}
            />

        </div>
    )
}