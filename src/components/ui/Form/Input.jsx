export const Input = ({
  placeHolder,
  name,
  value,
  handleChange,
  type,
  className,
  ...props
}) => {
  return (
    <input
      {...props}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeHolder}
      className={`form-control ${className}`}
    />
  )
}
