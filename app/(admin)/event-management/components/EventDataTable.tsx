'use client'

import {
  Card,
  Col,
  Row,
  Button,
  ButtonGroup,
  Spinner,
  Form,
  InputGroup,
  Modal,
  Alert,
  CardBody,
  CardHeader,
} from 'react-bootstrap'
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import type { ColumnDef, PaginationState } from '@tanstack/react-table'
import ReactTable from '@/components/Table'

type EventType = {
  id: string
  masjidId: string
  name: string
  description: string
  startTime: string
  endTime: string
  requiresRsvp: boolean
  maxParticipants: number
  livestreamLink: string | null
}

const sizePerPageList = [5, 10, 20, 50]

export default function EventDataTable() {
  const [events, setEvents] = useState<EventType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })
  const [pageCount, setPageCount] = useState(0)

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [eventToDelete, setEventToDelete] = useState<EventType | null>(null)

  const fetchEvents = useCallback(async () => {
    setLoading(true)
    setError(null)
    const params = new URLSearchParams({
      page: (pagination.pageIndex + 1).toString(),
      limit: pagination.pageSize.toString(),
    })
    if (debouncedSearchTerm) {
      params.append('search', debouncedSearchTerm)
    }

    try {
      const response = await fetch(`/api/event/get?${params.toString()}`)
      if (!response.ok) {
        throw new Error('Failed to fetch event data.')
      }
      const result = await response.json()

      if (result.data) {
        setEvents(result.data)
        setPageCount(result.totalPages || 0)
      } else {
        setEvents([])
        setPageCount(0)
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [pagination, debouncedSearchTerm])

  const handleDelete = async () => {
    if (!eventToDelete) return
    try {
      const response = await fetch(`/api/event/delete/${eventToDelete.id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Failed to delete event.')
      }
      fetchEvents()
    } catch (err: any) {
      setError(err.message)
    } finally {
      handleCloseDeleteModal()
    }
  }

  const handleShowDeleteModal = (event: EventType) => {
    setEventToDelete(event)
    setShowDeleteModal(true)
  }

  const handleCloseDeleteModal = () => {
    setEventToDelete(null)
    setShowDeleteModal(false)
  }

  const columns = useMemo<ColumnDef<EventType>[]>(
    () => [
      {
        header: 'Event Name',
        accessorKey: 'name',
        cell: ({ row }) => (
          <div>
            <h5 className="m-0">{row.original.name}</h5>
            <p className="m-0 text-muted fs-13">{row.original.description}</p>
          </div>
        ),
      },
      {
        header: 'Start Time',
        accessorKey: 'startTime',
        cell: ({ getValue }) => new Date(getValue<string>()).toLocaleString('en-US'),
      },
      {
        header: 'End Time',
        accessorKey: 'endTime',
        cell: ({ getValue }) => new Date(getValue<string>()).toLocaleString('en-US'),
      },
      {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <ButtonGroup size="sm">
            <a href={`/event-management/edit/${row.original.id}`} className="btn btn-outline-primary">
              Edit
            </a>
            <Button variant="outline-danger" onClick={() => handleShowDeleteModal(row.original)}>
              Delete
            </Button>
          </ButtonGroup>
        ),
      },
    ],
    []
  )

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
      setPagination((prev) => ({ ...prev, pageIndex: 0 }))
    }, 500)
    return () => clearTimeout(timerId)
  }, [searchTerm])

  useEffect(() => {
    fetchEvents()
  }, [fetchEvents])

  return (
    <>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <Row className="justify-content-between align-items-center gy-3">
                <Col md={5}>
                  <h4 className="header-title">Activity Data Management</h4>
                  <p className="text-muted mb-0">Search, manage, and delete activity data.</p>
                </Col>
                <Col md={5}>
                  <InputGroup>
                    <InputGroup.Text>🔍</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Search by activity name..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              {error && <Alert variant="danger">{error}</Alert>}
              {loading ? (
                <div className="text-center">
                  <Spinner animation="border" />
                </div>
              ) : (
                <ReactTable<EventType>
                  columns={columns}
                  data={events}
                  rowsPerPageList={sizePerPageList}
                  tableClass="table-striped"
                  showPagination
                  pagination={pagination}
                  onPaginationChange={setPagination}
                  pageCount={pageCount}
                  options={{ manualPagination: true }}
                />
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the activity:{' '}
          <strong>{eventToDelete?.name}</strong>? This action cannot be undone.
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
