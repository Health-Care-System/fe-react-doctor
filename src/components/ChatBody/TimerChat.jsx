import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { differenceInSeconds, parseISO } from 'date-fns';
import warning from '../../assets/icon/warning.svg';

export const TimerChat = ({ expirationTime, isSuccess, roomId, setIsOver, status }) => {
  const calculateRemainingTime = () => {
    if (!expirationTime) {
      return '';
    }

    const difference = differenceInSeconds(parseISO(expirationTime), new Date());

    if (difference <= 0) {
      return '';
    }

    const minutes = Math.floor(difference / 60);
    const seconds = difference % 60;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newRemainingTime = calculateRemainingTime();
      setRemainingTime(newRemainingTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [expirationTime]);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (remainingTime === '' || !status) {
      setIsOver(true);
      queryClient.setQueryData(['roomChatDetails', roomId], oldData => {
        if (oldData && oldData?.results?.status) {
          return {
            ...oldData,
            results: {
              ...oldData.results,
              status: false,
            },
          };
        }
        return oldData;
      });
    }
  }, [remainingTime, setIsOver, status, roomId, queryClient]);

  if (remainingTime !== '' && isSuccess) {
    return (
      <div className='d-flex flex-row align-items-center justify-content-end'>
        <div className='bg-primary px-2 py-1' style={{ width: 'fit-content', borderEndStartRadius: '0.5rem' }}>
          <img width={24} height={24} src={warning} alt='' />
          <div className='d-inline-flex align-items-center text-white gap-1'>
            <p className='fs-4'>Sisa Waktu:</p>
            <p className='text-white fw-semibold fs-4'>{`${remainingTime} Menit`}</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
