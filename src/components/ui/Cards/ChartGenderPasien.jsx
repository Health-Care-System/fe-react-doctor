
import circleWoman from "../../../assets/icon/circle-women.svg";
import circleMan from "../../../assets/icon/circle-man.svg";
import { CircleProgressBar } from "../../Chart/CircleProgressBar";
// import chartjs from "../../../assets/icon/chartjs.svg";

export const ChartGenderPasien = ({ data }) => {
  return (
    <div className="chart_gender rounded-4 d-grid align-content-center ">
      <div className="d-grid gap-4">
        <div style={{ width: '6.3rem'}}>
          <CircleProgressBar total={784} percentage={40} />
        </div>
        {/* <img src={chartjs} alt="chatjs" className="chart_gender_img mx-auto " /> */}
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