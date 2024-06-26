import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const role = params.get('role');

  return (
    <>

     <Navbar />
     <LoginForm />
    <Footer /> 
    </>  
  );
}

export default Login;
