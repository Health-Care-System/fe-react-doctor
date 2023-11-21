import { Button } from "../ui/Button";
import "./Table.css";

export const NewPatientListTable = ({
  patientData,
  tableHeaders,
  buttonName,
  buttonVariant,
  handleUser,
}) => {
  return (
    <table className="table table-transparent">
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <th key={index} scope="col">
              {header}
            </th>
          ))}
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody className="align-middle">
        {patientData.length === 0 ? (
          <tr>
            <td colSpan={tableHeaders.length + 1} className="text-center ">Tidak ada pasien baru</td>
          </tr>
        ) : (
          patientData.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id || '-'}</td>
              <td>{patient.fullName || '-'}</td>
              <td>{patient.transactionId || '-'}</td>
              <td>{patient.price || '-'}</td>
              <td>
                <Button
                  className={buttonVariant}
                  onClick={() => handleUser(patient.idPatient)}
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
