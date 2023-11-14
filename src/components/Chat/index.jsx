import { Link } from 'react-router-dom';
import bullet from '../../assets/icon/bullet.svg';
import "./Chat.css"

export const Chat = () => {

  return (
    <div className="card shadow border-0 mt-3 mx-2 card-chat">
      <div className="body-chat">
        <div className="chat-1">
            <h6 className="fw-bold text-truncate title-chat">Chat</h6>
            <Link className="text-chat text-truncate fw-bold">3 belum dibaca</Link>
        </div>

        <div className="chat-dashboard">
          <div className="chat-dash">
            <img src={bullet} width={55} alt=" - " className="image" />
            <div className="chat">
              <div className="chatt">
                <p className="fw-bold">Senajan</p>
                <p>15 Sep</p>
              </div>
                <p className="text-text text-truncate">Bagaimana cara keren untuk sanjana</p>
            </div>
          </div>
        </div>  

        <div className="chat-dashboard">
          <div className="chat-dash">
            <img src={bullet} width={55} alt=" - " className="image" />
            <div className="chat">
              <div className="chatt">
                <p className="fw-bold">Senajan</p>
                <p>15 Sep</p>
              </div>
                <p className="text-text text-truncate">Bagaimana cara keren untuk sanjana</p>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
};
