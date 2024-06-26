import React from 'react';

const ApplicationForm = () => {
  return (
    <div className="container mt-5">
      <form>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" colSpan="3">PERSONAL DETAILS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="form-group">
                  <label>First Name:</label>
                  <input type="text" className="form-control" name="firstName" required />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label>Middle Name:</label>
                  <input type="text" className="form-control" name="middleName" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input type="text" className="form-control" name="lastName" required />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <label>Date:</label>
                  <input type="date" className="form-control" name="date" required />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label>Student Email Address:</label>
                  <input type="email" className="form-control" name="email" required />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label>Date of Birth:</label>
                  <input type="date" className="form-control" name="dob" required />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <label>Student Mobile Number:</label>
                  <input type="tel" className="form-control" name="mobileNumber" required />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label>Gender:</label>
                  <select className="form-control" name="gender" required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label>Nationality:</label>
                  <input type="text" className="form-control" name="nationality" required />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="text-center">
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default ApplicationForm;
