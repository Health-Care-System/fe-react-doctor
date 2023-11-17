import { Link } from "react-router-dom"
import { RecentPatient } from "./components/RecentPatients";
import { ArticleCard, UserChat } from "../../components/ui/Cards";
import { CardContainer } from "../../components/ui/Container/CardContainer";
import { RiwayatPasien } from "./components/RiwayatPasien";
import doctor from '../../assets/image/doctor.png'
import { Pasien } from "./components/Pasien";
import './Home.css'


const HomePage = () => {

  return (
    <div className="p-2 w-100 home-container bg-transparent">
      <div className="d-flex w-100 justify-content-between align-items-center p-1">
        <h5 className="fw-semibold mb-2 mt-3">Recent Patients</h5>
        <Link className="fw-semibold" style={{ color: "#1766D6", fontSize: "16px" }}>View All</Link>
      </div>
      <RecentPatient />

      <div className="d-flex flex-column flex-xl-row gap-3 mt-5 home-container">
        <div className=" d-flex flex-column gap-3">
          <CardContainer
            title={'Pesan'}
            detail={'3 belum dibaca'}>
            <div className="d-flex flex-column gap-1">
              <UserChat
                name={'Sanjana'}
                date={'15 Nov'}
                message={'Bagaimana cara keren untuk meminum obat'}
                image={doctor} />
              <UserChat
                name={'Sanjana'}
                date={'15 Nov'}
                message={'Bagaimana cara keren untuk meminum obat'}
                image={doctor} />
            </div>
          </CardContainer>
          <RiwayatPasien />
        </div>
        <CardContainer
          title={'Pesan'}
          detail={'2 menunggu'}
          className={'chat-container'}
        >
          <div className="d-flex flex-column gap-3">
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
        </CardContainer>
        <CardContainer className='w-auto' title={'Artikel Terbaru'} detail={'View all'}>
          <div className=" d-flex flex-column gap-4 w-100">
            <ArticleCard
              title="COVID-19: Sebuah Pandemi yang Menantang"
              content="COVID-19, atau dikenal juga sebagai coronavirus disease 2019, adalah pandemi global yang telah memengaruhi hampir setiap aspek kehidupan kita."
              date="Okt, 2023"
            />
            <ArticleCard
              title="COVID-19: Sebuah Pandemi yang Menantang"
              content="COVID-19, atau dikenal juga sebagai coronavirus disease 2019, adalah pandemi global yang telah memengaruhi hampir setiap aspek kehidupan kita."
              date="Okt, 2023"
            />
          </div>
        </CardContainer>
      </div>
    </div>
  )
}

export default HomePage;
