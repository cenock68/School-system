import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';
export default function Apply() {
    
    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/application-form');
  };
  return (
    <>
        <Navbar />
   <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
     <div className="card" style={{ width: '24rem' }}>

        <div className="card-body">
          <h5 className="card-title text-primary">Requirements</h5>
          <p className="card-text">
          <li>Passport photo - a clear passport sized photo is required</li> 
          <li>KCPE Academic certificate or result slip </li>
          </p>
          <button onClick={handleClick} className="btn btn-primary">
            Apply
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
