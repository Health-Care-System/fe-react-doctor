import { TableContainer } from '../../../../components/Table/TableContainer';
import { RowTable } from '../../../../components/Table/RowTable';
import useForm from '../../../../hooks/useForm';
import { recentPatientsThead } from '../../../../utils/dataObject';
import { useGetRecentsPatients } from '../../../../services/patient-service';

const initialState = {
  search: '',
}

export const RecentPatient = () => {
  const {
    data,
    refetch,
    isPending,
    isError
  } = useGetRecentsPatients();

  const {
    form,
    handleInput
  } = useForm(initialState);

    return (
      <>
        <TableContainer
          handleInput={handleInput}
          inputValue={form.search}
          name={'search'}
          maxHeight={'10rem'}
          title={'Daftar Pasien'}
          placeHolder={'Nama, Gejala, Status'}
          thead={recentPatientsThead}
          className={'border-top'}
          bgThead={'bg-light'}
        >
          <RowTable
          isError={isError}
          isPending={isPending}
          refetch={refetch}
          data={data}
          search={form?.search}
          ifEmpty={'Tidak ada riwayat transaksi konsultasi dokter!'}
          paddingError={'py-2'}
          totalCol={3}
          totalRow={6}
          renderItem={(data, index) => {
            return (
              <tr className="text-nowrap" key={index}>
                <td>{data.id_patient}</td>
                <td>{data.fullname}</td>
                <td>{data.id_transaction}</td>
                <td>{data.date}</td>
                <td>{data.diagnosis}</td>
                <td>{data.status}</td>
              </tr>
            )
          }
          }
          />
        </TableContainer>
      </>
    )
}