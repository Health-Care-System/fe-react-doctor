// Packages
import { useNavigate } from "react-router-dom";

// Utils, Hooks, Services
import { formattedDate } from "../../utils/helpers";
import { useGetQuery } from "../../hooks/useGetQuery";

// Components
import { NewPatients } from "./components/Pasien";
import { ArticleCard } from "../../components/ui/Cards";
import { ListChat, PatientList } from "../Patient/PatientPage";
import { ErrorStatus } from "../../components/Error/ErrorStatus";
import { CardContainer } from "../../components/ui/Container/CardContainer";
import { ArticleSkeletonWhite } from "../../components/ui/Skeleton/AticleSkeletonWhite";

// Assets
import noDataImage from '../../assets/image/noData.jpg';
import './Home.css'

const HomePage = () => {
  const articles = useGetQuery('articlesDashboard', '/doctors/articles?offset=0&limit=2', Infinity);
  
  return (
    <div className="p-2 w-100 home-container bg-transparent">

      {/* Komponen yng memuat daftar pasien */}
      <PatientList height={'48rem'} />

      <div className="row mt-3 home-container mx-2 me-lg-4">
        <div className="col-12 col-lg-7 mb-3 mb-lg-0 px-0 px-md-3 d-flex flex-column">
          <div className="d-flex flex-column gap-3">

            {/* Card container untuk pesan baru */}
            <NewPatients />

            {/* Card container untuk riwayat pesan */}
            <CardContainer
              title={'Pesan'}
              detail={''}>
              <div 
                className="d-flex flex-column gap-3 overflow-y-scroll" 
                style={{ maxHeight: '8.2rem'}}>
                <ListChat />
              </div>
            </CardContainer>
          </div>
        </div>


        {/* Card container untuk artikel */}
        <CardContainer
          hrefTo={'/articles'}
          className='col-12 col-lg-5 px-0'
          title={'Artikel Terbaru'}
          detail={articles?.data?.results?.length > 0 ? 'Lihat Semua' : null}>
          <div className="d-flex flex-column gap-4 w-100" style={{ minHeight: '23.2rem' }}>
            <ArticleWrapper />
          </div>
        </CardContainer>
      </div>
    </div>
  )
}

export default HomePage;

const ArticleWrapper = () => {
  const {
    data,
    isPending,
    isError,
    refetch
  } = useGetQuery('articlesDashboard', '/doctors/articles?offset=0&limit=2', Infinity)
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

  if (data?.results?.length === 0) {
    return (
      <div className="d-flex flex-column text-center my-auto justify-content-center">
        <img src={noDataImage} className="mx-auto" alt="Data tidak ada" width={200} height={200} />
        <p className="fw-semibold">Tidak ada data artikel!</p>
      </div>
    )
  }

  return (
    <>
      {data?.results?.slice(0, 2).map((article, index) => {
        const date = formattedDate(article.created_at);
        const handleNavigate = () => {
          navigate(`/articles/edit/${article.id}`)
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

