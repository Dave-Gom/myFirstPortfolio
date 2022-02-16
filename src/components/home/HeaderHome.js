import PhDavid from "../PhDavid";
import "./HeaderHome.css";

const HeaderHome = () => {
  return (
    <header id="homesection">
      <div className="dark-overlay">
        <div className="home-inner">
          <div className="container">
            <h1>Hola! Soy Dave Gomez</h1>
            <h2>Desarrollador Fullstack Junior</h2>
            <div className="">
              <PhDavid />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
