import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Button = ({ text, icon }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button className="Button bg-blue-900 rounded-full w-full mx-3">
      <div className="flex justify-center">
        <img src={icon} alt="Contact" />
        <span className="text-white text-center font-bold font-size text-xl">
          {text}
        </span>
      </div>
    </button>
  );
};

export default Button;
