import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import Register from "./routes/Register";
import StaffDashboard from "./routes/StaffDashboard";
import StudentDashboard from "./routes/StudentDashboard";
import { AuthProvider, useAuth } from './context/AuthContext';
import Apply from './routes/Apply';
import ApplicationForm from './routes/ApplicationForm';

function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Login />;
}

export default function App() {
  return (
    <AuthProvider>
     
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/staff-dashboard" element={<PrivateRoute><StaffDashboard /></PrivateRoute>} />
            <Route path="/student-dashboard" element={<PrivateRoute><StudentDashboard /></PrivateRoute>} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/application-form" element={<ApplicationForm />} />
          </Routes>
        </div>
     
    </AuthProvider>
  );
}

