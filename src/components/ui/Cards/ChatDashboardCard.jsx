export const ChatDashboardCard = ({ avatar, name, date, text }) => {
  return (
    <>
      <div className="d-flex gap-2 align-items-center list-chat-content">
        <img
          src={avatar}
          alt="avatarIcon"
          className="rounded-circle avatar_icon"
        />
        <div className="w-100 d-grid">
          <div className="d-flex justify-content-between">
            <h5 className="fs-4 fw-semibold m-0">{name}</h5>
            <p className="text-secondary fw-semibold fs-4">{date}</p>
          </div>
          <p className="fs-4">{text}</p>
        </div>
      </div>
    </>
  );
};
