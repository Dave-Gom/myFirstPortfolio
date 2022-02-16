import "./Footer.css";
import logoReact from "./../../logo.svg";
const Footer = () => {
  return (
    <div className="App-footer">
      <div>
        <span>
          <a
            href="https://www.linkedin.com/in/dave-gomez-54b22a1b7/"
            className="fa fa-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </span>
        <span>
          <a
            href="https://www.instagram.com/davegomezarca/"
            className="fa fa-instagram"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </span>
        <span>
          <a
            href="mailto:davegomez426@gmail.com"
            className="fa fa-google"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </span>
      </div>
      <div>
        <h3>Desarrollado con React.js</h3>
        <img src={logoReact} className="react-logo" alt="logo" />
      </div>
      <div>
        <h3>by David E. Gomez</h3>
      </div>
    </div>
  );
};

export default Footer;
