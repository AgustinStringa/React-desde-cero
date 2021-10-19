import React, { memo } from "react";

const Foto = memo((props) => {
  return (
    <div>
      <span>kjbdkjfsjk</span>
      {console.log(props)}
    </div>
  );
});

export default memo(Foto);
