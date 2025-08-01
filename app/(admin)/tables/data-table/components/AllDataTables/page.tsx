'use client'
import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap'
import ReactTable from '@/components/Table'

//dummy data
import { expandableDataRecords } from '@/app/(admin)/tables/data'
import { Employee } from '@/app/(admin)/tables/types'
import type { ColumnDef } from '@tanstack/react-table'

const columns: ColumnDef<Employee>[] = [
  {
    id: '1',
    header: 'Name',
    accessorKey: 'name',
  },
  {
    id: '2',
    header: 'Position',
    accessorKey: 'name',
  },
  {
    id: '3',
    header: 'Office',
    accessorKey: 'office',
  },
  {
    id: '4',
    header: 'Age',
    accessorKey: 'age',
  },
  {
    id: '5',
    header: 'Start date',
    accessorKey: 'startDate',
  },
  {
    id: '6',
    header: 'Salary',
    accessorKey: 'salary',
  },
]

const sizePerPageList = [2, 5, 10, 20, 50]

const AllDataTables = () => {
  return (
    <>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <h4 className="header-title">Pagination &amp; Sort</h4>
              <p className="text-muted mb-0">A simple example of table with pagination and column sorting</p>
            </CardHeader>
            <CardBody>
              <ReactTable<Employee>
                columns={columns}
                data={expandableDataRecords}
                pageSize={5}
                rowsPerPageList={sizePerPageList}
                tableClass="table-striped"
                showPagination
              />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h4 className="header-title">Search</h4>
              <p className="text-muted mb-0">A Table allowing search</p>
            </Card.Header>
            <CardBody>
              <ReactTable<Employee>
                columns={columns}
                data={expandableDataRecords}
                pageSize={5}
                rowsPerPageList={sizePerPageList}
                tableClass="table-striped"
                showPagination
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}
export default AllDataTables
