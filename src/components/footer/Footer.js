import "./Footer.css";
import logoReact from "./../../logo.svg";
import { useContext } from "react";
import BasicInfoContext from "../../context/basicInfoContext";

const Footer = () => {
  const { lastName, firstName, instagram, linkedIn, gitHub, e_mail } =
    useContext(BasicInfoContext);
  return (
    <div className="App-footer">
      <div>
        <span>
          <a
            href={instagram}
            className="fa fa-instagram"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </span>
        <span>
          <a
            href={linkedIn}
            className="fa fa-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </span>
        <span>
          <a
            href={gitHub}
            className="fa fa-github"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </span>
        <span>
          <a
            href={`mailto:${e_mail}`}
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
        <h3>
          by {firstName} E. {lastName}
        </h3>
      </div>
    </div>
  );
};

export default Footer;
