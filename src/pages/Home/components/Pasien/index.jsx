import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import { newPatientsThead } from "../../../../utils/dataObject";
import { useGetNewPatients } from "../../../../services/patient-service";

import { RowTable } from "../../../../components/Table/RowTable";
import { TableContainer } from "../../../../components/Table/TableContainer";
import "./Pasien.css";

export const NewPatients = () => {
  const {
    data,
    refetch,
    isPending,
    isError, 
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage
  } = useGetNewPatients();
  
  // Effect Infinite Scroling...
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);
  
  
  return (
    <>
      <TableContainer
        title={'Pasien Baru'}
        className={'shadow-base bg-white'}
        thead={newPatientsThead}
        bgThead={'bg-white'}
        maxHeight={'8rem'}
        name={null}
      >
        <RowTable
          isError={isError}
          isPending={isPending}
          refetch={refetch}
          data={data?.pages}
          reffer={ref}
          isFetchingNextPage={isFetchingNextPage}
          ifEmpty={'Tidak Ada Pasien'}
          paddingError={'2rem'}
          totalCol={1}
          totalRow={4}
          renderItem={(data, index) => {
            console.log(data)
            return (
              <tr className="text-nowrap" key={index}>
                <td>{data?.user_id}</td>
                <td>{data?.fullname}</td>
                <td>{data?.transaction_id}</td>
                <td>{data?.price}</td>
                <td className="text-center">
                  <Link
                    to={`/chat/user?status=all&room=${data?.room_chat_id}`}
                    className={'btn btn-primary rounded-5 text-white fs-4 fw-semibold'}
                  >
                    Mulai Konsultasi
                  </Link>
                </td>
              </tr>
            )
          }
          }
        >
        </RowTable>
      </TableContainer>
    </>
  );
};
