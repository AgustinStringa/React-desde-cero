import React, { memo } from "react";

const Dato = ({ value }) => {
  console.log("Dato.jsx: me renderice");
  const operar = () => {
    const result = value / 2;
    console.log(result);
  };
  return <span>{value}</span>;
};

export default memo(Dato);
