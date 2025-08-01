import type { ReactElement, ReactNode } from 'react'
import type { DateClickArg, DropArg } from '@fullcalendar/interaction'
import type { EventClickArg, EventDropArg, EventInput } from '@fullcalendar/core'
import type { OffcanvasControlType } from './context'
import type { Control, FieldPath, FieldValues } from 'react-hook-form'
import type { ColumnDef, PaginationState, Table, TableOptions } from '@tanstack/react-table'

export type BootstrapVariantType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'

export type ChildrenType = Readonly<{ children: ReactNode }>

export type FormInputProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
  control: Control<TFieldValues>
  name: TName
  id?: string
  containerClassName?: string
  label?: string | ReactNode
  placeholder?: string
  noValidate?: boolean
  labelClassName?: string
}

export type SelectFormInputOptionType = {
  value: string
  label: string
}

export type ReactTableProps<RowType> = {
  options?: TableOptions<RowType>
  columns: ColumnDef<RowType>[]
  data: RowType[]
  showPagination?: boolean
  rowsPerPageList?: number[]
  pageSize?: number
  tableClass?: string
  theadClass?: string
}

export type ReactTablePaginationProps<RowType> = {
  table: Table<RowType>
  rowsPerPageList?: number[]
  currentPage: number
  totalPages: number
  pagination: PaginationState
}

export type CalendarFormType = {
  isEditable: boolean
  eventData?: EventInput
  onUpdateEvent: (data: any) => void
  onRemoveEvent: () => void
  onAddEvent: (data: any) => void
} & OffcanvasControlType

export type CalendarProps = {
  onDateClick: (arg: DateClickArg) => void
  onEventClick: (arg: EventClickArg) => void
  onDrop: (arg: DropArg) => void
  onEventDrop: (arg: EventDropArg) => void
  events: EventInput[]
}
