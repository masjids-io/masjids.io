import PageTitle from '@/components/PageTitle'
import TableMajids from './components/TableMajids'
import { Button } from 'react-bootstrap'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'

const Starter = () => {
    return (
        <>
            <PageTitle title="Masjids Management" />
            <Link href="/masjids/create" className="d-flex justify-content-end">
                <Button variant="success " size="lg" className="fs-16 flex-centered gap-1 mb-4" id="btn-new-event">
                    <IconifyIcon icon="mdi:plus-circle" /> Create New Masjid Data
                </Button>
            </Link>
            <TableMajids />
        </>
    )
}
export default Starter
