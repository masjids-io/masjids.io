import PageTitle from '@/components/PageTitle'
import AllDataTables from './components/AllDataTables/page'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Data Tables' }

const DataTables = () => {
  return (
    <>
      <PageTitle title="Data Tables" />
      <AllDataTables />
    </>
  )
}

export default DataTables
