import html5 from "../../img/icons/html5.svg";
import css from "../../img/icons/css.svg";
import js from "../../img/icons/javascript.svg";
import jquery from "../../img/icons/jquery.svg";
import bootstrap from "../../img/icons/bootstrap.svg";
import php from "../../img/icons/php.svg";
import git from "../../img/icons/git.svg";
import github from "../../img/icons/github.svg";
import react from "../../img/icons/react.svg";
import mysql from "../../img/icons/mysql.svg";
import C from "../../img/icons/C.svg";
const CvTechnologies = () => {
  return (
    <>
      <aside>
        <img src={C} className="icon-tech" alt="C" />
        <img src={html5} className="icon-tech" alt="html5" />
        <img src={css} alt="css" className="icon-tech" />
        <img src={php} alt="php" className="icon-tech" />
        <img src={mysql} alt="mysql" className="icon-tech" />
        <img src={js} alt="js" className="icon-tech" />
        <img src={jquery} alt="jquery" className="icon-tech" />
        <img src={bootstrap} alt="bootstrap" className="icon-tech" />
        <img src={git} alt="git" className="icon-tech" />
        <img src={github} alt="github" className="icon-tech" />
        <img src={react} alt="react" className="react-logo" />
      </aside>
    </>
  );
};

export default CvTechnologies;
