import { RecentPatient } from "./components/RecentPatients";
import { ArticleCard, UserChat } from "../../components/ui/Cards";
import { CardContainer } from "../../components/ui/Container/CardContainer";
import { NewPatients } from "./components/Pasien";
import './Home.css'
import { useGetRecentsChats } from "../../services/chat-service";
import { UserChatListSkeleton } from "../../components/ui/Skeleton";
import { ErrorStatus } from "../../components/Error/ErrorStatus";
import { useGetQuery } from "../../hooks/useGetQuery";
import { formattedDate } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { useStatus } from "../../store/useStatus";
import noMsgIcon from '../../assets/icon/noMsg.png'
import { ArticleSkeletonWhite } from "../../components/ui/Skeleton/AticleSkeletonWhite";
import noDataImage from '../../assets/image/noData.jpg';
import noMsgData from '../../assets/image/noMsg.jpg';
import { useState } from "react";

const HomePage = () => {
  const [isArticleExist, setIsArticleExist] = useState(false);
  return (
    <div className="p-2 w-100 home-container bg-transparent">
    
      {/* Komponen yng memuat daftar pasien */}
      <RecentPatient />

      <div className="row mt-5 home-container me-3">
        <div className="col-12 col-lg-7 mb-3 mb-lg-0 d-flex flex-column">
          <div className="d-flex flex-column gap-3">

            {/* Card container untuk pesan baru */}
            <NewPatients />

            {/* Card container untuk riwayat pesan */}
            <CardContainer
              title={'Pesan'}
              detail={''}>
              <div className="d-flex flex-column gap-1">
                <ChatListWrapper />
              </div>
            </CardContainer>
          </div>
        </div>


        {/* Card container untuk artikel */}
        <CardContainer
          hrefTo={'/articles'}
          className='col-12 col-lg-5'
          title={'Artikel Terbaru'}
          detail={isArticleExist && 'Lihat Semua'}>
          <div className="d-flex flex-column gap-4 w-100" style={{ minHeight: '22rem'}}>
            <ArticleWrapper setIsArticleExist={setIsArticleExist} />
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
  } = useGetRecentsChats();
  
  // ini adalah selector isActive (global state)
  const isActive = useStatus((state) => state.isActive);
  
  // isActive adalah kondisi jika dokter menonaktifkan toogle di navbar
  if (isActive) {
    return (
      <>
        <div className="d-flex mx-auto gap-2 flex-column">
          <img
            src={noMsgIcon}
            alt="Tidak Melayani"
            className="mx-auto"
            style={{ width: 'fit-content' }} />
          <p className="fw-semibold">Sedang Tidak Melayani</p>
        </div>
      </>
    );
  }
  
  // Tampilan yang akan muncul saat status fetching adalah pending
  if (isPending) {
    return (
      <>
        <UserChatListSkeleton />
        <UserChatListSkeleton />
      </>
    )
  }
  
    // Tampilan yang akan muncul saat status fetching adalah error
  if (isError) {
    return <ErrorStatus title={'Gagal memuat data pesan!'} action={refetch} />
  }

    // Tampilan yang akan muncul saat data fetching adalah null/ array kosong
  if (data.results === null || data.results.length === 0) {
    return (
      <div className="d-flex mx-auto gap-2 flex-column">
        <img
          src={noMsgData}
          width={100}
          height={100}
          alt="Tidak Melayani"
          className="mx-auto"
          style={{ width: 'fit-content' }} />
        <p className="fw-semibold">Tidak ada riwayat pesan</p>
      </div>
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

const ArticleWrapper = (setIsArticleExist) => {
  const {
    data,
    isPending,
    isError,
    refetch
  } = useGetQuery('articles', '/doctors/articles')
  const navigate = useNavigate();  
  if (isPending) {
    return (
      <>
        <ArticleSkeletonWhite />
        <ArticleSkeletonWhite />
      </>
    )
  }

  if (isError) {
    return <ErrorStatus title={'Gagal memuat data pesan!'} action={refetch} />
  }
  
  if (data.length === 0) {
    return (
      <div className="d-flex flex-column text-center my-auto justify-content-center">
        <img src={noDataImage} className="mx-auto" alt="Data tidak ada" width={200} height={200} />
        <p className="fw-semibold">Tidak ada data artikel!</p>
      </div>
    )
  }
  
  setIsArticleExist(true)
  return (
    <>
      {data?.results?.slice(0, 2).map((article, index) => {
        const date = formattedDate(article.created_at);
        const handleNavigate = () => {
          navigate(`/articles/edit?id=${article.id}`)
        }
        return (
          <ArticleCard
            handleNavigate={handleNavigate}
            key={index}
            title={article.title}
            content={article.content}
            date={date}
          />
        )
      })}
    </>
  )

}

