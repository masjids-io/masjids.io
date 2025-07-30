import { currentYear, developedBy } from '@/context/constants'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col xs={12} className="text-center">
            {currentYear} © masjids.io - Theme by <b>{developedBy}</b>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer
