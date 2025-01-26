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
      {/* TITLE */}
      <h3 className=" text-2xl font-bold mb-6">{title}</h3>

      {/* TEXT */}
      <p className="text-xl mb-6">{text}</p>

      {/* IMAGE */}
      <img className="rounded-md mb-6" src={image} alt="Project Preview" />

      <div className="flex justify-end">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-900 font-semibold text-white rounded-full w-36 h-12 text-lg ">
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectEntry;
