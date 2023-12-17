import { useInView } from "react-intersection-observer"
import React, { Suspense, useEffect, useState } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

import useForm from "../../hooks/useForm"
import useDebounce from "../../hooks/useDebounce"
import { chatStatus } from "../../utils/dataObject"
import searchIconGrey from '../../assets/icon/search-grey.svg'
import { getPatientChatByNameService, useGetAllRoomChat } from "../../services/chat-service"

import { Input } from "../../components/ui/Form"
import { ChatList } from "../../components/ui/Cards"
import { Spinner } from "../../components/Loader/Spinner"
import { ErrorStatus } from "../../components/Error/ErrorStatus"
import { UserChatListSkeleton } from "../../components/ui/Skeleton"
import './Chat.css'

export const ChatPage = () => {
  // Buat nyari query url saat ini
  const navigate = useNavigate();
  const location = useLocation();
  const { form, handleInput } = useForm({ searchUser: '' })
  const searchParams = new URLSearchParams(location.search);

  // set queary search params di url browser misal: https://chat?status=all
  const statusQuery = searchParams.get('status');
  const handleStatus = (value) => {
    searchParams.set("status", value);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  const handleCurrentUserChat = (id) => {
    searchParams.set("room", id);
    navigate(`/chat/user?${searchParams.toString()}`);
  };

  const chatListStyle = location.pathname === '/chat/user'
    ? 'd-none d-lg-flex'
    : 'chat-userlist__wrapper';

  // Tanstack query untuk fetching semua data chat user
  const {
    data,
    refetch,
    isPending,
    isError,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage
  } = useGetAllRoomChat();

  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage) {
      console.log('test')
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  // Fitur searching
  const [filterData, setFilterData] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);

  const debouncedValue = useDebounce(form?.searchUser, 500);
  useEffect(() => {
    if (debouncedValue !== '') {
      getPatientChatByNameService(
        setLoadingSearch,
        setFilterData,
        debouncedValue
      )
    }
  }, [debouncedValue]);
  
  console.log(data);

  return (
    <>
      <div className="d-flex flex-row w-100">
        <section className={`chatWrapper mt-0 px-0 gap-4 ${chatListStyle}`}>
          <section className="sticky-top d-flex flex-column gap-4 px-3">
            <div className="position-relative">
              <Input
                value={form.searchUser}
                handleChange={(e) => handleInput(e)}
                name={'searchUser'}
                placeHolder={'cari...'}
                className={'rounded-5 ps-5 border-0 bg-white py-2'}
              />
              <img
                src={searchIconGrey}
                className="position-absolute searchIcon"
                alt="Search"
              />
            </div>
            <div
              className="btn-group w-100 bg-white"
              role="group"
              aria-label="Basic radio toggle button group">
              {chatStatus?.map(status => (
                <React.Fragment key={status.id}>
                  <input
                    onClick={() => handleStatus(status.value)}
                    key={status.id}
                    type="radio"
                    value={statusQuery}
                    readOnly
                    checked={status.value === statusQuery}
                    className="btn-check"
                    name="btnradio"
                    id={`btnradio${status.id}`}
                    autoComplete="off"
                  />
                  <label
                    className="btn border-0 btn-outline-primary text-nowrap w-25 fs-4"
                    style={{ padding: '0.75rem 1rem' }}
                    htmlFor={`btnradio${status.id}`}>
                    {status.label}
                  </label>
                </React.Fragment>
              ))
              }
            </div>
          </section>

          <section className="chat-userlist-wrapper px-3">
            <ChatListContainer
              data={debouncedValue !== '' ? filterData : data?.pages}
              isDebounce={debouncedValue !== ''}
              isFetchingNextPage={isFetchingNextPage}
              isPending={isPending || loadingSearch}
              isError={isError}
              refetch={refetch}
              reffer={ref}
              handleCurrentUserChat={handleCurrentUserChat} />
          </section>
        </section>
        <section className="chat-body__wrapper">
          <Outlet />
        </section>
      </div>
    </>
  )
}

const ChatListContainer = ({
  handleCurrentUserChat,
  isFetchingNextPage,
  isDebounce,
  isPending,
  refetch,
  isError,
  data,
  reffer,
}) => {

  if (isPending) {
    return (
      <>
        <UserChatListSkeleton />
        <UserChatListSkeleton />
        <UserChatListSkeleton />
      </>
    )
  }

  if (isError) return <ErrorStatus title={'Gagal memuat data pesan'} action={refetch} />

  if (isDebounce) {
    return (
      <>
        {data?.map((item, index) => (
          <Suspense
            key={index}
            fallback={<UserChatListSkeleton />}
          >
            <ChatList
              item={item}
              hanldeUser={handleCurrentUserChat}
            />
          </Suspense>
        ))}
      </>
    )
  }

  return (
    <>
      {data?.map((user) => (
        user?.results?.map((item, index) => (
          <Suspense
            key={index}
            fallback={<UserChatListSkeleton />}
          >
            <ChatList
              item={item}
              hanldeUser={handleCurrentUserChat}
            />
          </Suspense>
        ))
      ))
      }
      <div ref={reffer}>
        {isFetchingNextPage
          ? <div className=" text-center"><Spinner /></div>
          : ''
        }
      </div>
    </>
  )
}