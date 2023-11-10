import { PopupEditPasien } from "../../components/ui/Modal/PopupEditPasien";

const HomePage = () => {
  return (
    <>
      {/* <h1>Home</h1> */}
      <PopupEditPasien
        title="Edit"
        name="Joshua Kristin"
        gender="Laki-laki"
        weight="58 Kg"
        date="17 Okt 2023"
      />
    </>
  );
};

export default HomePage;
