import axios from "axios";
// Class baru untuk membuat sebuah object chat
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
  const res = await axios.get('http://localhost:3000/roomchat');
  return res.data;
}

export const postMessage = async (newData) => {
  return await axios.post('http://localhost:3000/roomchat', newData)
}