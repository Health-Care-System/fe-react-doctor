import { Button } from "./components/ui/Button"
import { PatientTableRow } from "./components/ui/Cards/PatientTableRow";
import { Select, Textarea } from "./components/ui/Form"

function App() {
  const options = [
    { value: 'aku', label: 'Aku' },
    { value: 'aku2', label: 'Aku2' }
  ]

  const data = {
    name: "Joshua Kristin",
    gender: "Male",
    weight: "58kg",
    disease: "Demam",
    date: "17 Okt 23",
    status: "Recover",
  };
  return (
    <>
      <div className="container d-flex gap-3 flex-column">
      
        <label>
          Select Option
          <Select options={options} />
        </label>
        
        <label>
          Textarea
          <Textarea />
        </label>
        
        <Button
          className="btn-success my-2"
          onClick={() => { }}
          id="button"
        >
          Success Button
        </Button>

      <PatientTableRow data={data} />

      </div>
    </>
  );
}

export default App;
