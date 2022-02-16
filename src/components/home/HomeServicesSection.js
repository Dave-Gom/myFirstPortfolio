import "./HomeServicesSection.css";

const ServicesSectionHome = () => {
  return (
    <section className="servicesSection">
      <div className="dark-overlay">
        <div className="home-innerServ">
          <div className="containerServ">
            <h1 className="serv-title">Servicios</h1>
            <h3 className="serv-exp">Actualmente me dedico a:</h3>
            <ul className="services">
              <li>Diseñar e implementar layaut de paginas web</li>
              <li>Consumo de APIS</li>
              <li>Elaboracion de Formularios</li>
              <li>Elaboracion de sistemas de autenticacion</li>
              <li>Elaboracion de SPA</li>
              <li>Elaboracion de CRUDs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionHome;
