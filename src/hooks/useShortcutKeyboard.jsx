import { useEffect, useRef } from "react";
// Gunakan custom hooks ini jika ada requirement sebuah shortcut keyboard dari UI/UX
// misal: jika user klik tombol keyboard 'k' maka content yang di useRef dengan shortcutDiv akan aktif
// cara panggil cukup dengan const { shortcutDiv} = useShortcutKeyboard(tombol yang dimau,misal 'k')
// lalu cukup panggil shortcutDiv pada komponen jsx dengan menggunakan useRef
// misal <input ref={contentDiv}></input>

const useShortCutKeyboard = (key) => {
  const shortcutDiv = useRef(null);
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === key) {
        shortcutDiv.current.focus();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [key]);
  
  return {
    shortcutDiv
  }
}

export default useShortCutKeyboard;