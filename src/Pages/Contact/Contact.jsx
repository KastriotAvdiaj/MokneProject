import React from "react";
import { InfiniteCarousel } from "../../Components/InfiniteCarousel/InfiniteCarousel";
import foto1 from "../../assets/mokneBottles.png";

export const Contact = () => {
  const fotot = [foto1];
  const fotoStyle = {
    width: "auto",
    height: "400px",
    objectFit: "cover",
  };

  return (
    <div>
      <InfiniteCarousel>
        {fotot.map((foto, index) => (
          <img key={index} src={foto} style={fotoStyle} alt={`Foto ${index}`} />
        ))}
      </InfiniteCarousel>
    </div>
  );
};
