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
} from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import ReactTable from '@/components/Table' // Pastikan path ini benar
import type { ColumnDef, PaginationState } from '@tanstack/react-table'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'

// 1. Definisikan tipe TypeScript untuk User
type User = {
  id: string
  email: string
  username: string
  isEmailVerified: boolean
  firstName: string
  lastName: string
  phoneNumber: string
  gender: 'MALE' | 'FEMALE'
  role: 'MASJID_ADMIN' | 'USER' | 'SUPER_ADMIN'
  createTime: string
  updateTime: string
}

// 2. Buat data dummy
const dummyUsers: User[] = [
  {
    id: '12fcec71-8aa9-4b67-b920-b21fcf38e849',
    email: 'salman@example.com',
    username: 'salman',
    isEmailVerified: true,
    firstName: 'Salman',
    lastName: 'Farhan',
    phoneNumber: '973478375',
    gender: 'MALE',
    role: 'MASJID_ADMIN',
    createTime: '2023-05-12T10:00:00Z',
    updateTime: '2024-07-21T11:30:00Z',
  },
  {
    id: 'b6f5e8d9-1c2a-4f8e-9a6d-7b3c4a5e6f7g',
    email: 'aisha.khan@example.com',
    username: 'aisha_k',
    isEmailVerified: true,
    firstName: 'Aisha',
    lastName: 'Khan',
    phoneNumber: '555123456',
    gender: 'FEMALE',
    role: 'SUPER_ADMIN',
    createTime: '2022-11-20T08:45:00Z',
    updateTime: '2024-06-15T14:20:00Z',
  },
  {
    id: 'c7g6f9e0-2d3b-5g9f-0b7e-8c4d5b6e7f8h',
    email: 'ahmed.ali@example.com',
    username: 'ahmed_ali',
    isEmailVerified: false,
    firstName: 'Ahmed',
    lastName: 'Ali',
    phoneNumber: '555987654',
    gender: 'MALE',
    role: 'USER',
    createTime: '2024-01-05T18:30:00Z',
    updateTime: '2024-01-05T18:30:00Z',
  },
  {
    id: 'd8h7g0f1-3e4c-6h0g-1c8f-9d5e6c7f8g9i',
    email: 'fatima.zahra@example.com',
    username: 'fatima_z',
    isEmailVerified: true,
    firstName: 'Fatima',
    lastName: 'Zahra',
    phoneNumber: '555111222',
    gender: 'FEMALE',
    role: 'MASJID_ADMIN',
    createTime: '2023-08-30T12:00:00Z',
    updateTime: '2024-05-10T09:00:00Z',
  },
  {
    id: 'e9i8h1f2-4f5d-7i1h-2d9g-0e6f7d8g9h0j',
    email: 'omar.hassan@example.com',
    username: 'omar_h',
    isEmailVerified: true,
    firstName: 'Omar',
    lastName: 'Hassan',
    phoneNumber: '555333444',
    gender: 'MALE',
    role: 'USER',
    createTime: '2024-02-18T20:15:00Z',
    updateTime: '2024-02-18T20:15:00Z',
  },
  {
    id: 'f0j9i2g3-5g6e-8j2i-3e0h-1f7g8e9h0i1k',
    email: 'zainab.baig@example.com',
    username: 'zainab_b',
    isEmailVerified: false,
    firstName: 'Zainab',
    lastName: 'Baig',
    phoneNumber: '555555666',
    gender: 'FEMALE',
    role: 'USER',
    createTime: '2024-06-01T11:00:00Z',
    updateTime: '2024-06-01T11:00:00Z',
  },
  {
    id: 'g1k0j3h4-6h7f-9k3j-4f1i-2g8h9f0i1j2l',
    email: 'bilal.farooq@example.com',
    username: 'bilal_f',
    isEmailVerified: true,
    firstName: 'Bilal',
    lastName: 'Farooq',
    phoneNumber: '555777888',
    gender: 'MALE',
    role: 'MASJID_ADMIN',
    createTime: '2021-09-10T14:00:00Z',
    updateTime: '2024-03-25T16:45:00Z',
  },
]

const sizePerPageList = [5, 10, 20]

