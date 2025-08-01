import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable, type PaginationState } from '@tanstack/react-table'
import { useState } from 'react'
import { Table } from 'react-bootstrap'

import type { ReactTableProps } from '@/types/component-props'
import Pagination from './Pagination'

const ReactTable = <RowType,>({
  options,
  columns,
  data,
  pageSize,
  showPagination,
  rowsPerPageList,
  tableClass,
  theadClass,
}: ReactTableProps<RowType>) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: pageSize ?? 5,
  })

  const table = useReactTable({
    ...options,
    data,
    columns,
    onPaginationChange: setPagination,
    state: { pagination },
    getCoreRowModel: getCoreRowModel(),
    ...(showPagination && { getPaginationRowModel: getPaginationRowModel() }),
  })

  return (
    <>
      <Table hover responsive className={tableClass}>
        <thead className={theadClass}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>

      {showPagination && (
        <Pagination
          table={table}
          currentPage={table.getState().pagination.pageIndex + 1}
          totalPages={table.getPageCount()}
          rowsPerPageList={rowsPerPageList}
          pagination={pagination}
        />
      )}
    </>
  )
}

export default ReactTable
