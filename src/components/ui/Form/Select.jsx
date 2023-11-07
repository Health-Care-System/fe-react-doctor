// Note:
// 1. Cukup panggil komponen ini dengan dengan cara <Select Options={ isi dengan array } />
// 2. Array harus memiliki properti value dan label
export const Select = ({ options }) => {
  return (
    <select className="form-select" aria-label="Default select example">
      <option selected="">Choose</option>
      {options?.map((item, index) => (
        <option
          key={index}
          value={item.value}
        >
          {item.label}
        </option>
      ))
      }
    </select>

  )

}