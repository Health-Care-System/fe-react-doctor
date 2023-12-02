// Message.jsx

import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ type, children }) => {
  return (
    <div className={`message ${type === 'user' ? 'user-message' : 'bot-message'}`}>
      {children}
    </div>
  );
};

Message.propTypes = {
  type: PropTypes.oneOf(['user', 'bot']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Message; // Ekspor default dari komponen Message
