import React from "react";
import { Link, Outlet } from "react-router-dom";

function DashBoard() {
  return (
    <div className="container mt-4">
      
      <h2 className="mb-4 fw-bold">Dashboard</h2>

      <div className="row">
        
        {/* Sidebar */}
        <div className="col-md-3">
          <ul className="list-group shadow-sm">
            <li className="list-group-item">
              <Link className="text-decoration-none" to="profile">
                👤 Profile
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="text-decoration-none" to="settings">
                ⚙️ Settings
              </Link>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="col-md-9">
          <div className="card shadow-sm p-4">
            <Outlet />
          </div>
        </div>

      </div>
    </div>
  );
}

export default DashBoard;
