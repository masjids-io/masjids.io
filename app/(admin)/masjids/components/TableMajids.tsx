'use client'
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Badge, // Import Badge for status display
  Button, // Import Button for actions
  ButtonGroup, // Import ButtonGroup for actions
} from 'react-bootstrap'
import ReactTable from '@/components/Table' // Assuming this is your table component
import type { ColumnDef } from '@tanstack/react-table'
import { masjidsTableData } from '@/app/(admin)/tables/data' // Import your masjid data
import IconifyIcon from '@/components/wrappers/IconifyIcon'

// 1. Define the full TypeScript type to match your data
type Masjid = {
  id: string
  name: string
  location: string
  isVerified: boolean
  address: {
    city: string
    [key: string]: any // Allow other address properties
  }
  phoneNumber: {
    [key: string]: any
  }
  prayerConfig: {
    [key: string]: any
  }
  createTime: string
  updateTime: string
}

// 2. Define more detailed columns with custom rendering
const columns: ColumnDef<Masjid>[] = [
  {
    header: 'Masjid Name',
    accessorKey: 'name',
  },
  {
    header: 'City',
    accessorKey: 'address.city', // Access nested data
  },
  {
    header: 'Status',
    accessorKey: 'isVerified',
    // Custom cell to render a Badge based on status
    cell: ({ getValue }) => (
      <Badge bg={getValue() ? 'success' : 'warning'}>
        {getValue() ? 'Verified' : 'Pending'}
      </Badge>
    ),
  },
  {
    header: 'Last Updated',
    accessorKey: 'updateTime',
    // Custom cell to format the date string
    cell: ({ getValue }) => {
      // Options for formatting date
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      // 'id-ID' formats it for Indonesian locale
      return new Date(getValue() as string).toLocaleDateString('id-ID', options)
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    // Custom cell for action buttons
    cell: ({ row }) => (
      <ButtonGroup size="sm">
        <Button variant="outline-primary">
          <IconifyIcon icon="ri-edit-box-line" /> 
        </Button>
        <Button variant="outline-danger">
          <IconifyIcon icon="ri-delete-bin-line" /> 
        </Button>
      </ButtonGroup>
    ),
  },
]

const sizePerPageList = [5, 10, 20]

export default function TableMasjids() {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <h4 className="header-title">Manajemen Data Masjid</h4>
            <p className="text-muted mb-0">
              Tabel data masjid dengan detail dan kustomisasi.
            </p>
          </Card.Header>
          <CardBody>
            <ReactTable<Masjid>
              columns={columns}
              data={masjidsTableData}
              pageSize={5}
              rowsPerPageList={sizePerPageList}
              tableClass="table-striped"
              showPagination
            />
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}