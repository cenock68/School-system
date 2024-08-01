
// // const apiKey = "27c75835475696f";
// // const apiSecret = "6caa99db4628f6e";
// // const erpUrl ="https://cess.statify.co.ke";
// // import axios from "axios";
// // const instance = axios.create({
// //   baseURL: erpUrl,
// //   headers: {
// //     'Authorization': `Basic ${btoa(`${apiKey}:${apiSecret}`)}`,
// //     'Content-Type': 'application/json',
// //      withCredentials: true,
// //      mode: 'no-cors',
// //   }
// // });

// // export const getStudents = async () => {
// //   try {
// //     const response = await instance.get('/api/resource/Student?fields=["name","first_name","middle_name","last_name","date_of_birth","student_email_id"]');
// //     console.log("hereis the perfect response",response)
// //     return response.data;
// //   } catch (error) {
// //     console.log("gig time error",error)
// //     console.error('Error fetching students:', error.response ? error.response.data : error.message);
// //     throw error;
// //   }
// // };

// // export const createStudent = async (studentData) => {
// //   try {
// //     const response = await instance.post('/api/resource/Student', studentData);
// //     return response.data;
// //   } catch (error) {
// //     console.error('Error creating student:', error.response ? error.response.data : error.message);
// //     throw error;
// //   }
// // };

// // export const updateStudent = async (studentName, studentData) => {
// //   try {
// //     const response = await instance.put(`/api/resource/Student/${studentName}`, studentData);
// //     return response.data;
// //   } catch (error) {
// //     console.error(`Error updating student ${studentName}:`, error.response ? error.response.data : error.message);
// //     throw error;
// //   }
// // };

// // export const deleteStudent = async (studentName) => {
// //   try {
// //     const response = await instance.delete(`/api/resource/Student/${studentName}`);
// //     return response.data;
// //   } catch (error) {
// //     console.error(`Error deleting student ${studentName}:`, error.response ? error.response.data : error.message);
// //     throw error;
// //   }
// // };


// import axios from "axios";

// const apiKey = "27c75835475696f";
// const apiSecret = "6caa99db4628f6e";
// const erpUrl = "https://cess.statify.co.ke";

// const instance = axios.create({
//   baseURL: erpUrl,
//   headers: {
//     'Authorization': `Basic ${btoa(`${apiKey}:${apiSecret}`)}`,
//     'Content-Type': 'application/json',
//   }
// });

// export const getStudents = async () => {
//   try {
//     const response = await instance.get('/api/resource/Student?fields=["name","first_name","middle_name","last_name","date_of_birth","student_email_id"]');
//     console.log("Here is the perfect response", response);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching students:', error.response ? error.response.data : error.message);
//     throw error;
//   }
// };

// export const createStudent = async (studentData) => {
//   try {
//     const response = await instance.post('/api/resource/Student', studentData);
//     return response.data;
//   } catch (error) {
//     console.error('Error creating student:', error.response ? error.response.data : error.message);
//     throw error;
//   }
// };

// export const updateStudent = async (studentName, studentData) => {
//   try {
//     const response = await instance.put(`/api/resource/Student/${studentName}`, studentData);
//     return response.data;
//   } catch (error) {
//     console.error(`Error updating student ${studentName}:`, error.response ? error.response.data : error.message);
//     throw error;
//   }
// };

// export const deleteStudent = async (studentName) => {
//   try {
//     const response = await instance.delete(`/api/resource/Student/${studentName}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error deleting student ${studentName}:`, error.response ? error.response.data : error.message);
//     throw error;
//   }
// };
