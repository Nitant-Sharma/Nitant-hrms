import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = ({ profile, setProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const [name, setName] = useState(profile.name || "Maria D Suzia ");
  const [image, setImage] = useState(profile.image || "/maria.jpg ");
  const [email, setEmail] = useState(profile.email);
  const [role] = useState(profile.role);
  const [phone, setPhone] = useState(profile.phone);
  const [id] = useState(profile.id);
  const [department] = useState(profile.department);
  const [location, setLocation] = useState(profile.location);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProfile({ name, image, email, role, phone, id, department, location });
    alert("Details submitted successfully!");
    setIsEditing(false);
    // Update Data from profile
    {
     e.preventDefault();
     axios.post("http://localhost:5000/api/profile",{
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({name: "", email: "",
      phone: "", location: ""})
     })
    }
  }
  return (<>
    <div className={`main-content ${darkMode ? "bg-dark text-white" : ""}`} style={{ minHeight: "100vh" }}>
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold">{isEditing ? "Edit Profile" : "Profile"}</h3>
          <button
            className={`btn} $ {...darkMode ? "btn-light" : "btn-dark"}`}
          onClick={() => setDarkMode(!darkMode)}
          >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div><div className="row">
          <div className="col-md-8 mx-auto">
            <div className={`card shadow-sm ${darkMode ? "bg-secondary text-white" : ""}`}>
            <div className="card-body">
              <div className="text-center mb-4">
                <img
                  src={image}
                  alt="Profile"
                  className="rounded-circle mb-3"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }} />
                {isEditing ? (
                  <>
                    <input type="file" accept="image/*" onChange={handleImageChange} className="form-control mb-2" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control text-center"
                      placeholder="Full Name"
                      required />
                  </>
                ) : (
                  <>
                    <h4>{name}</h4>
                  </>
                )}
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
                      <label className="form-label fw-bold">Id</label>
                      <p>{profile.id}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Department</label>
                      <p>{profile.department}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Role</label>
                      <p>{profile.role}</p>
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
                        className="form-control" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Phone No:</label>
                      <input
                        type="number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="form-control" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Location:</label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                        className="form-control" />
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
  </div></>
  );
};

export default Profile;