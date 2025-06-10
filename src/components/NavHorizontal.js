import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleDown } from "react-icons/fa";
import { HideTopContext } from "../context/HideTopContextApi";
import { ScrollMenuContext } from "../context/ScrollMenuContext";
import AiChatBot from "../utilities/AiChatBot";

export default function NavHorizontal({
  Scroll,
  HorizontalNavRef,
  CurrentSection,
  SectionsRefs,
  scrollRef
}) {

  const { smoothScrollInContainer } = useContext(ScrollMenuContext);


  const { HideTop, setHideTopContext } = useContext(HideTopContext);
  //   const [HideTop, setHideTop] = useState(false);

  // const { SectionsRefsCon  } = useContext(ScrollMenuContext);



  const HandleHideTop = () => {
    setHideTopContext((prev) => !prev);
  };

  const ScrolltoSkill = () => {
    console.log(
      "This is Printed: ",
      SectionsRefs.current.skill?.scrollIntoView()
    );
    SectionsRefs.current.skill?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(()=> {
    if(Scroll ==='normal')
    {
      setHideTopContext(false);
    }
  }
  ,[Scroll])
  

  return (
    <div className="NavHorDivClass" >
      <FaArrowCircleDown
        onClick={HandleHideTop}
        className={`MinimizeArrow ${
          Scroll === "low" || HideTop ? "MinimizeArrowAfter" : ""
        } ${HideTop ? "RotateArrow" : ""} `}
        color="white"
      />
      <nav>
        <ul className="navListHorizontal" ref={HorizontalNavRef}>
          <li>
            <h3
              className={`navHList ${
                CurrentSection === "About" ? "active present" : ""
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
              className={`navHList ${
                CurrentSection === "Skill" ? "active present" : ""
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
              className={`navHList ${
                CurrentSection === "Work" ? "active present" : ""
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
              className={`navHList ${
                CurrentSection === "Projects" ? "active present" : ""
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
              className={`navHList ${
                CurrentSection === "Playstore" ? "active present" : ""
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
              className={`navHList ${
                CurrentSection === "Certifications" ? "active present" : ""
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
              className={`navHList ${
                CurrentSection === "Contact" ? "active present" : ""
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
      </nav>
    </div>
  );
}
