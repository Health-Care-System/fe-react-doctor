
import circleWoman from "../../../assets/icon/circle-women.svg";
import circleMan from "../../../assets/icon/circle-man.svg";
import chartjs from "../../../assets/icon/chartjs.svg";

export const ChartGenderPasien = ({ data }) => {
  return (
    <div className="chart_gender shadow rounded-4 d-grid align-content-center  ">
      <div className="d-grid gap-4">
        <img src={chartjs} alt="chatjs" className="chart_gender_img mx-auto " />
        <div className="d-grid gap-1">
          <div className="d-flex gap-1 align-items-center justify-content-start ">
            <img
              src={circleWoman}
              alt="circle"
              className="chart_gender_circle"
            />
            <p className="fs-4 ">Wanita</p>
            <span className="fs-4 ">{data.womanPercentage}</span>
          </div>

          <div className="d-flex gap-1 align-items-center justify-content-start ">
            <img src={circleMan} alt="circle" className="chart_gender_circle" />
            <p className="fs-4">Pria</p>
            <span className="fs-4 ">{data.manPercentage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};