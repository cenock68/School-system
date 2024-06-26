import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/sch07.jpg";
import Trip2 from "../assets/sch08.jpg";
import Trip3 from "../assets/sch09.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Overview </h1>
      <p> of High School</p>
      <div className="tripcard">
        <TripData
        image={Trip2}
        heading=""
        text="Located on a beautiful campus, the High School provides close to 360 students from over 40 nationalities with an open, inviting environment where it is safe to explore ideas and collaborate with peers. ISK grows programs strategically, applying research-based instructional practices and creating the ideal balance of hard work towards high academic standards within a warm, safe, and friendly environment. In addition to on-campus learning, ISK students engage in a wide array of learning opportunities in Kenya, online, and around the world, for example in the areas of field study, service learning, co-curricular programs, and online academy independent study."
        />
        <TripData
        image={Trip1}
        heading=""
        text="All curricular and co-curricular programs in the High School aim to fulfill the ISK mission, vision, values and aims. We offer a course of study that will build on the foundation of Elementary and Middle School years, establish well articulated academic standards and benchmarks for learning, apply clear assessment and feedback practices, as well as prepare for life's challenges as responsible citizens. "
        />
        <TripData
        image={Trip3}
        heading=""
        text="ISK values curricular diversity and student choice, offering a diverse selection of courses at varying levels with the intention of meeting the academic needs of each student. Click on the link below for more information about the High School Course Guide and Curriculum."
        />
      </div>
    </div>
  );
}

export default Trip;
