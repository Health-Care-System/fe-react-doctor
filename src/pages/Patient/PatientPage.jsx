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

const PatientPage = () => {
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

  return (
    <section className="container-fluid ">
      <div className="row my-3 gap-3 content_patient justify-content-lg-center justify-content-xl-start ">
        <div className="col-12 col-lg-4 col-xl-3">
          <div className="d-flex justify-content-center align-items-center gap-3 ">
            <ChartGenderPasien
              data={{ womanPercentage: "49%", manPercentage: "51%" }}
            />
            <div className="d-grid align-items-center gap-3 ">
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
        </div>
        <div className="col-12 justify-content-center d-flex col-lg-7 justify-content-lg-start col-xl-3 px-xl-0">
          <ChatDashboardCard chatMessages={chatMessages} />
        </div>
        <div className="col-12 justify-content-center justify-content-lg-center justify-content-xl-start d-flex col-lg-12 col-xl px-xl-0 ">
          <ConsultationChatCard data={dataConsultation} />
        </div>
      </div>
      {/* Table Daftar Pasien */}
      <div className="row mx-3 rounded-top-4 shadow-sm content_table">
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
          <div className="table-responsive p-2 text-nowrap table_scoll" style={{ maxHeight: '28rem', overflowY: 'scroll' }}>
            <table className="table table-borderless table-light  ">
              <thead>
                <tr>
                  <th scope="col">Nama</th>
                  <th scope="col">Jenis Kelamin</th>
                  <th scope="col">Berat Badan</th>
                  <th scope="col">Diagnosa</th>
                  <th scope="col">Tgl Konsultasi</th>
                  <th scope="col">Status</th>
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
                      <Button className="btn-primary text-white px-4">
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </section>
  );
};

export default PatientPage;
