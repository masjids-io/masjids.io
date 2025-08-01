import type { InvoiceType, KanbanSectionType, KanbanTaskType, ReferralType } from '@/types/data'
import { addOrSubtractDaysFromDate } from '@/utils/date'

import avatar1 from '@/assets/images/users/avatar-1.jpg'

import animationImg from '@/assets/images/animation-bg.jpg'
import small1 from '@/assets/images/small/small-1.jpg'
import small2 from '@/assets/images/small/small-2.jpg'

import facebookLogo from '@/assets/images/brands/Facebook-logo.png'
import twitterLogo from '@/assets/images/brands/twitter.png'
import pinterestLogo from '@/assets/images/brands/pinterest.png'
import dribbbleLogo from '@/assets/images/brands/dribbble.png'
import websiteLogo from '@/assets/images/brands/website.webp'
import emailLogo from '@/assets/images/brands/email.png'

export const kanbanSectionsData: KanbanSectionType[] = [
  {
    id: '501',
    title: 'Do',
  },
  {
    id: '502',
    title: 'Review',
  },
  {
    id: '503',
    title: 'Progress',
  },
  {
    id: '504',
    title: 'Done',
  },
]

export const kanbanTasksData: KanbanTaskType[] = [
  {
    id: '1001',
    sectionId: '501',
    title: 'iOS App home page',
    image: small1,
    variant: 'warning',
    views: 5,
    share: 18,
    commentsCount: 12,
    members: [avatar1],
  }
]

export const invoicesData: InvoiceType[] = [
  {
    id: '349122',
    userId: '101',
    product: 'data',
    date: addOrSubtractDaysFromDate(2),
    amount: 111.0,
    vendor: 'Company Lac.',
    status: 'Paid',
    review: {
      rate: 4.0,
      vote: '199 Votes',
    },
  }
]

export const referralsData: ReferralType[] = [
  {
    image: facebookLogo,
    name: 'Facebook',
    view: '38,512',
    sales: 608,
    conversion: '11.08%',
    total: 10000.0,
    rate: 4.9,
  },
]
