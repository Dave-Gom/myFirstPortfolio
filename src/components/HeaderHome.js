import "./HeaderHome.css";
import Dave from "../img/Dave-Home.jpg";

const HeaderHome = () => {
  return (
    <header id="homesection">
      <div className="dark-overlay">
        <div className="home-inner">
          <div className="container">
            <h1>Hola! Soy Dave Gomez</h1>
            <h2>Desarrollador Fullstack Junior</h2>
            <a href="#">Read More</a>
            <div className="">
              <img src={Dave} className="hero-img" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
