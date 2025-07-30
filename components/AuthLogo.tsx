import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/images/logo.png'
import logoDark from '@/assets/images/logo-dark.png'

const AuthLogo = () => {
  return (
    <div className="auth-brand p-4 text-center">
      <Link href="/" className="logo-light">
        <Image src={logo} alt="logo" height={28} />
      </Link>
      <Link href="/" className="logo-dark">
        <Image src={logoDark} alt="dark logo" height={28} />
      </Link>
    </div>
  )
}
export default AuthLogo
