import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

Skeleton
export const ProfileSkeleton = () => {
  return (
    <>
      <figure className='figure d-flex'>
        <Skeleton
          circle
          width={100}
          height={100}
          containerClassName="avatar-skeleton"
        />
        <Skeleton height={20} count={2} width={100} />
      </figure>
    </>
  )
}
