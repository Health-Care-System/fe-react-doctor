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
    </>
  )
}

export default App
