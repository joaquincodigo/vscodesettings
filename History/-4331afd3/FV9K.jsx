import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Button = ({ text, icon }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="Button bg-blue-900 rounded-full">
      <button className="">
        <div className="">
          <img src={icon} alt="Contact" />
          <span className="text-white text-center font-bold font-size text-xl">
            {text}
          </span>
        </div>
      </button>
    </div>
  );
};

export default Button;
