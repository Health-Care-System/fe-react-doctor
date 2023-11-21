import { UserChatListSkeleton } from "../Skeleton";

export const ChatDashboardCard = ({ chatMessages, isLoading }) => {
  return (
    <div className="chat-dashboard shadow-sm rounded-4">
      <div className="p-2 w-100 d-grid gap-2" style={{ maxHeight: '11.75rem', overflowY: 'auto' }}>
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="m-0 fw-semibold fs-3">Pesan</h3>
          <p className="text-info fw-semibold fs-4">
            {chatMessages.length > 0 ? `${chatMessages.length} belum dibaca` : ''}
          </p>
        </div>
        {isLoading ? (
          Array.from({ length: 1 }).map((_, index) => (
            <UserChatListSkeleton key={index} />
          ))
        ) : chatMessages.length === 0 ? (
          <p className="text-center">Tidak ada pesan</p>
        ) : (
          chatMessages.map((message, index) => (
            <div className="d-flex gap-2 align-items-center" key={index}>
              <img
                src={message.avatar}
                alt="avatarIcon"
                className="rounded-circle avatar_icon"
              />
              <div className="w-100 d-grid">
                <div className="d-flex justify-content-between">
                  <h5 className="fs-4 fw-semibold m-0">{message.name}</h5>
                  <p className="text-secondary fw-semibold fs-4">
                    {message.date}
                  </p>
                </div>
                <p className="fs-4">{message.chat}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
