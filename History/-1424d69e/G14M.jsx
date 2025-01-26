import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";
import ThemeContext from "./ThemeContext";

const PresentationText = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const text =
    language === "en"
      ? "Explore my web projects demonstrating skills and expertise."
      : "Explora mis proyectos web que muestran habilidades y experiencia.";

  return (
    <div className="">
      <div className="">
        <h1 className="">Portfolio</h1>
      </div>

      <p className="">{text}</p>
    </div>
  );
};

export default PresentationText;
