import emojiIcon from '../../assets/icon/emoji.png'
import plusIcon from '../../assets/icon/plus-icon.svg'
import voiceIcon from '../../assets/icon/voice.svg'
import sendIcon from '../../assets/icon/send.svg'
import { Button } from '../ui/Button'
import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import useShortCutKeyboard from '../../hooks/useShortcutKeyboard';
import './Navbar.css'


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
            {message !== ''
              ? <img height={'24px'} src={sendIcon} alt='Send' />
              : <img height={'24px'} src={voiceIcon} alt='Insert' />
            }
            
            
          </Button>
        </nav>
      </div>
    </>
  )
}