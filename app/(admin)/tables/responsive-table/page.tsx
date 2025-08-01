import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { responsiveTableData } from '../data'
import type { Metadata } from 'next'
import PageTitle from '@/components/PageTitle'

export const metadata: Metadata = { title: 'Responsive Table' }

const ResponsiveTable = () => {
  return (
    <>
      <PageTitle title="Responsive Table" />
      <Row>
        <Col xs={12}>
          <Card>
            <CardBody>
              <div className="responsive-table-plugin">
                <div className="table-rep-plugin">
                  <div className="table-responsive" data-pattern="priority-columns">
                    <table id="tech-companies-1" className="table table-striped">
                      <thead>
                        <tr>
                          <th>Company</th>
                          <th data-priority={1}>Last Trade</th>
                          <th data-priority={3}>Trade Time</th>
                          <th data-priority={1}>Change</th>
                          <th data-priority={3}>Prev Close</th>
                          <th data-priority={3}>Open</th>
                          <th data-priority={6}>Bid</th>
                          <th data-priority={6}>Ask</th>
                          <th data-priority={6}>1y Target Est</th>
                        </tr>
                      </thead>
                      <tbody>
                        {responsiveTableData.map((item, idx) => (
                          <tr key={idx}>
                            <th>{item.companyName}</th>
                            <td>{item.lastTrade}</td>
                            <td>{item.tradeTime}</td>
                            <td>{item.change}</td>
                            <td>{item.prevClose}</td>
                            <td>{item.open}</td>
                            <td>{item.bid}</td>
                            <td>{item.ask}</td>
                            <td>{item.target}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}
export default ResponsiveTable
