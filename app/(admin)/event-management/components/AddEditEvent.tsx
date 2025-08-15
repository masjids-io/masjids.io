'use client'
import { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Col, Modal, ModalBody, ModalHeader, ModalTitle, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import SelectFormInput from '@/components/forms/SelectFormInput'
import TextFormInput from '@/components/forms/TextFormInput'
import type { CalendarFormType } from '@/types/component-props'
import type { SubmitEventType } from '../../../../hooks/useCalendar'

const AddEditEvent = ({ eventData, isEditable, onAddEvent, onRemoveEvent, onUpdateEvent, open, toggle }: CalendarFormType) => {
  const eventFormSchema = yup.object({
    title: yup.string().required('Please enter event title'),
    category: yup.string().required('Please select event category'),
  })

  type FormValues = yup.InferType<typeof eventFormSchema>

  const { handleSubmit, control, setValue, reset } = useForm<FormValues>({
    resolver: yupResolver(eventFormSchema),
    defaultValues: {
      title: eventData?.title ?? '',
      category: eventData?.className ? String(eventData.className) : 'bg-danger',
    },
  })

  useEffect(() => {
    if (eventData?.title) {
      setValue('title', String(eventData?.title))
      setValue('category', String(eventData?.className))
    }
  }, [eventData, setValue])

  useEffect(() => {
    if (!open) reset()
  }, [open, reset])

  const onSubmitEvent = (data: SubmitEventType) => {
    isEditable ? onUpdateEvent(data) : onAddEvent(data)
  }

  return (
    <Modal show={open} onHide={toggle} className="fade" tabIndex={-1}>
      <div className="modal-content">
        <form onSubmit={handleSubmit(onSubmitEvent)} className="needs-validation" name="event-form">
          <ModalHeader className="modal-header py-3 px-4 border-bottom-0" closeButton>
            <ModalTitle className="modal-title" as="h5">
              Event
            </ModalTitle>
          </ModalHeader>
          <ModalBody className="px-4 pb-4 pt-0">
            <Row>
              <Col xs={12}>
                <TextFormInput control={control} name="title" containerClassName="mb-3" label="Event Name" placeholder="Insert Event Name" />
              </Col>
              <Col xs={12}>
                <SelectFormInput
                  control={control}
                  name="category"
                  label="Category"
                  containerClassName="mb-3"
                  options={[
                    { value: 'bg-danger', label: 'Danger' },
                    { value: 'bg-success', label: 'Success' },
                    { value: 'bg-primary', label: 'Primary' },
                    { value: 'bg-info', label: 'Info' },
                    { value: 'bg-warning', label: 'Warning' },
                  ]}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                {isEditable && (
                  <button onClick={onRemoveEvent} type="button" className="btn btn-danger">
                    Delete
                  </button>
                )}
              </Col>
              <Col xs={6} className="text-end">
                <Button variant="light" type="button" className="me-1" onClick={toggle}>
                  Close
                </Button>
                <Button variant="success" type="submit">
                  Save
                </Button>
              </Col>
            </Row>
          </ModalBody>
        </form>
      </div>
    </Modal>
  )
}

export default AddEditEvent
