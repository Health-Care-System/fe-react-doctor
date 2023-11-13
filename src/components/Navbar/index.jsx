import mailIcon from '../../assets/icon/mail-fill.svg';
import notifIcon from '../../assets/icon/notif.svg';
import { Link, useLocation } from 'react-router-dom';
import { navbarTitle } from '../../utils/dataObject';
import './Navbar.css'

export const Navbar = () => {

  // Buat render title dan content secara dinamis berdasarkan rute
  const location = useLocation();
  const currentRoute = location.pathname.split('/')[1];
  const currentNavItem = navbarTitle.find((item) => item.route === currentRoute);

  return (

    <header className='navbar p-0'>
      <nav className='navbar-content'>
        <div >
          <h5 className='fw-semibold m-0 text-secondary'>
            {
              currentNavItem
                ? currentNavItem.title
                : null
            }
          </h5>
        </div>

        <div className='d-flex flex-row-reverse  flex-md-column pe-3 pe-md-0'>
          <div className='d-flex align-items-center gap-4'>
            <img src={notifIcon} className='icon-size' alt='Notification' />
            <img src={mailIcon} className='icon-size' alt='Search' />
          </div>
        </div>

      </nav>
    </header>
  )
}

// Navbar berikut hanya digunakan di fitur chat
import cameraIcon from '../../assets/icon/camera.svg'
import searchIconChat from '../../assets/icon/search-chat.svg'
import arrowDownIcon from '../../assets/icon/arrow-down-2.svg'
import arrowLeftIcon from '../../assets/icon/arrow-left.svg'

export const NavbarChat = () => {
  const navIconMenu = [
    { icon: cameraIcon, alt: 'Camera' },
    { icon: searchIconChat, alt: 'Search' },
    { icon: arrowDownIcon, alt: 'Arrow' }
  ]

  return (
    <>
      <nav className='sticky-top z-1 text-white d-flex flex-row justify-content-between w-100 px-4 pt-3 shadow-sm bg-primary'>
        <figure className='d-inline-flex gap-3 align-items-center'>
          <Link className=' d-lg-none' to={'/chat'}>
            <img src={arrowLeftIcon} width={24} alt='Back' />
          </Link>
          <img width={50} height={50} className="rounded-3 object-fit-cover" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile Picture" />
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
import useShortCutKeyboard from '../../hooks/useShortcutKeyboard';

export const NavbarBottomChat = ({ message, setMessage, onEnter }) => {
  const [showEmoji, setShowEmoji] = useState(false);

  const { shortcutDiv } = useShortCutKeyboard('k');
  const onEmojiClick = (emojiData) => {
    setMessage((prevMsg) => prevMsg + emojiData.emoji);
  };


  return (
    <>
      <div className='sticky-bottom z-1'>
        {showEmoji &&
          <div className='emoji-wrapper'>
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </div>

        }
        <nav className='sticky-bottom py-2 px-4 navbar-bottom'>
          <Button className={'p-0'} onClick={() => setShowEmoji(!showEmoji)} >
            <img height={'24px'} src={emojiIcon} alt='Emoji' />
          </Button>
          <Button className={'p-0'}>
            <img height={'24px'} src={plusIcon} alt='Insert' />
          </Button>
          <input
            ref={shortcutDiv}
            type='text'
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => onEnter(e)}
            className='form-control border-0 rounded-4'
            placeholder='Tulis pesan...'
            style={{ height: '48px' }}
          />
          <Button className={'p-0'}>
            <img height={'24px'} src={voiceIcon} alt='Insert' />
          </Button>
        </nav>
      </div>
    </>
  )
}