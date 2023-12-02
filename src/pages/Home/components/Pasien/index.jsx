import { Link } from "react-router-dom";
import { RowTable } from "../../../../components/Table/RowTable";
import { TableContainer } from "../../../../components/Table/TableContainer";
import { useGetNewPatients } from "../../../../services/patient-service";
import { newPatientsThead } from "../../../../utils/dataObject";
import "./Pasien.css";

export const NewPatients = () => {
  const {
    data,
    refetch,
    isPending,
    isError
  } = useGetNewPatients();
  console.log(data);

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
          data={data}
          ifEmpty={'Tidak Ada Pasien'}
          paddingError={'2rem'}
          totalCol={1}
          totalRow={4}
          renderItem={(data, index) => {
            return (
              <tr className="text-nowrap" key={index}>
                <td>{data?.user_id}</td>
                <td>{data?.fullname}</td>
                <td>{data?.transaction_id}</td>
                <td>{data?.price}</td>
                <td className="text-center">
                  <Link
                    to={`/chat/user?userId=${data?.user_id}`}
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
