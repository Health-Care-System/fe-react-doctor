export const ArticleCard = ({title, content, date}) => {
  
    return (
    <div className="card" style={{ width : '18rem' }}>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
            <p className="text-end me-2">{date}</p>
        </div>
        </div>

    )
}
