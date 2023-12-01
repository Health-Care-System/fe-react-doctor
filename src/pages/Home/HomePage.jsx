import { RecentPatient } from "./components/RecentPatients";
import { ArticleCard, UserChat } from "../../components/ui/Cards";
import { CardContainer } from "../../components/ui/Container/CardContainer";
import { NewPatients } from "./components/Pasien";
import './Home.css'
import { useGetRecentChat } from "../../services/chat-service";
import { UserChatListSkeleton } from "../../components/ui/Skeleton";
import { ErrorStatus } from "../../components/Error/ErrorStatus";
import { useGetQuery } from "../../hooks/useGetQuery";
import { formattedDate } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { useStatus } from "../../store/useStatus";
import noMsgIcon from '../../assets/icon/noMsg.png'
import { ArticleSkeletonWhite } from "../../components/ui/Skeleton/AticleSkeletonWhite";

const HomePage = () => {

  return (
    <div className="p-2 w-100 home-container bg-transparent">
      <RecentPatient />

      <div className="row mt-5 home-container me-3">
        <div className="col-12 col-lg-7 mb-3 mb-lg-0 d-flex flex-column">
          <div className="d-flex flex-column gap-3">
            <NewPatients />
            <CardContainer
              title={'Pesan'}
              detail={''}>
              <div className="d-flex flex-column gap-1">
                <ChatListWrapper />
              </div>
            </CardContainer>
          </div>
        </div>


        <CardContainer 
          hrefTo={'/articles'}
          className='col-12 col-lg-5' 
          title={'Artikel Terbaru'} 
          detail={'Lihat Semua'}>
          <div className="d-flex flex-column gap-4 w-100">
            <ArticleWrapper />
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
  const isActive = useStatus((state) => state.isActive);  
  if (isActive) {
    return(
      <>
        <div className="d-flex mx-auto gap-2 flex-column">
          <img 
            src={noMsgIcon} 
            alt="Tidak Melayani" 
            className="mx-auto"
            style={{ width: 'fit-content'}} />
          <p className="fw-semibold">Sedang Tidak Melayani</p>
        </div>
      </>
    );
  }
  
  if (isError) {
    return <ErrorStatus title={'Gagal memuat data pesan!'} action={refetch} />
  }
  
  if (isPending) {
    return (
      <>
        <UserChatListSkeleton />
        <UserChatListSkeleton />
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

const ArticleWrapper = () => {
  const {
    data,
    isPending,
    isError,
    refetch
  } = useGetQuery('articles', '/doctors/articles')
  const navigate = useNavigate()

  if (data === undefined) {
    return(
      <div className="d-flex justify-content-center">
        <p>Tidak ada data artikel!</p>
      </div>
    )
  }

  if (isPending) {
    return(
      <>
        <ArticleSkeletonWhite />
        <ArticleSkeletonWhite />
      </>
    )
  }

  if (!isError) {
    return <ErrorStatus title={'Gagal memuat data pesan!'} action={refetch} />
  }  
  

  
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
      )})}
    </>
  )

}

