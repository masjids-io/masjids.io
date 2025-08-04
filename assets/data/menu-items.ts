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
    key: 'masjids',
    icon: 'material-symbols:mosque',
    label: 'masjids',
    badge: {
      text: '',
      variant: 'success',
    },
    url: '/masjids',
  },
      {
    key: 'users-managements',
    icon: 'material-symbols:supervised-user-circle',
    label: 'User Managements',
    badge: {
      text: '',
      variant: 'success',
    },
    url: '/users-managements',
  },
]
