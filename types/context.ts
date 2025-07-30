import type { Control } from 'react-hook-form'
import type { KanbanSectionType, KanbanTaskType } from './data'
import type { BaseSyntheticEvent } from 'react'
import type { DropResult } from '@hello-pangea/dnd'

export type ThemeType = 'light' | 'dark'

export type LayoutPositionType = 'fixed' | 'scrollable'

export type LayoutModeType = 'fluid' | 'boxed'

export type OffcanvasControlType = {
  open: boolean
  toggle: () => void
}

export type MenuType = {
  theme: ThemeType
  size: 'default' | 'compact' | 'condensed' | 'full'
}

export type LayoutState = {
  theme: ThemeType
  topbarTheme: ThemeType
  menu: MenuType
  position: LayoutPositionType
  mode: LayoutModeType
}

export type LayoutOffcanvasStatesType = {
  showThemeCustomizer: boolean
  showBackdrop: boolean
}

export type LayoutType = LayoutState & {
  themeMode: ThemeType
  changeTheme: (theme: ThemeType) => void
  changeTopbarTheme: (theme: ThemeType) => void
  changePosition: (position: LayoutPositionType) => void
  changeMode: (position: LayoutModeType) => void
  changeMenu: {
    theme: (theme: MenuType['theme']) => void
    size: (size: MenuType['size']) => void
  }
  themeCustomizer: OffcanvasControlType
  toggleBackdrop: () => void
  resetSettings: () => void
}

export type FormControlSubmitType = {
  control: Control<any>
  newRecord: (values: BaseSyntheticEvent) => void
  editRecord: (values: BaseSyntheticEvent) => void
  deleteRecord: (id: string) => void
}

export type KanbanDialogType = {
  showNewTaskModal: boolean
  showSectionModal: boolean
}

export type KanbanType = {
  sections: KanbanSectionType[]
  activeSectionId: KanbanSectionType['id'] | undefined
  newTaskModal: {
    open: boolean
    toggle: (sectionId?: KanbanSectionType['id'], taskId?: KanbanTaskType['id']) => void
  }
  sectionModal: {
    open: boolean
    toggle: () => void
  }
  taskFormData: KanbanTaskType | undefined
  sectionFormData: KanbanSectionType | undefined
  taskForm: FormControlSubmitType
  sectionForm: FormControlSubmitType
  getAllTasksPerSection: (sectionId: KanbanSectionType['id']) => KanbanTaskType[]
  onDragEnd: (result: DropResult) => void
}
