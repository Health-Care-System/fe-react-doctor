// Packages
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Utils / service / hooks
import useForm from "../../hooks/useForm";
import { formattedDate } from "../../utils/helpers";
import { recentPatientsThead } from "../../utils/dataObject";
import { useGetRecentsChats } from "../../services/chat-service";

// Components
import { Button } from "../../components/ui/Button";
import { NewPatients } from "../Home/components/Pasien";
import { RowTable } from "../../components/Table/RowTable";
import { ErrorStatus } from "../../components/Error/ErrorStatus";
import { UserChatListSkeleton } from "../../components/ui/Skeleton";
import { TableContainer } from "../../components/Table/TableContainer";
import { ModalEditPasien } from "../../components/ui/Modal/ModalEditPasien";
import { CardContainer } from "../../components/ui/Container/CardContainer";

// Assets
import noMsg from '../../assets/image/noMsg.jpg'
import IconForAvatar from "../../assets/icon/avatar.svg";
import "./Patient.css";

const PatientPage = () => {
  const { data } = useGetRecentsChats();
  const [openModal, setOpenModal] = useState(false);
  const [dataByIndex, setDataByIndex] = useState(0);

  const PatientDataById = (index) => {
    setDataByIndex(index);
    setOpenModal(true);
  };

  return (
    <section className="p-2 w-100 patient-container">
      <div className="row gap-4 gap-xl-3 my-3 ms-md-1 ms-lg-0">
        <CardContainer title="Pesan" className="col-12 w col-lg-5">
          <div className="d-flex flex-column gap-1">
            <UnreadChat data={data} />
          </div>
        </CardContainer>
        <div className="col-12 col-lg-6">
          <NewPatients />
        </div>
      </div>
      <RecentPatients onClick={PatientDataById} />
      {openModal && (
        <ModalEditPasien
          closeModal={() => setOpenModal(false)}
          PatientListData={data[dataByIndex]}
        />
      )}
    </section>
  );
};

const UnreadChat = () => {
  const { data, refetch, isPending, isError } = useGetRecentsChats();
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/chat/user?userId=${id}`)
  }

  if (isPending) {
    return (
      <>
        <UserChatListSkeleton />
        <UserChatListSkeleton />
      </>
    );
  }
  if (isError) {
    return <ErrorStatus title={"Gagal memuat data pesan!"} action={refetch} />;
  }

  if (data.results?.length < 1 || data.results === null) {
    return (
      <>
        <tr>
          <td colSpan={12} className="text-center d-flex flex-column rounded-3 fs-3">
            <img src={noMsg} className="mx-auto" width={100} height={100} alt="Tidak ada pesan" />
            {'Tidak ada data pesan'}
          </td>
        </tr>
      </>
    )
  }



  return (
    <>
      {data?.results?.map((msg) => {
        return (
          <div
            className="d-flex flex-row gap-4 align-items-center text-decoration-none "
            key={msg.id}
            onClick={() => handleNavigate(msg.id)}
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
                  {formattedDate(msg.created_at)}
                </Link>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="card-text fs-4 chat">{msg.last_message}</p>
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
  const { data, refetch, isPending, isError } = useGetRecentsChats();
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
