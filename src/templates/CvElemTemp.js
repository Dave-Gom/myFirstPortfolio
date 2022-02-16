import "./CvElemTemp.css";

const CvElemTemp = ({ title, data }) => {
  return (
    <section className="eItem">
      <h2 className="eItemTitle">{title}</h2>
      <div className="eItemContent">{data}</div>
    </section>
  );
};

export default CvElemTemp;
