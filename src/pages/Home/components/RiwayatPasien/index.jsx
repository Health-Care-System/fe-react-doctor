import { PieChart } from "../../../../components/Chart/Piechart";
import { dataChart } from "../../../../utils/dataObject"
import { Button } from "../../../../components/ui/Button";

import "./RiwayatPasien.module.css"

export const RiwayatPasien = () => {
    const graph = [
        { discase: "Demam", color: "#FBB3A7" },
        { discase: "Gerd", color: "#8A91DC" },
        { discase: "Tipes", color: "#A1D1FA" },
    ]
    
    const actions = [
        {label: 'Action'},
        {label: 'Another action'},
        {label: 'SOmething else here'},
    ]

    return (
        <div className="card border-0 rounded-4" style={{ boxShadow: "0px 0px 24px 0px rgba(0, 0, 0, 0.10)" }}>
            <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex justify-content-between align-items-center align-self-stretch">
                    <p className="fw-semibold fs-2">Riwayat Pasien</p>
                    <div className="dropdown">
                        <button
                            className="btn dropdown-toggle"
                            style={{ backgroundColor: '#C7F9DE' }}
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Daily
                        </button>
                        <ul className="dropdown-menu">
                            {actions?.map((item, index) => (
                            <li key={index}>
                                <Button className="dropdown-item" type="button">
                                    {item.label}
                                </Button>
                            </li>
                            ))
                            
                            }
                        </ul>
                    </div>
                </div>
                <div className="d-flex gap-4">
                    <div className="d-flex" style={{ maxWidth: "9.6rem" }}>
                        <PieChart dataChart={dataChart} />
                    </div>

                    <div className="d-flex flex-column  gap-2">
                        <h4 className=" fw-semibold m-0">120</h4>
                        <p className=" m-0">Pasien</p>
                        <div className="d-flex flex-column">
                            {graph?.map((item, index) => (
                                <div key={index} className="d-inline-flex align-items-center gap-2">
                                    <div style={{ width: "14px", height: "14px", backgroundColor: item.color }}></div>
                                    <p className="m-0 line-clamp-1">{item.discase}</p>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
