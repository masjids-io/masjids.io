import PageTitle from '@/components/PageTitle'
import { Button } from 'react-bootstrap'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'
import TableUsers from './components/TableUsers'

const Starter = () => {
    return (
        <>
            <PageTitle title="Masjids Management" />
            <Link href="/users-managements/create" className="d-flex justify-content-end">
                <Button variant="success " size="lg" className="fs-16 flex-centered gap-1 mb-4" id="btn-new-event">
                    <IconifyIcon icon="ic:baseline-person-add" /> Create New User Data
                </Button>
            </Link>
            <TableUsers />
        </>
    )
}
export default Starter
