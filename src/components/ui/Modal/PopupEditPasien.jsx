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
import avatarIcon from "../../../assets/icon/avatar.svg";
import { Input, Select } from "../Form";
import "./Modal.css";

export const PopupEditPasien = ({ closeModal, patientData }) => {
  const { id, transactionId, name, date, avatar } = patientData;
  const options = [
    { label: "Pilihan 1", value: "option1" },
    { label: "Pilihan 2", value: "option2" },
  ];

  const formatTimestamp = (timestamp) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(timestamp).toLocaleDateString("id-ID", options);
  };

  return (
    <section className="modal_background">
      <div className="mx-2 modal_container">
        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 pb-lg-3 container-fluid ">
          <h5 className="fs-4 ">Edit</h5>
          <Button className="btn p-0 m-0">
            <img
              src={closeMenu}
              alt="closeMenu"
              className="w-75"
              onClick={() => closeModal(false)}
            />
          </Button>
        </div>
        <div className="container">
          <div className="justify-content-center align-items-start py-3 py-lg-4 d-lg-flex modal_content">
            <img
              src={avatar || avatarIcon}
              alt="avatarIcon"
              className="avatarIcon rounded-4"
            />
            <div className="row row-cols-2 py-3 row-gap-2  text-nowrap row-gap-lg-3 p-lg-0">
              {[
                { label: "Id Pasien", value: id },
                { label: "Nama Lengkap", value: name },
                { label: "Id Transaksi", value: transactionId },
                { label: "Tanggal Konsultasi", value: formatTimestamp(date) },
              ].map((item, index) => (
                <div key={index} className="fs-4 ">
                  <p className="fw-semibold ">{item.label}</p>
                  <p className="mt-lg-1">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="d-grid gap-2 gap-md-3 pt-lg-3 pb-5 modal_content">
            <div className="w-100 ">
              <label className="fw-semibold fs-4">Diagnosa</label>
              <Input
                className="w-100 bg-secondary-subtle px-3 py-2 input_text"
                placeHolder="Masukkan Diagnosa Anda"
                name="discase"
                // value={value}
                // handleChange={(e) => handleChange(e) }
              />
            </div>
            <div>
              <label className="fw-semibold fs-4 ">Status</label>
              <Select
                options={options}
                name="options"
                // handleChange={(e) => handleChange(e) }
                // value={value}
              />
            </div>
          </div>
        </div>
        <div className="ps-2 d-flex gap-3">
          <Button
            className="border-primary text-primary fs-4 "
            onClick={() => closeModal(false)}
          >
            Batal
          </Button>
          <Button className="btn-primary text-white fs-4 ">Simpan</Button>
        </div>
      </div>
    </section>
  );
};
