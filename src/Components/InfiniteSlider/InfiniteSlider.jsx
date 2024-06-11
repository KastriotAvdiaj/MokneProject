import React from "react";
import "./InfiniteSlider.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/instagramImage1.jpg";
import img6 from "../../assets/instagramImage2.jpg";
import img7 from "../../assets/instagramImage3.jpg";
import img8 from "../../assets/instagramImage4.jpg";

export const InfiniteSlider = () => {
  return (
    <div className="infiniteSlider-wrapper">
      <div className="slider">
        <div className="item item1" style={{ backgroundImage: `url(${img1})` }}></div>
        <div className="item item2" style={{ backgroundImage: `url(${img2})` }}></div>
        <div className="item item3" style={{ backgroundImage: `url(${img3})` }}></div>
        <div className="item item4" style={{ backgroundImage: `url(${img4})` }}></div>
        <div className="item item5" style={{ backgroundImage: `url(${img5})` }}></div>
        <div className="item item6" style={{ backgroundImage: `url(${img6})` }}></div>
        <div className="item item7" style={{ backgroundImage: `url(${img7})` }}></div>
        <div className="item item8" style={{ backgroundImage: `url(${img8})` }}></div>
      </div>
      <p className="slider-caption">
        "Si loti i qiellit, çdo pikë ujë nga marka jonë sjell freskinë dhe pastrinë e natyrës në çdo gotë."
      </p>
    </div>
  );
};
