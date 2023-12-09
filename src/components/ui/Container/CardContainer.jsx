import { Link } from "react-router-dom"

export const CardContainer = ({ children, title, detail, className, hrefTo, style, ...props }) => {
  return (
    <>
      <div {...props} className={`card border-0 rounded-4 ${className}`} style={{ boxShadow: "0px 0px 24px 0px rgba(0, 0, 0, 0.10)", height: 'fit-content', style }}>
        <div className="card-body">
          <div className="d-flex flex-column gap-3 ">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="fw-semibold fs-2 m-0 text-nowrap">{title}</h5>
              <Link to={hrefTo} className="fw-semibold text-decoration-none text-nowrap fs-4 m-0 text-primary">{detail}</Link>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
