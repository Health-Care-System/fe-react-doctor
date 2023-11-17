export const ChatDashboardCard = ({ chatMessages }) => {
  return (
    <div className="chat_dashboard rounded-4 ">
      <div className="p-2 w-100 d-grid gap-2">
        <div className="d-flex justify-content-between align-items-center ">
          <h3 className="m-0 fw-bold fs-3 ">Pesan</h3>
          <p className="text-info fw-semibold fs-4 ">3 belum dibaca</p>
        </div>
        {chatMessages.map((message, index) => {
          return (
            <div className="d-flex gap-2 align-items-center" key={index}>
              <img
                src={message.avatar}
                alt="avatarIcon"
                className="rounded-circle avatar_icon"
              />
              <div className="w-100 d-grid ">
                <div className="d-flex justify-content-between ">
                  <h5 className="fs-4 fw-semibold m-0 ">{message.name}</h5>
                  <p className="text-secondary fw-semibold fs-4 ">
                    {message.date}
                  </p>
                </div>
                <p className="fs-4 ">{message.chat}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
