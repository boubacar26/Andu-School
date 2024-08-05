import React from "react";
import Title from "components/Title";
import Card from "components/Card";
import Table from "components/Table";
function HomePage() {
  return (
    <>
      <Title
        title="Cours sainte marie"
        className="uppercase font-semibold bg-white rounded w-96 p-3"
      />
      <Card />
      <Table />
    </>
  );
}

export default HomePage;
