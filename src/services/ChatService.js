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
  const res = await client.get('http://localhost:3000/roomchat');
  return res.data;
}

export const postMessage = async (newData) => {
  return await client.post('http://localhost:3000/roomchat', newData)
}