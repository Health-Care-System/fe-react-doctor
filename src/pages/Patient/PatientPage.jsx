import { useQuery } from "@tanstack/react-query";
import { UnreadMessage } from "../../components/ui/Cards/UnreadMessage";
import { fetchUserData } from "../../services/PatientService";
import { fetchUserChat } from "../../services/ChatService";
import { useLocation, useNavigate } from "react-router-dom";

const PatientPage = () => {
  // Queries
  const patientQuery = useQuery({
    queryKey: ["patients"],
    queryFn: () => fetchUserData(),
  });

  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUserChat(),
  });

  // Hooks
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const chatMessages = (usersQuery.data?.data || []).slice(0, 3);

  // Functions
  const handleMessageId = (id) => {
    searchParams.set("status", "all");
    searchParams.set("userId", id);
    navigate(`/chat/user?${searchParams.toString()}`);
  };

  return (
    <section className="container">
      <div className="d-flex flex-column align-items-center gap-4 my-3">
        <UnreadMessage
          message={chatMessages}
          handleMessageId={handleMessageId}
        />
      </div>
      <div>
        
      </div>
    </section>
  );
};

export default PatientPage;
