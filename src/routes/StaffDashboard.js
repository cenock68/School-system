import React from 'react';
import { useAuth } from '../context/AuthContext';

function StaffDashboard() {
  const { currentUser, logout } = useAuth();

  return (
    <div className="container page-content">
      <h2>Staff Dashboard</h2>
      <p>Welcome, {currentUser.email}</p>
      <button onClick={logout} className="btn btn-danger">Logout</button>
    </div>
  );
}

export default StaffDashboard;