// import React from 'react';
// import { useAuth } from '../context/AuthContext';

// function StudentDashboard() {
//   const { currentUser, logout } = useAuth();

//   return (
//     <div className="container page-content">
//       <h2>Student Dashboard</h2>
//       <p>Welcome, {currentUser.email}</p>
//       <button onClick={logout} className="btn btn-danger">Logout</button>
//     </div>
//   );
// }

// export default StudentDashboard;
// StudentDashboard.js

import React from 'react';
import StudentDashboardForm from '../components/StudentDashboardForm';

function StudentDashboard() {
  
  return (
    <>
     <StudentDashboardForm />
    </>  
  );
}

export default StudentDashboard;
