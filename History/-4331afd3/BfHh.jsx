import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Button = ({ text, icon }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="row">
      <button className="">
        <div className="">
          <img src={icon} alt="Contact" />
          <span className="">{text}</span>
        </div>
      </button>
    </div>
  );
};

export default Button;
