import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import carebotLogo from '../../assets/icon/carebot.svg'; 
import sendIcon from '../../assets/icon/send.svg';
import arrowDown from '../../assets/icon/arrow-down-2.svg';
import './Chatbot.css'; 

const Chatbot = ({ handleClose }) => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [answer, setAnswer] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setChatHistory([...chatHistory, { text: userInput, type: 'user' }]);
    setUserInput('');
    setAnswer('Pola hidup sehat melibatkan beberapa aspek penting. Ini beberapa langkah yang bisa membantumu 1. Makan Sehat: 2. Olahraga Teratur 3. Istirahat yang Cukup: 4. Atasi Stres: 5. Hindari Kebiasaan Berbahaya: 6. Perawatan Kesehatan Rutin: 7. Jaga Keseimbangan Emosional dan Sosial:  Melakukan perubahan kecil dalam rutinitas harianmu dapat memberikan dampak besar pada kesehatanmu secara keseluruhan.');
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot">
        <div className="chatbot-header">
          <div className="header-content">
            <img src={carebotLogo} alt="Carebot Logo" className="carebot-logo" />
            <span className="carebot-title">Carebot</span>
          </div>
          <button type="button" className="close-btn" onClick={handleClose}>
          <img src={arrowDown} alt="Close" className="close-btn" />
          </button>
        </div>
        <div className="chat-history">
          {/* Display chat history */}
          {chatHistory.map((chat, index) => (
            <div key={index} className={chat.type === 'user' ? 'user-message' : 'chatbot-message'}>
              {chat.text}
            </div>
          ))}
          {/* Display Chatbot's answer */}
          {answer && (
            <div className="chatbot-message">
              {answer}
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="user-input">
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Kirim Pertanyaan"
            className="input-field"
          />
          <button type="submit" className="send-button">
            <img src={sendIcon} alt="Send" className="send-icon" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
