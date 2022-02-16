import "./CvExpTempl.css";

const CvExpTempl = ({ logo, title, timeInterval, desc, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-exp"
    >
      <figure className="elem-exp">
        <img src={logo} alt="eaprende" className="img-proy" />
        <figcaption className="description">
          <h3>{title}</h3>

          <p>
            <small>{timeInterval}</small>
          </p>
          <p>{desc}</p>
        </figcaption>
      </figure>
    </a>
  );
};

export default CvExpTempl;
