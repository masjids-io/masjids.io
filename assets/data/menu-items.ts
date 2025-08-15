import type { MenuItemType } from '@/types/menu'

export const MENU_ITEMS: MenuItemType[] = [
  {
    key: 'menu',
    label: 'Main',
    isTitle: true,
    
  },
  {
    key: 'home',
    icon: 'ri:dashboard-2-line',
    label: 'Home',
    badge: {
      text: '',
      variant: 'success',
    },
    url: '/home',
  },
    {
    key: 'event-management',
    icon: 'ri:calendar-event-line',
    label: 'Event Management',
    badge: {
      text: '',
      variant: 'success',
    },
    url: '/event-management',
  },
    {
    key: 'menu',
    label: 'admin',
    isTitle: true,
    roles: ['MASJID_ADMIN'], 
  },
    {
    key: 'masjids',
    icon: 'material-symbols:mosque',
    label: 'masjids',
    badge: {
      text: '',
      variant: 'success',
    },
    url: '/masjids',
    roles: ['MASJID_ADMIN'], 
  },
      {
    key: 'users-managements',
    icon: 'material-symbols:supervised-user-circle',
    label: 'User Management',
    badge: {
      text: '',
      variant: 'success',
    },
    url: '/users-managements',
    roles: ['MASJID_ADMIN'], 
  },
]
