/* 
Note:
1. Cara pemanggilan jika ingin bubble berada di sebelah kiri: className="bg-success-subtle rounded-top-3 rounded-start-3 align-self-end"
2. Cara pemanggilan jika ingin bubble berada di sebelah kanan: className="bg-transparent rounded-top-3 rounded-end-3"
*/


export const Bubble = ({ text, author, type, time }) => {
  const className =
    author === "user"
      ? "bg-neutral-300 rounded-top-4 rounded-end-4 align-self-start"
      : "bg-grey-300 rounded-top-4 rounded-start-4 align-self-end";

  const whoIs = author !== "user";

  return (
    <>
      <div className={`d-flex flex-column ${whoIs ? 'align-self-end' : 'align-self-start'}`}>

        {
          type === "audio"
            ? (
              <audio className="" controls>
                <source
                  src={text?.url}
                  type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            )


            : (
              <div className={`${className}`}>
                {type === 'image'
                  ? (
                    <img
                      width={'187px'}
                      src={text}
                      alt="Image"
                      className={className} />
                  )
                  : (
                    <h5
                      className="opacity-75 text-black fs-3 m-0"
                      style={{ width: '20rem', padding: '1rem 1.5rem' }}
                    >
                      {text}
                    </h5>
                  )
                }
              </div>
            )}
        <span className={`text-royal-blue fs-4 mt-1 ${whoIs ? 'text-end' : 'text-start'}`}>{time}</span>
      </div>

    </>
  );
};

