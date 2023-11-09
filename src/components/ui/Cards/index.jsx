import { Button } from "../Button";
import drugIcon from '../../../assets/icon/medicine.svg'
import bulletIcon from '../../../assets/icon/bullet.svg'
import './Card.css'

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
    <div className="card shadow border-0" style={{ width: '24.5rem' }}>
      <div className="card-body">
        <h6 className="card-title fw-bold text-truncate">{title}</h6>
        <p className="card-text line-clamp-2">{content}</p>
        <section className="d-flex gap-1 mt-1 justify-content-end">
          <p>Published</p>
          <img src={bulletIcon} alt=" - " />
          <p className="text-end me-2">{date}</p>
        </section>
      </div>
    </div>

  )
}

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

// Chat list untuk halaman chat
export const ChatList = ({  id, name, messages, hanldeUser }) => {
  return (
    <>
      <div onClick={() => hanldeUser(id)} className='d-flex flex-row align-items-center gap-2 hover chatList'>
        <img width={'60'} height={'60'} className="rounded-3 object-fit-cover" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile Picture" />
        <section className="d-flex flex-row w-100">
          <div className="w-75">
            <h6 className=" fw-semibold">{name}</h6>
            <p className="line-clamp-1">{messages}</p>
          </div>
          <div className="d-flex flex-column align-items-end gap-2 text-body-secondary w-25">
            <p className="fs-5">11:49 pm</p>
            <div className="rounded-5 p-1" style={{ backgroundColor: '#DFF6F4'}}>
              <p className=" text-primary fw-semibold fs-5">5+</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
