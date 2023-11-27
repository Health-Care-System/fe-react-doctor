import React, { useState } from 'react';
import { Message } from './Message';
import './ChatBot.css'

const Chatbot = () => {
 const [userInput, setUserInput] = useState('');
 const [chatHistory, setChatHistory] = useState([]);

 const handleInputChange = (e) => {
    setUserInput(e.target.value);
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    setChatHistory([...chatHistory, { text: userInput, type: 'user' }]);
    setUserInput('');
 };

 return (
    <div className="chatbot">
      <div className="chat-history">
        {chatHistory.map((message, index) => (
          <Message key={index} type={message.type}>
            {message.text}
          </Message>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
 );
};

export default Chatbot;