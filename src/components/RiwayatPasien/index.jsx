import { PieChart } from "../Chart/Piechart";
import { dataChart} from "../../utils/dataObject"

import "./RiwayatPasien.module.css"

export const RiwayatPasien = () => {
  return (
    <div className="card border-0 mt-3 rounded-3" style={{boxShadow:"0px 0px 24px 0px rgba(0, 0, 0, 0.10)"}}>
      <div className="card-body rounded-3">
        <div className="d-flex justify-content-between align-items-center align-self-stretch">
            <p className="fw-bold" style={{fontSize:"20px", fontWeight:"600"}}>Riwayat Pasien</p>
            <div className="dropdown">
                <button
                    className="btn dropdown-toggle"
                    style={{backgroundColor:'#C7F9DE'}}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Daily
                </button>
                <ul className="dropdown-menu">
                    <li>
                    <button className="dropdown-item" type="button">
                        Action
                    </button>
                    </li>
                    <li>
                    <button className="dropdown-item" type="button">
                        Another action
                    </button>
                    </li>
                    <li>
                    <button className="dropdown-item" type="button">
                        Something else here
                    </button>
                    </li>
                </ul>
            </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-2 gap-5 justify-content-md-between justify-content-lg-center p-lg-3"> 
            <div className="d-flex" style={{maxWidth:"9.6rem"}}>       
                <PieChart dataChart={dataChart}/>
            </div>

            <div className="d-flex flex-column align-items-start gap-2">
                <div className="d-flex flex-column align-items-start p-0 gap-0">
                    <p style={{fontSize:"2rem", color:"rgba(0, 0, 0, 0.60)"}}>120</p>
                    <p style={{fontSize:"1rem", color:"rgba(0, 0, 0, 0.60);"}}>Pasien</p>
                </div>
                <div className="gap-3">
                    <div className="d-flex align-items-center gap-2">
                        <div style={{width:"14px", height:"14px", backgroundColor:"#FBB3A7"}}></div>
                        <p>Demam</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <div style={{width:"14px", height:"14px", backgroundColor:"#8A91DC"}}></div>
                        <p>Gerd</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <div style={{width:"14px", height:"14px", backgroundColor:"#A1D1FA"}}></div>
                        <p>Tipes</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
