import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useStatus } from '../../store/store';
import { navbarTitle } from '../../utils/dataObject';

// Components
import Chatbot from '../ChatBot';
import { Button } from '../ui/Button';

// Assets
import notifIcon from '../../assets/icon/notif.svg';
import arrowLeft from '../../assets/icon/arrowL.svg';
import mailIcon from '../../assets/icon/mail-fill.svg';
import './Navbar.css';
import { Notification } from '../Notif';
import client from '../../utils/auth';

export const Navbar = () => {
  const isActive = useStatus((state) => state.isActive);
  const fetch = useStatus((state) => state.fetch);
  const handleStatus = useStatus((state) => state.handleStatus);
  const articles = ['create', 'edit']

  // Buat render title dan content secara dinamis berdasarkan rute
  const location = useLocation();
  const currentRoute = location.pathname.split('/')[1];
  const currentRoute2 = location.pathname.split('/')[2];
  const currentNavItem = navbarTitle.find((item) => item.route === currentRoute);

  // Buat cek apakah rutenya adalah edit article/ create articles, jika iya, maka tampilkan icon panah
  const checkRouteisArticle = articles.some((article) => article === currentRoute2);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [modalNotif, setModalNotif] = useState(false);

  const handleMailIconClick = () => {
    setIsChatbotOpen(!isChatbotOpen); // Toggle isChatbotOpen state
  };
  
  useEffect(() => {
    fetch();
  }, []);
  
  
  const handleStatusDoctor = async () => {
    handleStatus();
    try {
      await client.put('/doctors/status', {
        status: !isActive
      })
    } catch (error) {
      console.error(error?.response?.data?.meta?.message);
    }
  }

  return (
    <header className='navbar p-0'>
      <nav className='navbar-content'>
        <div className='d-flex flex-row align-items-center gap-2'>
          {/* Icon panah kembali khusus halaman create / edit artcile */}
          {checkRouteisArticle &&
            <Link to={'/articles'}>
              <img src={arrowLeft} width={40} height={40} alt='Kembali' />
            </Link>
          }
          <h5 className='fw-semibold m-0 text-secondary'>
            {
              currentNavItem
                ? currentNavItem.title
                : null
            }
          </h5>
        </div>

        <div className='d-flex flex-row-reverse position-relative  flex-md-column pe-md-0'>
          <div className='d-flex align-items-center gap-4'>
            <div className="form-switch form-check-reverse gap-3">
              <label
                className="form-check-label fw-semibold d-none d-md-inline-block"
                htmlFor="isActiveSwitchCheck">
                {isActive ? 'Aktif' : 'Tidak Melayani'}
              </label>
              <input
                className="form-check-input"
                value={isActive}
                checked={isActive}
                onChange={handleStatusDoctor}
                type="checkbox"
                role="switch"
                id="isActiveSwitchCheck"
                style={{ transform: 'scale(1.8)' }}
              />
            </div>
            <Button
              onClick={() => setModalNotif(!modalNotif)}
              className={'p-0 position-relative'}>
              <img src={notifIcon} className='icon-size' alt='Notification' />
              {/* {newNotif &&
              <span 
                style={{ top: '5px', left: '21px'}} className="position-absolute translate-middle p-1 bg-danger border border-light rounded-circle border-0">
                <span className="visually-hidden">New alerts</span>
              </span>
              } */}
            </Button>
            <Button
              className={'p-0'}
              onClick={handleMailIconClick}
            >
              <img
                src={mailIcon}
                className='icon-size'
                alt='Search'
              />
            </Button>
          </div>
          {isChatbotOpen &&
            <div className="popup-background">
              <Chatbot />
            </div>
          }

          {modalNotif &&
            <Notification closeModal={setModalNotif} />
          }
        </div>
      </nav>
    </header>
  );
};
