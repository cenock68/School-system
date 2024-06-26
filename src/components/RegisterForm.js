import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import "./RegisterForm.css";

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // default role
  const [dob, setDOB] = useState(''); // Date of Birth
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password, role);
    navigate(role === 'staff' ? '/staff-dashboard' : '/student-dashboard');
  };

  return (
    <div className="container-1">
      <div className="form-box">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-control" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="form-control" />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} className="form-control">
            <option value="student">Student</option>
            <option value="staff">Staff</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="text" value={dob} onChange={(e) => setDOB(e.target.value)} placeholder="MM/DD/YYYY" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
}

export default RegisterForm;
