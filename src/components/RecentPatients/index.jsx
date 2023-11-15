import bulletIcon from '../../assets/icon/patient.svg'
import "./RecentPatients.css"


// import { Button } from "../ui/Button";

export const RecentPatient = () => {
    const patientData = [
        {
          name: 'Jane Smith',
          gender: 'Female',
          weight: '65 kg',
          discase: 'Another Disease',
          date: '2023-11-10',
          status: 'Inactive',
          image: 'path/to/image2.jpg',
        },
        {
          name: 'Jane Smith',
          gender: 'Female',
          weight: '65 kg',
          discase: 'Another Disease',
          date: '2023-11-10',
          status: 'Inactive',
          image: 'path/to/image2.jpg',
        },
      ];

    return (
      <>
        <div className="table-responsive">
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Jenis Kelamin</th>
                        <th>Berat Badan</th>
                        <th>Discase</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                  {patientData.map((patient, index) => (
                    <tr key={index}>
                      <td className="d-flex flex-row align-items-center gap-2 text-nowrap">
                        <div className="rounded-circle border border-2 border-dark">
                          <img src={bulletIcon} alt={patient.name} width={34} height={34} className="rounded-circle object-fit-cover" />
                        </div>
                        <p className="m-0">{patient.name}</p>
                      </td>
                      <td>{patient.gender}</td>
                      <td>{patient.weight}</td>
                      <td>{patient.discase}</td>
                      <td>{patient.date}</td>
                      <td>{patient.status}</td>
                      <td>
                        <button className="button" onClick={() => { }}>
                          Edit
                        </button>  
                      </td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>
      </>
    )
}