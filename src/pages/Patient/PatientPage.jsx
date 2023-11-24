import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import avatarIcon from "../../assets/icon/avatar.svg";
import searchIcon from "../../assets/icon/search.svg";

import { NewPatientListTable } from "../../components/Table/NewPatientListTable";
import { PatientListTable } from "../../components/Table/PatientListTable";
import { ChatDashboardCard } from "../../components/ui/Cards";
import { PopupEditPasien } from "../../components/ui/Modal/PopupEditPasien";
import { Input } from "../../components/ui/Form";

import { fetchUserData } from '../../services/patient-service'

import "./Patient.css";

const PatientPage = () => {

  // State
  const [openModal, setOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  // Effect 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data); // Simpan data ke dalam state
        setIsLoading(false);
      } catch (error) {
        // Handle error jika terjadi saat fetching data
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Table Header
  const NewPatientListHeader = [
    "Id Pasien",
    "Nama Lengkap",
    "Id Transaksi",
    "Harga",
  ];
  const PatientListHeader = [
    "Id Pasien",
    "Nama Lengkap",
    "Id Transaksi",
    "Tgl Konsultasi",
    "Diagnosis",
    "Status",
  ];

  // Data Initialization
  const chatMessages = [
    {
      avatar: avatarIcon,
      name: "Alice",
      date: "15 Sep",
      chat: "Hai, aku baik. Terima kasih!",
    },
  ];
  const NewPatientListData = userData.length > 0 ? userData.slice(0,3) : []
  const PatientListData = userData.length > 0 ? userData : []
  const patientDataModal = {
    name: "Joshua Kristin",
    weight: "58 Kg",
    gender: "Laki-laki",
    consultationDate: "17 Oktober 2023",
  };

  // Hooks
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Function
  const useFilteredPatientData = (patientData, searchTerm) => {
    if (patientData === null || patientData === undefined) {
      return [];
    }
  
    return patientData.filter((patient) => {
      const { fullName = '', diagnosis = '', status = '' } = patient;
      const searchTermLower = searchTerm.toLowerCase();
      // Pastikan status adalah string sebelum memanggil toLowerCase()
      const statusLower = typeof status === 'string' ? status.toLowerCase() : '';
  
      return (
        fullName.toLowerCase().includes(searchTermLower) ||
        diagnosis.toLowerCase().includes(searchTermLower) ||
        statusLower.includes(searchTermLower) // Gunakan statusLower yang telah diperiksa
      );
    });
  };
  const filteredPatientData = useFilteredPatientData(
    PatientListData,
    searchTerm
  );
  
  const handleCurrentUserId = (id) => {
    // const statusParam = searchParams.get("status");
    searchParams.set("status", "all");
    searchParams.set("userId", id);
    navigate(`/chat/user?${searchParams.toString()}`);
  };

  return (
    <section className="container-fluid px-xl-4">
      <div className="d-grid d-lg-flex gap-4 gap-lg-3 align-items-start align-items-lg-center my-3 gap-lg-4 ">
        <ChatDashboardCard chatMessages={chatMessages} isLoading={isLoading}/>
        <div className="d-grid p-3 rounded-4 shadow-sm ">
          <h3 className="fw-semibold fs-2 ">Pasien Baru</h3>
          <div
            className="table-responsive text-nowrap px-1 "
            style={{ overflowY: "auto", height: "9.25rem" }}
          >
            <NewPatientListTable
              tableHeaders={NewPatientListHeader}
              patientData={NewPatientListData}
              handleUser={handleCurrentUserId}
              buttonName="Mulai Konsultasi"
              buttonVariant="bg-primary text-white rounded-pill"
            />
          </div>
        </div>
      </div>
      {openModal && (
        <PopupEditPasien
          closeModal={setOpenModal}
          patientData={patientDataModal}
        />
      )}
      <div className="d-grid border-top rounded-top-4 p-2 ">
        <div className="d-grid d-lg-flex justify-content-lg-between align-items-center">
          <h1 className="fw-bold fs-1 mt-2">Daftar Pasien</h1>
          <div className="position-relative pe-0 ">
            <Input
              placeHolder="Nama, Gejala, Status "
              className="rounded-5 ps-5 border-0"
              handleChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
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
            tableHeaders={PatientListHeader}
            patientData={filteredPatientData}
            buttonName="Edit"
            buttonVariant="rounded-pill bg-primary text-white px-3"
            onClick={() => setOpenModal(true)}
          />
        </div>
      </div>
    </section>
  );
};

export default PatientPage;
