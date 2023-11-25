import { NavLink } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ProfileSkeleton } from '../ui/Skeleton/ProfileSkeleton';
import ImageWithFallback from '../Error/ImageWithFallback';

import logoutIcon from '../../assets/icon/logout.svg';
import brandLogo from '../../assets/icon/brandLogo.png'
import { menus } from '../../utils/dataObject';
import doctorMale from '../../assets/icon/9432602.jpg'
import doctorFemale from '../../assets/icon/maleDoc.jpg'
import './Sidebar.css'
import { useGetQuery } from '../../hooks/useGetQuery';

const ProfileDoctor = () => {
  const {
    data,
    isPending,
    isError,
    refetch
  } = useGetQuery('profile', '/doctors/profile');


  if (isError) {
    return (
      <div className='d-flex flex-column gap-2 my-5 justify-content-center'>
        <p>Gagal memuat data</p>
        <Button
          className={'btn-primary text-white'}
          onClick={() => refetch()}>
          {'Coba Lagi!'}
        </Button>
      </div>
    );
  }


  if (isPending) {
    return <ProfileSkeleton />;
  }

  return (
    <div>
      <figure className='figure d-flex'>
        <ImageWithFallback
          src={data?.results?.profile_picture}
          fallback={data?.results?.gender === 'male' ? doctorMale : doctorFemale}
          className='avatar object-fit-cover'
          alt="Profile Picture"
          width={100}
          height={100}
        />
        <div className='text-center'>
          <h5 className='mt-2 fs-2 fw-semibold'>{data?.results?.fullname}</h5>
          <p className='text-capitalize'>{data?.results?.specialist}</p>
        </div>
      </figure>
      <div className='d-inline-flex gap-2'>
        <p className='border-end border-secondary border-1 pe-2'>Jam Operasional</p>
        <p>09:00 - 17:00</p>
      </div>
    </div>
  );
};

export const Sidebar = () => {
  return (
    <>
      <aside className='sidebar'>
        <img
          src={brandLogo}
          width={'161'}
          alt="Healthify" />
        <ProfileDoctor />
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
