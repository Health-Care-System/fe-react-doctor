/* 
Note:
1. Cara pemanggilan jika ingin bubble berada di sebelah kiri: className="bg-success-subtle rounded-top-3 rounded-start-3 align-self-end"
2. Cara pemanggilan jika ingin bubble berada di sebelah kanan: className="bg-transparent rounded-top-3 rounded-end-3"
*/
import { useState } from 'react';
import DOMPurify from 'dompurify';
import { Spinner } from '../../Loader/Spinner';
import { isJSONString } from '../../../utils/helpers';
import ImageWithFallback from '../../Error/ImageWithFallback';
import { Button } from '../Button';
import imgAlter from '../../../assets/image/medicine.jpg'
import copyIcon from '../../../assets/icon/copy.svg'
import { toast } from 'react-toastify';

export const Bubble = ({ data, loading }) => {
  const {
    user_id,
    message,
    image,
    audio,
    created_at
  } = data;
  const className =
    user_id !== 0
      ? "bg-neutral-300 rounded-top-4 rounded-end-4 align-self-start"
      : "bg-grey-300 rounded-top-4 rounded-start-4 align-self-end";

  const isUser = user_id === 0;

  const time = new Date(created_at);
  const hours = time?.getHours();
  const formattedClock = `${hours % 12 || 12}:${String(time.getMinutes()).padStart(2, '0')}`;

  let renderedMessage;

  if (isJSONString(message)) {
    const formattedMessage = JSON.parse(message);

    if (Array.isArray(formattedMessage)) {
      renderedMessage = (
        <div className='d-flex flex-column gap-3 bg-white'>
          {formattedMessage.map((item, index) => (
            <div key={index} className='rounded-3'>
              <ImageWithFallback src={item?.image} fallback={imgAlter} width={186} className=' rounded-top-3' height={102} alt={item?.name} />
              <div className='py-3 px-4 rounded-bottom-3 bg-primary text-white  '>
                <p className='fw-semibold' style={{ height: '2.5rem'}}>{item?.name}</p>
                <div className="d-flex  flex-row  gap-1 line-clamp-1 text-nowrap">
                  <p className="fs-4 fw-semibold">{`Rp${item?.price.toLocaleString('id-ID')}`}</p>
                  <p className="text-secondary-subtle fs-4 text-truncate">&#47; {item?.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else if (typeof formattedMessage === 'string') {
      renderedMessage = (
        <h5
          className="opacity-75 text-black fs-3 m-0"
          style={{ width: '20rem', padding: '1rem 1.5rem' }}
        >
          {formattedMessage}
        </h5>
      );
    }
  } else {
    renderedMessage = (
      <h5
        className="opacity-75 text-black fs-3 m-0"
        style={{ width: '20rem', padding: '1rem 1.5rem' }}
      >
        {message}
      </h5>
    );
  }

  return (
    <>
      <div className={`d-flex flex-column ${isUser ? 'align-self-end' : 'align-self-start'}`}>
        {
          audio !== ''
            ? (
              <audio className="" controls>
                <source
                  src={audio}
                  type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            )
            : (
              <div className={`${className}`}>
                {image !== ''
                  ? (
                    <img
                      width={'187px'}
                      src={image}
                      alt="Image"
                      className={`${className} `} />
                  )
                  : renderedMessage
                }
              </div>
            )}
          
          <div className={`text-royal-blue d-flex flex-row gap-2 align-items-center fs-4 mt-1 ${isUser ? 'text-end justify-content-end' : 'text-start'}`}>
            {loading 
            ? <Spinner />
            : <p>{formattedClock}</p>
            }
          </div>
      </div>
    </>
  );
};


export const BubbleBot = ({ text, author, time }) => {
  const [isHovered, setIsHovered] = useState(false);
  const className =
    author === "answer"
      ? "bg-green-50 rounded-top-4 rounded-end-4 align-self-start"
      : "bg-grey-300 rounded-top-4 rounded-start-4 align-self-end";

  const whoIs = author !== "answer";
  
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Berhasil menyalin pesan', {
        position: 'top-center'
      });
    } catch (err) {
      toast.error('Gagal menyalin pesan', {
        position: 'top-center'
      });
    }
  };
  return (
    <>
      <div className={`d-flex flex-column ${whoIs ? 'align-self-end' : 'align-self-start'}`}>
      <div
        id='bubbleBot'
        className={`d-flex flex-row align-items-center`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <Button
            onClick={handleCopyClick}
            className={`m-2 p-0 ${whoIs ? 'order-0' : 'order-1'}`}
            style={{ height: 'fit-content' }}
          >
            <img src={copyIcon} width={24} height={24} alt='Copy' />
          </Button>
        )}
        <div className={`${className}`}>
          <p
            className='text-black m-0'
            style={{ width: '20rem', padding: '1rem 1.5rem' }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(text)?.replace(/\n/g, "<br>")
            }}
          />
        </div>
      </div>
      <span className={`text-royal-blue fs-4 mt-1 ${whoIs ? 'text-end' : 'text-start'}`}>{time}</span>
    </div>
    </>
  );
};

