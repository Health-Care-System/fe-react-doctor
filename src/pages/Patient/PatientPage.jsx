import "./Patient.module.css";
import avatarIcon from '../../assets/icon/avatar.svg'
import { CardTotalPasien, ChartGenderPasien, ChatDashboardCard, ConsultationChatCard } from "../../components/ui/Cards";

const PatientPage = () => {

  const chatMessages = [
    {
      avatar: avatarIcon,
      name: "John",
      date: "15 Sep",
      chat: "Halo, bagaimana kabarmu?"
    },
    {
      avatar: avatarIcon,
      name: "Alice",
      date: "15 Sep",
      chat: "Hai, aku baik. Terima kasih!"
    },
  ];

  return (
    <section className="container-fluid d-grid gap-3">
      <div className="layout container ">
        <div className="row gap-xl-0 gap-3 mx-lg-2 my-lg-3 ">
          <div className="col-xl-3 col-lg-5 col-12 d-flex align-items-center justify-content-center gap-3 m-0 p-0 ">
            <ChartGenderPasien
              data={{ womanPercentage: "49%", manPercentage: "51%" }}
            />
            <div className="d-grid gap-2 justify-content-center align-items-center ">
              <CardTotalPasien
                percentage="51%"
                title="Pasien Baru"
                total="15"
              />
              <CardTotalPasien
                percentage="49%"
                title="Pasien Lama"
                total="90"
              />
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-12 d-lg-inline d-grid justify-content-center px-xl-4 ">
            <ChatDashboardCard chatMessages={chatMessages} />
          </div>
          <div className="col-xl-6 col-lg-12 col-12 mt-xl-0 mt-lg-3 justify-content-lg-start d-grid justify-content-center m-0 px-xl-4   ">
            <ConsultationChatCard gender="Wanita" name="Joshua Kristin" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientPage;
