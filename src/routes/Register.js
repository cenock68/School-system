import React from 'react';
import { useLocation } from 'react-router-dom';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const role = params.get('role');

  return (
    <>

     <Navbar />
     <RegisterForm />
    <Footer /> 
    </>  
  );
}

export default Login;
