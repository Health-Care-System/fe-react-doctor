import { Button } from "../Button";
import drugIcon from "../../../assets/icon/medicine.svg";
import bulletIcon from "../../../assets/icon/bullet.svg";
import "./Card.css";

export const PatientTableRow = ({ data }) => {
  const { name, gender, weight, discase, date, status, image } = data;
  return (
    <tr className="d-flex flex-row table-responsive align-items-center gap-3 text-nowrap">
      <td className="d-flex flex-row align-items-center gap-2 text-nowrap">
        <div className="rounded-circle border border-2 border-dark">
          <img
            src={image}
            alt={name}
            width={34}
            height={34}
            className="rounded-circle object-fit-cover"
          />
        </div>
        <p className="m-0">{name}</p>
      </td>
      <td>{gender}</td>
      <td>{weight}</td>
      <td>{discase}</td>
      <td>{date}</td>
      <td>{status}</td>
      <td>
        <Button className="btn-dark rounded-pill px-5" onClick={() => {}}>
          Edit
        </Button>
      </td>
    </tr>
  );
};

export const ArticleCard = ({ title, content, date }) => {
  return (
    <div className="card shadow border-0" style={{ width: "24.5rem" }}>
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
  );
};

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
            <li
              key={index}
              className="list-group-item border-0 d-flex justify-content-between align-items-center p-0"
            >
              <p>{item.name}</p>
              <p>{`${item.quantity} per Stripe`}</p>
            </li>
          ))}
        </ul>

        <div className="d-flex justify-content-center">
          <Button className={"btn-primary text-white w-75"}>Beli Obat</Button>
        </div>
      </div>
    </div>
  );
};

// Chat list untuk halaman chat
export const ChatList = ({ id, name, messages, hanldeUser }) => {
  return (
    <>
      <div
        onClick={() => hanldeUser(id)}
        className="d-flex flex-row align-items-center gap-2 hover chatList"
      >
        <img
          width={"60"}
          height={"60"}
          className="rounded-3 object-fit-cover"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile Picture"
        />
        <section className="d-flex flex-row w-100">
          <div className="w-75">
            <h6 className=" fw-semibold">{name}</h6>
            <p className="line-clamp-1">{messages}</p>
          </div>
          <div className="d-flex flex-column align-items-end gap-2 text-body-secondary w-25">
            <p className="fs-5">11:49 pm</p>
            <div
              className="rounded-5 p-1"
              style={{ backgroundColor: "#DFF6F4" }}
            >
              <p className=" text-primary fw-semibold fs-5">5+</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

import circleWoman from "../../../assets/icon/circle-women.svg";
import circleMan from "../../../assets/icon/circle-man.svg";
import chartjs from "../../../assets/icon/chartjs.svg";

export const ChartGenderPasien = ({ data }) => {
  return (
    <div className="chart_gender shadow rounded-4">
      <div className="d-grid gap-4 p-2">
        <img src={chartjs} alt="chatjs" className="chart_gender_img mx-auto " />
        <div className="d-grid gap-2">
          <div className="d-flex gap-2 align-items-center justify-content-start ">
            <img
              src={circleWoman}
              alt="circle"
              className="chart_gender_circle"
            />
            <p>Wanita</p>
            <span>{data.womanPercentage}</span>
          </div>

          <div className="d-flex gap-2 align-items-center justify-content-start ">
            <img src={circleMan} alt="circle" className="chart_gender_circle" />
            <p>Pria</p>
            <span>{data.manPercentage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

import upIcon from "../../../assets/icon/up-arrow.svg";
import downIcon from "../../../assets/icon/down-arrow-bold.svg";

export const CardTotalPasien = ({ title, total, percentage }) => {
  let iconSrc = upIcon;
  let variant = "bg-success-subtle";

  if (title === "Pasien Lama") {
    iconSrc = downIcon;
    variant = "bg-danger-subtle";
  }

  return (
    <div className="chart_pasien shadow rounded-4">
      <div className="p-1">
        <h4 className="m-0 fs-3 fw-semibold text-center text-nowrap ">
          {title}
        </h4>
        <div className="d-flex justify-content-between align-items-center ">
          <h3 className="fs-1 fw-bold ">{total}</h3>
          <div className={`d-flex rounded-pill bg-success-subtle ${variant}`}>
            <img src={iconSrc} alt="up" />
            <span className="fw-semibold fs-5">{percentage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ChatDashboardCard = ({ chatMessages }) => {
  return (
    <div className="chat_dashboard rounded-4 shadow ">
      <div className="p-2 w-100 d-grid gap-2">
        <div className="d-flex justify-content-between align-items-center ">
          <h3 className="m-0 fw-bold fs-3 ">Pesan</h3>
          <p className="text-info fw-semibold fs-4 ">3 belum dibaca</p>
        </div>
        {chatMessages.map((message, index) => {
          return (
            <div className="d-flex gap-2 align-items-center" key={index}>
              <img
                src={message.avatar}
                alt="avatarIcon"
                className="rounded-circle avatar_icon"
              />
              <div className="w-100 d-grid ">
                <div className="d-flex justify-content-between ">
                  <h5 className="fs-4 fw-semibold m-0 ">{message.name}</h5>
                  <p className="text-secondary fw-semibold fs-4 ">
                    {message.date}
                  </p>
                </div>
                <p className="fs-4 ">{message.chat}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

import personIcon from "../../../assets/icon/person.svg";

export const ConsultationChatCard = ({ name, gender }) => {
  return (
    <div className="rounded-4 d-grid container consultation__chat__section">
      <h3 className="fw-semibold m-0 fs-2 ps-2 ">Pasien Baru</h3>
      <div className="table-responsive text-nowrap ">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Nama</th>
              <th scope="col">Jenis Kelamin</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-middle ">
              <td className="d-flex gap-2 align-items-center ">
                <img
                  src={personIcon}
                  alt="avatarIcon"
                  className="border border-2 rounded-circle p-2"
                />
                <p className="fs-3 limit__text__name">{name}</p>
              </td>
              <td className="">{gender}</td>
              <td>
                <Button className="btn-primary text-nowrap text-white rounded-pill">
                  Mulai Percakapan
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
