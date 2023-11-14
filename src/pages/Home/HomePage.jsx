import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { PopupEditPasien } from "../../components/ui/Modal/PopupEditPasien";
import { PieChart } from "../../components/Chart/Piechart";
import { dataChart } from "../../utils/dataObject";

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false)

  const patientData = {
    name: 'Joshua Kristin',
    weight: '58 Kg',
    gender: 'Laki-laki',
    consultationDate: '17 Oktober 2023',
  };

  return (
    <>
      {/* <h1>Home</h1> */}
      <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
      {openModal && <PopupEditPasien closeModal={setOpenModal} patientData={patientData}/>}
      <div className="w-25">
        <PieChart dataChart={dataChart} />
      </div>
    </>
  );
};

export default HomePage;
