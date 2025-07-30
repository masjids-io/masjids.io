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
]
