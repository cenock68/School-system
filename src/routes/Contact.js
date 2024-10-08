import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/sch04.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import React from "react";

function Contact() {
  return (
    <>
     <Navbar />
     <Hero 
     cName="hero-mid"
     heroImg={AboutImg}
     title="Contact"
     btnClass="hide"
     />
     <ContactForm />
    <Footer />
    </>
  );
}

export default Contact;
