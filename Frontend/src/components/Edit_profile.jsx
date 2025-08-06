import React from 'react'
import { useState } from 'react';

function Edit_profile({ onNavigate }) {
  
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [department, setDepartment] = useState("");
    const [employeeID, setemployeeID] = useState("");
    const [location, setLocation] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onNavigate('profile', {
        email,
        phone,
        department,
        employeeID,
        date,
        location,
      });
    };
  return (
    <div className="container py-4">
        <h3 className="fw-bold mb-4">Edit-Profile</h3>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="text-center mb-4">
                  <img
                    src="/maria.jpg"
                    alt="Profile"
                    className="rounded-circle mb-3"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }} />
                  <h4>Maria D Souza</h4>
                  <p className="text-muted">HR Manager</p>
                </div>
                <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Email ID :</label>
                    <input type="text" name="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Phone No :</label>
                    <input type="number" name="text" placeholder="12xxxxxx90" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Department :</label>
                    <input type="text" name="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Employee ID :</label>
                    <input type="number" name="text" placeholder="Id" value={employeeID} onChange={(e) => setemployeeID(e.target.value)} required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Join Date :</label><br/>
                    <input type="date" name="text" placeholder="DD/XX/YYYY" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Location :</label>
                   <input type="text" name="text" placeholder='city' value={location} onChange={(e) => setLocation(e.target.value)} required />
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button className="btn btn-primary me-2">Submit</button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Edit_profile;
