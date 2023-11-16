import { Link } from "react-router-dom"
import { Chat } from "../../components/Chat";
import { RiwayatPasien } from "../../components/RiwayatPasien";
import { Pasien } from "../../components/Pasien";
import { ArtikelTerbaru } from "../../components/ArtikelTerbaru";
// import "./HomePage.css"
import { RecentPatient } from "../../components/RecentPatients";

const HomePage = () => {

  return (
    <div className="p-2" style={{ maxWidth: 'calc(100vw - 17rem)'}}>
      <div className="d-flex justify-content-between align-items-center p-2">
        <h5 className="fw-bold mb-2 mt-3 mx-1">Recent Patients</h5>
        <Link className="me-1">View All</Link>
      </div>

      <RecentPatient />

      <div className="d-lg-flex justify-content-between align-items-start">
        <div className="d-flex flex-column">
          <Chat />
          <RiwayatPasien />
        </div>

        <div className="card shadow border-0 flex-column gap-1 flex-lg-shrink-0 mt-3 p-lg-3 p-md-3 p-3 mx-lg-3">
          <div className="d-flex gap-4 justify-content-md-between justify-content-lg-start align-items-center">
            <p className="fw-bold" style={{ fontSize: "20px" }}>Pasien</p>
            <Link className="fw-bold">2 menunggu</Link>
          </div>
          <div className="d-flex flex-column">
            <Pasien
              name="Katherina Lubis"
              gender="Laki-Laki"
              tanggal="13 Okt 2023"
              waktu="12.00 AM"
              tombol="Mulai Konsultasi"
            />
            <Pasien
              name="Katherina Lubis"
              gender="Laki-Laki"
              tanggal="13 Okt 2023"
              waktu="12.00 AM"
              tombol="Mulai Konsultasi"
            />
          </div>
        </div>

        <div className="card shadow border-0 p-3 mt-3 gap-2 d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <p className="fw-bold" style={{ fontSize: "20px" }}>Artikel Terbaru</p>
            <Link className="fw-bold">View All</Link>
          </div>
          <ArtikelTerbaru
            title="COVID-19: Sebuah Pandemi yang Menantang"
            text="COVID-19, atau dikenal juga sebagai coronavirus disease 2019, adalah pandemi global yang telah memengaruhi hampir setiap aspek kehidupan kita."
            date="Okt, 2023"
          />
          <ArtikelTerbaru
            title="COVID-19: Sebuah Pandemi yang Menantang"
            text="COVID-19, atau dikenal juga sebagai coronavirus disease 2019, adalah pandemi global yang telah memengaruhi hampir setiap aspek kehidupan kita."
            date="Okt, 2023"
          />
        </div>
      </div>

    </div>
  )
}

export default HomePage;
