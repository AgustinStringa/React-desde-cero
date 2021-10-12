import React, { memo } from "react";

const Dato = memo(({ value }) => {
  console.log("Dato.jsx: me renderice");
  return <span>{value}</span>;
});

export default memo(Dato);
