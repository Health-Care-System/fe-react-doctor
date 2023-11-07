import { Button } from "./components/ui/Button"
import { Select, Textarea } from "./components/ui/Form"

function App() {
  const options = [
    { value: 'aku', label: 'Aku' },
    { value: 'aku2', label: 'Aku2' }
  ]

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
      </div>

    </>
  )
}

export default App
