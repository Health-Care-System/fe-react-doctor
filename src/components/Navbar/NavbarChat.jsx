
import cameraIcon from '../../assets/icon/camera.svg'
import searchIconChat from '../../assets/icon/search-chat.svg'
import arrowDownIcon from '../../assets/icon/arrow-down-2.svg'
import arrowLeftIcon from '../../assets/icon/arrow-left.svg'
import { Link } from 'react-router-dom'
import './Navbar.css'


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