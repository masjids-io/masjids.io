import Link from 'next/link'

import Image from 'next/image'
export default function Logo({ logo }: any) {
    return (
        <>
            <div className="header__logo">
                <Link className="base-logo" href="/">
                    <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        className="base-logo-first"
                        src={`/img/general/${"logo"}.svg`}
                        alt="logo"
                    />
                    <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        className="base-logo-second"
                        src="/img/general/logo-dark.svg"
                        alt="logo"
                    />
                </Link>
                <Link className="menu-logo" href="/">
                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/general/logo-dark.svg" alt="logo" />
                </Link>
            </div>
        </>
    )
}