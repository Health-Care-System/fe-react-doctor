import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export const UserChatListSkeleton = () => {
  return (
    <>
      <div className='d-flex flex-row align-items-center gap-2 hover chatList'>
        <Skeleton circle height={50} width={50} />
        <section className="d-flex flex-row w-100">
          <div className="w-75">
            <Skeleton height={20} width={150} />
            <Skeleton height={20}  />
          </div>
        </section>
      </div>
    </>
  )
}