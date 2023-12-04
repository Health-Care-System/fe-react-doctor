import bulletIcon from '../../../assets/icon/bullet.svg'
import './Card.css'

export const ArticleCard = ({ title, content, date, handleNavigate }) => {

  return (
    <div onClick={handleNavigate} className="card border-0 article-wrapper">
      <div className="card-body p-2">
        <h6 className="card-title fw-semibold text-truncate">{title}</h6>
        <p className="card-text line-clamp-2">{content}</p>
        <section className="d-flex gap-1 mt-1 justify-content-end">
          <p>Published</p>
          <img src={bulletIcon} alt=" - " />
          <p className="text-end me-2">{date}</p>
        </section>
      </div>
    </div>

  )
}
