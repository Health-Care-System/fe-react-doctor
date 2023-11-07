import { Button } from "../Button";

export const PatientTableRow = ({ data }) => {
  const { name, gender, weight, discase, date, status, image } = data;
  return (
    <tr className="d-flex flex-row table-responsive align-items-center gap-3 text-nowrap">
      <td className="d-flex flex-row align-items-center gap-2 text-nowrap">
        <div className="rounded-circle border border-2 border-dark">
          <img src={image} alt={name} width={34} height={34} className="rounded-circle object-fit-cover" />
        </div>
        <p className="m-0">{name}</p>
      </td>
      <td>{gender}</td>
      <td>{weight}</td>
      <td>{discase}</td>
      <td>{date}</td>
      <td>{status}</td>
      <td>
        <Button className="btn-dark rounded-pill px-5" onClick={() => {}}>
          Edit
        </Button>
      </td>
    </tr>
  );
};
