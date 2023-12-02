import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';


export const ArticleSkeletonWhite = () => {
  return (
    <article className="d-flex flex-row gap-3 w-100 p-3 rounded-3">
      <Skeleton height={100} width={111} />
      <div className="d-flex flex-column gap-3">
        <Skeleton height={20} count={3} width={180} />
      </div>
    </article>
  )
}
