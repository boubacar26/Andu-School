import React from "react";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/user.png";
import NavBar from "components/NavBar";
function NavbarComponent({ bgColor, navbarContainerStyles }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        height: 60,
        backgroundColor: bgColor ? bgColor : "#fff",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        ...navbarContainerStyles,
      }}
    >
      <img src={logo} alt="" />
      <div className="flex gap-20 items-center">
        <div>
          Année Scolaire
          <select
            className="font-medium"
            style={{ color: "#009688" }}
            name=""
            id=""
          >
            <option value="">2020-2021</option>
          </select>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="rounded-full w-9 h-9 shadow flex justify-center items-center">
            <img src={user} alt="" />
          </div>
          <p className="text-xs">Mon compte</p>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
