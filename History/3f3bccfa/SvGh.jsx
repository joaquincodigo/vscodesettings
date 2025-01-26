import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";
import Button from "./Button";

const ButtonResume = () => {
  const { language } = useContext(LanguageContext);
  const resumeIcon = "/images/ResumeIconWhite.svg";
  const text = language === "en" ? "Download my CV" : "Descarga mi CV";

  return (
    <div className="ResumeButton mb-9">
      <Button text={text} icon={resumeIcon} />
    </div>
  );
};

export default ButtonResume;
