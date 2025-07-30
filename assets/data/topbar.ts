import type { LanguageType, MessageType, NotificationType } from '@/types/data'


import avatar1 from '@/assets/images/users/avatar-1.jpg'

import { addOrSubtractDaysFromDate, addOrSubtractMinutesFromDate } from '@/utils/date'

export const languagesData: LanguageType[] = [

]

export const messages: MessageType[] = [
  {
    name: 'ihklas',
    avatar: avatar1,
    description: 'what is the best way to get started with masjid.io?',
    createdAt: addOrSubtractDaysFromDate(1),
  }
]

export const notifications: NotificationType[] = [
  {
    title: 'Caleb Flakelar regitered as admin',
    time: addOrSubtractMinutesFromDate(1),
    icon: { icon: 'mdi:account' },
    variant: 'primary',
  },
]
