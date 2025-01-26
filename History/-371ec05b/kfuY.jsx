import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import LanguageContext from "./LanguageContext";

const ButtonLanguage = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const darkESIcon = "/images/ES Black Icon.svg";
  const lightESIcon = "/images/ES White Icon.svg";
  const darkUSIcon = "/images/US Black Icon.svg";
  const lightUSIcon = "/images/US White Icon.svg";

  let currentIcon;

  if (language === "en") {
    if (theme === "dark") {
      currentIcon = lightESIcon;
    } else {
      currentIcon = darkESIcon;
    }
  } else {
    if (theme === "light") {
      currentIcon = darkUSIcon;
    } else {
      currentIcon = lightUSIcon;
    }
  }

  return (
    <button className="ButtonLanguage me-2" onClick={toggleLanguage}>
      <img src={currentIcon} alt="language icon" />
    </button>
  );
};

export default ButtonLanguage;
