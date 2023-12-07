// Packages
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// Utils / service / hooks
import useForm from "../../hooks/useForm";
import { formattedDate } from "../../utils/helpers";
import { useGetRecentChats } from "../../services/chat-service";
import { diagnosa, recentPatientsThead } from "../../utils/dataObject";
import { editPatientStatusAndDiagnosa, useGetAllPatients } from "../../services/patient-service";

// Components
import { Button } from "../../components/ui/Button";
import { NewPatients } from "../Home/components/Pasien";
import { RowTable } from "../../components/Table/RowTable";
import { ErrorStatus } from "../../components/Error/ErrorStatus";
import { UserChatListSkeleton } from "../../components/ui/Skeleton";
import { TableContainer } from "../../components/Table/TableContainer";
import ImageWithFallback from "../../components/Error/ImageWithFallback";
import { CardContainer } from "../../components/ui/Container/CardContainer";
import { ModalEditPasien } from "../../components/ui/Modal/ModalEditPasien";

// Assets
import noMsg from '../../assets/image/noMsg.jpg'
import IconForAvatar from "../../assets/icon/avatar.svg";
import "./Patient.css";

export const PatientPage = () => {
  return (
    <section className="p-2 w-100 patient-container">
      <div className="row gap-4 gap-xl-3 my-3 ms-md-1 ms-lg-0">
        <CardContainer title="Pesan" detail={'2 belum dibaca'} className="col-12 w col-lg-5">
          <div className="d-flex flex-column gap-1">
            <ListChat />
          </div>
        </CardContainer>
        <div className="col-12 col-lg-6">
          <NewPatients />
        </div>
      </div>
      <PatientList />
    </section>
  );
};

// Untuk bagian table atas paling kiri, tabel pesan
const ListChat = () => {
  const { data, refetch, isPending, isError } = useGetRecentChats();
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
        <div className="text-center d-flex flex-column rounded-3 fs-3">
          <img src={noMsg} className="mx-auto" width={100} height={100} alt="Tidak ada pesan" />
          {'Tidak ada data pesan'}
        </div>
      </>
    )
  }

  return (
    <>
      {data?.results?.map((msg) => {
        return (
          <div
            className="d-flex flex-row gap-4 align-items-center text-decoration-none "
            key={msg?.id}
            onClick={() => handleNavigate(msg.id)}
            style={{ cursor: "pointer" }}
          >
            <ImageWithFallback className={'avatar'} width={50} height={50} fallback={IconForAvatar} src={msg?.src} />
            <div className="d-flex flex-column w-100 ">
              <div className="d-flex align-items-center justify-content-between">
                <h3 className="fs-3 fw-semibold mb-0 ">{msg?.fullname}</h3>
                <Link className="text-success fw-semibold fs-4 text-decoration-none ">
                  {formattedDate(msg?.created_at)}
                </Link>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="card-text fs-4 chat">{msg?.last_message}</p>
                {/* <div className="badge bg-success-subtle rounded-circle text-primary fw-medium ">
                  {msg.text.length}
                </div> */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

// Untuk Tabel yang paling bawah, yaitu tabel Daftar Pasien
const initialState = {
  search: "",
};
const PatientList = () => {
  const { form, handleInput } = useForm(initialState);
  const [openModal, setOpenModal] = useState(false);
  const [detailsData, setDetailsData] = useState(null);
  const [offsetEdit, setOffsetEdit] = useState(null);
  const {
    data,
    refetch,
    isPending,
    isError,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage
  } = useGetAllPatients();

  // Effect Infinite Scroling...
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  // Untuk membuka edit modal dan mencari nilai offset halaman untuk data yang ingin diedit
  const PatientDataById = (table, offset) => {
    setOpenModal(true);
    setDetailsData(table);
    setOffsetEdit(offset);
  };

  // Fitur mutasi data, untuk menupdate data di local
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: editPatientStatusAndDiagnosa,
    onError: () => {
      toast.error('Anda gagal mengubah data pasien, harap coba lagi!', {
        delay: 800
      });
    },
    onSettled: () => {
      setOpenModal(false);
    },
    onSuccess: (newData) => {
      const {
        transaction_id,
        health_details,
        patient_status
      } = newData.results
      // Mencari halaman keberapa, data yang mau diedit
      const pageIndex = data?.pages?.findIndex(item => item?.pagination?.offset === offsetEdit);

      // mengganti data lama dengan yang baru
      queryClient.setQueryData(['allPatients'], oldData => {
        if (oldData) {
          const updatedResults = [...oldData.pages];
          updatedResults[pageIndex].results.forEach((result) => {
            if (result.transaction_id === transaction_id) {
              result.health_details = health_details;
              result.patient_status = patient_status;
            }
          });

          toast.success('Anda berhasil mengubah data pasien!', {
            delay: 800
          });

          return {
            ...oldData,
            pages: updatedResults
          };
        }
        return oldData;
      });
    }
  })

  // Handle edit, yang akan mengirim beberapa paremeter ke mutationFn
  const handleSubmitEdit = async (e, diagnosa, status, transaction_id) => {
    e.preventDefault();
    mutation.mutate({
      diagnosa,
      status,
      transaction_id
    })
  }

  return (
    <>
      <TableContainer
        handleInput={handleInput}
        inputValue={form.search}
        name={"search"}
        maxHeight={"calc(100vh - 30rem)"}
        title={"Daftar Pasien"}
        placeHolder={"Nama, Gejala, Status"}
        thead={recentPatientsThead}
        className={"border-top"}
        bgThead={"bg-light"}
      >
        <RowTable
          // Handle React Query & infinite scrolling
          data={data?.pages}
          isError={isError}
          isPending={isPending}
          refetch={refetch}
          isFetchingNextPage={isFetchingNextPage}
          reffer={ref}

          // Searching
          search={form?.search}

          // Handle jika data kosong
          ifEmpty={"Tidak ada riwayat transaksi konsultasi dokter!"}
          paddingError={"py-2"}

          // handle ukuran row dan col tabel
          totalCol={3}
          totalRow={6}

          renderItem={(table, index, offset) => {
            return (
              <>
                <tr className="text-nowrap text-capitalize" key={index}>
                  <td>{table?.user_id}</td>
                  <td>{table?.fullname}</td>
                  <td className="text-center">{table?.transaction_id}</td>
                  <td className="text-center">{formattedDate(table?.created_at)}</td>
                  <td className="text-center">{table?.health_details !== '' ? table?.health_details : '-'}</td>
                  <td className="text-center">{diagnosa[table?.patient_status]}</td>
                  <td className="text-center">
                    <Button
                      className={"btn-primary text-white fs-4 fw-semibold"}
                      style={{ width: '5.625rem' }}
                      onClick={() => PatientDataById(table, offset)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              </>
            );
          }}
        />
      </TableContainer>
      {openModal && (
        <ModalEditPasien
          closeModal={() => setOpenModal(false)}
          PatientListData={detailsData}
          handleSubmitEdit={handleSubmitEdit}
          pending={mutation.isPending}
        />
      )}
    </>
  );
};