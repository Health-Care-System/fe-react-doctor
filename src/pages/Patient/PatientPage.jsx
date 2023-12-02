/* Note:
1. Menggunakan patient-service untuk melakukan pengambilan data.
2. Menghandle isLoading, isPending, isError, refetch menggunakan useQuery pada file service.
3. Menghandle button "Mulai Konsultasi" pada component <NewPatients /> yang mengarahkan pada page ChatPatients sesuai dengan id
4. Menghandle button "Edit" pada component <RecentPatient /> untuk menampilkan modal berdasarkan id/index yang dimiliki user.
*/

import { Link, useLocation, useNavigate } from "react-router-dom";
import IconForAvatar from "../../assets/icon/avatar.svg";
import { useGetRecentsPatients } from "../../services/patient-service";
import { TableContainer } from "../../components/Table/TableContainer";
import { recentPatientsThead } from "../../utils/dataObject";
import { Button } from "../../components/ui/Button";
import useForm from "../../hooks/useForm";
import { useState } from "react";
import { ModalEditPasien } from "../../components/ui/Modal/ModalEditPasien";
import { ErrorStatus } from "../../components/Error/ErrorStatus";
import { UserChatListSkeleton } from "../../components/ui/Skeleton";
import { RowTable } from "../../components/Table/RowTable";
import { NewPatients } from "../Home/components/Pasien";
import { CardContainer } from "../../components/ui/Container/CardContainer";
import "./Patient.css";

const PatientPage = () => {
  const { data } = useGetRecentsPatients('patients', '');
  const [openModal, setOpenModal] = useState(false);
  const [selectedPatientIndex, setSelectedPatientIndex] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const handleCurrentUserId = (id) => {
    searchParams.set("status", "all");
    searchParams.set("userId", id);
    navigate(`/chat/user?${searchParams.toString()}`);
  };

  const openEditModal = (index) => {
    setSelectedPatientIndex(index);
    setOpenModal(true);
  };

  return (
    <section className="p-2 w-100 patient-container">
      <div className="row gap-3 my-3 patient-container ms-lg-1 ">
          <CardContainer title="Pesan" detail={"3 belum dibaca"} className="col-12 col-lg-5  ">
            <div className="d-flex flex-column gap-1 ">
              <UnreadChat data={data} onClick={handleCurrentUserId} />
            </div>
          </CardContainer>
        <div className="col-12 col-lg-6">
          <NewPatients onClick={handleCurrentUserId} />
        </div>
      </div>
      <RecentPatients onClick={openEditModal} />
      {openModal && (
        <ModalEditPasien
          closeModal={() => setOpenModal(false)}
          patientData={data[selectedPatientIndex]}
        />
      )}
    </section>
  );
};

const UnreadChat = ({ onClick }) => {
  const formatDate = (dateString) => {
    const options = { month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const { data, refetch, isPending, isError } = useGetRecentsPatients();

  if (isError) {
    return <ErrorStatus title={"Gagal memuat data pesan!"} action={refetch} />;
  }

  if (isPending) {
    return (
      <>
        <UserChatListSkeleton />
        <UserChatListSkeleton />
      </>
    );
  }

  return (
    <>
      {data.map((msg) => {
        return (
          <div
            key={msg.id_patient}
            onClick={() => onClick(msg.id_patient)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={msg.avatar || IconForAvatar}
              alt="Icon"
              className="rounded-circle "
              width={50}
              height={50}
            />
            <div className="d-flex flex-column w-100 ">
              <div className="d-flex align-items-center justify-content-between">
                <h3 className="fs-3 fw-semibold mb-0 ">{msg.fullname}</h3>
                <Link className="text-success fw-semibold fs-4 text-decoration-none ">
                  {formatDate(msg.date)}
                </Link>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="card-text fs-4 chat">{msg.text}</p>
                <div className="badge bg-success-subtle rounded-circle text-primary fw-medium ">
                  {msg.text.length}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};


const RecentPatients = ({ onClick }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };
  const initialState = {
    search: "",
  };
  const { form, handleInput } = useForm(initialState);
  const { data, refetch, isPending, isError } = useGetRecentsPatients();
  return (
    <>
      <TableContainer
        handleInput={handleInput}
        inputValue={form.search}
        name={"search"}
        maxHeight={"10rem"}
        title={"Daftar Pasien"}
        placeHolder={"Nama, Gejala, Status"}
        thead={recentPatientsThead}
        className={"border-top"}
        bgThead={"bg-light"}
      >
        <RowTable
          isError={isError}
          isPending={isPending}
          refetch={refetch}
          data={data}
          search={form?.search}
          ifEmpty={"Tidak ada riwayat transaksi konsultasi dokter!"}
          paddingError={"py-2"}
          totalCol={3}
          totalRow={6}
          renderItem={(table, index) => {
            return (
              <tr className="text-nowrap" key={index}>
                <td>{table.id_patient}</td>
                <td>{table.fullname}</td>
                <td>{table.id_transaction}</td>
                <td>{formatDate(table.date)}</td>
                <td>{table.diagnosis}</td>
                <td>{table.status}</td>
                <td className="text-center">
                  <Button
                    className={
                      "btn-primary rounded-5 text-white fs-4 fw-semibold"
                    }
                    onClick={() => onClick(table.id_patient)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            );
          }}
        />
      </TableContainer>
    </>
  );
};

export default PatientPage;
