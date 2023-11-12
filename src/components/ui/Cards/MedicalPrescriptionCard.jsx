import { Button } from "../Button"
import drugIcon from '../../../assets/icon/medicine.svg'
import './Card.css'


export const MedicalPrescriptionCard = ({ data }) => {
  return (
    <div className="card shadow rounded-4 border-0 medical-card">
      <div className="card-body px-0">
        <figure className="d-flex px-2 border-bottom border-black pb-2 gap-2">
          <img src={drugIcon} alt="Drug" />
          <h5 className="mt-2">Resep Digital</h5>
        </figure>
        <section className="d-flex justify-content-between text-body-secondary fs-4 px-2">
          <p>Nama Produk</p>
          <p>Jumlah</p>
        </section>
        <ul className="list-group">
          {data?.map((item, index) => (
            <li key={index} className="list-group-item border-0 d-flex justify-content-between align-items-center p-0">
              <p>{item.name}</p>
              <p>{`${item.quantity} per Stripe`}</p>
            </li>
          ))
          }
        </ul>

        <div className="d-flex justify-content-center">
          <Button className={'btn-primary text-white w-75'}>Beli Obat</Button>
        </div>
      </div>
    </div>

  )
}
