import { Link, useLocation } from 'react-router-dom';
import doctor from '../../assets/image/doctor.png';
import { menus } from '../../utils/dataObject';
import styles from './Sidebar.module.css'
import logoutIcon from '../../assets/icon/logout.svg';
export const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      <aside className={`${styles.sidebar}`}>
        <figure className={styles.figure}>
          <img src={doctor} width={'100'} alt="Profile Picture" />
          <div className='text-center'>
            <h5 className='mt-2 fw-bold'>Dr. Djaja Surya</h5>
            <p className="fs-2">Dokter Umum</p>
          </div>
        </figure>

        <div className={`${styles.figure} gap-0`}>
          <p>Working Hours</p>
          <p>9pm - 5am</p>
        </div>

        <ul className='list-group h-100 gap-2 mt-4'>
          {menus?.map((item, index) => {
            const active = item.link === location.pathname && 'btn-primary text-white'
            return (
              <li key={index} className={`list-unstyled`}>
                <Link to={item.link} className={`${styles.navBtn} ${active} btn`}>
                  <img
                    src={item.link === location.pathname ? item.icon2 : item.icon}
                    width={'24'}
                    alt={item.label}
                    className={`${styles.iconActive}`
                    } />
                  <p className='m-0'>{item.label} </p>
                </Link>
              </li>
            )
          })}
          <li className='h-100 mt-5 list-unstyled position-relative'>
            <btn className={styles.btnWrapper}>
              <div className={`${styles.logoutBtn} btn`}>
                <p>Logout</p>
                <img src={logoutIcon} alt='Logout' />
              </div>
            </btn>
          </li>
        </ul>
      </aside>
    </>
  )
}
