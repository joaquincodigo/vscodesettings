import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Button = ({ text, icon }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-full px-9">
      <button className="Button bg-blue-900 rounded-full w-full block py-1.5 mb-3">
        <div className="flex justify-center items-center">
          <img className="me-3 w-10" src={icon} alt="Contact" />
          <span className="text-white text-center font-semibold font-size text-xl">
            {text}
          </span>
        </div>
      </button>
    </div>
  );
};

export default Button;
