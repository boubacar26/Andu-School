import React from "react";
import Input from "./Input";
import Button from "./Button";
export default function Form() {
  return (
    <div
      className="bg-white p-12 rounded-r-lg"
      style={{ width: "450px", height: "400px" }}
    >
      <h1 className="font-bold" style={{ color: "#009688" }}>
        Connexion
      </h1>
      <Input label="Adresse mail" className="border-b w-full mt-5" />
      <Input label="Mot de passe" className="border-b w-full mt-8" />
      <div className="flex justify-end mt-3">
        <p style={{ color: "#5A5A5A" }} className="text-sm">
          Mot de passe oublié
        </p>
      </div>
      <Button
        className="mt-10 rounded-full"
        title="CONNEXION"
        bgColor="#009688"
        color="#FFF"
      />
      <p className="mt-5 mb-3 text-center">
        Pas encore de compte?
        <span className="font-semibold" style={{ color: "#009688" }}>
          S'inscrire
        </span>
      </p>
    </div>
  );
}
