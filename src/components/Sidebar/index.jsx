import { NavLink } from 'react-router-dom';
import doctor from '../../assets/image/doctor.png';
import { menus } from '../../utils/dataObject';
import './Sidebar.css'
import logoutIcon from '../../assets/icon/logout.svg';
import brandLogo from '../../assets/icon/brandLogo.png'
import { Button } from '../ui/Button';

export const Sidebar = () => {

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
            return (
              <li key={index} className={`list-unstyled`}>
                <NavLink to={item.link} className='text-decoration-none'>
                  {({ isActive }) => (
                  <div className={`${isActive && 'btn-primary text-white'} d-flex navBtn btn`}>
                    <img
                      src={
                        isActive
                          ? item.icon2
                          : item.icon
                      }
                      width={'24'}
                      alt={item.label}
                    />
                    {item.label}
                  </div>
                  )}
                </NavLink>
              </li>
            )
          })}
        </ul>

        {/* Button Logout  */}
        <Button className='btnWrapper'>
          <div className='logoutBtn d-flex btn'>
            <p>Logout</p>
            <img src={logoutIcon} alt='Logout' />
          </div>
        </Button>

      </aside>
    </>
  )
}
