import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { ScrollMenuContext } from "../context/ScrollMenuContext";

export default function NavList({
  setOpen,
  CurrentSection,
  SectionsRefs,
  scrollRef,
}) {


const {smoothScrollInContainer } = useContext(ScrollMenuContext);

  return (
    <div className="NavList">
      <div className="menuList">
        <ul>
          <li>
            <h2>
              <Link className="backIcon" onClick={() => setOpen(false)}>
                <IoArrowBackCircleSharp size={50} />{" "}
              </Link>{" "}
            </h2>
          </li>
          <li>
            <h3
              className={`${
                CurrentSection === "About" ? "presentVerMenu" : ""
              } `}
            >
              <Link
                onClick={() =>
                  smoothScrollInContainer(
                    scrollRef.current, // container (e.g., a scrollable div)
                    SectionsRefs.current.about, // target element inside container
                    1500 // duration in ms
                  )
                }
                className=""
                to="/"
              >
                About
              </Link>
            </h3>
          </li>
          <li>
            <h3
              className={`${
                CurrentSection === "Skill" ? "presentVerMenu" : ""
              }`}
            >
              <Link
                onClick={() =>
                  smoothScrollInContainer(
                    scrollRef.current, // container (e.g., a scrollable div)
                    SectionsRefs.current.skill, // target element inside container
                    1500 // duration in ms
                  )
                }
              >
                Skills{" "}
              </Link>
            </h3>
          </li>
          <li>
            <h3
              className={`${
                CurrentSection === "Work" ? "presentVerMenu" : ""
              }`}
            >
              <Link
                onClick={() =>
                  smoothScrollInContainer(
                    scrollRef.current, // container (e.g., a scrollable div)
                    SectionsRefs.current.work, // target element inside container
                    1500 // duration in ms
                  )
                }
              >
                Work
              </Link>
            </h3>
          </li>
          <li>
            <h3
              className={` ${
                CurrentSection === "Projects" ? "presentVerMenu" : ""
              }`}
            >
              <Link
                onClick={() =>
                  smoothScrollInContainer(
                    scrollRef.current, // container
                    SectionsRefs.current.projects, // target element inside container
                    1500 // duration in ms
                  )
                }
              >
                Projects
              </Link>
            </h3>
          </li>
          <li>
            <h3
              className={` ${
                CurrentSection === "Playstore" ? "presentVerMenu" : ""
              }`}
            >
              <Link
                onClick={() =>
                  smoothScrollInContainer(
                    scrollRef.current, // container
                    SectionsRefs.current.playstore, // target element inside container
                    1500 // duration in ms
                  )
                }
              >
                Play Store
              </Link>
            </h3>
          </li>
          <li>
            <h3
              className={` ${
                CurrentSection === "Certifications" ? "presentVerMenu" : ""
              }`}
            >
              <Link
                onClick={() =>
                  smoothScrollInContainer(
                    scrollRef.current, // container (e.g., a scrollable div)
                    SectionsRefs.current.certification, // target element inside container
                    1500 // duration in ms
                  )
                }
              >
                Certifications
              </Link>
            </h3>
          </li>
          <li>
            <h3
              className={`${
                CurrentSection === "Contact" ? "presentVerMenu" : ""
              }`}
            >
              <Link
                onClick={() =>
                  smoothScrollInContainer(
                    scrollRef.current, // container (e.g., a scrollable div)
                    SectionsRefs.current.contact, // target element inside container
                    1500 // duration in ms
                  )
                }
              >
                Contact Me
              </Link>
            </h3>
          </li>
        </ul>
      </div>

      <div className="SocialMediaList">
        <h1>
          {" "}
          <a href="https://www.linkedin.com/in/wasiulla-sharief-3311131a4/" target={"_blank"}><FaLinkedin
            className="SocialIconsSpace"
            style={{ fontSize: 30, color: "#0072b1" }}
          />
          </a>
        </h1>
        <h1>
          {" "}
          <a href="https://stackoverflow.com/users/12483849/wasi-sharief" target={"_blank"}><FaStackOverflow color="black" className="SocialIconsSpace" />
          </a>
        </h1>

        <h1>
          {" "}

          <a href="https://www.instagram.com/wasi_sharief/?igsh=ZHhzZXZpY295MTQ3#" target={"_blank"}><FaInstagramSquare color="black" className="SocialIconsSpace" />
          </a>
        </h1>
        <h1>
          {" "}
          <a href="https://github.com/WasiSharief" target={"_blank"} ><FaGithubSquare color="black" className="SocialIconsSpace" />
          </a></h1>
      </div>
    </div>
  );
}
