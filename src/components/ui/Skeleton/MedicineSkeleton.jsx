import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css';

export const MedicineSkeleton = () => {
  return (
    <div className="col-6 col-lg-4 col-xl-2 mb-4">
    <div className="p-2 rounded-4 d-flex flex-column gap-2 shadow-base mx-auto w-100" style={{ width: 'fit-content'}}>
      <Skeleton height={88} />
      <div className="my-2 d-flex flex-column gap-1">
        <Skeleton height={20} width={100} />
        <Skeleton height={20} width={60} />
      </div>
    </div>
    </div>
  )
}
