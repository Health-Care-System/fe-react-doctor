import React, { Suspense } from "react"
import { useQuery } from "@tanstack/react-query"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import './Chat.css'

import { chatStatus } from "../../utils/dataObject"
import searchIconGrey from '../../assets/icon/search-grey.svg'

import { UserChatListSkeleton } from "../../components/ui/Skeleton"
import { ChatList } from "../../components/ui/Cards"
import { Input } from "../../components/ui/Form"
import { fetchUserChat } from "../../services/ChatService"

export const ChatPage = () => {
  // Buat nyari query url saat ini
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  // set queary search params di url browser misal: https://chat?status=all
  const handleStatus = (value) => {
    searchParams.set("status", value);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };
  

  const handleCurrentUserChat = (id) => {
    searchParams.set("userId", id);
    navigate(`/chat/user?${searchParams.toString()}`);
  };

  // Tanstack query untuk fetching semua data chat user
  const usersQuery = useQuery({
    queryKey: ['users'],
    queryFn: () => fetchUserChat(),
  })
  
  const chatListStyle = location.pathname === '/chat/user' 
    ? 'd-none d-lg-flex' 
    : 'chat-userlist__wrapper';
  
  

  return (
    <>
      <div className="d-flex flex-row h-100 w-100">
        <section className={`chatWrapper mt-0 px-0 ${chatListStyle}`}>
          <div className="sticky-top bg-white d-flex flex-column gap-3 px-3">
            <div className="position-relative">
              <Input
                name={'searchUserInput'}
                placeHolder={'Search or start a new chart'}
                className={'rounded-5 ps-5'}
              />
              <img
                src={searchIconGrey}
                className="position-absolute searchIcon"
                alt="Search"
              />
            </div>
            <div
              className="btn-group w-100"
              role="group"
              aria-label="Basic radio toggle button group">
              {chatStatus?.map(status => (
                <React.Fragment key={status.id}>
                  <input
                    onClick={() => handleStatus(status.value)}
                    key={status.id}
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id={`btnradio${status.id}`}
                    autoComplete="off"
                  />
                  <label className="btn btn-outline-primary w-25" htmlFor={`btnradio${status.id}`}>
                    {status.label}
                  </label>
                </React.Fragment>
              ))
              }
            </div>
          </div>

          <section className="overflow-y-scroll h-100 d-flex flex-column gap-3 px-3">
            {
              usersQuery.isLoading
                ? <UserChatListSkeleton />
                : usersQuery.data.data.map((user, index) => (
                  <Suspense
                    key={index}
                    fallback={<UserChatListSkeleton />}
                  >
                    <ChatList
                      id={user.id}
                      name={user.name}
                      messages={user.text}
                      hanldeUser={handleCurrentUserChat}
                    />
                  </Suspense>
                ))

            }
          </section>
        </section>
        <section className="chat-body__wrapper">
          <Outlet />
        </section>
      </div>
    </>
  )
}