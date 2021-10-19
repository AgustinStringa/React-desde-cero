import React from "react";

const Card = ({ obj }) => {
  if (obj != null) {
    console.log(obj);
    const { id } = obj;
    //destructurando dentro del objeto
    const {
      urls: { regular, small },
    } = obj;

    const {
      location: { title },
    } = obj;

    return (
      <div>
        <p>{title}</p>
        <img src={small} alt={id} />
      </div>
    );
  } else {
    return <p>Esperando por la peticion</p>;
  }
};

export default Card;
