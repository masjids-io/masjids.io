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
  Form,
  InputGroup,
  Modal,
  Alert,
} from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import ReactTable from '@/components/Table' // Pastikan path ini benar
import type { ColumnDef, PaginationState } from '@tanstack/react-table'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'

// 1. Definisikan tipe TypeScript agar sesuai dengan respons API Anda
// Catatan: Saya berasumsi API Anda juga menyertakan 'id' untuk setiap pengguna agar tautan edit/hapus berfungsi.
type User = {
  id: string
  email: string
  username: string
  role: string
}

const sizePerPageList = [5, 10, 20, 50]

export default function UserDataTable() {
  const [users, setUsers] = useState<User[]>([])
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
  const [userToDelete, setUserToDelete] = useState<User | null>(null)

  // Fungsi untuk menangani penghapusan pengguna dengan panggilan API
  const handleDelete = async () => {
    if (!userToDelete) return
    try {
      const response = await fetch(`/api/user/delete/${userToDelete.id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Gagal menghapus pengguna.')
      }
      // Hapus pengguna dari state untuk memperbarui UI secara optimis
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userToDelete.id))
    } catch (err: any) {
      setError(err.message)
    } finally {
      handleCloseDeleteModal()
    }
  }

  const handleShowDeleteModal = (user: User) => {
    setUserToDelete(user)
    setShowDeleteModal(true)
  }

  const handleCloseDeleteModal = () => {
    setUserToDelete(null)
    setShowDeleteModal(false)
  }

  // 2. Definisikan kolom agar sesuai dengan data API yang baru
  const columns: ColumnDef<User>[] = [
    {
      header: 'User',
      accessorKey: 'username',
      cell: ({ row }) => (
        <div>
          <h5 className="m-0">{row.original.username}</h5>
          <p className="m-0 text-muted fs-13">{row.original.email}</p>
        </div>
      ),
    },
    {
      header: 'Role',
      accessorKey: 'role',
      cell: ({ getValue }) => {
        const role = getValue() as string
        const formattedRole = role.replace(/_/g, ' ').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase())
        return <span className="text-capitalize">{formattedRole}</span>
      },
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <ButtonGroup size="sm">
          <Link href={`/users-managements/edit/${row.original.id}`} target='_blank' passHref>
            <Button variant="outline-primary" >
              <IconifyIcon icon="ri-edit-box-line" />
            </Button>
          </Link>
          <Button variant="outline-danger" onClick={() => handleShowDeleteModal(row.original)}>
            <IconifyIcon icon="ri-delete-bin-line" />
          </Button>
        </ButtonGroup>
      ),
    },
  ]

  // Debounce istilah pencarian
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
      setPagination((prev) => ({ ...prev, pageIndex: 0 }))
    }, 500)
    return () => clearTimeout(timerId)
  }, [searchTerm])

  // 3. useEffect untuk mengambil data dari API
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      setError(null)
      const params = new URLSearchParams({
        page: (pagination.pageIndex + 1).toString(),
        limit: pagination.pageSize.toString(),
      })
      if (debouncedSearchTerm) {
        // Asumsi API mendukung pencarian berdasarkan nama pengguna
        params.append('username', debouncedSearchTerm)
      }

      try {
        const response = await fetch(`/api/user?${params.toString()}`)
        if (!response.ok) {
          throw new Error('faliled to fetch data.')
        }
        const result = await response.json()
        
        // Sesuaikan dengan struktur respons API Anda
        if (result.data) {
          console.log('Fetched users:', result.data);
          
          setUsers(result.data)
          // Asumsi API Anda juga mengembalikan totalPages
          setPageCount(result.totalPages || Math.ceil(result.totalCount / pagination.pageSize) || 0)
        } else {
          setUsers([])
          setPageCount(0)
        }
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [pagination, debouncedSearchTerm])

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Row className="justify-content-between align-items-center gy-3">
                <Col md={5}>
                  <h4 className="header-title">User Data Management</h4>
                  <p className="text-muted mb-0">Search, manage, and delete user accounts.</p>
                </Col>
                <Col md={5}>
                  <InputGroup>
                    <InputGroup.Text>
                      <IconifyIcon icon="ri-search-line" />
                    </InputGroup.Text>
                    <Form.Control type="text" placeholder="Search by username..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                  </InputGroup>
                </Col>
              </Row>
            </Card.Header>
            <CardBody>
              {error && <Alert variant="danger">{error}</Alert>}
              {loading ? (
                <div className="text-center"><Spinner animation="border" /></div>
              ) : (
                <ReactTable<User>
                  columns={columns}
                  data={users}
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
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the user: <strong>@{userToDelete?.username}</strong>? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>Cancel</Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
