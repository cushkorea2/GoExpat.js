// Newsletter.js
import React, { useState } from "react";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    telephone: "",
    estimatedDate: ""
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
    // Handle newsletter registration here (e.g., send data to server or perform actions)
  };

  return (
    <div className="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
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
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
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
          <label htmlFor="telephone">Telephone:</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            placeholder="Enter your telephone number"
            value={formData.telephone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="estimatedDate">Estimated Date of Moving:</label>
          <input
            type="date"
            id="estimatedDate"
            name="estimatedDate"
            placeholder="Select your estimated moving date"
            value={formData.estimatedDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn-blue">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
