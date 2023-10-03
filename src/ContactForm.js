// ContactForm.js
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryConsider: "Spain"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server or perform actions)
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="countryConsider">Countries to Consider:</label>
          <select
            id="countryConsider"
            name="countryConsider"
            value={formData.countryConsider}
            onChange={handleInputChange}
          >
            <option value="Spain">Spain</option>
            <option value="Portugal">Portugal</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="South Africa">South Africa</option>
            <option value="Israel">Israel</option>
          </select>
        </div>
        <button type="submit" className="btn-blue">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
