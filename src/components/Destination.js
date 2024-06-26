import Mountain1 from "../assets/sch01.jpg";
import Mountain2 from "../assets/sch02.jpg";
import Mountain3 from "../assets/sch03.jpg";
import Mountain4 from "../assets/sch04.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>High School Program</h1>
      <p>In Pursuit of Individual Passions and Areas of Interest</p>
      
      <DestinationData 
      className="first-des"
      heading= "Serving a diverse student "
      text="We recognize that students have different strengths, aspirations,  needs, and learning styles, and teachers work to ensure that the delivery of the academic and co-curricular programs allow each student to be successful and grow."
      img1={Mountain1}
      img2={Mountain4}
      />

      <DestinationData 
      className="first-des-reverse"
      heading= "with a wide range of needs, talents, interests and futures "
      text="The High School academic program features wide-ranging course options that support scholarship and learning towards identified standards while providing scope for personal choice in pursuit of individual passions and areas of interests. The overall program is a challenging one, designed to prepare students to meet the requirements of and excel in diverse university systems around the world. "
      img1={Mountain3}
      img2={Mountain2}
      />
      
    </div>
  );
};

export default Destination;
