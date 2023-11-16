export const RiwayatPasien = () => {

  return (
    <div className="card shadow border-0 mt-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center align-self-stretch">
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
        <div className="d-flex justify-content-center align-items-center mt-3 gap-5 justify-content-md-between justify-content-lg-center"> 
            <div className="d-flex">       
                <svg xmlns="http://www.w3.org/2000/svg" width="105" height="129" viewBox="0 0 105 129" fill="none">
                    <mask id="path-1-inside-1_848_11946" fill="white">
                        <path d="M21.967 0.466995C9.65139 12.7826 2.006 29.0005 0.342763 46.3378C-1.32048 63.6751 3.10213 81.0508 12.8517 95.4832C22.6012 109.916 37.0698 120.505 53.7747 125.434C70.4795 130.363 88.3791 129.324 104.402 122.497L75 53.5L21.967 0.466995Z"/>
                    </mask>
                    <path d="M21.967 0.466995C9.65139 12.7826 2.006 29.0005 0.342763 46.3378C-1.32048 63.6751 3.10213 81.0508 12.8517 95.4832C22.6012 109.916 37.0698 120.505 53.7747 125.434C70.4795 130.363 88.3791 129.324 104.402 122.497L75 53.5L21.967 0.466995Z" fill="#A7ACE5" stroke="#E3E3E3" mask="url(#path-1-inside-1_848_11946)"/>
                </svg>
            </div>

            <div className="d-flex flex-column align-items-start">
                <div className="d-flex flex-column align-items-start">
                    <p className="nilai-riwayat">120</p>
                    <p className="text-pasien">Pasien</p>
                </div>
                <div className="gap-3">
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
