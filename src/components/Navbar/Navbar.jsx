import mailIcon from '../../assets/icon/mail-fill.svg';
import notifIcon from '../../assets/icon/notif.svg';
import { useLocation } from 'react-router-dom';
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


