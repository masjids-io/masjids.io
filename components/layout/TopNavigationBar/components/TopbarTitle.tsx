'use client'

import { useTitle } from '@/context/useTitleContext'

const TopbarTitle = () => {
  const { title } = useTitle()
  return <h4 className="page-title d-none d-sm-block">{title}</h4>
}
export default TopbarTitle
