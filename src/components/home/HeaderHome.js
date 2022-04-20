import { useContext } from "react";
import BasicInfoContext from "../../context/basicInfoContext";
import PhDavid from "../PhDavid";
import "./HeaderHome.css";

const HeaderHome = ({ info }) => {
  const { nickName, lastName } = useContext(BasicInfoContext);
  return (
    <header id="homesection">
      <div className="dark-overlay">
        <div className="home-inner">
          <div className="container">
            <h1>
              Hola! Soy {nickName} {lastName}
            </h1>
            <h2>Desarrollador Fullstack Junior</h2>
            <div>
              <PhDavid />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
