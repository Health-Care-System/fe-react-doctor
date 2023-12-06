// Packages
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useQueryClient } from "@tanstack/react-query"

// Utility & Hooks
import { handleDeleteArticle, useGetAllArticles } from '../../services/article-service'
import { formattedDate } from "../../utils/helpers"
import { useInView } from "react-intersection-observer"

// Assets 
import plusIcon from '../../assets/icon/plus.svg'
import sortIcon from '../../assets/icon/sort.svg'
import bullet from '../../assets/icon/bullet.svg'
import filled from '../../assets/icon/filled-pen.svg'
import trash from '../../assets/icon/trash.svg'

// Components
import { Button } from "../../components/ui/Button"
import { Select } from "../../components/ui/Form/Select";
import { Transparent } from "../../components/ui/Container"
import { CustomModal } from "../../components/ui/Modal/Modal"
import { ErrorStatus } from "../../components/Error/ErrorStatus"
import { ArticleSkeleton } from "../../components/ui/Skeleton/ArticleSkeleton"
import './Article.css'
import { Spinner } from "../../components/Loader/Spinner"

export const ArticlePage = () => {
  const sortMenu = [
    { label: 'Publish', value: 'Publish' },
    { label: 'Draf', value: 'Draf' },
    { label: 'Semua', value: 'Semua' },
  ]
  return (
    <>
      <section className="d-flex flex-row justify-content-between mx-4 my-4">
        <Link
          to={'/articles/create'}
          className="btn btn-primary text-white align-items-center gap-2 d-flex flex-row"
          style={{ width: 'fit-content', padding: '0.625rem' }}
        >
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
      <section
        className="d-flex flex-column gap-3 py-3 mx-4 overflow-y-scroll"
        style={{ maxHeight: 'calc(100vh - 12rem)' }}
      >
        <ArticleBody />
      </section>
    </>
  )
}

const ArticleBody = () => {
  const {
    data,
    isPending,
    isError,
    refetch,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage
  } = useGetAllArticles();

  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isPending) {
    return (
      <>
        <ArticleSkeleton />
        <ArticleSkeleton />
      </>
    )
  }
  if (isError) return <ErrorStatus title={'Gagal memuat data artikel'} action={refetch} />

  return (
    data?.pages?.map((item) => (
      <>
        {item?.results?.map((item) => (
          <ArticleWrapper
            isPending={isPending}
            key={item.id}
            item={item} />
        ))}
        <p ref={ref}>
          {isFetchingNextPage
            ? <div className="text-center text-secondary">
              <Spinner />
            </div>
            : ''
          }
        </p>
      </>
    ))
  )
}

const ArticleWrapper = ({ item, ...props }) => {
  const [loading, setLoading] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const queryClient = useQueryClient();
  const date = new Date(item.created_at);
  const formatDate = formattedDate(date);

  const handleDelete = async (id) => {
    handleDeleteArticle(id, setLoading, queryClient, setModalDelete)
  }

  return (
    <>
      <article
        {...props}
        className="bg-primary d-flex flex-row gap-3 p-3 align-items-center rounded-3 text-white">
        <img
          src={item.image}
          height={200}
          width={211}
          className="rounded-3 object-fit-cover d-none d-lg-block"
          alt="Thumbnails" />

        <div className="d-flex flex-row justify-content-between gap-3 w-100">
          <div className="d-flex flex-column gap-3">
            <h4 className="fw-semibold article-title">{item.title}</h4>
            <p className="line-clamp-2 article-p">{item.content}</p>
            <div className="d-flex flex-row gap-2 align-items-center">
              <p className="article-p">Publish</p>
              <img src={bullet} width={6} height={6} alt="" />
              <p className="article-p">{formatDate}</p>
            </div>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center">
            <Button onClick={() => setModalDelete(true)}>
              <img src={trash} width={36} height={36} alt="" />
            </Button>
            <Link className="btn" to={`/articles/edit/${item.id}`}>
              <img src={filled} width={36} height={36} alt="" />
            </Link>
          </div>
        </div>

      </article>

      {modalDelete &&
        <Transparent
          disabled={true}
          className='min-vw-100 position-fixed end-0'
        >
          <CustomModal
            disabled={loading}
            title={'Hapus Artikel?'}
            content={'Apabila anda menghapus artikel, maka artikel akan terhapus dari daftar list artikel.'}
            confirmAction={() => handleDelete(item.id)}
            cancelAction={() => setModalDelete(false)}
          />
        </Transparent>
      }
    </>
  )
}