import bullet from '../../assets/icon/bullet.svg'

// import "./ArtikelTerbaru.css"

export const ArtikelTerbaru = ({title, text, date}) => {

  return (

      <div className="card border-0">
        <div className="card-body d-flex flex-column lign-items-start">
          <div className="">
              <h6 className="fw-bold small">{title}</h6>
              <p className="text-truncate line-clamp-1 text-text">{text}</p>
          <div className="flex-column">
          </div>
          <div className="d-flex gap-1 mt-1 align-items-center m-2 justify-content-end">
              <p>Published</p>
              <img src={bullet} alt=" - " />
              <p className="text-end me-2">{date}</p>
          </div>
        </div>
        </div>
      </div>

  );
};
