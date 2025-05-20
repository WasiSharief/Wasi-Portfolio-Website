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
                I'm a Software Engineer with around 4 years of experience as
                both an SDET and SDE. I specialize in building, Automating and
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
                  <FaLinkedin
                    className="SocialspaceHome"
                    style={{ fontSize: 30, color: "#0072b1" }}
                  />
                </h1>
                <h1>
                  {" "}
                  <FaStackOverflow color="white" className="SocialspaceHome" />
                </h1>

                <h1>
                  {" "}
                  <FaInstagramSquare
                    color="white"
                    className="SocialspaceHome"
                  />
                </h1>
                <h1>
                  {" "}
                  <FaGithubSquare color="white" className="SocialspaceHome" />
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
