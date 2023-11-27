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
import { newPatientsThead, recentPatientsThead } from "../../utils/dataObject";
import { Button } from "../../components/ui/Button";
import useForm from "../../hooks/useForm";
import { useState } from "react";
import { ModalEditPasien } from "../../components/ui/Modal/ModalEditPasien";
import { ErrorStatus } from "../../components/Error/ErrorStatus";
import { UserChatListSkeleton } from "../../components/ui/Skeleton";
import { RowTable } from "../../components/Table/RowTable";

const PatientPage = () => {
  const { data } = useGetRecentsPatients();
  const [openModal, setOpenModal] = useState(false);
  const [dataByIndex, setDataByIndex] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const handleCurrentUserId = (id) => {
    searchParams.set("status", "all");
    searchParams.set("userId", id);
    navigate(`/chat/user?${searchParams.toString()}`);
  };

  const PatientDataById = (index) => {
    setDataByIndex(index);
    setOpenModal(true);
  };

  return (
    <section className="container patient-container">
      <div className="row d-flex flex-column flex-lg-row align-items-start gap-4 my-3 ms-md-1 ms-lg-0 ">
        <div className="col-12 col-lg-5 col-xl-4 ">
          <CardContainer title="Pesan" subtitle="3 belum dibaca">
            <div
              className="d-grid gap-3 w-100"
              style={{ overflow: "auto", maxHeight: "8rem" }}
            >
              <UnreadChat data={data} onClick={handleCurrentUserId} />
            </div>
          </CardContainer>
        </div>
        <div className="col-12 d-grid col-lg me-xl-5 ">
          <NewPatients onClick={handleCurrentUserId} />
        </div>
        <div className="col-12 d-grid ">
          <RecentPatients onClick={PatientDataById} />
        </div>
        {openModal && (
          <ModalEditPasien
            closeModal={() => setOpenModal(false)}
            PatientListData={data[dataByIndex]}
          />
        )}
      </div>
    </section>
  );
};

const CardContainer = ({ title, subtitle, children }) => {
  return (
    <div
      className="card border-0 rounded-4  "
      style={{ boxShadow: "0px 0px 24px 0px rgba(0, 0, 0, 0.10)" }}
    >
      <div className="card-header border-0 bg-white pb-0 mt-2 ">
        <div className="card-title d-flex align-items-center justify-content-between ">
          <h3 className="fs-2 fw-semibold ">{title}</h3>
          <p className="fs-4 text-primary fw-semibold ">{subtitle}</p>
        </div>
      </div>
      <div className="card-body pt-0 ">{children}</div>
    </div>
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
      </>
    );
  }

  return (
    <>
      {data.map((msg) => {
        return (
          <div
            className="d-flex flex-row gap-4 align-items-center text-decoration-none "
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

const NewPatients = ({ onClick }) => {
  const formatToRupiah = (amount) => {
    return `Rp. ${amount.toLocaleString("id-ID")}`;
  };
  const { data, refetch, isPending, isError } = useGetRecentsPatients();
  return (
    <>
      <TableContainer
        title={"Pasien Baru"}
        className={"shadow-base bg-white"}
        thead={newPatientsThead}
        bgThead={"bg-white"}
        maxHeight={"8rem"}
        name={null}
      >
        <RowTable
          isError={isError}
          isPending={isPending}
          refetch={refetch}
          data={data}
          ifEmpty={"Tidak Ada Pasien"}
          paddingError={"2rem"}
          renderItem={(table, index) => {
            return (
              <tr className="text-nowrap " key={index}>
                <td>{table.id_patient}</td>
                <td>{table.fullname}</td>
                <td>{table.id_transaction}</td>
                <td>{formatToRupiah(table.price)}</td>
                <td className="text-center">
                  <Button
                    className={
                      "btn-primary rounded-5 text-white fs-4 fw-semibold"
                    }
                    onClick={() => onClick(table.id_patient)}
                  >
                    Mulai Konsultasi
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
        maxHeight={"17.5rem"}
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
          paddingError={"2rem"}
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
