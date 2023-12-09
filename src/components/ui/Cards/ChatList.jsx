import ImageWithFallback from '../../Error/ImageWithFallback';
import './Card.css'
import avatar from '../../../assets/icon/avatar.svg'

export const ChatList = ({ item, hanldeUser }) => {
  const {
    id,
    last_message,
    fullname,
    profile_picture,
    created_at
  } = item;
    
  const time = new Date(created_at);
  const hours = time?.getHours();
  const amPm = hours >= 12 ? 'pm' : 'am';
  const formattedClock = `${hours % 12 || 12}:${String(time.getMinutes()).padStart(2, '0')} ${amPm}`;
    
  return (
    <>
      <div onClick={() => hanldeUser(id)} className='chat-list'>
        <ImageWithFallback src={profile_picture} fallback={avatar} width={60} height={60} className="rounded-3 object-fit-cover" />
        <section className="d-flex flex-row w-100">
          <div className="w-75">
            <h6 className=" fw-semibold line-clamp-1">{fullname}</h6>
            <p className="line-clamp-1">{last_message}</p>
          </div>
          <div className="d-flex flex-column align-items-end gap-2 text-body-secondary w-25">
            <p className="fs-5">{formattedClock}</p>
            {/* <div className="rounded-5 p-1" style={{ backgroundColor: '#DFF6F4' }}>
              <p className=" text-primary fw-semibold fs-5">5+</p>
            </div> */}
          </div>
        </section>
      </div>
    </>
  )
}
