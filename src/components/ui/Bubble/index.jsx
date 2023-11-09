/* 
Note:
1. Cara pemanggilan jika ingin bubble berada di sebelah kiri: className="bg-success-subtle rounded-top-3 rounded-start-3 align-self-end"
2. Cara pemanggilan jika ingin bubble berada di sebelah kanan: className="bg-transparent rounded-top-3 rounded-end-3"
*/

export const Bubble = ({ text, author, type }) => {
  const className =
    author === "user"
      ? "bg-white rounded-top-4 rounded-end-4 align-self-start"
      : "bg-success-subtle rounded-top-4 rounded-start-4 align-self-end";

  return (
    <>
      <div className={`d-flex align-items-baseline px-1 py-1 ${className}`}>
        {
          type === "image"
            ? <img width={'187px'} src={text} alt="Image" />
            : <h5 className="opacity-75 text-black fs-3 m-0 px-3 py-2" style={{ width: '20rem'}}>{text}</h5>
        }
      </div>
    </>
  );
};

