import searchIcon from '../../assets/icon/search.svg';
import notifIcon from '../../assets/icon/notif.svg';
import styles from './Navbar.module.css'
import { useLocation } from 'react-router-dom';

export const Navbar = ({ title, content}) => {
  const location = useLocation();
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  
  if (location.pathname === '/chat') return null;

  return (
    <header className={styles.navbar}>
      <nav className='d-flex w-100 justify-content-between align-items-center'>
        <div>
          <h5 className='fw-bold m-0'>{title}</h5>
          <p className='fw-medium'>{content}</p>
        </div>

        <div className='d-flex flex-row-reverse  flex-md-column pe-3 pe-md-0'>
          <div className='d-flex align-items-center gap-3'>
            <img src={searchIcon}  className={styles.iconSize} alt='Search' />
            <img src={notifIcon} className={styles.iconSize} alt='Notification' />
          </div>
          <p className='d-none d-md-block fs-2 m-0 fw-semibold text-end'>{`${hours}:${minutes} WIB`}</p>
        </div>

      </nav>
    </header>
  )
}
