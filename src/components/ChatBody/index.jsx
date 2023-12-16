import React, { useState } from "react"
import { toast } from "react-toastify"
import { useLocation } from "react-router-dom"
import { useMedicineStore } from "../../store/store"
import useAutoScroll from "../../hooks/useAutoScroll"
import { checkLastMessage } from "../../utils/helpers"
import { postNewMessage } from "../../services/chat-service"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import client from "../../utils/auth"
import { Bubble } from "../ui/Bubble"
import { Transparent } from "../ui/Container"
import { CustomModal } from "../ui/Modal/Modal"
import { NavbarBottomChat, NavbarChat } from "../Navbar"
import { PrescriptionModal } from "../ui/Modal/PrescriptionModal"
import './Chatbody.css'

export const Chatbody = () => {
  const [message, setMessage] = useState('');
  const { bottomRef, scrollToBottom } = useAutoScroll();
  const [showAttach, setShowAttach] = useState(false);
  const [showPrescription, setShowPrescription] = useState(false);  
  const [openModal, setOpenModal] = useState(false);
  const [isOver, setIsOver] = useState(false);


  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roomId = queryParams.get('room');
  const medicineStore = useMedicineStore((state) => state.medicineStore)
  // Setup query client buat fetching data messages ke BE nantinya, 
  const queryClient = useQueryClient();
  const {
    data,
    isPending,
    isFetching,
    isSuccess
  } = useQuery({
    queryKey: ['roomChatDetails', roomId],
    refetchInterval: isOver ? 3600000 : 60 * 1000,
    staleTime: 60 * 100,
    queryFn: async () => {
      const res =  await client.get(`/doctors/chats/${roomId}`);
      return res.data;
    }
  });

  const clearMedicineStore = useMedicineStore((state) => state.clearMedicineStore)
  const mutation = useMutation({
    mutationFn: postNewMessage,
    onError: (error) => {
      console.log(error?.message);
    },
    onMutate: () => {
      scrollToBottom();
      setShowAttach(false);
      setOpenModal(false);
      setShowPrescription(false);
      scrollToBottom();
    },
    onSuccess: (newData) => {
      // mutasi data baru ke dalam body chat
      queryClient.setQueryData(['roomChatDetails', roomId], oldData => {
        if (oldData) {
          return {
            ...oldData,
            results: {
              ...oldData.results,
              messages: [...oldData.results.messages, newData?.results],
            },
          };
        }
        return oldData;
      });

      // Merubah data last messgae di list user chat
      queryClient.setQueryData(['allRoomChat'], oldData => {
        if (oldData && oldData.pages) {
          const updatedPages = oldData.pages.map((page) => {
            if (page.results) {
              const updatedResults = page.results.map((result) => {
                if (result.id === newData?.results?.roomchat_id) {
                  const lastMsg = checkLastMessage(newData?.results)
                  return {
                    ...result,
                    last_message: lastMsg,
                  };
                }
                return result;
              });
              return {
                ...page,
                results: updatedResults,
              };
            }
            return page;
          });
          return {
            ...oldData,
            pages: updatedPages,
          };
        }
        return oldData;
      });
      scrollToBottom();
    },
    onSettled: () => {
      clearMedicineStore()
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

  // Pesan akan terkirim jika klik user Enter
  const onSendPrescription = (e, medicineArr) => {
    const medJson = JSON.stringify(medicineArr)
    e.preventDefault();
    mutation.mutate({
      message: medJson,
      roomId
    })
  }

  const onClickSend = (e) => {
    e.preventDefault();
    mutation.mutate({
      message,
      roomId
    })
    setMessage('')
  }

  const handleVoiceRecorder = (recorder) => {

    if (recorder && recorder.blob instanceof Blob) {
      const reader = new FileReader();

      reader.onload = () => {
        const audioData = reader.result;

        mutation.mutate({
          audio: audioData,
          roomId
        });
      };

      reader.readAsDataURL(recorder.blob);
    } else {
      toast.error("Gagal mengirim pesan audio! Harap coba lagi!", { delay: 800 });
    }
  };

  const handleImage = (img) => {
    mutation.mutate({
      image: img,
      roomId
    })
  }

  const newVar = {
    user_id: 0,
    message: mutation?.variables?.message ?? '',
    audio: mutation?.variables?.audio ?? '',
    image: mutation?.variables?.image ?? '',
    created_at: new Date()
  }  
  
  return (
    <>
      <section className="chat-body-wrapper position-relative">
        <NavbarChat 
          status={data?.results?.status}
          setIsOver={setIsOver}
          roomId={roomId}
          isPending={isPending || isFetching} 
          isSuccess={isSuccess} 
          exp={data?.results?.expiration_time} 
          data={data?.results?.user} />
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
          {mutation.isPending && (
            <Bubble data={newVar} loading={mutation?.isPending} />
          )
          }
          <div className="pb-5" ref={bottomRef} />
        </div>
        {openModal &&
          <Transparent
            style={{ zIndex: 51}}
            disabled={true}
          >
            <CustomModal
              disabled={mutation.isPending}
              title={'Resep Obat?'}
              content={'Apakah anda yakin untuk mengirim resep obat ini?'}
              confirmAction={(e) => onSendPrescription(e, medicineStore)}
              cancelAction={() => setOpenModal(false)}
            />
          </Transparent>
        }
        {showPrescription &&
          <PrescriptionModal
            setShowPrescription={setShowPrescription}
            setOpenModal={setOpenModal} />
        }
        <NavbarBottomChat
          isChatOver={data?.results?.status || !isOver}
          showPrescription={showPrescription}
          setShowPrescription={setShowPrescription}
          showAttach={showAttach}
          setShowAttach={setShowAttach}
          handleImage={handleImage}
          handleVoiceRecorder={handleVoiceRecorder}
          message={message}
          setMessage={setMessage}
          onEnter={onEnter}
          onClickSend={onClickSend}
        />
      </section>
    </>
  )
}