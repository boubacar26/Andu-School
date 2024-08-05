import React from "react";
import { Outlet } from "react-router-dom";
import Connexion from "pages/Connexion/Connexion";
import Nav from "components/Nav";
export default function layout() {
  return (
    <div>
      <Nav />
    </div>
  );
}
