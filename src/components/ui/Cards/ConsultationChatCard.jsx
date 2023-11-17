import personIcon from "../../../assets/icon/person.svg";
import { Button } from "../Button";

export const ConsultationChatCard = ({ data }) => {
  return (
    <div className="rounded-4 p-3 shadow chat-dashboard" style={{ overflowY: 'auto'}}>
      <h3 className="fw-semibold m-0 fs-2">Pasien Baru</h3>
      <div className="text-nowrap ">
        <table className="table table-borderless table-light ">
          <thead className="sticky-top">
            <tr>
              <th scope="col">Nama</th>
              <th scope="col">Jenis Kelamin</th>
            </tr>
          </thead>
          <tbody>
            {data.map((patient, index) => (
              <tr className="align-middle" key={index}>
                <td className="d-flex gap-2 align-items-center">
                  <img
                    src={personIcon}
                    alt="avatarIcon"
                    className="border border-2 rounded-circle p-2"
                  />
                  <p className="fs-3 limit__text__name">{patient.name}</p>
                </td>
                <td className="">{patient.gender}</td>
                <td className="p-0">
                  <Button className="btn-primary text-nowrap text-white rounded-5">
                    Mulai Konsultasi
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
