// Ini adalah komponen wrapper untuk @tanstack/react-table.
// Komponen ini dibuat "terkontrol", tidak lagi memiliki state pagination sendiri.
// Semua state dan logika pagination diberikan dari komponen induk melalui props.

import {
  Table,
  // Tidak perlu lagi useState dari React
} from 'react-bootstrap'
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef,
  type PaginationState,
  type TableOptions,
  type Updater,
} from '@tanstack/react-table'

// Asumsi Anda memiliki komponen Pagination terpisah seperti ini
import Pagination from './Pagination'

// Tipe props didefinisikan di sini untuk kelengkapan.
// Anda bisa pindahkan ke file /types/component-props.ts
interface ReactTableProps<RowType extends object> {
  columns: ColumnDef<RowType>[]
  data: RowType[]
  showPagination?: boolean
  rowsPerPageList?: number[]
  tableClass?: string
  theadClass?: string
  
  // PROPS BARU UNTUK KONTROL DARI INDUK
  pagination: PaginationState
  onPaginationChange: (updater: Updater<PaginationState>) => void
  pageCount: number
  options?: Omit<TableOptions<RowType>, 'data' | 'columns' | 'state' | 'onPaginationChange' | 'getCoreRowModel'>
}

const ReactTable = <RowType extends object>({
  columns,
  data,
  showPagination = false,
  rowsPerPageList,
  tableClass,
  theadClass,
  // --- Menerima state & fungsi dari props ---
  pagination,
  onPaginationChange,
  pageCount,
  options,
}: ReactTableProps<RowType>) => {
  // --- TIDAK LAGI MENGGUNAKAN useState INTERNAL ---
  // const [pagination, setPagination] = useState<PaginationState>(...)

  const table = useReactTable({
    // 'options' dari props bisa berisi 'manualPagination: true', dll.
    ...options,
    data,
    columns,
    // Gunakan state dan fungsi setter dari props
    state: {
      pagination,
    },
    onPaginationChange: onPaginationChange,
    // Beri tahu tabel berapa total halaman (penting untuk manual pagination)
    pageCount: pageCount,
    // Fungsi inti untuk membuat baris dan paginasi
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
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Komponen Pagination tidak perlu diubah, karena semua info sudah ada di 'table' instance */}
      {showPagination && table.getPageCount() > 1 && (
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