import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import LanguageContext from "./LanguageContext";

const ProjectEntry = ({ title, text, image, link }) => {
  const dummyImage = "/images/dummyProjectImage.png";
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const buttonText = language === "en" ? "See" : "Ver";

  return (
    <div className="">
      <h3 className=""> {title}</h3>

      <p className=""> {text}</p>

      <img className="" src={image} alt="Project Preview" />

      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="">{buttonText}</button>
      </a>
    </div>
  );
};

export default ProjectEntry;
