import { Button } from "../ui/Button"

export const ErrorStatus = ({ title, action}) => {
  return (
    <div className="gap-1 d-flex flex-column justify-content-center">
      <p className="text-center">{title}</p>
      <Button
        onClick={action}
        className={'btn-primary text-white w-25 mx-auto text-center'}
      >
        Coba Lagi
      </Button>
    </div>
  )
}
