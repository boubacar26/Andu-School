import React from "react";
import Input from "./Input";
export default function SearchInput() {
  return (
    <div className="flex justify-end items-center mt-10 ">
      <p style={{ color: "#E5E5E5" }} className="mt-1 font-semibold text-black mr-4">
        Filtrer
      </p>
      <Input
        style={{ borderColor: "#E5E5E5" }}
        className="border w-48 rounded-full mr-3 "
        label="Prenom & Nom"
      />
      <Input className="border  w-48 rounded-full " label="Classes" />
    </div>
  );
}
