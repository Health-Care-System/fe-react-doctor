import { useRef } from "react";

const useAutoScroll = () => {
  const bottomRef = useRef();
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return {
    bottomRef,
    scrollToBottom
  }
}

export default useAutoScroll;

// Custom hooks untuk melakukan auto scroll ke bawah saat ada message baru
// cara pemakaiannya cukup dengan panggil fungsi ini dengan cara
// const {
//   bottomRef,
//   scrollIntoView
// } = useAutoScroll()

// taruh scrollIntoView ke dalam fungsi yang akan dijalankan kita ada data baru dan bisa juga ditaruh di useEffect,
// dan taruh bottomRef ke dalam div container misal <div ref={bottomRef} />

// Note: kalau bingung bisa cek di component Chatbody untuk penggunaannya