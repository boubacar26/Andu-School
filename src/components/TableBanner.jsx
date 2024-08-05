import React from "react";
import Text from "./Text";
import plus from "../assets/images/plus-circle.png";
export default function TableBanner() {
  return (
    <div className="flex gap-8 items-center">
      <Text text="Liste des élèves" />
      <div className="flex items-center ">
        <img src={plus} alt="" />
        <p className="">Ajouter un élève</p>
      </div>
    </div>
  );
}
