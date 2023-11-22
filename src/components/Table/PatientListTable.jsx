import { Button } from "../ui/Button";
import "./Table.css";

export const PatientListTable = ({
  patientData,
  buttonName,
  buttonVariant,
  onClick,
}) => {
  const formatTimestamp = (timestamp) => {
    const dateObj = timestamp instanceof Date ? timestamp : new Date(timestamp);
  
    const options = { year: "numeric", month: "long", day: "numeric" };
    return dateObj.toLocaleDateString("id-ID", options);
  };
  
  return (
    <table className="table table-transparent">
      <thead>
        <tr>
          <th scope="col">Id Pasien </th>
          <th scope="col">Nama Lengkap </th>
          <th scope="col">Id Transaksi </th>
          <th scope="col">Tanggal Konsultasi </th>
          <th scope="col">Diagnosis </th>
          <th scope="col">Status </th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody className="align-middle">
        {patientData.length === 0 ? (
          <tr>
            <td colSpan={7} className="text-center ">
              Tidak ada pasien
            </td>
          </tr>
        ) : (
          patientData.map((patient, index) => (
            <tr key={patient.id}>
              <td>{patient.id || "-"}</td>
              <td>{patient.name || "-"}</td>
              <td>{patient.transactionId || "-"}</td>
              <td>{formatTimestamp(patient.date) || "-"}</td>
              <td>{patient.diagnosis || "-"}</td>
              <td>{patient.status || "-"}</td>
              <td>
                <Button className={buttonVariant} onClick={() => onClick(index)}>
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
