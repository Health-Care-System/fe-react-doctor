import "./RiwayatPasien.css"
export const RiwayatPasien = () => {

  return (
    <div className="card shadow border-0 mx-2 mt-3">
      <div className="card-body kotak-pasien">
        <div className="up">
            <p className="fw-bold" style={{fontSize:"20px", fontWeight:"600"}}>Riwayat Pasien</p>
            <div className="dropdown">
                <button
                    className="btn dropdown-toggle"
                    style={{backgroundColor:'#CBE4DE73'}}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Daily
                </button>
                <ul className="dropdown-menu">
                    <li>
                    <button className="dropdown-item" type="button">
                        Action
                    </button>
                    </li>
                    <li>
                    <button className="dropdown-item" type="button">
                        Another action
                    </button>
                    </li>
                    <li>
                    <button className="dropdown-item" type="button">
                        Something else here
                    </button>
                    </li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="diagram"> 
            <div className="d-flex diagram1">
                diagram
            </div>
            <div className="diagram2">
                <div className="pasien">
                    <p className="nilai-riwayat">120</p>
                    <p className="text-pasien">Pasien</p>
                </div>
                <div className="nilai">
                    <div className="d-flex align-items-center gap-2">
                        <div style={{width:"14px", height:"14px", backgroundColor:"#EDC6B1"}}></div>
                        <p>Demam</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <div style={{width:"14px", height:"14px", backgroundColor:"#7C96AB"}}></div>
                        <p>Gerd</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <div style={{width:"14px", height:"14px", backgroundColor:"#B7B7B7"}}></div>
                        <p>Tipes</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
