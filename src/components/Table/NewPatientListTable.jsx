import { Button } from "../ui/Button";
import "./Table.css";

export const NewPatientListTable = ({
  patientData,
  buttonName,
  buttonVariant,
  handleUser,
}) => {
  const formatRupiah = (angka) => {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    });
    return formatter.format(angka);
  };
  return (
    <table className="table table-transparent">
      <thead>
        <tr>
          <th scope="col">Id Pasien </th>
          <th scope="col">Nama Lengkap </th>
          <th scope="col">Id Transaksi </th>
          <th scope="col">Harga </th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody className="align-middle">
        {patientData.length === 0 ? (
          <tr>
            <td colSpan={5} className="text-center ">
              Tidak ada pasien baru
            </td>
          </tr>
        ) : (
          patientData.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id || "-"}</td>
              <td>{patient.name || "-"}</td>
              <td>{patient.transactionId || "-"}</td>
              <td>{formatRupiah(patient.price) || "-"}</td>
              <td>
                <Button
                  className={buttonVariant}
                  onClick={() => handleUser(patient.id)}
                >
                  {buttonName}
                </Button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};
