import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

import { Button } from '../ui/Button'
import avatar from '../../assets/icon/avatar.svg'
import { TimerChat } from '../ChatBody/TimerChat'
import ImageWithFallback from '../Error/ImageWithFallback'

import cameraIcon from '../../assets/icon/camera.svg'
import arrowLeftIcon from '../../assets/icon/arrow-left.svg'
import arrowDownIcon from '../../assets/icon/arrow-down-2.svg'
import searchIconChat from '../../assets/icon/search-chat.svg'
import './Navbar.css'

export const NavbarChat = ({ data, isPending, isSuccess, exp, setIsOver, status }) => {
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
          {isPending
            ? <Skeleton width={50} height={50} />
            : <ImageWithFallback 
              src={data?.profile_picture} 
              fallback={avatar} 
              width={50} 
              height={50} 
              className="rounded-3 object-fit-cover" />
          }

          <div className="w-75 m-0">
            <h6 className="fw-semibold">
              {isPending
                ? <Skeleton width={100} height={16} />
                : data?.fullname
              }
            </h6>
            <div className='d-flex align-items-center gap-1'>
              <div className={`bullet ${data?.isOnline ? 'bg-success-100' : 'bg-secondary-subtle'}`}></div>
              <p className="line-clamp-1 fs-4 fw-medium m-0">{data?.isOnline ? 'Online' : 'Offline'}</p>
            </div>
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
      <TimerChat 
        isPending={isPending} 
        isSuccess={isSuccess} 
        status={status} 
        expirationTime={exp} 
        setIsOver={setIsOver} />
    </>
  )
}