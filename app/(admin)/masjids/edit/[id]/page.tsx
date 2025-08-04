'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Card, CardBody, Spinner, Alert } from 'react-bootstrap'
import CreateMasjidForm from '../components/CreateMasjidForm'
import { Masjid } from '@/types/majids'

export default function EditMasjidPage() {
  const [masjidData, setMasjidData] = useState<Masjid | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const params = useParams()
  const id = params.id as string

  useEffect(() => {
    if (!id) return

    const fetchMasjid = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/masjids/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch masjid data.')
        }
        const result = await response.json()
        console.log('Fetched masjid data:', result);
        
        setMasjidData(result.Masjid)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMasjid()
  }, [id])

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" />
      </div>
    )
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>
  }

  if (!masjidData) {
    return <Alert variant="warning">Masjid not found.</Alert>
  }

  return (
    <Card>
      <Card.Header>
        <h4 className="header-title">Edit Masjid: {masjidData.name}</h4>
      </Card.Header>
      <CardBody>
        {/* We will reuse and adapt the CreateMasjidForm for editing */}
        <CreateMasjidForm isEditMode initialData={masjidData} />
      </CardBody>
    </Card>
  )
}
