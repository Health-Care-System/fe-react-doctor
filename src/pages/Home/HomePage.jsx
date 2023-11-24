import { RecentPatient } from "./components/RecentPatients";
import { ArticleCard, UserChat } from "../../components/ui/Cards";
import { CardContainer } from "../../components/ui/Container/CardContainer";
import { NewPatients } from "./components/Pasien";
import { useEffect, useState } from "react";
import axios from "axios";
import './Home.css'
import { useGetRecentChat } from "../../services/chat-service";
import { UserChatListSkeleton } from "../../components/ui/Skeleton";
import { ErrorStatus } from "../../components/Error/ErrorStatus";

const HomePage = () => {
  const [artikelData, setArtikelData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [artikelResponse] = await Promise.all([
        axios.get('http://localhost:3001/articles'),
      ]);

      setArtikelData(artikelResponse.data.results);
    } catch (error) {
      setError('Terjadi kesalahan saat mengambil data: ' + error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-2 w-100 home-container bg-transparent">
      <RecentPatient />

      <div className="row mt-5 home-container">
        <div className="col-12 col-lg-7 mb-3 mb-lg-0 d-flex flex-column">
          <div className=" d-flex flex-column gap-3">
            <NewPatients />
            <CardContainer
              title={'Pesan'}
              detail={'3 belum dibaca'}>
              <div className="d-flex flex-column gap-1">
                <ChatListWrapper />
              </div>
            </CardContainer>
          </div>
        </div>


        <CardContainer className='col-12 col-lg-5' title={'Artikel Terbaru'} detail={'View all'}>
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

const ChatListWrapper = () => {
  const {
    data,
    refetch,
    isPending,
    isError
  } = useGetRecentChat();
  
  if(isError) {
    return <ErrorStatus title={'Gagal memuat data pesan!'} action={refetch} />
  }
  
  if (isPending) {
    return(
      <>
        <UserChatListSkeleton/>
        <UserChatListSkeleton/>
      </>
    )
  }

  return (
    <>
      {data.results?.map((userChat, index) => (
        <UserChat
          key={index}
          name={userChat.name}
          date={userChat.date}
          message={userChat.message}
          image={userChat.image}
        />
      ))}
    </>
  )
}

