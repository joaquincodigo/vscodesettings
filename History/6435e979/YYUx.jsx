import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const TopBar = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className="TopBar shadow bg-slate-100 fixed top-0 left-0 w-full flex justify-between px-3 pt-2 pb-1.5">
      <div className="">
        <p className="text-lg">
          joaquín<span className="font-bold">.código</span>
        </p>
      </div>

      <div className="">{children}</div>
    </nav>
  );
};

export default TopBar;
