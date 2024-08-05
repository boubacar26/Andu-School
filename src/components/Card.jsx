import React from "react";
import payment from "../assets/images/payment.png";
import school from "../assets/images/school.png";
export default function Card({ item }) {
  return (
    <div className="flex gap-4">
      <div className="bg-white w-40 px-4 py-4 rounded flex flex-col justify-center items-center">
        <img src={payment} alt="" />
        <p style={{ color: "#009688" }} className="text-4xl font-bold mt-2 ">
          25
        </p>
        <p>Classes</p>
      </div>
      <div className="bg-white w-40 px-4 py-4 rounded  flex flex-col justify-center items-center">
        <img src={school} alt="" />
        <p style={{ color: "#009688" }} className="text-4xl font-bold mt-2 ">
          367
        </p>
        <p>Eleves</p>
      </div>
    </div>
  );
}
