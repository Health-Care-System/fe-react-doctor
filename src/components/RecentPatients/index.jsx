import personIcon from '../../assets/icon/person.svg'
import { Button } from "../ui/Button";
import "./RecentPatients.css"

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
        <div className="table-responsive" style={{borderRadius:"var(--Space---8, 0.5rem)", borderBottom:"1px solid var(--neutrals-300, #ECECEC)", background:"var(--neutrals-100, #F8F8F8)"}}>
            <table className="table table-borderless" style={{backgroundColor:"var(--neutrals-100, #F8F8F8)"}}>
                <thead>
                    <tr>
                        <th style={{backgroundColor:"var(--neutrals-100, #F8F8F8)"}}>Name</th>
                        <th style={{backgroundColor:"var(--neutrals-100, #F8F8F8)"}}>Jenis Kelamin</th>
                        <th style={{backgroundColor:"var(--neutrals-100, #F8F8F8)"}}>Berat Badan</th>
                        <th style={{backgroundColor:"var(--neutrals-100, #F8F8F8)"}}>Discase</th>
                        <th style={{backgroundColor:"var(--neutrals-100, #F8F8F8)"}}>Date</th>
                        <th style={{backgroundColor:"var(--neutrals-100, #F8F8F8)"}}>Status</th>
                    </tr>
                </thead>
                <tbody style={{backgroundColor:"var(--neutrals-100, #F8F8F8)"}}>
                  {patientData.map((patient, index) => (
                    <tr key={index}>
                      <td className="d-flex flex-row align-items-center gap-2 text-nowrap" style={{backgroundColor:"var(--neutrals-100, #F8F8F8)"}}>
                        <div className="rounded-circle border border-1 border-dark">
                          <img src={personIcon} alt={patient.name} style={{padding:"0.5rem", width:"2rem"}}/>
                        </div>
                        <p className="m-0">{patient.name}</p>
                      </td>
                      <td style={{backgroundColor:"var(--neutrals-100, #F8F8F8)"}}>{patient.gender}</td>
                      <td style={{backgroundColor:"var(--neutrals-100, #F8F8F8)"}}>{patient.weight}</td>
                      <td style={{backgroundColor:"var(--neutrals-100, #F8F8F8)"}}>{patient.discase}</td>
                      <td style={{backgroundColor:"var(--neutrals-100, #F8F8F8)"}}>{patient.date}</td>
                      <td style={{backgroundColor:"var(--neutrals-100, #F8F8F8)"}}>{patient.status}</td>
                      <td>
                        <Button className="btn-primary text-white button" onClick={() => { }}>
                          Edit
                        </Button>  
                      </td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>
      </>
    )
}