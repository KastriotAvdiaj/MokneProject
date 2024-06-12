import React, { useState, useRef,useEffect } from "react";
import "./Contact.css";
import { Stage, Container, Text, Sprite } from '@pixi/react';
import Divider from "../../Components/Divider/Divider";
import { FadeIn } from "../../Components/Reveal/FadeIn";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const bunnyUrl = 'https://pixijs.io/pixi-react/img/bunny.png';
  const bunnyRef = useRef();
  const [animation, setAnimation] = useState(false);

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      if (animation) {
        setRotation(prevRotation => prevRotation - 0.07);
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    if (animation) {
      animationFrameId = requestAnimationFrame(animate);
    }
    setRotation(0);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [animation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleClick = () => {
    setAnimation(!animation);
    setTimeout(()=>{
      setAnimation(false);
    },2500)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="contact-container">
      <FadeIn x={-100} y={0}>
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Na Kontaktoni</h2>
          <div>
            <label htmlFor="name">Emri:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Mesazhi:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <Stage width={360} height={50} style={{ borderRadius: "0.2rem",cursor:"pointer" }} options={{ background: 0x1099bb }} onClick={handleClick}>
            <Container>
              {!animation ? (
                <Text
                  text="Dergo"
                  x={180}
                  y={25}
                  anchor={{ x: 0.5, y: 0.5 }}
                  style={{ fill: "white", fontSize: 16 }}
                />
              ) : (
                <Sprite
                  image={bunnyUrl}
                  x={175}
                  y={25}
                  anchor={{ x: 0.5, y: 0.5 }}
                  ref={bunnyRef}
                  rotation={rotation}
                />
              )}  
            </Container>
          </Stage>
        </form>
      </div>
      </FadeIn>
      <FadeIn>
        Hi
      </FadeIn>
      <FadeIn x={100} y={0}>
      <div className="contact-info-container">
        <p>Fabrika : Uji Mokne, Istog, Kosova</p>
        <Divider/>
        <p>Zip Code : 30000</p>
        <Divider/>
        <p>Istog, Kosova</p>
        <Divider/>
        <p>048 505 858</p>
        <Divider/>
        <p>hrmokne@gmail.com</p>
        <Divider/>
        <p>Per kontakt distribucioni ose porosi:</p>
        <Divider/>
        <p>import-export@mokne.ks</p>
        <Divider/>
        <p>www.mokne.ks</p>
      </div>
      </FadeIn>

    </div>
  );
};
