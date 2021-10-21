import React from "react";

const Botones = ({ input, setInput }) => {
  const handleWallpapers = () => {
    setInput("wallpapers");
  };

  const handleFootball = () => {
    setInput("football");
  };

  const handleRandom = () => {
    setInput("random");
  };
  return (
    <div className="p-3">
      <button className="btn btn-large btn-info m-2" onClick={handleRandom}>
        Get a random image
      </button>
      <button className="btn btn-large btn-info m-2" onClick={handleFootball}>
        Search for football images
      </button>
      <button className="btn btn-large btn-info m-2" onClick={handleWallpapers}>
        Search for wallpapers
      </button>
    </div>
  );
};

export default Botones;
