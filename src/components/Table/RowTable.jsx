import { Spinner } from "../Loader/Spinner";
import { Button } from "../ui/Button";
import { ColumnSkeleton } from "../ui/Skeleton/ColumnSkeleton";

export const RowTable = ({
  // React Query
  data,
  isError,
  refetch,
  isPending,
  isFetchingNextPage,

  // useRef untuk infinite scroll
  reffer,

  // Searching...
  isDebounce,
  searchValue,

  // Styling & conditionals
  ifEmpty,
  totalCol,
  totalRow,
  paddingError,
  renderItem,
}) => {
  if (isPending) {
    return (
      <ColumnSkeleton totalRow={totalRow} totalCol={totalCol} />
    )
  }

  // Jika fetching data gagal error status http = 4xx & 5xx, maka kode dibawah yang akan dirender
  if (isError) {
    return (
      <TableRow col={totalRow}>
        <div className={paddingError ? paddingError : 'py-5'}>
          <p>Gagal memuat data!</p>
          <Button className={'btn-primary text-white mt-1'} onClick={refetch}>Coba Lagi</Button>
        </div>
      </TableRow>
    )
  }

  // Jika input search ada valuenya, maka kode dibawah yang akan dipakai untuk mapping data di dalam table
  if (isDebounce) {
    return (
      data?.length > 0
        ? data?.map((res, index) => (
          renderItem(res, index, 0)
        ))
        : <tr className="text-center">
          <td colSpan={totalRow}>{`Data pasien dengan kata kunci "${searchValue}" tidak ditemukan!`}</td>
        </tr>
    )
  }

  if (data?.length < 1 || data[0] === null) {
    return (
      <tr>
        <td colSpan={totalRow} className="text-center rounded-3 fs-2">{ifEmpty}</td>
      </tr>
    )
  }
  // Jika input search tidak ada valuenya, maka kode dibawah yang akan dipakai untuk mapping data di dalam table
  return (
    <>
      {data?.map((item) => (
        item?.results?.map((res, index) => (
          renderItem(res, index, item?.pagination?.offset)
        ))
      ))
      }

      {/* kode dibawah yg memicu infinite scrolling */}
      <tr colSpan={totalRow} ref={reffer}>
        {isFetchingNextPage
          ? <td colSpan={totalRow} className="text-center text-secondary"><Spinner /></td>
          : ''
        }
      </tr>
    </>
  )
}

const TableRow = ({ children, col }) => {
  return (
    <>
      <tr>
        <td colSpan={col} className="text-center">
          {children}
        </td>
      </tr>
    </>
  )
}