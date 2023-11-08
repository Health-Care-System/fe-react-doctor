import { Button } from "../Button";
import drugIcon from '../../../assets/icon/medicine.svg'
import './Card.Module.css'

export const PatientTableRow = ({ data }) => {
  const { name, gender, weight, discase, date, status, image } = data;
  return (
    <tr className="d-flex flex-row table-responsive align-items-center gap-3 text-nowrap">
      <td className="d-flex flex-row align-items-center gap-2 text-nowrap">
        <div className="rounded-circle border border-2 border-dark">
          <img src={image} alt={name} width={34} height={34} className="rounded-circle object-fit-cover" />
        </div>
        <p className="m-0">{name}</p>
      </td>
      <td>{gender}</td>
      <td>{weight}</td>
      <td>{discase}</td>
      <td>{date}</td>
      <td>{status}</td>
      <td>
        <Button className="btn-dark rounded-pill px-5" onClick={() => { }}>
          Edit
        </Button>
      </td>
    </tr>
  );
};

export const ArticleCard = ({ title, content, date }) => {

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <p className="text-end me-2">{date}</p>
      </div>
    </div>

  )
}


export const MedicalPrescriptionCard = () => {
  return (
    <div className="card shadow rounded-4 border-0 medical-card">
      <div className="card-body">
        <figure className="d-inline-flex gap-2">
          <img src={drugIcon} alt="Drug" />
          <h5 className="card-title fw-bold">Resep Digital</h5>
        </figure>
        <section className=" d-flex justify-content-between card-subtitle mb-2 text-body-secondary fs-4">
          <p>Nama Produk</p>
          <p>Jumlah</p>
        </section>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of
          the cards content.
        </p>
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>

  )
}

