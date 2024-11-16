import selfie from "../assets/images/self.jpeg";

export const About = () => (
  <div className="about-container">
    <img src={selfie} alt="me!" />
    <p>
      <strong>Garett Begnoche</strong> is a contract software developer with
      experience in Node.js and React frontend.
    </p>
  </div>
);

export default About;
