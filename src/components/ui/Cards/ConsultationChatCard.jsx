import personIcon from "../../../assets/icon/person.svg";
import { Button } from "../Button";

export const ConsultationChatCard = ({ name, gender }) => {
  return (
    <div className="rounded-4 table-responsive shadow consultation__chat">
      <div className="p-2">
        <h3 className="fw-semibold m-0 fs-2 ps-2 ">Pasien Baru</h3>
        <div className="text-nowrap ">
          <table className="table table-borderless table-light ">
            <thead>
              <tr>
                <th scope="col">Nama</th>
                <th scope="col">Jenis Kelamin</th>
              </tr>
            </thead>
            <tbody>
              <tr className="align-middle ">
                <td className="d-flex gap-2 align-items-center ">
                  <img
                    src={personIcon}
                    alt="avatarIcon"
                    className="border border-2 rounded-circle p-2"
                  />
                  <p className="fs-3 limit__text__name">{name}</p>
                </td>
                <td className="">{gender}</td>
                <td className="p-0">
                  <Button className="btn-primary text-nowrap text-white rounded-pill">
                    Mulai Percakapan
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
