import logo from "assets/images/logo.png";
import React from "react";
const Header = () => {
  return (
    <div className="container mx-auto bg-slate-300">
      <div className="flex  items-center">
        <div className="flex-none">
          <img src={logo} alt="daraz logo" />
        </div>
        <div className=" flex-auto flex ">
          <input type="text" className="p-3 mr-44 w-1/3" />
          <button className="px-4  mr-32">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
