
import circleWoman from "../../../assets/icon/circle-women.svg";
import circleMan from "../../../assets/icon/circle-man.svg";
import { CircleProgressBar } from "../../Chart/CircleProgressBar";

export const ChartGenderPasien = ({ data }) => {
  return (
    <div className=" d-flex flex-row flex-md-column align-items-center shadow rounded-4 p-3 gap-3">
        <div style={{ maxWidth: '6.3rem'}}>
          <CircleProgressBar total={784} percentage={40} />
        </div>
        <div className="d-flex flex-column justify-content-center gap-2">
          <div className=" d-inline-flex w-100">
            <img src={circleWoman} alt="circle" />
            <p className="fs-4 w-100 text-nowrap">{`Wanita ${data.womanPercentage}`}</p>
          </div>
          <div className=" d-inline-flex">
            <img src={circleMan} alt="circle" />
            <p className="fs-4 w-100 text-nowrap">{`Pria ${data.manPercentage}`}</p>
          </div>
        </div>
    </div>
  );
};