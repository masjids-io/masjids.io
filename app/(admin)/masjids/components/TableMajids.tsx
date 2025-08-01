'use client'

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Badge,
  Button,
  ButtonGroup,
  Spinner,
  Alert,
  Form,
  InputGroup, // Import InputGroup for combining the selector and input
} from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import ReactTable from '@/components/Table'
import type { ColumnDef, PaginationState } from '@tanstack/react-table'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'

// Define the TypeScript type for a single Masjid to match your API response
type Masjid = {
  id: string
  name: string
  location: string
  isVerified: boolean
  address: {
    city: string
    [key: string]: any
  }
  updateTime: string
}

// Define the columns for the table (No changes here)
const columns: ColumnDef<Masjid>[] = [
  {
    header: 'Masjid Name',
    accessorKey: 'name',
  },
  {
    header: 'City',
    accessorKey: 'address.city',
  },
  {
    header: 'Status',
    accessorKey: 'isVerified',
    cell: ({ getValue }) => (
      <Badge bg={getValue() ? 'success' : 'warning'}>
        {getValue() ? 'Verified' : 'Pending'}
      </Badge>
    ),
  },
  {
    header: 'Last Updated',
    accessorKey: 'updateTime',
    cell: ({ getValue }) => {
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return new Date(getValue() as string).toLocaleDateString('en-US', options)
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <ButtonGroup size="sm">
        <Button variant="outline-primary">
          <IconifyIcon icon="ri-edit-box-line" />
        </Button>
        <Button variant="outline-danger">
          <IconifyIcon icon="ri-delete-bin-line" />
        </Button>
        <Link href={`/masjid-detail/${row.original.id}`} passHref>
          <Button variant="outline-success">
            <span>
              <IconifyIcon icon="mdi:eye-outline" />
            </span>
          </Button>
        </Link>
      </ButtonGroup>
    ),
  },
]

const sizePerPageList = [5, 10, 20, 50]

export default function TableMasjids() {
  const [masjids, setMasjids] = useState<Masjid[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // --- MODIFICATION 1: Unified search state ---
  // State for the single search term
  const [searchTerm, setSearchTerm] = useState('')
  // State for the selected filter type ('name' or 'location')
  const [filterBy, setFilterBy] = useState('name')
  // State for the debounced search term
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })
  const [pageCount, setPageCount] = useState(0)

  // Debounce the search term to avoid excessive API calls
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
      // Reset to the first page when search term or filter changes
      setPagination((prev) => ({ ...prev, pageIndex: 0 }))
    }, 500) // 500ms delay

    return () => {
      clearTimeout(timerId)
    }
  }, [searchTerm, filterBy]) // Re-run debounce effect if search term or filter type changes

  // --- MODIFICATION 2: Updated fetch logic ---
  // useEffect to fetch data whenever pagination, debounced search term, or filter type change
  useEffect(() => {
    const fetchMasjids = async () => {
      setLoading(true)
      setError(null)

      const params = new URLSearchParams({
        page: (pagination.pageIndex + 1).toString(),
        limit: pagination.pageSize.toString(),
      })

      // Add the search parameter based on the selected filter type
      if (debouncedSearchTerm) {
        params.append(filterBy, debouncedSearchTerm)
      }

      const url = `/api/masjids/get?${params.toString()}`

      try {
        const response = await fetch(url)
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Failed to fetch data')
        }
        const result = await response.json()

        if (result.listMasjidResponse) {
          setMasjids(result.listMasjidResponse.masjids || [])
          setPageCount(result.listMasjidResponse.totalPages || 0)
        } else {
          throw new Error('Data format is incorrect')
        }
      } catch (err: any) {
        setError(err.message)
        console.error('Fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchMasjids()
  }, [pagination, debouncedSearchTerm, filterBy]) // Re-run effect with updated dependencies

  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <Row className="justify-content-between align-items-center gy-3">
              <Col md={5}>
                <h4 className="header-title">Masjids Data Management</h4>
                <p className="text-muted mb-0">Search and manage masjids in real-time.</p>
              </Col>
              <Col md={7}>
                {/* --- MODIFICATION 3: Unified search input UI --- */}
                <InputGroup>
                  <Form.Select
                    value={filterBy}
                    onChange={(e) => setFilterBy(e.target.value)}
                    style={{ flex: '0 0 150px' }} // Give the select a fixed width
                  >
                    <option value="name">Filter by Name</option>
                    <option value="location">Filter by Location</option>
                  </Form.Select>
                  <Form.Control
                    type="text"
                    placeholder={`Search by ${filterBy}...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </InputGroup>
              </Col>
            </Row>
          </Card.Header>
          <CardBody>
            {error && <Alert variant="danger">{error}</Alert>}
            {loading && (
              <div className="text-center">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            )}
            {!loading && (
              <ReactTable<Masjid>
                columns={columns}
                data={masjids}
                rowsPerPageList={sizePerPageList}
                tableClass="table-striped"
                showPagination
                // Pass state and handlers for server-side pagination
              />
            )}
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}