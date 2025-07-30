'use client'
import { useTitle } from '@/context/useTitleContext'
import { useEffect } from 'react'

const PageTitle = ({ title }: { title: string }) => {
  const { setTitle } = useTitle()

  useEffect(() => {
    setTitle(title)
  }, [setTitle, title])
  return <></>
}

export default PageTitle
