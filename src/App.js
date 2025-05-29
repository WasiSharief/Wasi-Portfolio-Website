import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import { useContext, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Playstore from "./pages/Playstore";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import { ScrollMenuContext } from "./context/ScrollMenuContext";
import AiChatBot from "./utilities/AiChatBot";

function App() {
  const [Scroll, setScroll] = useState("normal");
  const divRef = useRef(null);
  const scrollRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const Aboutref = useRef(null);

  // const {SectionsRefsCon} = useContext(ScrollMenuContext);

  const SectionsRefs = useRef({
    about: null,
    skill: null,
    work: null,
    projects: null,
    playstore: null,
    certification: null,
    contact: null,
  });

  const Skillref = useRef(null);

  const HorizontalNavRef = useRef(null);

  const [CurrentSection, setCurrentSection] = useState("");

  const handleOnScroll = (e) => {
    // const rect = divRef.current.getBoundingClientRect();
    // const windowHeight = window.innerHeight;

    const skillTop = SectionsRefs.current.skill?.getBoundingClientRect().top;
    const navBottom = HorizontalNavRef.current.getBoundingClientRect().bottom;

    switch (true) {
      case SectionsRefs.current.about?.getBoundingClientRect().top <=
        HorizontalNavRef.current.getBoundingClientRect().top + 75 &&
        SectionsRefs.current.about?.getBoundingClientRect().top >=
          HorizontalNavRef.current.getBoundingClientRect().top - 75:
        setCurrentSection("About");
        break;

      case SectionsRefs.current.skill?.getBoundingClientRect().top <=
        navBottom + 75 &&
        SectionsRefs.current.skill?.getBoundingClientRect().top >=
          navBottom - 75:
        setCurrentSection("Skill");
        break;

      case SectionsRefs.current.work?.getBoundingClientRect().top <=
        navBottom + 75 &&
        SectionsRefs.current.work?.getBoundingClientRect().top >=
          navBottom - 75:
        setCurrentSection("Work");
        break;

      case SectionsRefs.current.projects?.getBoundingClientRect().top <=
        navBottom + 75 &&
        SectionsRefs.current.projects?.getBoundingClientRect().top >=
          navBottom - 75:
        setCurrentSection("Projects");
        break;

      case SectionsRefs.current.playstore?.getBoundingClientRect().top <=
        navBottom + 75 &&
        SectionsRefs.current.playstore?.getBoundingClientRect().top >=
          navBottom - 75:
        setCurrentSection("Playstore");
        break;

      case SectionsRefs.current.certification?.getBoundingClientRect().top <=
        navBottom + 75 &&
        SectionsRefs.current.certification?.getBoundingClientRect().top >=
          navBottom - 75:
        setCurrentSection("Certifications");
        break;

      case SectionsRefs.current.contact?.getBoundingClientRect().top <=
        navBottom + 75 &&
        SectionsRefs.current.contact?.getBoundingClientRect().top >=
          navBottom - 75:
        setCurrentSection("Contact");
        break;

      default:
    }

    const div = scrollRef.current;
    if (!div) return;

    const scrollTop = div.scrollTop;
    const scrollHeight = div.scrollHeight - div.clientHeight;

    const percent = scrollHeight === 0 ? 0 : (scrollTop / scrollHeight) * 100;
    setScrollPercent(percent.toFixed(0));

    console.log("The percentage is: ", scrollPercent);
    if (scrollPercent >= 1) {
      setScroll("low");
      // setScrollPercent(scrollPercent + 5);
    } else {
      setScroll("normal");
    }

    return;
  };

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  
 

  // Hover animation will use it in future
  //   MainClass
  //   <div
  //   className="hover-highlight"
  //   style={{
  //     left: coords.x - 200 + 'px',
  //     top: coords.y - 200 + 'px',
  //   }}
  // ></div>

  return (
    <div onMouseMove={handleMouseMove}>
      <Router>
        <div className="headClass"></div>

        <div ref={scrollRef} className="bodyDiv" onScroll={handleOnScroll}>
          <Home
            scrollRef={scrollRef}
            SectionsRefs={SectionsRefs}
            CurrentSection={CurrentSection}
            Scroll={Scroll}
            HorizontalNavRef={HorizontalNavRef}
          ></Home>

          <div className="AllSections">
            <About ref={(el) => (SectionsRefs.current.about = el)}></About>

            <Skills
              ref={(el) => (SectionsRefs.current.skill = el)}
              CurrentSection={CurrentSection}
            ></Skills>

            <Work ref={(el) => (SectionsRefs.current.work = el)}></Work>
            <Projects
              ref={(el) => (SectionsRefs.current.projects = el)}
            ></Projects>
            <Playstore
              ref={(el) => (SectionsRefs.current.playstore = el)}
            ></Playstore>
            <Certifications
              ref={(el) => (SectionsRefs.current.certification = el)}
            ></Certifications>
            <Contact
              ref={(el) => (SectionsRefs.current.contact = el)}
            ></Contact>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
