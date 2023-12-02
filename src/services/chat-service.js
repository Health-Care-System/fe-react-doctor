import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import client from "../utils/auth";
export const createMessage = (author, content, type) => {
  return {
    author,
    content,
    type,
    date: new Date(),
    status: 'unread'
  };
}

export const fetchUserChat = async () => {
  const query = import.meta.env.VITE_MOCK_USER_API;
  return await axios.get(`${query}/users`);
}

export const getRoomChat = async () => {
  const res = await axios.get('http://localhost:3001/roomchat');
  return res.data;
}

export const postMessage = async (newData) => {
  return await client.post('http://localhost:3001/roomchat', newData)
}

export const useGetRecentsChats = () => {
	const { data, isPending, isError,refetch } = useQuery({
		queryKey: ['recentPatients'],
		queryFn: async () => {
			try {				
				const res = await client.get('/doctors/chats');
				return res.data;
			} catch (error) {
				console.log(error);
			}
		}
	});
	return {
		data,
		isPending,
		isError,
		refetch
	}
}