// Packages
import React, { useState } from 'react';

// Utils / hooks / services
import useAutoScroll from '../../hooks/useAutoScroll';
import { handleMessageChatBot } from '../../services/chat-service';

// Components
import { Button } from '../ui/Button';
import { BubbleBot } from '../ui/Bubble';

// Assets
import sendIcon from '../../assets/icon/send.svg';
import carebotLogo from '../../assets/icon/carebot.svg';
import arrowDown from '../../assets/icon/arrow-down-2.svg';
import deleteIcon from '../../assets/icon/delete-icon-red.svg'
import './ChatBot.css'

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [historyChats, setHistoryChats] = useState([]);
  const { bottomRef, scrollToBottom } = useAutoScroll();

  const handleClearChat = () => {
    setMenu(false);
    setHistoryChats([]);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleMessageChatBot(
      setMessage,
      setHistoryChats,
      setLoading,
      message,
      scrollToBottom
    );
  }
  const onEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleMessageChatBot(
        setMessage,
        setHistoryChats,
        setLoading,
        message,
        scrollToBottom
      );
    }
  }
  return (
    <div className="chatbot-container pt-5 bg-white">
      <div className="chatbot-header">
        <div className="header-content">
          <img src={carebotLogo} alt="Carebot Logo" className="carebot-logo" />
          <span className="carebot-title">Carebot</span>
        </div>
        <button
          type="button"
          className="close-btn"
          onClick={() => setMenu(!menu)}>
          <img src={arrowDown} alt="Close" className="close-btn" />
        </button>
        {/* Tombol menu, jika panah di navbar chat di klik */}
        {menu &&
          <Button
            type="button"
            className="position-absolute delete-menu text-danger bg-white border fw-semibold"
            onClick={handleClearChat}>
            <div className='d-flex flex-row gap-5 justify-content-between grey-hover px-2 py-1 rounded-3'>
              <p>Hapus Pesan</p>
              <img src={deleteIcon} width={24} height={24} alt="Close" />
            </div>
          </Button>
        }
      </div>
      {/* Bagian chat body */}
      <div className={`chat-history py-5 px-3 position-relative`}>
        {
          historyChats?.map((message, index) => {
            const date = new Date(message.date)
            const hours = date.getHours();
            const minutes = date.getMinutes();
            return (
              <React.Fragment key={index}>
                <BubbleBot
                  author={message.author}
                  text={message.content}
                  date={message.date}
                  type={message.type}
                  status={message.status}
                  time={`${hours}:${minutes}`}
                />
              </React.Fragment>
            )
          })
        }
        {/* Jika loading, dan patokan untuk scrollToBottom */}
        <div className="py-5" ref={bottomRef} />
        {loading &&
          <span className="loader mx-auto"></span>
        }
      </div>

      <form className="user-input">
        <div className='position-relative w-100'>
          <input
            name={'Input-bot'}
            type="text"
            value={message}
            disabled={loading}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => onEnter(e)}
            placeholder="Kirim Pertanyaan"
            className="form-control input-field rounded-5 border-0 w-100 pe-5 bg-neutral-200"
          />
          <button
            onClick={(e) => handleSubmit(e)}
            type="button"
            disabled={loading}
            className="send-button">
            {loading
              ? <div className="spinner-border spinner-border-sm text-secondary" role="status">
                <span className="visually-hidden send-icon">Loading...</span>
              </div>
              : <img
                src={sendIcon}
                alt="Send"
                className="send-icon" />
            }
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatbot;
