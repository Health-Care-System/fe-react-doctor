import { Link, useLocation } from 'react-router-dom';
import doctor from '../../assets/image/doctor.png';
import { menus } from '../../utils/dataObject';
import styles from './Sidebar.module.css'
import logoutIcon from '../../assets/icon/logout.svg';
export const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      <aside className={styles.sidebar}>

        {/* Container porfile doctor */}
        <figure className={styles.figure}>
          <img src={doctor} width={'100'} alt="Profile Picture" />
          <div className='text-center'>
            <h5 className='mt-2 fw-bold'>Dr. Djaja Surya</h5>
            <p className="fs-2">Dokter Umum</p>
          </div>
        </figure>

        {/* Container Working Hours */}
        <div className={`${styles.figure} gap-0`}>
          <p>Working Hours</p>
          <p>9pm - 5am</p>
        </div>

        {/* Container list navigasi */}
        <ul className='list-group gap-2 mt-4'>
          {menus?.map((item, index) => {
            const active = item.link === location.pathname && 'btn-primary text-white';

            return (
              <li key={index} className={`list-unstyled`}>
                <Link
                  to={item.link}
                  className={`${styles.navBtn} ${active} btn`}
                >
                  <img
                    src={
                      item.link === location.pathname
                        ? item.icon2
                        : item.icon
                    }
                    width={'24'}
                    alt={item.label}
                  />
                  <p className='m-0'>{item.label} </p>
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Button Logout  */}
        <div className={styles.btnContainer}>
          <btn className={styles.btnWrapper}>
            <div className={`${styles.logoutBtn} btn`}>
              <p>Logout</p>
              <img src={logoutIcon} alt='Logout' />
            </div>
          </btn>
        </div>

      </aside>
    </>
  )
}
