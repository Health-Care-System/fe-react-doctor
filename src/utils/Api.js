import axios from "axios";

export const fetchUserChat = async () => {
  const query = import.meta.env.VITE_MOCK_USER_API;
  return await axios.get(`${query}/users`);
}