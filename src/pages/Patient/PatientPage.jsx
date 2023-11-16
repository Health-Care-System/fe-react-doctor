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
      name: "John",
      date: "15 Sep",
      chat: "Halo, bagaimana kabarmu?",
    },
    {
      avatar: avatarIcon,
      name: "Alice",
      date: "15 Sep",
      chat: "Hai, aku baik. Terima kasih!",
    },
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
      <div className="d-grid mx-lg-3 mt-3 gap-3 ">
        <div className="d-grid d-lg-flex align-items-start gap-3">
          <div className="d-flex justify-content-center align-items-center gap-2">
            <ChartGenderPasien
              data={{ womanPercentage: "49%", manPercentage: "51%" }}
            />
            <div className="d-grid gap-2 align-items-center  ">
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
          <div className="d-grid justify-content-center align-items-center ">
            <ChatDashboardCard chatMessages={chatMessages} />
          </div>
          <div className="d-grid justify-content-center align-items-center">
            <ConsultationChatCard gender="Wanita" name="Joshua Kristin" />
          </div>
        </div>
        {/* Table Daftar Pasien */}
        <div className="d-grid align-items-center gap-2 p-2 shadow rounded-top-4 table_pasien_content">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="fw-bold fs-1 ps-3">Daftar Pasien</h1>
            <div className="position-relative pe-4 ">
              <Input
                placeHolder="Nama, Gejala, Status "
                className="rounded-5 ps-5 "
              />
              <button className="border-0 bg-transparent rounded-5 position-absolute start-0 ps-2 top-0 mt-1">
                <img src={searchIcon} alt="searchIcon" className="w-75" />
              </button>
            </div>
          </div>
          <div className="table-responsive p-2 text-nowrap table_scoll" style={{ maxHeight: '367px', overflowY: 'scroll' }}>
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
      </div>
    </section>
  );
};

export default PatientPage;
