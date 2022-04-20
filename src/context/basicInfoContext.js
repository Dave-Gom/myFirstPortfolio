import { createContext } from "react";
import React, { useState, useEffect } from "react";

const BasicInfoContext = createContext();

const BasicInfoProvider = ({ children }) => {
  const [bio, setBio] = useState({});

  useEffect(() => {
    const getBio = async () => {
      let res = await fetch("http://localhost:5000/api/mi-info");
      if (!res.ok) {
        let message = `An error has occured: ${res.status}`;
        throw new Error(message);
      }
      let miInfo = await res.json();
      // console.log(miInfo[0]);
      setBio(miInfo[0]);
    };
    getBio();
  }, []);
  const data = bio;
  return (
    <BasicInfoContext.Provider value={data}>
      {children}
    </BasicInfoContext.Provider>
  );
};

export { BasicInfoProvider };
export default BasicInfoContext;
