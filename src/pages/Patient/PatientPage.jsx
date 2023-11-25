import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import searchIcon from "../../assets/icon/search.svg";

import { NewPatientListTable } from "../../components/Table/NewPatientListTable";
import { PatientListTable } from "../../components/Table/PatientListTable";
// import { ChatDashboardCard } from "../../components/ui/Cards";
import { PopupEditPasien } from "../../components/ui/Modal/PopupEditPasien";
import { Input } from "../../components/ui/Form";

import { fetchUserData } from "../../services/PatientService";
import { useQuery } from "@tanstack/react-query";

import "./Patient.css";
import { fetchUserChat } from "../../services/ChatService";
import { ChatDashboardCard } from "../../components/ui/Cards/ChatDashboardCard";
import { UserChatListSkeleton } from "../../components/ui/Skeleton";

const PatientPage = () => {
  // State
  const [openModal, setOpenModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedindex, setSelectedIndex] = useState(0);

  // Queries
  const patientQuery = useQuery({
    queryKey: ["patients"],
    queryFn: () => fetchUserData(),
  });
  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUserChat(),
  });

  // Data Initialization
  const chatMessages = (usersQuery.data?.data || []).slice(0, 3);
  const NewPatientListData = (patientQuery.data || []).slice(0, 3);
  const PatientListData = patientQuery.data || [];
  // console.log(PatientListData);

  // Hooks
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Functions
  const handleCurrentUserId = (id) => {
    searchParams.set("status", "all");
    searchParams.set("userId", id);
    navigate(`/chat/user?${searchParams.toString()}`);
  };
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  // Melakukan filtering data berdasarkan Nama, Diagnosis, dan juga Status
  const filteredPatientData = PatientListData.filter((patient) => {
    const lowerCaseSearch = searchValue.toLowerCase();
    const lowerCaseName = patient.name.toLowerCase();
    const lowerCaseDiagnosis = (patient.diagnosis || "")
      .toString()
      .toLowerCase();
    const lowerCaseStatus = (patient.status || "").toString().toLowerCase();

    return (
      lowerCaseName.includes(lowerCaseSearch) ||
      lowerCaseDiagnosis.includes(lowerCaseSearch) ||
      lowerCaseStatus.includes(lowerCaseSearch)
    );
  });

  const PatientDataById = (index) => {
    setSelectedIndex(index) 
    setOpenModal(true)
  } 

  return (
    <section className="container-fluid px-xl-4">
      <div className="d-grid d-lg-flex gap-4 gap-lg-3 align-items-start align-items-lg-center my-3 gap-lg-4 ">
        {/* Pesan Baru */}
        <div className="shadow-sm rounded-4 chat_dashboard">
          <div
            className="p-2 w-100 d-grid gap-2"
            style={{ maxHeight: "11.75rem", overflowY: "auto" }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="m-0 fw-semibold fs-3">Pesan</h3>
              <p className="text-info fw-semibold fs-4">
                {chatMessages.length
                  ? `${chatMessages.length} belum dibaca`
                  : ""}
              </p>
            </div>
            {usersQuery.isLoading ? (
              <UserChatListSkeleton />
            ) : chatMessages.length > 0 ? (
              chatMessages.map((message, index) => (
                <div
                  key={index}
                  onClick={() => handleCurrentUserId(message.id)}
                  className="text-decoration-none"
                  style={{ cursor: "pointer" }}
                >
                  <ChatDashboardCard
                    avatar={message.avatar}
                    date={message.date}
                    name={message.name}
                    text={message.text}
                  />
                </div>
              ))
            ) : (
              <div>Belum ada pesan</div>
            )}
          </div>
        </div>
        {/* Chat Pasien Baru  */}
        <div className="d-grid p-3 rounded-4 shadow-sm ">
          <h3 className="fw-semibold fs-2 ">Pasien Baru</h3>
          <div
            className="table-responsive text-nowrap px-1 "
            style={{ overflowY: "auto", height: "9.25rem" }}
          >
            <NewPatientListTable
              patientData={NewPatientListData}
              handleUser={handleCurrentUserId}
              buttonName="Mulai Konsultasi"
              buttonVariant="bg-primary text-white rounded-pill"
            />
          </div>
        </div>
      </div>
      {/* Daftar Pasien  */}
      <div className="d-grid border-top rounded-top-4 p-2 ">
        <div className="d-grid d-lg-flex justify-content-lg-between align-items-center">
          <h1 className="fw-bold fs-1 mt-2">Daftar Pasien</h1>
          <div className="position-relative pe-0 ">
            <Input
              placeHolder="Nama, Gejala, Status "
              className="rounded-5 ps-5 border-0"
              handleChange={handleChange}
              value={searchValue}
              name="search"
            />
            <button className="border-0 bg-transparent rounded-5 position-absolute start-0 ps-2 top-0 mt-1">
              <img src={searchIcon} alt="searchIcon" className="w-75" />
            </button>
          </div>
        </div>
        <div
          className="table-responsive text-nowrap table-wrapper mt-3"
          style={{ overflowY: "auto", maxHeight: "21.25rem" }}
        >
          <PatientListTable
            patientData={filteredPatientData}
            buttonName="Edit"
            buttonVariant="rounded-pill bg-primary text-white px-3"
            onClick={PatientDataById}
          />
        </div>
      </div>
      {openModal && (
        <PopupEditPasien
          closeModal={() => setOpenModal(false)}
          patientData={PatientListData[selectedindex]}
        />
      )}
    </section>
  );
};

export default PatientPage;
