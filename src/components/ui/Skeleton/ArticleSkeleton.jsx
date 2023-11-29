import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export const ArticleSkeleton = () => {
  return (
    <article className="d-flex flex-row gap-3 bg-primary w-100 p-3 rounded-3">
      <Skeleton height={200} width={211} />
      <div className="d-flex flex-column gap-3">
        <Skeleton height={22} className="article-skeleton" />
        <Skeleton height={20} count={5} className="article-skeleton" />
        <Skeleton height={22} className="article-skeleton" />
      </div>
    </article>
  )
}
