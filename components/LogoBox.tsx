import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/images/logo.png'
import logoSm from '@/assets/images/logo-sm.png'
import logoDark from '@/assets/images/logo-dark.png'

const LogoBox = () => {
  return (
    <>
      <Link href="/" className="logo logo-light">
        <span className="logo-lg">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
            className="base-logo-first"
            src={`/img/general/${"logo"}.svg`}
            alt="logo"
          />
        </span>
        <span className="logo-sm">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
            className="base-logo-first"
            src={`/img/general/${"logo"}.svg`}
            alt="logo"
          />
        </span>
      </Link>

      <Link href="/" className="logo logo-dark">
        <span className="logo-lg">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
            className="base-logo-first"
            src={`/img/general/${"logo"}.svg`}
            alt="logo"
          />
        </span>
        <span className="logo-sm">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
            className="base-logo-first"
            src={`/img/general/${"logo"}.svg`}
            alt="logo"
          />
        </span>
      </Link>
    </>
  )
}
export default LogoBox
