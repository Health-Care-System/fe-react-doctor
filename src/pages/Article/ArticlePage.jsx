import { Link } from "react-router-dom"
import { useGetQuery } from "../../hooks/useGetQuery"
import plusIcon from '../../assets/icon/plus.svg'
import sortIcon from '../../assets/icon/sort.svg'
import bullet from '../../assets/icon/bullet.svg'
import filled from '../../assets/icon/filled-pen.svg'
import trash from '../../assets/icon/trash.svg'
import { Select } from "../../components/ui/Form/Select";
import './Article.css'
import { Button } from "../../components/ui/Button"
import { formattedDate } from "../../utils/helpers"
import client from "../../utils/auth"
import { useState } from "react"
import { Transparent } from "../../components/ui/Container"

export const ArticlePage = () => {
  const {
    data,
    isPending,
    isError,
    refetch
  } = useGetQuery('articles', '/doctors/articles');

  const sortMenu = [
    { label: 'Publish', value: 'Publish' },
    { label: 'Draf', value: 'Draf' },
    { label: 'Semua', value: 'Semua' },
  ]
  return (
    <>
      <section className="d-flex flex-row justify-content-between mx-4 my-4">
        <Link to={'/articles/create'} className="btn btn-primary text-white align-items-center gap-2 d-flex flex-row" style={{ width: 'fit-content', padding: '0.625rem' }}>
          <img src={plusIcon} width={28} height={28} alt="" />
          <p className="fs-3 fw-semibold">Tambah Artikel</p>
        </Link>

        <div className="d-flex position-relative flex-row align-items-center">
          <img src={sortIcon} width={24} height={24} className="icon-sort" alt="" />
          <Select
            setDefault={false}
            className={'border-0 bg-light sort-article'}
            style={{ width: 'fit-content' }}
            name={'sortArticle'}
            options={sortMenu}
          />
        </div>
      </section>

      <section className="d-flex flex-column gap-3 mt-3 mx-4">
        {data?.results?.length > 0
          ? data?.results?.map((item) => (
            <ArticleWrapper key={item.id} item={item} />
          ))
          : <p className="mx-auto fw-semibold fs-2 opacity-50">Tidak ada artikel di draf</p>
        }
      </section>
    </>
  )
}

const ArticleWrapper = ({ item, ...props }) => {
  const [loading, setLoading] = useState(false)
  const date = new Date(item.created_at);
  const formatDate = formattedDate(date);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const res = await client.delete(`/doctors/articles/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>

      {/* {!loading &&
        <Transparent>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </Transparent>
      } */}
      <article
        {...props}
        className="bg-primary d-flex flex-row gap-3 p-3 align-items-center rounded-3 text-white">
        <img
          src={item.image}
          height={200}
          width={211}
          className="rounded-3 object-fit-cover d-none d-lg-block"
          alt="Thumbnails" />
        <div className="d-flex flex-column gap-3">
          <h4 className="fw-semibold article-title">{item.title}</h4>
          <p className="line-clamp-2 article-p">{item.content}</p>
          <div className="d-flex flex-row gap-2 align-items-center">
            <p className="article-p">Publish</p>
            <img src={bullet} width={6} height={6} alt="" />
            <p className="article-p">{formatDate}</p>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center">
          <Button
            onClick={() => handleDelete(item.id)}
          >
            <img src={trash} width={36} height={36} alt="" />
          </Button>
          <Link to={`/articles/edit?id=${item.id}`}>
            <img src={filled} width={36} height={36} alt="" />
          </Link>
        </div>
      </article>
    </>
  )
}