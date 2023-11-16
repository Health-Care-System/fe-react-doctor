import { Button } from "../../../../components/ui/Button";
import personIcon from '../../../../assets/icon/person.svg'
import "./Pasien.css"

export const Pasien = ({ name, gender, tanggal, waktu, tombol }) => {
  const details = [
    { title: 'Hari', data: tanggal },
    { title: 'Waktu', data: waktu },
  ]

  return (
    <div className="card border-0 shadow-sm card-wrapper p-2 gap-2 w-100">
      <div className="d-flex align-items-center gap-2">
        <div className="rounded-circle border border-1">
          <img src={personIcon} style={{ padding: "0.5rem", width: "2.3rem" }} alt="person" />
        </div>
        <div className="w-100">
          <p className="fw-semibold m-0">{name}</p>
          <p className="m-0">{gender}</p>
        </div>
      </div>
      <div className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between fw-semibold">
          {details?.map((item, index) => (
            <div key={index} style={{ width: "7rem" }}>
              <p className="text-secondary">{item.title}</p>
              <p className="text-black fw-semibold">{item.data}</p>
            </div>
          ))
          }
        </div>
        <Button className='btn-primary text-white '>
          {tombol}
        </Button>
      </div>
    </div>
  );
};
