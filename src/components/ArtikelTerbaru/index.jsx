import bullet from '../../assets/icon/bullet.svg'

import "./ArtikelTerbaru.css"

export const ArtikelTerbaru = ({title, text, date}) => {

  return (
    <div className="card shadow border-0 mx-2 kotak-chat">
      <div className="gap-2">
        <div className="card-body d-flex row">
            <h6 className="card-title fw-bold text-truncate">{title}</h6>
    <p className="text-body">{text}</p>
        </div>
        <section className="d-flex gap-1 mt-1 align-items-center m-2 justify-content-end">
            <p>Published</p>
            <img src={bullet} alt=" - " />
            <p className="text-end me-2">{date}</p>
        </section>
      </div>
    </div>
  );
};
