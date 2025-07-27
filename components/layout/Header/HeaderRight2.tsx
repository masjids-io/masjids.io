import Link from 'next/link'

export default function HeaderRight2() {
    return (
        <>
            <div className="header__right">
                <div className="md:d-none">
                    <Link href="/login" className="button -sm -white-20 rounded-8 text-white">
                        Sign In
                    </Link>
                </div>
                <div className="header__menu justify-center items-center relative d-none md:d-flex">
                    <button
                        type="button"
                        className="d-flex items-center justify-center js-nav-open"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu icon text-white size-32 str-width-1 "><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </button>
                    <button
                        type="button"
                        className="d-flex items-center justify-center absolute-y-center right-0 pointer-events-none opac-0 js-nav-close"
                    >
                        Close
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x text-black size-32 str-width-1 ml-4"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
            </div>
        </>
    )
}