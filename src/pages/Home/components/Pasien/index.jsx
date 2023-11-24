import { RowTable } from "../../../../components/Table/RowTable";
import { TableContainer } from "../../../../components/Table/TableContainer";
import { Button } from "../../../../components/ui/Button";
import { useGetNewPatients } from "../../../../services/patient-service";
import { newPatientsThead } from "../../../../utils/dataObject";
import "./Pasien.css"

export const NewPatients = () => {
  const {
    data,
    refetch,
    isPending,
    isError
  } = useGetNewPatients();

  return (
    <>
      <TableContainer
        title={'Pasien Baru'}
        className={'shadow-base bg-white'}
        thead={newPatientsThead}
        bgThead={'bg-white'}
        maxHeight={'8rem'}
      >
      <RowTable
          isError={isError}
          isPending={isPending}
          refetch={refetch}
          data={data}
          ifEmpty={'Tidak ada riwayat transaksi konsultasi dokter!'}
          renderItem={(data, index) => {
            return (
              <tr className="text-nowrap" key={index}>
                <td>{data.id_patient}</td>
                <td>{data.fullname}</td>
                <td>{data.id_transaction}</td>
                <td>{data.price}</td>
                <td className="text-center">
                  <Button className={'btn-primary rounded-5 text-white fs-4 fw-semibold'}>Mulai Konsultasi</Button>
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
