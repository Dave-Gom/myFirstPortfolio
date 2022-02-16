import eaprende from "../../img/EaprendeLogo.png";
import Chaco from "../../img/chaco.png";
import CvExpTempl from "../../templates/CvExpTempl";

const CvExperience = () => {
  return (
    <>
      <CvExpTempl
        logo={eaprende}
        title={"eAprende.com"}
        link="https://www.eaprende.com/blog/"
        timeInterval={"2021 - Presente"}
        desc={
          "Eaprende es una iniciativa de Sr. Fabian Riveros que realiza trabajos de desarrollo integral y soporte a sistemas informaticos. Desde principios del año 2021 participo en sus proyectos como desarrollador jr." /*Esto vendra de una Api */
        }
      />
      <CvExpTempl
        logo={Chaco}
        title="Cambios Chaco S.A"
        link="https://www.cambioschaco.com.py/"
        timeInterval={"2021 - Presente"}
        desc={
          "Desde junio del 2021 trabajo como Soporte de Sistemas para la empresa Cambios Chaco S.A donde he aumentado mi conocimiento en infraestructura de redes y desarrollado algunos sistemas para automatizar las tareas rutinarias."
        }
      />
    </>
  );
};

export default CvExperience;
