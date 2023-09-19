import User from "./User";
import Userclass from "./Userclass";

const About = () => {
  return (
    <div>
      <div>About Us</div>
      <div>Learning </div>

      <User name={"varun"} location={"machilipatnam"} />
      <Userclass name={"Varun Dintakurthi"} location={"Hyderabad"} />
    </div>
  );
};

export default About;
