import React from "react";
import NavbarComponent from "layouts/navbar/NavbarComponent";
import Form from "components/Form";
import FormBanner from "components/FormBanner";
export default function Connexion() {
  return (
    <div>
      <NavbarComponent />
      <div className="flex justify-center items-center mt-5">
        <FormBanner />
        <Form />
      </div>
    </div>
  );
}
