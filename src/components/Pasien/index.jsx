import { Button } from "../ui/Button";
import patientIcon from '../../assets/icon/patient.svg'
import "./Pasien.css"

export const Pasien = ({name, gender, tanggal, waktu, tombol}) => {

  return (
    <div>
      <div className="card border-0 shadow d-flex flex-lg-column flex-md-row align-items-lg-center align-items-md-start p-2 p-lg-2 p-xxl-3 p-md-3 mb-2">
          <div className="d-flex p-0 flex-lg-column flex-column align-items-center align-items-sm-center">
            <div className="d-flex align-items-center gap-4 align-items-sm-center gap-lg-4 gap-md-2 flex-lg-row flex-md-column">
              <div className="icon mt-md-1">
                <img src={patientIcon} style={{width:"18.545px", height:"18.545px"}} alt=" - "/>
              </div>
              <div>
                <p className="fw-bold mt-lg-1">{name}</p>
                <p>{gender}</p>
              </div>
            </div>  
          </div>
          <div className="d-flex flex-column flex-lg-column justify-content-center align-items-center p-0 gap-3 gap-lg-3 gap-md-5 flex-md-row mt-md-4 mx-md-4 mt-lg-3 mt-2">
            <div className="d-flex p-lg-0 align-items-center gap-3">
                <div className="card border-0 shadow p-lg-2 d-flex flex-column justify-content-center align-items-start gap-2 p-2" style={{width:"7rem"}}>
                    <p className="text-secondary small fw-bold">Hari</p>
                    <p className="text-black small fw-bold">{tanggal}</p>
                </div>
                <div className="card border-0 shadow p-lg-2 d-flex flex-column justify-content-center align-items-start gap-2 p-2" style={{width:"7rem"}}>
                    <p className="text-secondary small fw-bold">Waktu</p>
                    <p className="text-black small fw-bold">{waktu}</p>
                </div>
            </div>
            <Button className={'btn-primary text-white tombol'}>
              {tombol}
            </Button>
          </div>
      </div>
    </div>
  );
};
