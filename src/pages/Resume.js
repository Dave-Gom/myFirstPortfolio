import CvAbout from "../components/resume/CvAbout";
import CvEducacion from "../components/resume/CvEducacion";
import CvExperience from "../components/resume/CvExperience";
import CvHabilidades from "../components/resume/CvHabilidades";
import CvHero from "../components/resume/CvHero";
import CvIntereses from "../components/resume/CvIntereses";
import CvTechnologies from "../components/resume/CvTechnologies";
import CvElemTemp from "../templates/CvElemTemp";

const Resume = () => {
  return (
    <div>
      <CvHero />
      <CvElemTemp title="About" data={<CvAbout />} />
      <CvElemTemp title="Educacion" data={<CvEducacion />} />
      <CvElemTemp title="Habilidades" data={<CvHabilidades />} />
      <CvElemTemp title={"Tecnologias"} data={<CvTechnologies />} />
      <CvElemTemp title={"Intereses"} data={<CvIntereses />} />
      <CvElemTemp title={"Experiencia Laboral"} data={<CvExperience />} />
    </div>
  );
};

export default Resume;
