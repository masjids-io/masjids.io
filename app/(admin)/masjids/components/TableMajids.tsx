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
  InputGroup,
  Modal, // Import Modal for the confirmation dialog
} from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import ReactTable from '@/components/Table'
import type { ColumnDef, PaginationState } from '@tanstack/react-table'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'

// Define the TypeScript type for a single Masjid
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

const sizePerPageList = [5, 10, 20, 50]

export default function TableMasjids() {
  const [masjids, setMasjids] = useState<Masjid[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterBy, setFilterBy] = useState('name')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })
  const [pageCount, setPageCount] = useState(0)

  // --- MODIFICATION: State for delete confirmation modal ---
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [masjidToDelete, setMasjidToDelete] = useState<Masjid | null>(null)

  // Function to open the confirmation modal
  const handleShowDeleteModal = (masjid: Masjid) => {
    setMasjidToDelete(masjid)
    setShowDeleteModal(true)
  }

  // Function to close the confirmation modal
  const handleCloseDeleteModal = () => {
    setMasjidToDelete(null)
    setShowDeleteModal(false)
  }

  // --- MODIFICATION: Updated handleDelete function ---
  const handleDelete = async () => {
    if (!masjidToDelete) return

    try {
      const response = await fetch(`/api/masjids/delete/${masjidToDelete.id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({})) // Handle non-json responses
        throw new Error(errorData.error || 'Failed to delete masjid.')
      }

      // Refresh the table data by removing the deleted item
      setMasjids((prevMasjids) => prevMasjids.filter((masjid) => masjid.id !== masjidToDelete.id))
      handleCloseDeleteModal() // Close the modal on success
    } catch (err: any) {
      setError(err.message)
      handleCloseDeleteModal() // Close the modal on error as well
    }
  }

  // Define columns inside the component so it can access handlers
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
      cell: ({ getValue }) => new Date(getValue() as string).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <ButtonGroup size="sm">
          <Link href={`/masjids/edit/${row.original.id}`} passHref target='_blank'>
            <Button variant="outline-primary">
              <IconifyIcon icon="ri-edit-box-line" />
            </Button>
          </Link>
          {/* --- MODIFICATION: Delete button now opens the modal --- */}
          <Button variant="outline-danger" onClick={() => handleShowDeleteModal(row.original)}>
            <IconifyIcon icon="ri-delete-bin-line" />
          </Button>
          <Link href={`/masjid-detail/${row.original.id}`} passHref target='_blank'>
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

  // Debounce search term
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
      setPagination((prev) => ({ ...prev, pageIndex: 0 }))
    }, 500)
    return () => clearTimeout(timerId)
  }, [searchTerm, filterBy])

  // Fetch data
  useEffect(() => {
    const fetchMasjids = async () => {
      setLoading(true)
      setError(null)
      const params = new URLSearchParams({
        page: (pagination.pageIndex + 1).toString(),
        limit: pagination.pageSize.toString(),
      })
      if (debouncedSearchTerm) {
        params.append(filterBy, debouncedSearchTerm)
      }
      const url = `/api/masjids/get/?${params.toString()}`

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
      } finally {
        setLoading(false)
      }
    }
    fetchMasjids()
  }, [pagination, debouncedSearchTerm, filterBy])

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Row className="justify-content-between align-items-center gy-3">
                <Col md={5}>
                  <h4 className="header-title">Masjids Data Management</h4>
                  <p className="text-muted mb-0">Search, manage, and delete masjids in real-time.</p>
                </Col>
                <Col md={7}>
                  <InputGroup>
                    <Form.Select
                      value={filterBy}
                      onChange={(e) => setFilterBy(e.target.value)}
                      style={{ flex: '0 0 150px' }}
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
              {loading ? (
                <div className="text-center"><Spinner animation="border" /></div>
              ) : (
                <ReactTable<Masjid>
                  columns={columns}
                  data={masjids}
                  rowsPerPageList={sizePerPageList}
                  tableClass="table-striped"
                  showPagination
                />
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* --- MODIFICATION: Delete Confirmation Modal --- */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the masjid: <strong>{masjidToDelete?.name}</strong>? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
