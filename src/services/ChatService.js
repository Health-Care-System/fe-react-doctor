import axios from "axios";
// Class baru untuk membuat sebuah object chat
export class Message {
  constructor(author, content, type) {
    this.author = author;
    this.content = content;
    this.type = type;
    this.date = new Date();
    this.status = 'unread';
  }
}

export const fetchUserChat = async () => {
  const query = import.meta.env.VITE_MOCK_USER_API;
  return await axios.get(`${query}/users`);
}