import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = ({ onLinkClick }) => {
  return (
    <footer className="foot text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold title">
              Muhammed Abdulhakeem
            </h5>
            <p className="sub-title">
            A full-stack developer. I enjoy as well as Specialize in building exceptional and trending web and mobile applications. Remotely available UTC−1 to UTC+8.
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold title">
              Links
            </h5>
            <p className="link-hover">
              <Link
                onClick={() => onLinkClick("educationSection")}
                className="sub-title"
                style={{ textDecoration: "none" }}
                to="/"
              >
                {" "}
                Education
              </Link>
            </p>
            <p className="link-hover">
              <Link
                onClick={() => onLinkClick("experienceSection")}
                to="/"
                className="sub-title"
                style={{ textDecoration: "none" }}
              >
                Experience
              </Link>
            </p>

            <p className="link-hover">
              <Link
                onClick={() => onLinkClick("projectSection")}
                to="/"
                className="sub-title"
                style={{ textDecoration: "none" }}
              >
                Projects
              </Link>
            </p>
            <p className="link-hover">
              <Link
                onClick={() => onLinkClick("skillSection")}
                to="/"
                className="sub-title"
                style={{ textDecoration: "none" }}
              >
                Skills
              </Link>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 sub-title">
            <h5 className="text-uppercase mb-4 font-weight-bold title">
              Contact
            </h5>
            <p>House #2, Oloje Housing Estate, Ilorin, Kwara State, Nigeria.</p>
            <p>ennas.de@gmail.com</p>
            <p>+234 (706) 309 5047</p>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>
              {" "}
              Copyright ©2022 All rights reserved by:
              <span style={{ textDecoration: "none" }}>
                <strong className="title"> Muhammed Abdulhakeem</strong>
              </span>
            </p>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a
                    href="https://github.com/ennas-de"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-github icons-color"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/muhammed.abdulhakeem91"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-facebook-f icons-color"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://twitter.com/ennas_de"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-twitter icons-color"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://ng.linkedin.com/in/abdulhakeem-muhammed-061892101"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-linkedin-in icons-color"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
