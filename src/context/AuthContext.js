import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [role, setRole] = useState(null); // 'staff' or 'student'

  const login = (email, password, userRole) => {
    // Dummy authentication
    setCurrentUser({ email });
    setRole(userRole);
  };

  const register = (email, password, userRole) => {
    // Dummy registration
    setCurrentUser({ email });
    setRole(userRole);
  };

  const logout = () => {
    setCurrentUser(null);
    setRole(null);
  };

  useEffect(() => {
    // Check for existing session or token in localStorage
    // Dummy implementation
    const savedUser = JSON.parse(localStorage.getItem('user'));
    const savedRole = localStorage.getItem('role');
    if (savedUser && savedRole) {
      setCurrentUser(savedUser);
      setRole(savedRole);
    }
  }, []);

  useEffect(() => {
    // Save user session or token in localStorage
    if (currentUser && role) {
      localStorage.setItem('user', JSON.stringify(currentUser));
      localStorage.setItem('role', role);
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('role');
    }
  }, [currentUser, role]);

  const value = {
    currentUser,
    role,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