export default function UserDataTable() {
  const [allUsers, setAllUsers] = useState<User[]>(dummyUsers)
  const [displayedUsers, setDisplayedUsers] = useState<User[]>([])

  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })
  const [pageCount, setPageCount] = useState(0)

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [userToDelete, setUserToDelete] = useState<User | null>(null)

  const handleShowDeleteModal = (user: User) => {
    setUserToDelete(user)
    setShowDeleteModal(true)
  }

  const handleCloseDeleteModal = () => {
    setUserToDelete(null)
    setShowDeleteModal(false)
  }

  const handleDelete = () => {
    if (!userToDelete) return
    setAllUsers((prevUsers) => prevUsers.filter((user) => user.id !== userToDelete.id))
    handleCloseDeleteModal()
  }

  const columns: ColumnDef<User>[] = [
    {
      header: 'User',
      accessorKey: 'firstName',
      cell: ({ row }) => (
        <div className="d-flex align-items-center">
          <div>
            <h5 className="m-0">
              {row.original.firstName} {row.original.lastName}
            </h5>
            <p className="m-0 text-muted fs-13">{row.original.email}</p>
          </div>
        </div>
      ),
    },
    {
      header: 'Username',
      accessorKey: 'username',
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
      header: 'Status',
      accessorKey: 'isEmailVerified',
      cell: ({ getValue }) => (
        <Badge pill bg={getValue() ? 'success-lighten' : 'warning-lighten'} className={getValue() ? 'text-success' : 'text-warning'}>
          {getValue() ? 'Verified' : 'Pending'}
        </Badge>
      ),
    },
    {
      header: 'Joined Date',
      accessorKey: 'createTime',
      cell: ({ getValue }) => new Date(getValue() as string).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <ButtonGroup size="sm">
          <Link href={`/users/edit/${row.original.id}`} passHref>
            <Button variant="outline-primary" as="a">
              <IconifyIcon icon="ri-edit-box-line" />
            </Button>
          </Link>
          <Button variant="outline-danger" onClick={() => handleShowDeleteModal(row.original)}>
            <IconifyIcon icon="ri-delete-bin-line" />
          </Button>
          <Link href={`/users/detail/${row.original.id}`} passHref>
            <Button variant="outline-success" as="a">
              <IconifyIcon icon="mdi:eye-outline" />
            </Button>
          </Link>
        </ButtonGroup>
      ),
    },
  ]

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
      setPagination((prev) => ({ ...prev, pageIndex: 0 }))
    }, 500)
    return () => clearTimeout(timerId)
  }, [searchTerm])

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      const filteredData = allUsers.filter((user) => {
        const searchLower = debouncedSearchTerm.toLowerCase()
        return (
          user.firstName.toLowerCase().includes(searchLower) ||
          user.lastName.toLowerCase().includes(searchLower) ||
          user.email.toLowerCase().includes(searchLower) ||
          user.username.toLowerCase().includes(searchLower)
        )
      })

      setPageCount(Math.ceil(filteredData.length / pagination.pageSize))

      const start = pagination.pageIndex * pagination.pageSize
      const end = start + pagination.pageSize
      setDisplayedUsers(filteredData.slice(start, end))

      setLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [pagination, debouncedSearchTerm, allUsers])

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
                    <Form.Control type="text" placeholder="Search by name, email, or username..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                  </InputGroup>
                </Col>
              </Row>
            </Card.Header>
            <CardBody>
              {loading ? (
                <div className="text-center">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              ) : (
                // --- PERUBAHAN UTAMA DI SINI ---
                // Props ditambahkan untuk membuat tabel menjadi "Controlled Component"
                <ReactTable<User>
                  columns={columns}
                  data={displayedUsers}
                  rowsPerPageList={sizePerPageList}
                  tableClass="table-striped"
                  showPagination
                  pagination={pagination}
                  onPaginationChange={setPagination}
                  pageCount={pageCount}
                  options={{
                    manualPagination: true,
                  }}
                />
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* --- Delete Confirmation Modal --- */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the user:{' '}
          <strong>
            {userToDelete?.firstName} {userToDelete?.lastName} (@{userToDelete?.username})
          </strong>
          ? This action cannot be undone.
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