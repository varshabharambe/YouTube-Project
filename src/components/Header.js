import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 justify-between">
        <img
          className="h-8"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="menu"
        />
        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
          alt="logo"
        />
      </div>
      <div className="col-span-10">
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvI2swFo0rVijznXtvtB_bSRn0ZWA09JRHUbyDYJcrra5SWbE8Rbq9nMX0RUAnoqG6xic&usqp=CAU"
          alt="User Icon"
        />
      </div>
    </div>
  );
};

export default Header;
