import React from "react";
import Input from "./Input";
import forum from "../assets/images/forum.png"
export default function Messages() {
  return (
    <div style={{ position: "relative" }} className="flex justify-end">
      <Input
        label="Messages groupés"
        style={{ borderColor: "#E5E5E5" }}
        className="border w-48 rounded-full "
      />
      <img
        src={forum}
        alt=""
        style={{ position: " absolute", top: "5px", right: "170px" }}
      />
    </div>
  );
}
