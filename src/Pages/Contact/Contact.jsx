import React, { useState } from "react";
import "./Contact.css";
import PerJete from "../../assets/noBcgImage2.png";
import Mountanin from "../../assets/whitemountain2.jpg"; // Ensure the import path is correct

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="contact-container">
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
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-image-container">
        <img src={PerJete} alt="Per Jete" />
      </div>
      <div className="contact-info-container">
        <p>Fabrika: Uji Mokne, Istog, Kosova</p>
        <p>Zip Code: 30000</p>
        <p>Istog, Kosova</p>
        <p>044 888 888</p>
        <p>info@gmail.com</p>
        <p>Per kontakt distribucioni ose porosi:</p>
        <p>import-export@mokne.ks</p>
        <p>www.mokne.ks</p>
      </div>
    </div>
  );
};
