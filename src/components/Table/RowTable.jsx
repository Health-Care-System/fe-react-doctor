import { Button } from "../ui/Button";

export const RowTable = ({
  isError,
  isPending,
  data,
  refetch,
  renderItem,
  ifEmpty,
  paddingError,
}) => {
  if (isError) {
    return (
      <TableRow>
        <div className={paddingError ? paddingError : 'py-5'}>
          <p>Gagal memuat data!</p>
          <Button className={'btn-primary text-white mt-1'} onClick={refetch}>Coba Lagi</Button>
        </div>
      </TableRow>
    )
  }

  if (isPending) {
    return (
      <TableRow>
        <div className="d-flex justify-content-center py-2">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </TableRow>
    )
  }

  if (data.results?.length < 1) {
    return (
      <>
        <tr>
          <td colSpan={12} className="text-center py-5 rounded-3 fs-2">{ifEmpty}</td>
        </tr>
      </>
    )
  }

  return (
    <>
      {data.results?.map((data, index) => (
        renderItem(data, index)
      ))}
    </>
  )

}

const TableRow = ({ children }) => {
  return (
    <>
      <tr>
        <td colSpan={12} className="text-center">
          {children}
        </td>
      </tr>
    </>
  )
}