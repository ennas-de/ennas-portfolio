import React from "react";
import profile from "../../../assets/images/profile.jpg";
import "./About.css";

const About = ({ reff }) => {
  return (
    <section
      ref={reff}
      id="about"
      className="py-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          About Me
        </h2>

        <div className="row">
          <div className="col-12 col-lg-4">
            <img className="pp d-block mx-auto mb-4" src={profile} alt="profile" />
          </div>
          <div className="col-lg-8">
            <p className="text-font text-justify">
              A professional Fullstack Web Developer. 
              <br />
              I love learning and creating new concepts and solving problems. I acquired strong skills in
              the field of software engineering. The various projects and
              internships that I have carried out have enabled me to develop not
              only my hard skills but also my soft skills.
              <br /> Motivated and Goal Oriented. I have a high sense of
              responsibility and organization.
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
