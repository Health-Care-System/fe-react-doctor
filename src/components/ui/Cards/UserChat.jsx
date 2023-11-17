
export const UserChat = ({ name, image, message, date }) => {
  return (
    <>
      <div className="d-inline-flex align-items-center gap-3">
        <div className="text-center mb-md-2 mt-md-2">
          <img src={image} width={50} alt="" />
        </div>
        <div className="d-flex flex-column w-100">
          <div className="d-flex justify-content-between">
            <p className="fw-semibold line-clamp-1">{name}</p>
            <p className="m-0 fs-4">{date}</p>
          </div>
          <p className=" line-clamp-1">{message}</p>
        </div>
      </div>
    </>
  )
}
