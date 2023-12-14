/* 
Note:
1. Cara pemanggilan jika ingin bubble berada di sebelah kiri: className="bg-success-subtle rounded-top-3 rounded-start-3 align-self-end"
2. Cara pemanggilan jika ingin bubble berada di sebelah kanan: className="bg-transparent rounded-top-3 rounded-end-3"
*/
import DOMPurify from 'dompurify';
import copyIcon from '../../../assets/icon/copy.svg';

export const Bubble = ({ data }) => {
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
                      className={className} />
                  )
                  : (
                    <h5
                      className="opacity-75 text-black fs-3 m-0"
                      style={{ width: '20rem', padding: '1rem 1.5rem' }}
                    >
                      {message}
                    </h5>
                  )
                }
              </div>
            )}
        <span className={`text-royal-blue fs-4 mt-1 ${isUser ? 'text-end' : 'text-start'}`}>{formattedClock}</span>
      </div>

    </>
  );
};

export const BubbleBot = ({ text, author, time }) => {
  const className =
    author === "answer"
      ? "bg-green-50 rounded-top-4 rounded-end-4 align-self-start"
      : "bg-grey-300 rounded-top-4 rounded-start-4 align-self-end";

  const whoIs = author !== "answer";

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        // Teks berhasil disalin
        alert('Teks berhasil disalin!');
      })
      .catch((err) => {
        console.error('Gagal menyalin teks: ', err);
      });
  };
  return (
    <>
      <div className={`d-flex flex-column ${whoIs ? 'align-self-end' : 'align-self-start'}`}>
        <div className={`${className}`} style={{ position: 'relative' }}>
          <p
            className="text-black m-0"
            style={{ width: '20rem', padding: '1rem 1.5rem' }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(text)?.replace(/\n/g, '<br>')
            }}
          />
          {author === 'answer' && (
            <button className="copy-icon" onClick={handleCopy} style={{ position: 'absolute', top: '5px', right: '5px' }} title="Salin pesan">
              <img src={copyIcon} alt="Copy" />
            </button>
          )}
        </div>
        <span className={`text-royal-blue fs-4 mt-1 ${whoIs ? 'text-end' : 'text-start'}`}>{time}</span>
      </div>
    </>
  );
};