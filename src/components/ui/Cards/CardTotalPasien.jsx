import upIcon from "../../../assets/icon/up-arrow.svg";
import downIcon from "../../../assets/icon/down-arrow-bold.svg";

export const CardTotalPasien = ({ title, total, percentage }) => {
  let iconSrc = upIcon;
  let variant = "bg-success-subtle";

  if (title === "Pasien Lama") {
    iconSrc = downIcon;
    variant = "bg-danger-subtle";
  }

  return (
    <div className="chart_pasien shadow rounded-4">
      <div className="p-1">
        <h4 className="m-0 fs-3 fw-semibold text-center text-nowrap ">
          {title}
        </h4>
        <div className="d-flex justify-content-between align-items-center ">
          <h3 className="fs-1 fw-bold ">{total}</h3>
          <div className={`d-flex rounded-pill bg-success-subtle ${variant}`}>
            <img src={iconSrc} alt="up" />
            <span className="fw-semibold fs-5">{percentage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
