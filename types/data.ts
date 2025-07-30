import type { IconifyIconProps } from '@iconify/react'
import type { StaticImageData } from 'next/image'
import type { BootstrapVariantType } from './component-props'

export type IdType = string

export type LanguageType = {
  name: string
  flag: StaticImageData
}

export type MessageType = {
  name: string
  avatar: StaticImageData
  description: string
  createdAt: Date
}

export type NotificationType = {
  title: string
  icon: IconifyIconProps
  time: Date
  variant: string
}

export type UserType = {
  id: string
  name: string
  avatar: StaticImageData
  location: string
}

export type OrderType = {
  id: string
  userId: UserType['id']
  user?: UserType
  orderId: number
  price: number
  requestedBy: string
  status: 'Pending Approval' | 'Cancelled Requested' | 'Approved'
}

export type OrderStatusType = {
  icon: IconifyIconProps
  title: string
  description: string
  time: Date
}

export type KanbanSectionType = {
  id: IdType
  title: string
}

export type KanbanTaskType = {
  id: IdType
  sectionId: KanbanSectionType['id']
  section?: KanbanSectionType
  title: string
  description?: string
  image?: StaticImageData
  variant: string
  views: number
  share: number
  commentsCount: number
  progress?: number
  members: StaticImageData[]
}

export type InvoiceType = {
  id: IdType
  userId: UserType['id']
  user?: UserType
  product: string
  date: Date
  amount: number
  vendor: string
  status: 'Paid' | 'Unpaid'
  review: {
    rate: number
    vote: string
  }
}

export type ReferralType = {
  image: StaticImageData
  name: string
  view: string
  sales: number
  conversion: string
  total: number
  rate: number
}

export type ContactType = {
  id: IdType
  image: StaticImageData
  userId: UserType['id']
  user?: UserType
  position: string
  social: {
    follower: number
    following: number
    post: number
  }
}

export type ActivityType = {
  name: string
  title: string
  description?: string
  images?: StaticImageData[]
  time: Date
}

export type ProjectType = {
  name: string
  startDate: Date
  dueDate: Date
  status: 'Work in Progress' | 'Pending' | 'Done' | 'Coming soon'
}

export type TimelineType = {
  [key: string]: {
    date: string
    time: string
    text: string
    images?: StaticImageData[]
    variant?: string
  }[]
}

export type PricingPlanType = {
  name: string
  icon: IconifyIconProps
  price: number
  description: string
  features: {
    icon: IconifyIconProps
    name: string
  }[]
  variant: BootstrapVariantType
}
