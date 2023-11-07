import { Button } from "./components/ui/Button"
import { Select } from "./components/ui/Form/Select"

function App() {
  const options = [
    {value: 'aku', label: 'Aku'},
    {value: 'aku2', label: 'Aku2'}
  ]

  return (
    <>
      <Select
        options={options}
      />

      <Button className="btn-success my-2" onClick={() => {}} id="button" >Success Button</Button>
    </>
  )
}

export default App
