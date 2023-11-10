/* 
  Note:
  1. Terdapat props yang akan dilempar yaitu patiendtData dan juga closeModal
  2. Cara pemanggilan component ini dapat dilakukan dengan cara seperti dibawah ini:
  const [openModal, setOpenModal] = useState(false)

  const patientData = {
    name: 'Joshua Kristin',
    weight: '58 Kg',
    gender: 'Laki-laki',
    consultationDate: '17 Oktober 2023',
  };

  return (
      <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
      {openModal && <PopupEditPasien closeModal={setOpenModal} patientData={patientData}/>}
    )
*/

import closeMenu from "../../../assets/icon/close.svg";
import { Button } from "../Button";
import styles from "./Modal.module.css";
import avatarIcon from "../../../assets/icon/avatar.svg";
import { Select } from "../Form";

export const PopupEditPasien = ({ closeModal, patientData }) => {
  const { name, weight, gender, consultationDate } = patientData;
  const options = [
    { label: "Pilihan 1", value: "option1" },
    { label: "Pilihan 2", value: "option2" },
  ];

  return (
    <section className={styles.modalBackground}>
      <div className={`mx-2 ${styles.modalContainer}`}>
        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 pb-lg-3 container-fluid ">
          <h5 className={styles.font__size}>Edit</h5>
          <div className="btn">
            <img
              src={closeMenu}
              alt="closeMenu"
              className="w-75"
              onClick={() => closeModal(false)}
            />
          </div>
        </div>
        <div className={`container ${styles.modalBody}`}>
          <div
            className={`justify-content-between align-items-start py-3 py-lg-4 d-lg-flex ${styles.modalContent}`}
          >
            <img
              src={avatarIcon}
              alt="avatarIcon"
              className={styles.avatarIcon}
            />
            <div className="row row-cols-2 py-3 text-nowrap row-gap-lg-3 p-lg-0  ">
              <div className={styles.font__size}>
                <p className="fw-bold">Nama Pasien</p>
                <p className="mt-lg-1 ">{name}</p>
              </div>
              <div className={styles.font__size}>
                <p className="fw-bold">Berat Badan</p>
                <p className="mt-lg-1">{weight}</p>
              </div>
              <div className={styles.font__size}>
                <p className="fw-bold">Jenis Kelamin</p>
                <p className="mt-lg-1">{gender}</p>
              </div>
              <div className={styles.font__size}>
                <p className="fw-bold">Tanggal Konsultasi</p>
                <p className="mt-lg-1">{consultationDate}</p>
              </div>
            </div>
          </div>
          <div
            className={`d-grid gap-2 gap-md-3 pt-lg-3 pb-5  ${styles.modalContent}`}
          >
            <div className="w-100 ">
              <label className={`fw-bold ${styles.font__size}`}>
                Discase (Diagnosa Penyakit)
              </label>
              <input
                type="text"
                placeholder="Demam"
                className="rounded border border-secondary p-1 px-lg-2 w-100 text-capitalize  "
              />
            </div>
            <div>
              <label className={`fw-bold ${styles.font__size}`}>Status</label>
              <Select
                options={options}
                name="options"
                // handleChange={(e) => handleChange(e) }
                // value={value}
              />
            </div>
          </div>
        </div>
        <div className={`ps-2 ${styles.modalFooter} d-flex gap-3`}>
          <Button className={`btn-primary text-white ${styles.font__size}`}>
            Save
          </Button>
          <Button
            className={`btn-danger ${styles.font__size}`}
            onClick={() => closeModal(false)}
          >
            Cancel
          </Button>
        </div>
      </div>
    </section>
  );
};
