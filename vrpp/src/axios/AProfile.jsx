import React from "react";

export default function AProfile() {
  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4 rounded-4">
        <h3 className="mb-4 fw-bold">Profile</h3>

        {/* User Info */}
        <div className="row mb-3">
          <div className="col-md-4 fw-semibold">Name:</div>
          <div className="col-md-8">John Doe</div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4 fw-semibold">Email:</div>
          <div className="col-md-8">john@example.com</div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4 fw-semibold">Phone:</div>
          <div className="col-md-8">+91 9876543210</div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4 fw-semibold">Address:</div>
          <div className="col-md-8">123, Main Street, City, Country</div>
        </div>

        <button className="btn btn-primary mt-3">Edit Profile</button>
      </div>
    </div>
  );
}
