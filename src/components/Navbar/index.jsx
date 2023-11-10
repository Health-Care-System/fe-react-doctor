import searchIcon from '../../assets/icon/search.svg';
import notifIcon from '../../assets/icon/notif.svg';
import './Navbar.css'
import { useLocation } from 'react-router-dom';
import { navbarTitle } from '../../utils/dataObject';

export const Navbar = () => {

  // Buat dapetin jam saat ini
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  // Buat nyari lokasi route active saat ini, kalau routenya di /chat maka return null/kosongan
  const location = useLocation();
  if (location.pathname.startsWith('/chat')) return null;

  // Buat render title dan content secara dinamis berdasarkan rute
  const currentRoute = location.pathname;
  const currentNavItem = navbarTitle.find((item) => item.route === currentRoute);

  return (
    <header className='navbar'>
      <nav className='d-flex w-100 justify-content-between align-items-center'>
        <div>
          <h5 className='fw-bold m-0'>
            {
              currentNavItem
                ? currentNavItem.title
                : null
            }
          </h5>
          <p className='fw-medium'>
            {
              currentNavItem
                ? currentNavItem.content
                : null
            }
          </p>
        </div>

        <div className='d-flex flex-row-reverse  flex-md-column pe-3 pe-md-0'>
          <div className='d-flex align-items-center gap-3'>
            <img src={searchIcon} className='iconSize' alt='Search' />
            <img src={notifIcon} className='iconSize' alt='Notification' />
          </div>
          <p className='d-none d-md-block fs-2 m-0 fw-semibold text-end'>{`${hours}:${minutes} WIB`}</p>
        </div>

      </nav>
    </header>
  )
}

// Navbar berikut hanya digunakan di fitur chat
import cameraIcon from '../../assets/icon/camera.svg'
import searchIconChat from '../../assets/icon/search-chat.svg'
import arrowDownIcon from '../../assets/icon/arrow-down-2.svg'

export const NavbarChat = () => {
  const navIconMenu = [
    { icon: cameraIcon, alt: 'Camera' },
    { icon: searchIconChat, alt: 'Search' },
    { icon: arrowDownIcon, alt: 'Arrow' }
  ]

  return (
    <>
      <nav className='sticky-top z-1 bg-white d-flex flex-row justify-content-between w-100 px-4 pt-3 shadow-sm'>
        <figure className=' d-inline-flex gap-3 align-items-center'>
          <img width={'60'} height={'60'} className="rounded-3 object-fit-cover" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile Picture" />
          <div className="w-75 m-0">
            <h6 className=" fw-semibold">{'John Doe'}</h6>
            <p className="line-clamp-1 m-0">{'Online'}</p>
          </div>
        </figure>
        <figure className='d-inline-flex align-items-center gap-3'>
          {navIconMenu?.map((item, index) => (
            <img
              key={index}
              height={'24px'}
              src={item.icon}
              alt={item.alt}
            />
          ))}
        </figure>
      </nav>
    </>
  )
}

import emojiIcon from '../../assets/icon/emoji.png'
import plusIcon from '../../assets/icon/plus-icon.svg'
import voiceIcon from '../../assets/icon/voice.svg'
import { Button } from '../ui/Button'
import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

export const NavbarBottomChat = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState('');

  const handleInput = (e) => {
    setText(e.target.value);
  }
  
  const onEmojiClick = (emojiData) => {
    setText((prevText) => prevText + emojiData.emoji);
  };
  
  return (
    <>
      <div className='sticky-bottom z-1'>
        {showEmoji &&
          <EmojiPicker
            onEmojiClick={onEmojiClick}
          />
        }
        <nav className='sticky-bottom py-2 px-4 navbar__bottom'>
          <Button
            onClick={() => setShowEmoji(!showEmoji)}
          >
            <img height={'24px'} src={emojiIcon} alt='Emoji' />
          </Button>
          <img height={'24px'} src={plusIcon} alt='Insert' />
          <input
            type='text'
            value={text}
            onChange={(e) => handleInput(e)}
            className='form-control border-0 rounded-4'
            placeholder='Say something...'
            style={{ height: '48px' }}
          />
          <img height={'24px'} src={voiceIcon} alt='Insert' />
        </nav>
      </div>
    </>
  )
}