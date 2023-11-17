import { Link } from "react-router-dom"

export const CardContainer = ({ children, title, detail, className }) => {
  return (
    <>
      <div className={`card border-0 rounded-4 ${className}`} style={{ boxShadow: "0px 0px 24px 0px rgba(0, 0, 0, 0.10)" }}>
        <div className="card-body">
          <div className="d-flex flex-column gap-3 ">
            <div className="d-flex align-items-center justify-content-between gap-4">
              <h5 className="fw-semibold fs-2 m-0">{title}</h5>
              <Link className="fw-semibold text-decoration-none fs-4 m-0 text-info">{detail}</Link>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}