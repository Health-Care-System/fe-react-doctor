import emojiIcon from '../../assets/icon/emoji.png'
import plusIcon from '../../assets/icon/plus-icon.svg'
import voiceIcon from '../../assets/icon/voice.svg'
import voiceFillIcon from '../../assets/icon/voice-fill.svg'
import sendIcon from '../../assets/icon/send.svg'
import { Button } from '../ui/Button'
import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import useShortCutKeyboard from '../../hooks/useShortcutKeyboard';
import './Navbar.css'
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import { AttachmentModal } from '../ui/Modal/AttachmentModal'
import { useStatus } from '../../store/store'


export const NavbarBottomChat = ({ 
  message, 
  setMessage, 
  onEnter, 
  handleVoiceRecorder, 
  handleImage,
  showAttach,
  setShowAttach,
  onClickSend,
  showPrescription,
  setShowPrescription,
  isChatOver
  }) => {
  const isActive = useStatus((state) => state.isActive)
  const [showEmoji, setShowEmoji] = useState(false);
  const [recordState, setRecordState] = useState(null);
  const [onRecord, setOnRecord] = useState(false);
  
  const { shortcutDiv } = useShortCutKeyboard('k');
  const onEmojiClick = (emojiData) => {
    setMessage((prevMsg) => prevMsg + emojiData.emoji);
  };

  const startRecord = () => {
    setRecordState(RecordState.START)
    setOnRecord(true);
  }
  const stopRecord = () => {
    setRecordState(RecordState.STOP)
    setOnRecord(false)
  }
  
  if (!isActive) {
    return <h5 className='text-center bg-secondary-subtle py-3 mb-0 text-primary fw-semibold'>Sedang Tidak Melayani</h5>
  }
  if (!isChatOver) {
    return <h5 className='text-center bg-secondary-subtle py-3 mb-0 text-primary fw-semibold'>Konsultasi Selesai</h5>
  }

  return (
    <>
      <div className='sticky-bottom z-1'>
        {showAttach &&
          <AttachmentModal 
            setShowAttach={setShowAttach}
            setShowPrescription={setShowPrescription} 
            handleImage={handleImage} />
        }
        {showEmoji &&
          <div className='emoji-wrapper'>
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </div>

        }
        <nav className='sticky-bottom py-2 px-4 navbar-bottom'>
          <Button className={'p-0'} onClick={() => setShowEmoji(!showEmoji)} >
            <img height={'24px'} src={emojiIcon} alt='Emoji' />
          </Button>
          <Button onClick={() => setShowAttach(!showAttach)} className={'p-0'}>
            <img height={'24px'} src={plusIcon} alt='Insert' />
          </Button>
          <input
            ref={shortcutDiv}
            type='text'
            disabled={showPrescription}
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => onEnter(e)}
            className='form-control border-0 rounded-4'
            placeholder='Tulis pesan...'
            style={{ height: '48px' }}
          />
          {message !== ''
            ?
            <Button
              onClick={onClickSend}
              className={'p-0'}>
              <img height={'24px'} src={sendIcon} alt='Send' />
            </Button>
            :
            <button
              onMouseDown={startRecord}
              onMouseUp={stopRecord}
              onMouseLeave={stopRecord}
              className={`p-0 btn border-0`}>
              {
                onRecord
                  ? <img height={'24px'} src={voiceFillIcon} alt='Insert' />

                  : <img height={'24px'} src={voiceIcon} alt='Insert' />

              }
            </button>
          }
          <div className=' d-none'>
            <AudioReactRecorder state={recordState} onStop={handleVoiceRecorder} />
          </div>
        </nav>
      </div>
    </>
  )
}