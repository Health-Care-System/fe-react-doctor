
import cameraIcon from '../../assets/icon/camera.svg'
import searchIconChat from '../../assets/icon/search-chat.svg'
import arrowDownIcon from '../../assets/icon/arrow-down-2.svg'
import arrowLeftIcon from '../../assets/icon/arrow-left.svg'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Button } from '../ui/Button'
import ImageWithFallback from '../Error/ImageWithFallback'
import avatar from '../../assets/icon/avatar.svg'


export const NavbarChat = ({ data }) => {
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
          <ImageWithFallback src={data?.profile_picture} fallback={avatar}  width={50} height={50} className="rounded-3 object-fit-cover" />
          <div className="w-75 m-0">
            <h6 className=" fw-semibold">{data?.fullname}</h6>
            {/* <div className='d-flex align-items-center gap-1'>
              <div className={`bullet ${data?.isOnline ? 'bg-success-100' : 'bg-secondary-subtle'}`}></div>
              <p className="line-clamp-1 fs-4 fw-medium m-0">{data?.isOnline ? 'Online' : 'Offline'}</p>
            </div> */}
          </div>
        </figure>
        <figure className='d-inline-flex align-items-center gap-1 gap-lg-4'>
          {navIconMenu?.map((item, index) => (
            <Button key={index}>
            <img
              key={index}
              height={'24px'}
              src={item.icon}
              alt={item.alt}
            />
            </Button>
          ))}
        </figure>
      </nav>
    </>
  )
}