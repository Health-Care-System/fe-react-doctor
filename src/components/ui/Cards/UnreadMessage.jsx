import IconOfAvatar from "../../../assets/icon/avatar.svg";
export const UnreadMessage = ({message, handleMessageId}) => {
  return (
    <section className="d-flex p-3 flex-column align-items-center gap-2 flex-shrink-0 rounded-4 shadow-sm message">
      <div className="d-flex justify-content-between align-items-center align-self-stretch ">
        <h3 className="fs-2 fw-semibold ">Pesan</h3>
        <p className="text-primary fw-semibold fs-4 ">{message.length} belum dibaca</p>
      </div>
      <div className="overflow-auto d-grid gap-3 ">
      {message.map((message, index) => (
        <div className="d-flex align-items-center gap-4 align-self-stretch " onClick={() => handleMessageId(message.id) } key={index} >
          <img
            src={message.avatar || IconOfAvatar}
            alt="IconOfAvatar"
            className="rounded-pill avatar_icon"
          />
          <div className="d-flex flex-column align-items-center justify-content-between align-self-stretch ">
            <div className="d-flex align-items-center justify-content-between w-100 ">
              <h3 className="fs-3 fw-semibold mb-0 ">{message.name}</h3>
              <p className="text-primary fs-4 fw-semibold ">{message.date}</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="overflow-hidden fs-3 chat">
                {message.text}
              </p>
              {message.text.length > 0 && (
                <span className="bg-success-subtle rounded-circle text-primary px-2 fs-4">
                  {message.text.length}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};
