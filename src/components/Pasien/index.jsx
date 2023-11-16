import { Button } from "../ui/Button";
import personIcon from '../../assets/icon/person.svg'
import "./Pasien.css"

export const Pasien = ({name, gender, tanggal, waktu, tombol}) => {

  return (
    <div>
      <div className="card border-0 shadow-sm d-flex flex-lg-column flex-md-row align-items-lg-start align-items-md-start p-2 p-lg-2 p-xxl-3 p-md-3 mb-2 rounded-3">
          <div className="d-flex p-0 flex-lg-column flex-column align-items-center">
            <div className="d-flex align-items-center gap-4 gap-lg-4 gap-md-2 flex-lg-row flex-md-column">
              <div className="rounded-circle border border-1 border-dark mt-md-1 mt-lg-2">
                <img src={personIcon} style={{padding:"0.5rem", width:"2.3rem"}} alt="person"/>
              </div>
              <div>
                <p className="fw-bold mt-lg-1">{name}</p>
                <p>{gender}</p>
              </div>
            </div>  
          </div>
          <div className="d-flex flex-column flex-lg-column align-items-center p-0 gap-3 gap-lg-3 gap-md-3 mt-md-0 mx-md-4 mx-lg-0 mt-lg-3 mt-2">
            <div className="d-flex p-lg-0 align-items-center gap-lg-5 gap-md-5 align-items-lg-start">
                <div className="card border-0 p-lg-2 d-flex flex-column justify-content-center align-items-start gap-2 p-2" style={{width:"7rem"}}>
                    <p className="text-secondary small fw-bold">Hari</p>
                    <p className="text-black small fw-bold">{tanggal}</p>
                </div>
                <div className="card border-0 p-lg-2 d-flex flex-column justify-content-center align-items-start gap-2 p-2" style={{width:"7rem"}}>
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
