import { useState } from "react";

export default function Projects({ ref }) {
  const [Hoveron, setHover] = useState("");

  return (
    <div ref={ref} className="ProjectsSectionDiv">
      <div className="projectmaindiv">
        <div
          className={`Project-Tile ${
            Hoveron === "Codial" ? "ProjectHovered" : ""
          }`}
          onMouseEnter={() => setHover("Codial")}
          onMouseLeave={() => setHover("")}
        >
          <a href="https://github.com/WasiSharief/Codial" target={"_blank"}>
            <div
              className={`Project Codial ${
                Hoveron === "Codial" ? "ProjectHovered ProjectScale" : ""
              }`}
            >
              <h2 className="projectdetails">
                Codial: A Social Media Website <br></br>
                <h3>
                  Its a Full stack social media app, built on MVC model using
                  JavaScript, ExpressJS and MongoDB
                </h3>
              </h2>
            </div>
          </a>
          <h1
            className={`CodialTitle ${
              Hoveron === "Codial" ? "opactiyZero" : ""
            }`}
          >
            Codial: A Social Media
          </h1>
        </div>


        <div
          className={`Project-Tile ${
            Hoveron === "ImgLoc" ? "ProjectHovered" : ""
          }`}
          onMouseEnter={() => setHover("ImgLoc")}
          onMouseLeave={() => setHover("")}
        >
          <a href="https://github.com/WasiSharief/LocationCapture" target={"_blank"}>
            <div
              className={`Project ImgLoc ${
                Hoveron === "ImgLoc" ? "ProjectHovered ProjectScale" : ""
              }`}
            >
              <h2 className="projectdetails">
                Image Location Capture<br></br>
                <h3>
                Its a Cross Platform Mobile App, To Capture location along with image. Built using ReactNative
                </h3>
              </h2>
            </div>
          </a>
          <h1
            className={`CodialTitle ${
              Hoveron === "ImgLoc" ? "opactiyZero" : ""
            }`}
          >
            Image Location Capture
          </h1>
        </div>

        <div
          className={`Project-Tile ${
            Hoveron === "MyWebsite" ? "ProjectHovered" : ""
          }`}
          onMouseEnter={() => setHover("MyWebsite")}
          onMouseLeave={() => setHover("")}
        >
          <a href="https://github.com/WasiSharief/Wasi-Portfolio-Website" target={"_blank"}>
            <div
              className={`Project Mywebsite ${
                Hoveron === "MyWebsite" ? "ProjectHovered ProjectScale" : ""
              }`}
            >
              <h2 className="projectdetails">
              This Portfolio Website (Source code)<br></br>
                <h3>
                  Its Git hub Repository of this Portfolio Website, this was developed using React.js & Node.js
                </h3>
              </h2>
            </div>
          </a>
          <h1
            className={`CodialTitle ${
              Hoveron === "MyWebsite" ? "opactiyZero" : ""
            }`}
          >
            This Portfolio Website (Source code)
          </h1>
        </div>

        <div
          className={`Project-Tile ${
            Hoveron === "musicPlayer" ? "ProjectHovered" : ""
          }`}
          onMouseEnter={() => setHover("musicPlayer")}
          onMouseLeave={() => setHover("")}
        >
          <a href="https://github.com/WasiSharief/musicplayer" target={"_blank"}>
            <div
              className={`Project musicPlayer ${
                Hoveron === "musicPlayer" ? "ProjectHovered ProjectScale" : ""
              }`}
            >
              <h2 className="projectdetails">
              Online Music Player<br></br>
                <h3>
                  Its an Online Music player Website, which was developed using Javascript, CSS
                  </h3>
              </h2>
            </div>
          </a>
          <h1
            className={`CodialTitle ${
              Hoveron === "musicPlayer" ? "opactiyZero" : ""
            }`}
          >
           Online Music Player
          </h1>
        </div>

        <div
          className={`Project-Tile ${
            Hoveron === "BDDFramework" ? "ProjectHovered" : ""
          }`}
          onMouseEnter={() => setHover("BDDFramework")}
          onMouseLeave={() => setHover("")}
        >
          <a href="https://github.com/WasiSharief/BDD-Automation-Framework" target={"_blank"}>
            <div
              className={`Project BDDFramework ${
                Hoveron === "BDDFramework" ? "ProjectHovered ProjectScale" : ""
              }`}
            >
              <h2 className="projectdetails">
              BDD Automation Framework<br></br>
                <h4>
                  This is an BDD Automation framework, built using Java, Selenium, Mavin, TestNG, cucumber for testing Web & Mob.
                  </h4>
              </h2>
            </div>
          </a>
          <h1
            className={`CodialTitle ${
              Hoveron === "BDDFramework" ? "opactiyZero" : ""
            }`}
          >
           BDD Automation Framework
          </h1>
        </div>
      </div>
    </div>
    
  );
}
