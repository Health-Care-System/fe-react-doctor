import { Link } from "react-router-dom"
import { RecentPatient } from "./components/RecentPatients";
import { ArticleCard, UserChat } from "../../components/ui/Cards";
import { CardContainer } from "../../components/ui/Container/CardContainer";
import { RiwayatPasien } from "./components/RiwayatPasien";
import { Pasien } from "./components/Pasien";
import { useEffect, useState } from "react";
import axios from "axios";
import './Home.css'

const HomePage = () => {
  const [userChatData, setUserChatData] = useState([]);
  const [konsultasiData, setKonsultasiData] = useState([]);
  const [artikelData, setArtikelData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [userChatResponse, konsultasiResponse, artikelResponse] = await Promise.all([
        axios.get('/src/json/userChat-patients.json'),
        axios.get('/src/json/konsultasi-patients.json'),
        axios.get('/src/json/article-patients.json')
      ]);

      setUserChatData(userChatResponse.data);
      setKonsultasiData(konsultasiResponse.data);
      setArtikelData(artikelResponse.data);
    } catch (error) {
      setError('Terjadi kesalahan saat mengambil data: ' + error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

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
              {userChatData.map((userChat, index) => (
                  <UserChat
                    key={index}
                    name={userChat.name}
                    date={userChat.date}
                    message={userChat.message}
                    image={userChat.image}
                  />
              ))}
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
            {konsultasiData.map((konsultasi, index) => (
              <Pasien
                key={index}
                name={konsultasi.name}
                gender={konsultasi.gender}
                tanggal={konsultasi.date}
                waktu={konsultasi.time}
                tombol="Mulai Konsultasi"
              />
            ))}
          </div>
        </CardContainer>
        <CardContainer className='w-auto' title={'Artikel Terbaru'} detail={'View all'}>
          <div className=" d-flex flex-column gap-4 w-100">
            {artikelData.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                content={article.content}
                date={article.date}
              />
            ))}
          </div>
        </CardContainer>
      </div>
    </div>
  )
}

export default HomePage;
