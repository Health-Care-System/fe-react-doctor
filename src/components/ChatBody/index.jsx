import React, { useState } from "react"
import { Bubble } from "../ui/Bubble"
import { NavbarBottomChat, NavbarChat } from "../Navbar"
import './Chatbody.css'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createMessage, getRoomChat, postMessage } from "../../services/chat-service"
import useAutoScroll from "../../hooks/useAutoScroll"
// import { io } from "socket.io-client"

export const Chatbody = () => {
  const [message, setMessage] = useState('')
  const { bottomRef, scrollToBottom } = useAutoScroll()

  // Setup query client buat fetching data messages ke BE nantinya, 
  const queryClient = useQueryClient();
  const chatsQuery = useQuery({
    queryKey: ['chats'],
    queryFn: async () => {
      return await getRoomChat()
    }
  })

  // Buat mutasi/edit data chat misal kirim pesan
  const newMsgMutation = useMutation({
    mutationFn: async (newMsg) => {
      const newData = {
        ...chatsQuery.data,
        messages: [
          ...chatsQuery.data.messages,
          newMsg
        ],
      };

      return await postMessage(newData)
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
      // const newMSg = createMessage("dokter", message, "text")
      // setData((prevData) => [...prevData, newMSg]);
      // socket.emit('newMessage', newMSg)

      // Kode berikut akan mengirim atau push data object baru, 
      // nantinya data baru ini akan dipush ke dalam array chats
      newMsgMutation.mutate(createMessage('doctor', message, 'text'))
      setMessage('')
    }
  }

  const handleVoiceRecorder = (recorder) => {
    newMsgMutation.mutate(createMessage('doctor', recorder, 'audio'))
  }
  
  // // Socket IO
  // const socket = io("ws://localhost:3100");
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   socket.on('onMessage', (message) => {
  //     setData((prevData) => [...prevData, message.content]);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [socket]);
  
  return (
    <>
      <section className="chat-body-wrapper position-relative">
        <NavbarChat data={chatsQuery.data} />
        <div className="chat-body">
          {
            chatsQuery?.data?.results?.map((message, index) => {
              const date = new Date(message.date)
              const hours = date.getHours();
              const minutes = date.getMinutes();
              return (
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
              )
            })
          }
          <div className="pb-5" ref={bottomRef} />
        </div>
        <NavbarBottomChat
          handleVoiceRecorder={handleVoiceRecorder}
          message={message}
          setMessage={setMessage}
          onEnter={onEnter}
        />
      </section>
    </>
  )
}
