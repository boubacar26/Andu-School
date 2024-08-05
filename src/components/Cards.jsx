import React from "react";
import { data } from "Data";
import Card from "./Card";
export default function Cards() {
  return (
    <div>
      {data.map((item) => (
        <Card key={item} item={item} />
      ))}
    </div>
  );
}
