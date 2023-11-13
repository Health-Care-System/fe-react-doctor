import { Link, useLocation } from 'react-router-dom';
import doctor from '../../assets/image/doctor.png';
import { menus } from '../../utils/dataObject';
import './Sidebar.css'
import logoutIcon from '../../assets/icon/logout.svg';
import brandLogo from '../../assets/icon/brandLogo.png'

export const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      <aside className='sidebar'>

        <img src={brandLogo} width={'161'} alt="Healthify" />
        {/* Container porfile doctor */}
        <figure className='figure d-flex'>
          <img src={doctor} width={'100'} alt="Profile Picture" />
          <div className='text-center'>
            <h5 className='mt-2 fs-2 fw-semibold'>Dr. Djaja Surya</h5>
            <p>Dokter Umum</p>
          </div>
        </figure>
        <div className='d-inline-flex gap-2'>
          <p className='border-end border-secondary border-1 pe-2'>Jam Operasional</p>
          <p>09:00 - 17:00</p>
        </div>
        
        <ul className='list-group gap-2 mt-4'>
          {menus?.map((item, index) => {
            const currentRoute = location.pathname.split('/')[1];
            const active = currentRoute === item.link.split('/')[1] && 'btn-primary text-white';

            return (
              <li key={index} className={`list-unstyled`}>
                <Link to={item.link} className='text-decoration-none'>
                  <div className={`${active} d-flex navBtn btn`}>
                    <img
                      src={
                        currentRoute === item.link.split('/')[1]
                          ? item.icon2
                          : item.icon
                      }
                      width={'24'}
                      alt={item.label}
                    />
                    {item.label}
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Button Logout  */}
        <btn className='btnWrapper'>
          <div className='logoutBtn d-flex btn'>
            <p>Logout</p>
            <img src={logoutIcon} alt='Logout' />
          </div>
        </btn>

      </aside>
    </>
  )
}
