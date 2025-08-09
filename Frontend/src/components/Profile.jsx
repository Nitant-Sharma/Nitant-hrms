import React, { useState } from "react";

const Profile = ({ profile, setProfile }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);
  const [department, setDepartment] = useState(profile.department);
  const [employeeID, setEmployeeID] = useState(profile.employeeID);
  const [location, setLocation] = useState(profile.location);
  const [date, setDate] = useState(profile.date);

  const handleSubmit = (e) => {
    e.preventDefault();

    setProfile({ email, phone, department, employeeID, date, location });
    alert("Details submitted successfully!");
    setIsEditing(false);
  };

  return (
    <div className="main-content">
      <div className="container py-4">
        <h3 className="fw-bold mb-4">{isEditing ? "Edit Profile" : "Profile"}</h3>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="text-center mb-4">
                  <img
                    src="/maria.jpg"
                    alt="Profile"
                    className="rounded-circle mb-3"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />
                  <h4>Maria D Souza</h4>
                  <p className="text-muted">HR Manager</p>
                </div>

                {!isEditing ? (
                  <>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Email</label>
                        <p>{profile.email}</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Phone</label>
                        <p>{profile.phone}</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Department</label>
                        <p>{profile.department}</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Employee ID</label>
                        <p>{profile.employeeID}</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Join Date</label>
                        <p>{profile.date}</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Location</label>
                        <p>{profile.location}</p>
                      </div>
                    </div>

                    <div className="text-center mt-4">
                      <button className="btn btn-primary me-2" onClick={() => setIsEditing(true)}>
                        Edit Profile
                      </button>
                    </div>
                  </>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Email ID:</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Phone No:</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Department:</label>
                        <input
                          type="text"
                          value={department}
                          onChange={(e) => setDepartment(e.target.value)}
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Employee ID:</label>
                        <input
                          type="text"
                          value={employeeID}
                          onChange={(e) => setEmployeeID(e.target.value)}
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Join Date:</label>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Location:</label>
                        <input
                          type="text"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <button type="submit" className="btn btn-primary me-2">Submit</button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;