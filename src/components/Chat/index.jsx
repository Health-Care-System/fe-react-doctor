import { Link } from 'react-router-dom';
import doctor from '../../assets/image/doctor.png'

export const Chat = () => {

  return (
    <div className="card shadow border-0 rounded-3">
      <div className="card-body rounded-3">
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center gap-4">
            <h5 className="fw-bold text-truncate">Pesan</h5>
            <Link className="fw-bold text-truncate text-decoration-none mb-1" style={{color:"#1766D6", fontSize:"12px"}}>3 belum dibaca</Link>
          </div>
          <div className="d-lg-flex flex-column flex-lg-row mx-1 mb-4 mt-2 mt-xxl-4">
            <div  className="text-center mb-md-2 mt-md-2">
              <img src={doctor} width={50} alt=""/>
            </div>
            <div className="d-flex flex-column mx-md-3">
              <div className="d-flex justify-content-between">
                  <p className="card-title fw-bold">Senajan</p>
                  <p className="text-truncate">15 Sep</p>
              </div>
              <div>
                  <p className="text-truncate" style={{ maxWidth: '17rem'}}>Bagaimana cara keren untuk sanjana</p>
              </div>
            </div>
          </div>
          <div className="d-lg-flex flex-column flex-lg-row mx-1 mb-4 mt-2 mt-xxl-1">
            <div  className="text-center mb-md-2 mt-md-2">
              <img src={doctor} width={50} alt=""/>
            </div>
            <div className="d-flex flex-column mx-md-3">
              <div className="d-flex justify-content-between">
                  <p className="card-title fw-bold">Senajan</p>
                  <p className="text-truncate">15 Sep</p>
              </div>
              <div>
                  <p className="text-truncate" style={{ maxWidth: '17rem'}}>Bagaimana cara keren untuk sanjana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
