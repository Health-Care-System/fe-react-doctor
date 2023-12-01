import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export const UserChatListSkeleton = () => {
  return (
    <>
      <div className='d-flex flex-row align-items-center gap-2 hover chatList'>
        <Skeleton height={60} width={60} />
        <section className="d-flex flex-row w-100">
          <div className="w-75">
            <Skeleton height={20} count={2} />
          </div>
        </section>
      </div>
    </>
  )
}