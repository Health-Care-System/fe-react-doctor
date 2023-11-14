import { Button } from "../ui/Button";
import bullet from '../../assets/icon/bullet.svg';
import "./Pasien.css"

export const Pasien = ({name, gender, tanggal, waktu, tombol}) => {

  return (
    <div>
      <div className="card border-0 card-pasien">
        <div className="pasien-user">
          <div className="user">
            <div className="icon">
              <img src={bullet} style={{width:"18.545px", height:"18.545px"}} alt=" - "/>
            </div>
            <div className="user-name">
              <p className="fw-bold">{name}</p>
              <p>{gender}</p>
            </div>
          </div>  
        </div>
        <div className="menu-pasien">
          <div className="kotak-jadwal">
              <div className="kotak-jadwal2">
                  <p className="hari">Hari</p>
                  <p className="jadwal">{tanggal}</p>
              </div>
              <div className="kotak-jadwal2">
                  <p className="hari">Waktu</p>
                  <p className="jadwal">{waktu}</p>
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
