import { RecentPatient } from "./components/RecentPatients";
import { ArticleCard, UserChat } from "../../components/ui/Cards";
import { CardContainer } from "../../components/ui/Container/CardContainer";
import { NewPatients } from "./components/Pasien";
import './Home.css'
import { useGetRecentChat } from "../../services/chat-service";
import { UserChatListSkeleton } from "../../components/ui/Skeleton";
import { ErrorStatus } from "../../components/Error/ErrorStatus";
import { useGetQuery } from "../../hooks/useGetQuery";
import { useStatus } from "../../store/useStatus";
import noMessage from '../../assets/icon/noMsg.png'

const HomePage = () => {

  return (
    <div className="p-2 w-100 home-container bg-transparent">
      <RecentPatient />

      <div className="row mt-5 home-container">
        <div className="col-12 col-lg-7 mb-3 mb-lg-0 d-flex flex-column">
          <div className=" d-flex flex-column gap-3">
            <NewPatients />
            <CardContainer
              title={'Pesan'}
            >
              <div className="d-flex flex-column gap-1">
                <ChatListWrapper />
              </div>
            </CardContainer>
          </div>
        </div>


        <CardContainer hrefTo={'/article'} className='col-12 col-lg-5' title={'Artikel Terbaru'} detail={'View all'}>
          <div className=" d-flex flex-column gap-4 w-100">
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
  if (!isActive) {
    return (
      <div className="d-flex justify-content-center flex-column pb-3">
        <img src={noMessage} height={100} width={100} className=" mx-auto" alt="Sedang Tidak Melayani" />
        <p className="text-center">Sedang Tidak Melayani</p>
      </div>
    )
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
  } = useGetQuery('articleByDoctor', '/doctors/articles')

  if (data === undefined) {
    return (
      <div className="d-flex justify-content-center">
        <p>Tidak ada data artikel!</p>
      </div>
    )
  }

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <ErrorStatus title={'Gagal memuat data pesan!'} action={refetch} />
  }

  return (
    <>
      {data?.results?.map((article, index) => (
        <ArticleCard
          key={index}
          title={article.title}
          content={article.content}
          date={article.date}
        />
      ))}
    </>
  )

}

