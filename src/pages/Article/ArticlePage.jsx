import { Link } from "react-router-dom"
import { useGetQuery } from "../../hooks/useGetQuery"

export const ArticlePage = () => {
  const {
    data,
    isPending,
    isError,
    refetch
  } = useGetQuery('articles', '/doctors/articles');

  return (
    <>
      <Link to={'/articles/create'} className="btn btn-primary text-white mx-4 mb-4" style={{ width: 'fit-content'}}>
        Tambah Artikel
      </Link>
      
      <section className="d-flex flex-column gap-3 mx-4">
      {data?.results?.map((item) => (
        <article 
          key={item.id} 
          className="bg-primary d-flex flex-row gap-3 p-3 rounded-3 text-white">
          <img 
            src={item.image} 
            height={200} 
            width={211} 
            className="rounded-3 object-fit-cover"
            alt="Thumbnails" />
          <div>
            <h4 className="fw-semibold">{item.title}</h4>
            <p className="line-clamp-2" style={{ fontSize: 22}}>{item.content}</p>
          </div>
        </article>
      ))
      }
      </section>
    </>
  )
}

export const ButtonWrapper = () => {
  return (
    <>

    </>
  )
}