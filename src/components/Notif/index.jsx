import React, { useEffect, useState } from 'react';
import ImageWithFallback from '../Error/ImageWithFallback';
import avatar from '../../assets/icon/avatar.svg';
import './Notif.css';
import { useGetNewPatients } from '../../services/patient-service';
import { Button } from '../ui/Button';
import { Spinner } from '../Loader/Spinner';
import { UserChatListSkeleton } from '../ui/Skeleton';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { formattedDate } from '../../utils/helpers';

export const Notification = ({ closeModal }) => {
  const {
    data,
    isPending,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetNewPatients();
  const [markAllRead, setMarkAllRead] = useState(false);
  const handleMarkAllRead = () => {
    setMarkAllRead(true);
  };

  // Effect Infinite Scroling...
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  console.log(data)

  return (
    <div className="w-100 bg-white notif-modal rounded-3">
      <div className="d-flex flex-nowrap gap-3 align-items-center p-2 rounded-top-3 flex-row justify-content-between bg-neutral-300">
        <h5 className='fw-semibold m-0 fs-2 text-royal-blue'>Notifikasi</h5>
        <Button
          className='m-0 text-primary fw-semibold'
          onClick={handleMarkAllRead}
        >
          Tandai semua sudah dibaca
        </Button>
      </div>

      <div className='pb-2 bg-white rounded-2'>
        <div className='bg-white overflow-y-scroll pt-2 d-flex flex-column rounded-3' style={{ minHeight: '14rem', maxHeight: '14rem' }}>
          {isPending
            ? <UserChatListSkeleton />
            : data?.pages?.map((item) => (
              item?.results?.map((item, index) => (
                <React.Fragment key={index}>
                  <NotifItem
                    data={item}
                    closeModal={closeModal}
                    markAllRead={markAllRead} />
                </React.Fragment>
              ))
            ))
          }
          <p ref={ref} className='text-center'>
            {isFetchingNextPage
              ? <Spinner />
              : ''
            }
          </p>
        </div>
      </div>
    </div>
  )
}

const NotifItem = ({ data, markAllRead, closeModal }) => {
  console.log(data)
  const formatDate = formattedDate(data?.created_at);
  const date = new Date(data?.created_at);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  
  const formattedTime = `${hours}:${minutes}, ${formatDate}`


  return (
    <>
      <div className={`py-2 px-2 border-bottom grey-hover`}>
        <div className='d-flex flex-row align-items-center gap-3 '>
          <div>
            <ImageWithFallback
              src={data?.profile_picture}
              width={50}
              height={50}
              className={'avatar object-fit-cover'}
              fallback={avatar} />
          </div>
          <Link
            onClick={() => closeModal(false)}
            className={`text-decoration-none ${markAllRead ? 'visited' : 'text-notif'}`}
            to={`/chat/user?room=${data?.room_chat_id}`}
          >
            <b className='fw-semibold'>{data?.fullname}</b> Menunggu konsultasi dengan anda, segera tinjau untuk memberikan tanggapan yang tepat.
          </Link>
        </div>
        <p className='text-end fs-4 text-green-200'>{formattedTime}</p>
      </div>
    </>
  );
}
