import React from 'react'

type SpinnerProps = {
  tag?: React.ElementType
  className?: string
  size?: 'lg' | 'md' | 'sm'
  type?: 'bordered' | 'grow'
  color?: string
  children?: React.ReactNode
}

const Spinner = ({ tag = 'div', type = 'bordered', className, color, size, children }: SpinnerProps) => {
  const Tag: React.ElementType = tag || 'div'

  return (
    <Tag
      role="status"
      className={`${type === 'bordered' ? 'spinner-border' : type === 'grow' ? 'spinner-grow' : ''} ${color ? `text-${color}` : 'text-dark'} ${
        size ? 'avatar-' + size : ''
      } ${className}`}>
      {children}
    </Tag>
  )
}

export default Spinner
