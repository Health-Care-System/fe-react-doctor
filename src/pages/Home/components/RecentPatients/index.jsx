import { useEffect, useState } from 'react';
import personIcon from '../../../../assets/icon/person.svg'
import { Button } from "../../../../components/ui/Button";
import axios from 'axios';

export const RecentPatient = () => {
    const [patientsData, setPatientsData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      getpatientsData();
    }, []);

    async function getpatientsData() {
      try {
        const response = await axios.get('http://localhost:3000/recent-patient');
        setPatientsData(response.data.results);
      } catch (error) {
        setError('Terjadi kesalahan saat mengambil data: ' + error.message);
      }
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <>
        <div className=' border-bottom table-responsive' style={{borderRadius:"0.5rem"}}>
            <table className="table table-borderless table-light bg-slate">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className=' text-nowrap'>Jenis Kelamin</th>
                        <th className='text-nowrap'>Berat Badan</th>
                        <th>Discase</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                  {patientsData.map((patient, index) => (
                    <tr key={index}>
                      <td className="d-flex flex-row align-items-center gap-2 text-nowrap">
                        <div className="rounded-circle border border-1 border-dark">
                          <img src={personIcon} alt={patient.name} style={{padding:"0.5rem", width:"2rem"}}/>
                        </div>
                        <p className="m-0">{patient.name}</p>
                      </td>
                      <td>{patient.gender}</td>
                      <td>{patient.weight}</td>
                      <td>{patient.discase}</td>
                      <td>{patient.date}</td>
                      <td>{patient.status}</td>
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