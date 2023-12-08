import client from "../utils/auth";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const createMessage = (author, content, type) => {
  return {
    author,
    content,
    type,
    date: new Date(),
    status: 'unread'
  };
}

const getAllRoomChats = async ({ pageParam = 0 }) => {
	try {
		const offset = pageParam * 10;
		const res = await client.get(`/doctors/chats?offset=${offset}&limit=10`);
		return res.data;
	} catch (error) {
		if (error.response && error.response.status === 404) {
			return {
				results: [],
			};
		}
		throw error;
	}
}

export const useGetAllRoomChat = () => {
  return useInfiniteQuery({
    queryKey: ['allRoomChat'],
    queryFn: getAllRoomChats,
    initialPageParam: 0,
		getNextPageParam: (lastPage, allPages) => {
			const nextPage = lastPage?.results?.length ? allPages.length : undefined;
			return nextPage;
		},
  })
}

export const handleMessageChatBot = async (
  setMessage,
  setHistoryChats,
  setLoading,
  message,
  scrollToBottom
) => {
  setMessage('');
  setHistoryChats(prevChats => [
    ...prevChats,
    createMessage('question', message, 'text')
  ]);
  scrollToBottom();

  try {
    setLoading(true);
    const res = await client.post('/chatbot', { request: message });
    setHistoryChats(prevChats => [
      ...prevChats,
      createMessage('answer', res?.data?.results, 'text')
    ]);
  } catch (error) {
    if (error?.response?.status === 400) {
      setHistoryChats(prevChats => [
        ...prevChats,
        createMessage('answer', error?.response?.data?.results, 'text')
      ]);
    }
    console.log(error?.response?.data?.meta?.message);
  } finally {
    setLoading(false);
    scrollToBottom();
  }
}

export const useGetRoomChatDetails = (roomId) => {
  return useQuery({
    queryKey: ['roomChatDetails', roomId],
    queryFn: async () => {
      const res =  await client.get(`/doctors/chats/${roomId}`);
      return res.data;
    }
  })
}

export const postNewMessage = async (newData) => {
  const data = new FormData();
  data.append("message", newData?.message ?? '');
  data.append("image", newData?.image ?? '');
  data.append("audio", newData?.audio ?? '');
  try {
    const res = await client.post(`/doctors/chats/${newData?.roomId}/message`, data);

    if (res?.status === 200 || res?.status === 201) {
      return res.data;
    } else {
      throw new Error("Gagal memperbarui transaksi!")
    }
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'Something went wrong');
  }
}