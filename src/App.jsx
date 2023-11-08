import { Bubble } from "./components/ui/Bubble";
import { Button } from "./components/ui/Button";
import { ArticleCard } from "./components/ui/Cards";
import { PatientTableRow } from "./components/ui/Cards";
import { Select, Textarea } from "./components/ui/Form";

function App() {
  const options = [
    { value: "aku", label: "Aku" },
    { value: "aku2", label: "Aku2" },
  ];

  const data = {
    name: "Joshua Kristin",
    gender: "Male",
    weight: "58kg",
    disease: "Demam",
    date: "17 Okt 23",
    status: "Recover",
    image: "https://placehold.co/600x400.png",
  };
  return (
    <>
      <div className="container d-flex gap-3 flex-column">
        <ArticleCard title={"test"} content={"test"} date={"test"} />
        <label>
          Select Option
          <Select options={options} />
        </label>

        <label>
          Textarea
          <Textarea />
        </label>

        <Button className="btn-info my-2" onClick={() => {}} id="button">
          Success Button
        </Button>

        <PatientTableRow data={data} />

        <Bubble className="bg-transparent rounded-top-3 rounded-end-3" text="Hallo dok, saya punya keluhan diare udah 10 kali bolak-balik kamar mandi, mual-mual, dan pusing sekali. Saya sudah coba minum norit tapi ga pengaruh sama sekali, kira-kira kenapa ya dok? tks" />
        <Bubble className="bg-success-subtle rounded-top-3 rounded-start-3 align-self-end " text="Halo fito, apakah kamu juga mengalami gejala keram di perut dan apakah bisa difotokan lidahnya? " />
      </div>
    </>
  );
}

export default App;
