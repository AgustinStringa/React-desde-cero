import React from "react";
import PropTypes from "prop-types";

const Card = ({ src, alt }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={src} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
};

export default Card;
