import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Button = ({ text, icon }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="row">
      <button
        className="btn btn-lg rounded-pill col-10 col-md-6 col-lg-3 col-xl-3 mx-auto mb-3"
        style={{ backgroundColor: theme === "light" ? "#001d6c" : "#0043ce" }}
      >
        <div className="container mx-auto d-flex align-items-center justify-content-center">
          <img
            src={icon}
            alt="Contact"
            className="img-fluid me-3"
            style={{ maxWidth: "10%", height: "auto" }}
          />

          <span
            className="ibm-plex-sans-semibold me-3 fs-4"
            style={{ color: theme === "light" ? "#ffffff" : "#ffffff" }}
          >
            {text}
          </span>
        </div>
      </button>
    </div>
  );
};

export default Button;
