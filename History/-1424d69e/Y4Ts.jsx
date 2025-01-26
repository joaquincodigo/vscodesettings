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
    <div className="PresentationText mb-9 w-full">
      <div className="">
        <h1 className="text-3xl font-bold text-center mt-5 mb-2">Portfolio</h1>
      </div>

      <p className="text-center text-2xl mx-3">{text}</p>
    </div>
  );
};

export default PresentationText;
