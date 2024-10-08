import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/sch09.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
       <Navbar />
     <Hero 
     cName="hero-mid"
     heroImg={AboutImg}
     title="Careers"
     btnClass="hide"
     />
     <Trip />
     <Footer />
    </>
  );
}

export default Service;
