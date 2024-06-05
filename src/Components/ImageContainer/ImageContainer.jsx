import React from "react";
import foto1 from "../../assets/instagramImage1.jpg";
import foto2 from "../../assets/instagramImage2.jpg";
import foto3 from "../../assets/instagramImage3.jpg";
import foto4 from "../../assets/instagramImage4.jpg";

import { IndividualImage } from "./IndividualImage";
import "./ImageContainer.css";

export const ImageContainer = () => {
  return (
    <div className="image-container">
      <IndividualImage image={foto1} text={"Image 1"} />
      <IndividualImage image={foto2} text={"Image 2"} />
      <IndividualImage image={foto3} text={"Image 3"} />
      <IndividualImage image={foto4} text={"Image 4"} />
    </div>
  );
};
