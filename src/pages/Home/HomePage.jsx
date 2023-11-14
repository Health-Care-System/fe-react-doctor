import { Link } from "react-router-dom"
import { Chat } from "../../components/Chat";
import { RiwayatPasien } from "../../components/RiwayatPasien";
import { Pasien } from "../../components/Pasien";
import { ArtikelTerbaru } from "../../components/ArtikelTerbaru";
import "./HomePage.css"
import { RecentPatient } from "../../components/RecentPatients";

const HomePage = () => {

    return (
        <>
            <div className="d-flex justify-content-between align-items-center p-2">
                <h5 className="fw-bold mb-2 mt-3 mx-1">Recent Patients</h5>
                <Link className="me-1">View All</Link>
            </div>

            <RecentPatient/>

            <div className="card-0">
                <div className="card-1">
                  <Chat/>
                  <RiwayatPasien/>
                </div>
                  
                <div className="card-2">
                  <div className="pasien-home">
                    <p className="fw-bold" style={{fontSize:"20px"}}>Pasien</p>
                    <Link className="fw-bold">2 menunggu</Link>
                  </div>
                  <div className="pasien-card">
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

                <div className="card-3">
                  <div className="artikel-terbaru">
                      <p className="fw-bold" style={{fontSize:"20px"}}>Artikel Terbaru</p>
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
           
        </>
    )
}


export default HomePage