import React, { useState } from "react";
import "../styles/mainStyle.css";
// import Myimage from '../assets/Mypics/1000074512.ipg'
import HamburgerNav from "../components/HamburgerNav";
import NavHorizontal from "../components/NavHorizontal";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { useContext } from "react";
import { HideTopContext } from "../context/HideTopContextApi";


export default function Home({ Scroll, divRef, HorizontalNavRef, CurrentSection, SectionsRefs, scrollRef  }) {
  const image = require("../assets/Mypics/MyPic.png");

  const [hoverON, setHover] = useState(false);
  const { HideTop } = useContext(HideTopContext);

  return (
    <div className="Home">
      <div className="InvisibleDiv">
        <div
          ref={divRef}
          className={`HomeOuterDiv ${Scroll === "low" ? "reduceTopDiv" : ""} ${HideTop ? 'HideTopDiv' : ''}`}
        >
          <div
            className={`LeftDiv reduceHight_${Scroll} ${
              Scroll === "low" ? "leftSlide" : ""
            } ${HideTop ? 'OpacityHide': ''}`}
          >
            <div
              className="HomeInfo"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <h1 className={`headings ${hoverON ? "hoverEffect shake" : ""} `}>
                Hi&nbsp;{" "}
              </h1>
              <div className="myInfodiv">
                <h1 className={`myName ${hoverON ? "hoverEffect" : ""} `}>
                  I'm Wasiulla Sharief.
                </h1>{" "}
                <br></br>
                <h1 className="myRole">A SDET & SDE</h1>
              </div>
            </div>
            <div className="ShortInfoDiv">
              <h2 className={`ShortInfoP ${hoverON ? "GlowDivClass" : ""}`}>
                A Software Engineer with around 4 years of experience as
                 SDET and SDE. I specialize in building, Automating and
                testing scalable web applications, Mobile Applications and API
                services
              </h2>
            </div>
          </div>
          <div
            className={`RightDiv ${Scroll === "low" ? "reduceImgSco" : ""} `}
          >
            <div
              className={`ImgSocialDiv ${
                Scroll === "low" ? "AfterImgSocialDiv" : ""
              } ${HideTop ? 'OpacityHide': ''} `}
            >
              <div
                className={`ImageDiv ${
                  hoverON ? "" : ""
                } reduceHight_${Scroll} ${
                  Scroll === "low" ? "ReduceImage" : ""
                }`}
              >
                <img
                  className={`imgclass ${Scroll ? "reduceHight" : ""}`}
                  src={image}
                  alt="Error"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                ></img>
              </div>
              <div
                className={`SocialMediaList VerSocialList ${
                  Scroll === "low" ? "reduceSocialIcons" : ""
                }`}
              >
                <h1>
                  {" "}
                 <a href="https://www.linkedin.com/in/wasiulla-sharief-3311131a4/" target={"_blank"}><FaLinkedin
                    className="SocialspaceHome"
                    style={{ fontSize: 30, color: "#0072b1" }}
                  />
                  </a>
                </h1>
                <h1>
                  {" "}
                 <a href="https://stackoverflow.com/users/12483849/wasi-sharief" target={"_blank"}><FaStackOverflow color="white" className="SocialspaceHome" /></a>
                </h1>

                <h1>
                  {" "}
                  <a href="https://www.instagram.com/wasi_sharief/?igsh=ZHhzZXZpY295MTQ3#" target={"_blank"}><FaInstagramSquare
                    color="white"
                    className="SocialspaceHome"
                  /></a>
                </h1>
                <h1>
                  {" "}
                  <a href="https://github.com/WasiSharief" target={"_blank"}><FaGithubSquare color="white" className="SocialspaceHome" /></a>
                </h1>
              </div>
            </div>

            <HamburgerNav scrollRef={scrollRef} SectionsRefs={SectionsRefs} CurrentSection={CurrentSection}  />
          </div>
        </div>
        <NavHorizontal scrollRef={scrollRef} SectionsRefs={SectionsRefs} CurrentSection={CurrentSection} HorizontalNavRef={HorizontalNavRef} Scroll={Scroll}></NavHorizontal>
      </div>
    </div>
  );
}
