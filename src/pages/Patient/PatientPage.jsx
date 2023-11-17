import {
  CardTotalPasien,
  ChartGenderPasien,
  ChatDashboardCard,
  ConsultationChatCard,
} from "../../components/ui/Cards";
import avatarIcon from "../../assets/icon/avatar.svg";
import searchIcon from "../../assets/icon/search.svg";
import { Input } from "../../components/ui/Form";
import { Button } from "../../components/ui/Button";
import { useState } from "react";
import { PopupEditPasien } from "../../components/ui/Modal/PopupEditPasien";
import './Patient.css'

const PatientPage = () => {
  const [openModal, setOpenModal] = useState(false)

  const chatMessages = [
    {
      avatar: avatarIcon,
      name: "Alice",
      date: "15 Sep",
      chat: "Hai, aku baik. Terima kasih!",
    },
    {
      avatar: avatarIcon,
      name: "Alice",
      date: "15 Sep",
      chat: "Hai, aku baik. Terima kasih!",
    },
    {
      avatar: avatarIcon,
      name: "Alice",
      date: "15 Sep",
      chat: "Hai, aku baik. Terima kasih!",
    },
  ];

  const dataConsultation = [
    { name: "John Doe", gender: "Male" },
    { name: "Jane Doe", gender: "Female" },
  ];

  const data = [
    {
      nama: "Joshua Kristin",
      jenisKelamin: "Pria",
      beratBadan: "58 kg",
      diagnosa: "Demam",
      tglKonsultasi: "17 Okt 2023",
      status: "Konsultasi Lanjutan",
    },
    {
      nama: "Joshua Kristin",
      jenisKelamin: "Pria",
      beratBadan: "58 kg",
      diagnosa: "Demam",
      tglKonsultasi: "17 Okt 2023",
      status: "Konsultasi Lanjutan",
    },
    {
      nama: "Joshua Kristin",
      jenisKelamin: "Pria",
      beratBadan: "58 kg",
      diagnosa: "Demam",
      tglKonsultasi: "17 Okt 2023",
      status: "Konsultasi Lanjutan",
    },
    {
      nama: "Joshua Kristin",
      jenisKelamin: "Pria",
      beratBadan: "58 kg",
      diagnosa: "Demam",
      tglKonsultasi: "17 Okt 2023",
      status: "Konsultasi Lanjutan",
    },
    {
      nama: "Joshua Kristin",
      jenisKelamin: "Pria",
      beratBadan: "58 kg",
      diagnosa: "Demam",
      tglKonsultasi: "17 Okt 2023",
      status: "Konsultasi Lanjutan",
    },
    {
      nama: "Joshua Kristin",
      jenisKelamin: "Pria",
      beratBadan: "58 kg",
      diagnosa: "Demam",
      tglKonsultasi: "17 Okt 2023",
      status: "Konsultasi Lanjutan",
    },
    {
      nama: "Joshua Kristin",
      jenisKelamin: "Pria",
      beratBadan: "58 kg",
      diagnosa: "Demam",
      tglKonsultasi: "17 Okt 2023",
      status: "Konsultasi Lanjutan",
    },
    {
      nama: "Joshua Kristin",
      jenisKelamin: "Pria",
      beratBadan: "58 kg",
      diagnosa: "Demam",
      tglKonsultasi: "17 Okt 2023",
      status: "Konsultasi Lanjutan",
    },
    {
      nama: "Joshua Kristin",
      jenisKelamin: "Pria",
      beratBadan: "58 kg",
      diagnosa: "Demam",
      tglKonsultasi: "17 Okt 2023",
      status: "Konsultasi Lanjutan",
    },
    {
      nama: "Joshua Kristin",
      jenisKelamin: "Pria",
      beratBadan: "58 kg",
      diagnosa: "Demam",
      tglKonsultasi: "17 Okt 2023",
      status: "Konsultasi Lanjutan",
    },
    {
      nama: "Joshua Kristin",
      jenisKelamin: "Pria",
      beratBadan: "58 kg",
      diagnosa: "Demam",
      tglKonsultasi: "17 Okt 2023",
      status: "Konsultasi Lanjutan",
    },
    {
      nama: "Joshua Kristin",
      jenisKelamin: "Pria",
      beratBadan: "58 kg",
      diagnosa: "Demam",
      tglKonsultasi: "17 Okt 2023",
      status: "Konsultasi Lanjutan",
    },
    {
      nama: "Joshua Kristin",
      jenisKelamin: "Pria",
      beratBadan: "58 kg",
      diagnosa: "Demam",
      tglKonsultasi: "17 Okt 2023",
      status: "Konsultasi Lanjutan",
    },
    {
      nama: "Joshua Kristin",
      jenisKelamin: "Pria",
      beratBadan: "58 kg",
      diagnosa: "Demam",
      tglKonsultasi: "17 Okt 2023",
      status: "Konsultasi Lanjutan",
    },
    {
      nama: "Joshua Kristin",
      jenisKelamin: "Pria",
      beratBadan: "58 kg",
      diagnosa: "Demam",
      tglKonsultasi: "17 Okt 2023",
      status: "Konsultasi Lanjutan",
    },
    {
      nama: "Joshua Kristin",
      jenisKelamin: "Pria",
      beratBadan: "58 kg",
      diagnosa: "Demam",
      tglKonsultasi: "17 Okt 2023",
      status: "Konsultasi Lanjutan",
    },
    {
      nama: "Joshua Kristin",
      jenisKelamin: "Pria",
      beratBadan: "58 kg",
      diagnosa: "Demam",
      tglKonsultasi: "17 Okt 2023",
      status: "Konsultasi Lanjutan",
    },
    {
      nama: "Joshua Kristin",
      jenisKelamin: "Pria",
      beratBadan: "58 kg",
      diagnosa: "Demam",
      tglKonsultasi: "17 Okt 2023",
      status: "Konsultasi Lanjutan",
    },
    {
      nama: "Joshua Kristin",
      jenisKelamin: "Pria",
      beratBadan: "58 kg",
      diagnosa: "Demam",
      tglKonsultasi: "17 Okt 2023",
      status: "Konsultasi Lanjutan",
    },
    {
      nama: "Joshua Kristin",
      jenisKelamin: "Pria",
      beratBadan: "58 kg",
      diagnosa: "Demam",
      tglKonsultasi: "17 Okt 2023",
      status: "Konsultasi Lanjutan",
    },
    {
      nama: "Joshua Kristin",
      jenisKelamin: "Pria",
      beratBadan: "58 kg",
      diagnosa: "Demam",
      tglKonsultasi: "17 Okt 2023",
      status: "Konsultasi Lanjutan",
    },
  ];

  const patientData = {
    name: 'Joshua Kristin',
    weight: '58 Kg',
    gender: 'Laki-laki',
    consultationDate: '17 Oktober 2023',
  };

  return (
    <section className="mx-3">
      <div className="d-flex flex-row justify-content-center justify-content-md-start flex-wrap gap-3">
          <div className="card-stats">
            <ChartGenderPasien
              data={{ womanPercentage: "49%", manPercentage: "51%" }}
            />
            <div className="d-flex flex-column gap-3">
              <CardTotalPasien
                percentage="51%"
                title="Pasien Baru"
                total="15"
              />
              <CardTotalPasien
                percentage="49%"
                title="Pasien Lama"
                total="90"
              />
            </div>
          </div>

        <ChatDashboardCard chatMessages={chatMessages} />
        <ConsultationChatCard data={dataConsultation} />
      </div>
      {/* Table Daftar Pasien */}
      <div className="p-3 border-top rounded-top-4 mt-3">
        <div className="d-grid d-md-flex justify-content-between align-items-center">
          <h1 className="fw-bold fs-1 mt-2">Daftar Pasien</h1>
          <div className="position-relative pe-0 ">
            <Input
              placeHolder="Nama, Gejala, Status "
              className="rounded-5 ps-5 "
            />
            <button className="border-0 bg-transparent rounded-5 position-absolute start-0 ps-2 top-0 mt-1">
              <img src={searchIcon} alt="searchIcon" className="w-75" />
            </button>
          </div>
        </div>
        <div className=" table-responsive mt-3 table-wrapper" style={{ maxHeight: 'calc(100vh - 26rem)' }}>
          <table className="table table-borderless table-light">
            <thead className=" sticky-top">
              <tr>
                <th className=" text-nowrap">Nama</th>
                <th className=" text-nowrap">Jenis Kelamin</th>
                <th className=" text-nowrap">Berat Badan</th>
                <th className=" text-nowrap">Diagnosa</th>
                <th className=" text-nowrap">Tgl Konsultasi</th>
                <th className=" text-nowrap">Status</th>
                <th className=" text-nowrap"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr key={index} className="align-middle">
                  <td className="d-flex align-items-center gap-2">
                    <img
                      src={avatarIcon}
                      alt="avatarIcon"
                      className="rounded-circle avatar_icon"
                    />
                    <p>{entry.nama}</p>
                  </td>
                  <td>{entry.jenisKelamin}</td>
                  <td>{entry.beratBadan}</td>
                  <td>{entry.diagnosa}</td>
                  <td>{entry.tglKonsultasi}</td>
                  <td>{entry.status}</td>
                  <td>
                    <Button className="btn-primary text-white px-4" onClick={() => setOpenModal(true)}>
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {openModal && <PopupEditPasien closeModal={setOpenModal} patientData={patientData} />}
        </div>
      </div>
    </section>
  );
};

export default PatientPage;
