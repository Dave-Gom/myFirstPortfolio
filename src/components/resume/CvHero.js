import PhDavid from "../PhDavid";
import "./CvHero.css";

const CvHero = () => {
  return (
    <section className="CvHero">
      <PhDavid />
      <h1>
        David Emmanuel Gomez Arca <small> (Dave)</small>
      </h1>

      <h2>Desarrollador Fullstack junior</h2>
      <br />
      <h2>
        <small>
          <a href="#">Version impresa</a>
        </small>
      </h2>
    </section>
  );
};

export default CvHero;
