import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import LanguageContext from "./LanguageContext";

const ProjectEntry = ({ title, text, image, link }) => {
  const dummyImage = "/images/dummyProjectImage.png";
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const buttonText = language === "en" ? "See" : "Ver";

  return (
    <div className="ProjectEntry shadow-md rounded-3xl p-6 bg-white mb-6">
      <h3 className=" text-xl font-bold mb-3">{title}</h3>

      <p className="text-lg mb-3">{text}</p>

      <img className="rounded-md" src={image} alt="Project Preview" />

      <div className="flex">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-900 text-white rounded-full w-28 text-lg">
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectEntry;
