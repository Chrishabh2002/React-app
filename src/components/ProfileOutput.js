import React from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'; 
import './ProfileOutput.css'; 

const ProfileOutput = () => {
  const { state } = useLocation();
  const formData = state?.formData;

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded animate__animated animate__fadeInUp animate__delay-1s">
        <h2 className="card-title text-center mb-4 text-primary">User Profile Output</h2>
        {formData ? (
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Name:</strong> {formData.name}
            </li>
            <li className="list-group-item">
              <strong>Email:</strong> {formData.email}
            </li>
            <li className="list-group-item">
              <strong>Date of Birth:</strong> {formData.dob}
            </li>
            <li className="list-group-item">
              <strong>Country Code:</strong> {formData.countryCode}
            </li>
            <li className="list-group-item">
              <strong>Contact Number:</strong> {formData.contactNumber}
            </li>
          </ul>
        ) : (
          <p className="text-center text-muted mt-3">No data available.</p>
        )}
      </div>
    </div>
  );
};

export default ProfileOutput;
