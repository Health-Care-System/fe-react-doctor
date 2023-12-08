import React, { useEffect, useState } from "react"
import { NavbarBottomChat, NavbarChat } from "../Navbar"
import './Chatbody.css'
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postNewMessage, useGetRoomChatDetails } from "../../services/chat-service"
import useAutoScroll from "../../hooks/useAutoScroll"
import { useLocation } from "react-router-dom"
import { Bubble } from "../ui/Bubble"
// import { io } from "socket.io-client"

export const Chatbody = () => {
  const [message, setMessage] = useState('');
  const { bottomRef, scrollToBottom } = useAutoScroll();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roomId = queryParams.get('room');

  // Setup query client buat fetching data messages ke BE nantinya, 
  const queryClient = useQueryClient();
  const {
    data
  } = useGetRoomChatDetails(roomId);

  const mutation = useMutation({
    mutationFn: postNewMessage,
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['roomChatDetails'] })
      scrollToBottom();
    }
  })


  // Pesan akan terkirim jika klik user Enter
  const onEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      mutation.mutate({
        message,
        roomId
      })
      setMessage('')
    }
  }

  const handleVoiceRecorder = (recorder) => {
    mutation.mutate({
      audio: recorder,
      roomId
    })
  }
  

  return (
    <>
      <section className="chat-body-wrapper position-relative">
        <NavbarChat data={data?.results?.user} />

        <div className="chat-body">
          {
            data?.results?.messages?.map((message) => {
              return (
                <React.Fragment key={message.id}>
                  <Bubble
                    data={message}
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

