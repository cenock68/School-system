// import React, { useEffect, useState } from 'react';
// import { getStudents, createStudent, updateStudent, deleteStudent } from '../routes/Apierp';

// const StudentList = () => {
//   const [students, setStudents] = useState([]);
//   const [newStudent, setNewStudent] = useState({ first_name: '', middle_name: '', last_name: '', date_of_birth: '', student_email_id: ''});
//   const [editStudent, setEditStudent] = useState(null);

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const data = await getStudents();
//       console.log("the following are", data)
//       setStudents(data.data); // Assuming 'data' contains the list of students with the required fields
//     } catch (error) {
//       console.error('Failed to fetch students:', error.response ? error.response.data : error.message);
//       console.log("full tyme distractor",error)
//     }
//   };

//   const handleChange = (e) => {
//     setNewStudent({
//       ...newStudent,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editStudent) {
//         await updateStudent(editStudent.name, newStudent);
//         setEditStudent(null);
//       } else {
//         await createStudent(newStudent);
//       }
//       fetchStudents();
//       setNewStudent({ first_name: '', middle_name: '', last_name: '', date_of_birth: '', student_email_id: ''});
//     } catch (error) {
//       console.error('Failed to create/update student:', error.response ? error.response.data : error.message);
//     }
//   };

//   const handleEdit = (student) => {
//     setEditStudent(student);
//     setNewStudent({ first_name: student.first_name, middle_name: student.middle_name, last_name: student.last_name, date_of_birth: student.date_of_birth, student_email_id: student.student_email_id });
//   };

//   const handleDelete = async (name) => {
//     try {
//       await deleteStudent(name);
//       fetchStudents();
//     } catch (error) {
//       console.error(`Failed to delete student ${name}:`, error.response ? error.response.data : error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Student List</h1>
//       <ul>
//         {students.map(student => (
//           <li key={student.name}>
//             <strong>First Name:</strong> {student.first_name} <br />
//             <strong>Middle Name:</strong> {student.middle_name} <br />
//             <strong>Last Name:</strong> {student.last_name} <br />
//             <strong>Date of Birth:</strong> {student.date_of_birth} <br />
//             <strong>Email:</strong> {student.student_email_id} <br />
//             {/* <strong>Status:</strong> {student.status} <br /> */}
//             <button onClick={() => handleEdit(student)}>Edit</button>
//             <button onClick={() => handleDelete(student.name)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <h2>{editStudent ? 'Edit Student' : 'Create New Student'}</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="first_name"
//           value={newStudent.first_name}
//           onChange={handleChange}
//           placeholder="First Name"
//           required
//         />
//         <input
//           type="text"
//           name="middle_name"
//           value={newStudent.middle_name}
//           onChange={handleChange}
//           placeholder="Middle Name"
//           required
//         />
//         <input
//           type="text"
//           name="last_name"
//           value={newStudent.last_name}
//           onChange={handleChange}
//           placeholder="Last Name"
//           required
//         />
//         <input
//           type="date"
//           name="date_of_birth"
//           value={newStudent.date_of_birth}
//           onChange={handleChange}
//           placeholder="Date of Birth"
//           required
//         />
//         <input
//           type="email"
//           name="student_email_id"
//           value={newStudent.student_email_id}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//         />
//         {/* <input
//           type="text"
//           name="status"
//           value={newStudent.status}
//           onChange={handleChange}
//           placeholder="Status"
//           required
//         /> */}
//         <button type="submit">{editStudent ? 'Update Student' : 'Create Student'}</button>
//       </form>
//     </div>
//   );
// };

// export default StudentList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/resource/Student',
  headers: {
    'Content-Type': 'application/json',
  }
});

const getStudents = async () => {
  try {
    const response = await instance.get('?fields=["name","first_name","middle_name","last_name","date_of_birth","student_email_id"]');
    return response.data.data; // Access the data array directly
  } catch (error) {
    console.error('Error fetching students:', error.response ? error.response.data : error.message);
    throw error;
  }
};

const createStudent = async (studentData) => {
  try {
    const response = await instance.post('', studentData);
    return response.data;
  } catch (error) {
    console.error('Error creating student:', error.response ? error.response.data : error.message);
    throw error;
  }
};

const updateStudent = async (studentName, studentData) => {
  try {
    const response = await instance.put(`/${studentName}`, studentData);
    return response.data;
  } catch (error) {
    console.error(`Error updating student ${studentName}:`, error.response ? error.response.data : error.message);
    throw error;
  }
};

const deleteStudent = async (studentName) => {
  try {
    const response = await instance.delete(`/${studentName}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting student ${studentName}:`, error.response ? error.response.data : error.message);
    throw error;
  }
};

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ first_name: '', middle_name: '', last_name: '', date_of_birth: '', student_email_id: ''});
  const [editStudent, setEditStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data); // Assuming 'data' contains the list of students with the required fields
    } catch (error) {
      console.error('Failed to fetch students:', error.response ? error.response.data : error.message);
    }
  };

  const handleChange = (e) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editStudent) {
        await updateStudent(editStudent.name, newStudent);
        setEditStudent(null);
      } else {
        await createStudent(newStudent);
      }
      fetchStudents();
      setNewStudent({ first_name: '', middle_name: '', last_name: '', date_of_birth: '', student_email_id: ''});
    } catch (error) {
      console.error('Failed to create/update student:', error.response ? error.response.data : error.message);
    }
  };

  const handleEdit = (student) => {
    setEditStudent(student);
    setNewStudent({
      first_name: student.first_name || '',
      middle_name: student.middle_name || '',
      last_name: student.last_name || '',
      date_of_birth: student.date_of_birth || '',
      student_email_id: student.student_email_id || ''
    });
  };

  const handleDelete = async (name) => {
    try {
      await deleteStudent(name);
      fetchStudents();
    } catch (error) {
      console.error(`Failed to delete student ${name}:`, error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map(student => (
          <li key={student.name}>
            <strong>First Name:</strong> {student.first_name} <br />
            <strong>Middle Name:</strong> {student.middle_name} <br />
            <strong>Last Name:</strong> {student.last_name} <br />
            <strong>Date of Birth:</strong> {student.date_of_birth} <br />
            <strong>Email:</strong> {student.student_email_id} <br />
            <button onClick={() => handleEdit(student)}>Edit</button>
            <button onClick={() => handleDelete(student.name)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>{editStudent ? 'Edit Student' : 'Create New Student'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          value={newStudent.first_name}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="middle_name"
          value={newStudent.middle_name}
          onChange={handleChange}
          placeholder="Middle Name"
          required
        />
        <input
          type="text"
          name="last_name"
          value={newStudent.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="date"
          name="date_of_birth"
          value={newStudent.date_of_birth}
          onChange={handleChange}
          placeholder="Date of Birth"
          required
        />
        <input
          type="email"
          name="student_email_id"
          value={newStudent.student_email_id}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <button type="submit">{editStudent ? 'Update Student' : 'Create Student'}</button>
      </form>
    </div>
  );
};

export default StudentList;