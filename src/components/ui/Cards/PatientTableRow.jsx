import { Button } from "../Button";

export const PatientTableRow = ({ data }) => {
  const { name, gender, weight, discase, date, status } = data;
  return (
    <tr className="d-flex flex-row table-responsive align-items-center gap-3 text-nowrap">
      <td className="d-flex flex-row align-items-center gap-2 text-nowrap">
        <div className="rounded-circle p-1 border border-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_209_14279)">
              <mask
                id="mask0_209_14279"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={20}
                height={20}
              >
                <rect
                  x={0.727295}
                  y={0.726562}
                  width={18.5455}
                  height={18.5455}
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_209_14279)">
                <path
                  d="M9.99999 10.0002C9.14999 10.0002 8.42234 9.69753 7.81704 9.09222C7.21174 8.48692 6.90909 7.75927 6.90909 6.90927C6.90909 6.05927 7.21174 5.33162 7.81704 4.72631C8.42234 4.12101 9.14999 3.81836 9.99999 3.81836C10.85 3.81836 11.5776 4.12101 12.1829 4.72631C12.7883 5.33162 13.0909 6.05927 13.0909 6.90927C13.0909 7.75927 12.7883 8.48692 12.1829 9.09222C11.5776 9.69753 10.85 10.0002 9.99999 10.0002ZM3.81818 16.182V14.0184C3.81818 13.5805 3.93087 13.178 4.15624 12.811C4.38162 12.4439 4.68106 12.1638 5.05454 11.9706C5.85302 11.5714 6.66439 11.272 7.48863 11.0723C8.31287 10.8727 9.14999 10.7729 9.99999 10.7729C10.85 10.7729 11.6871 10.8727 12.5114 11.0723C13.3356 11.272 14.147 11.5714 14.9454 11.9706C15.3189 12.1638 15.6184 12.4439 15.8437 12.811C16.0691 13.178 16.1818 13.5805 16.1818 14.0184V16.182H3.81818Z"
                  fill="black"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_209_14279">
                <rect
                  width={18.5455}
                  height={18.5455}
                  fill="white"
                  transform="translate(0.727295 0.726562)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className="m-0">{name}</p>
      </td>
      <td>{gender}</td>
      <td>{weight}</td>
      <td>{discase}</td>
      <td>{date}</td>
      <td>{status}</td>
      <td>
        <Button className="btn-dark rounded-pill px-4" onClick={() => {}}>
          Edit
        </Button>
      </td>
    </tr>
  );
};
