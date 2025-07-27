import Link from 'next/link'

export default function HeaderRight() {
    return (
        <>
            <div className="header__right">
                <div className="md:d-none">
                    <Link
                        href="/login"
                        className="button -sm -outline-light-dark sm:d-none"
                    >
                        Join
                    </Link>
                    <Link
                        href="/contact/contact-1"
                        className="button -sm -dark text-white ml-12"
                    >
                        Get the App
                    </Link>
                </div>
                <div className="header__menu justify-center items-center relative d-none md:d-flex">
                    <button
                        type="button"
                        className="d-flex items-center justify-center js-nav-open"
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
                            className="feather feather-menu text-black size-32 str-width-1"
                        >
                            <line x1={3} y1={12} x2={21} y2={12} />
                            <line x1={3} y1={6} x2={21} y2={6} />
                            <line x1={3} y1={18} x2={21} y2={18} />
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="d-flex items-center justify-center absolute-y-center right-0 pointer-events-none opac-0 js-nav-close"
                    >
                        Close
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
                            className="feather feather-x text-black size-32 str-width-1 ml-4"
                        >
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>

                    </button>
                </div>
            </div>
        </>
    )
}