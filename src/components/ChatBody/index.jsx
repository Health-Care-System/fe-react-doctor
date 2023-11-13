import React, { useState } from "react"
import messages from "../../utils/dataObject"
import { Bubble } from "../ui/Bubble"
import { NavbarBottomChat, NavbarChat } from "../Navbar"
import './Chatbody.css'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Message } from "../../services/ChatService"
import useAutoScroll from "../../hooks/useAutoScroll"

export const Chatbody = () => {
  const [message, setMessage] = useState('')
  const { bottomRef, scrollToBottom } = useAutoScroll()

  // Setup query client buat fetching data messages ke BE nantinya, 
  // sementara masih nge-spread/cloning data array [messages]
  const queryClient = useQueryClient();
  const chatsQuery = useQuery({
    queryKey: ['chats'],
    queryFn: () => [...messages]
  })

  // Buat mutasi/edit data chat misal kirim pesan
  const newMsgMutation = useMutation({
    mutationFn: newMsg => {
      return messages.push(newMsg)
    },
    // Jika data pesan berhasil terkirim, maka kode berikut akan melakukan 
    // refetching untuk merender data pesan baru di chat body
    onSuccess: () => {
      queryClient.invalidateQueries(['chats'])
      scrollToBottom();
    }
  })

  // Pesan akan terkirim jika klik user Enter
  const onEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // Kode berikut akan mengirim atau push data object baru yang dibuat dari sebuah Class, 
      // nantinya data baru ini akan dipush ke dalam array chats
      newMsgMutation.mutate(new Message('doctor', message, 'text'))
      setMessage('')
    }
  }


  return (
    <>
      <section className="chat-body-wrapper position-relative">
        <NavbarChat />
        <div className="chat-body">
          {
            chatsQuery.data?.map((message, index) =>{
            const hours = message.date.getHours();
            const minutes = message.date.getMinutes();
            return(
              <React.Fragment key={index}>
                <Bubble
                  author={message.author}
                  text={message.content}
                  date={message.date}
                  type={message.type}
                  status={message.status}
                  time={`${hours}:${minutes}`}
                />
              </React.Fragment>
            )})
          }
          <div ref={bottomRef} />
        </div>
        <NavbarBottomChat
          message={message}
          setMessage={setMessage}
          onEnter={onEnter}
        />
      </section>
    </>
  )
}
