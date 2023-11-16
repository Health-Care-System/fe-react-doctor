import { Link } from 'react-router-dom';
import doctor from '../../assets/image/doctor.png'

export const Chat = () => {

  return (
    <div className="card shadow border-0 mt-3">
      <div className="card-body">
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center gap-4">
            <h5 className="fw-bold text-truncate">Pesan</h5>
            <Link className="fw-bold text-truncate">3 belum dibaca</Link>
          </div>
          <div className="d-lg-flex flex-column flex-lg-row mx-0 mb-4 mt-2 mt-xxl-4">
            <div  className="text-center mb-md-2 mt-md-2">
              <img src={doctor} width={50} alt=""/>
            </div>
            <div className="d-flex flex-column mx-md-3">
              <div className="d-flex justify-content-between">
                  <p className="card-title fw-bold">Senajan</p>
                  <p className="text-truncate">15 Sep</p>
              </div>
              <div>
                  <p className="card-text text-truncate">Bagaimana cara keren untuk sanjana</p>
              </div>
            </div>
          </div>
          <div className="d-lg-flex flex-column flex-lg-row mx-0 mb-4 mt-2 mt-xxl-1">
            <div  className="text-center mb-md-2 mt-md-2">
              <img src={doctor} width={50} alt=""/>
            </div>
            <div className="d-flex flex-column mx-md-3">
              <div className="d-flex justify-content-between">
                  <p className="card-title fw-bold">Senajan</p>
                  <p className="text-truncate">15 Sep</p>
              </div>
              <div>
                  <p className="card-text text-truncate">Bagaimana cara keren untuk sanjana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
