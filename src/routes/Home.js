import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutImg from "../assets/sch06.jpg";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import StudentList from "./StudentList";


function Home() {
  return (
    <>
     <Navbar />
     <Hero 
     cName="hero"
     heroImg={AboutImg}
     title="HIGH SCHOOL"
     text="Develop Intelligence, Build Character"
     buttonText="More about us"
     url="/"
     btnClass="show"
     />
     <Destination />
     <StudentList />
     <Trip />
     {/* <Footer /> */}
    </>
  );
}

export default Home;

