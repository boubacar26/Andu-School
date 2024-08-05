import React from "react";
import { theaData } from "./Thead";
import SearchInput from "./SearchInput";
import TableBanner from "./TableBanner";
import Messages from "./Messages";
import { data } from "./DataStudents";
export default function Table() {
  return (
    <div className="mt-5 bg-white p-3">
      <TableBanner />
      <Messages />
      <SearchInput />
      <table className="mx-auto styled-table w-full mt-8 bg-white">
        <thead>
          <tr>
            {theaData.map((th) => (
              <th key={th} className="px-12" style={{ color: "#009688" }}>
                {th.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nom}</td>
              <td>{item.niveau}</td>
              <td>{item.classes}</td>
              <td>
                <img src={item.relevé} alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
