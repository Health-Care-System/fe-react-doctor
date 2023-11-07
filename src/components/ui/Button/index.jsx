// Note:
// 1. Cukup panggil komponen ini dengan dengan cara <Button className="" id="" type="" onClick={() => {}} > Children </Button>

export const Button = ({ type, className, id, onClick, children }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`btn ${className}`}
      id={id}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
