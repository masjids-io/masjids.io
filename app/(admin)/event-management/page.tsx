import PageTitle from '@/components/PageTitle'
import type { Metadata } from 'next'
import { lazy, Suspense } from 'react'
import { Card, CardBody, Col, Row } from 'react-bootstrap'
const CalendarPage = lazy(() => import('./components/CalendarPage'))

export default function Page () {
  return (
    <>
      <PageTitle title="Event management" />
      <Row>
        <Col xs={12}>
          <Card>
            <CardBody>
              <Row>
                <Suspense>
                  <CalendarPage />
                </Suspense>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}

