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
  return await client.get(`${query}/users`);
}

export const getRoomChat = async () => {
  const res = await client.get('http://localhost:3001/roomchat');
  return res.data;
}

export const postMessage = async (newData) => {
  return await client.post('http://localhost:3001/roomchat', newData)
}

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetRecentChat = () => {
	const { data, isPending, isError,refetch } = useQuery({
		queryKey: ['recentChat'],
		queryFn: async () => {
			const res = await axios.get('http://localhost:3001/user-chat');
			return res.data;
		}
	});
	return {
		data,
		isPending,
		isError,
		refetch
	}
}