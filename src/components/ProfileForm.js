import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'animate.css'; 

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    countryCode: '',
    contactNumber: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      const data = await response.json();
      navigate('/profile-output', { state: { formData: data } });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container p-4 rounded shadow-sm bg-light mt-5 animate__animated animate__fadeIn animate__delay-1s">
      <h2 className="text-center mb-4 text-primary">User Profile Form</h2>
      
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input
          type="text"
          name="name"
          className="form-control"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          name="email"
          className="form-control"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Date of Birth:</label>
        <input
          type="date"
          name="dob"
          className="form-control"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Country Code:</label>
        <select
          name="countryCode"
          className="form-select"
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="+1">+1 (USA)</option>
          <option value="+91">+91 (India)</option>
          {/* Add more country codes as needed */}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Contact Number:</label>
        <input
          type="tel"
          name="contactNumber"
          className="form-control"
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100 mb-3 animate__animated animate__pulse animate__delay-2s">
        Submit
      </button>
    </form>
  );
};

export default ProfileForm;
