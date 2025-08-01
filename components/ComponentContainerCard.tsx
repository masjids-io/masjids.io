import clsx from 'clsx'
import type { ReactNode } from 'react'
import { Card, CardBody, CardHeader } from 'react-bootstrap'

type ContainerCardProps = {
  title: string
  titleClass?: string
  className?: string
  description?: ReactNode
  children: ReactNode
}

const ComponentContainerCard = ({ title, description, children, className }: ContainerCardProps) => {
  return (
    <Card>
      <CardHeader>
        <h4 className={clsx('card-title', { 'mb-0': !description })}>{title}</h4>
        <>{description}</>
      </CardHeader>
      <CardBody className={className}>
        <>{children}</>
      </CardBody>
    </Card>
  )
}
export default ComponentContainerCard
