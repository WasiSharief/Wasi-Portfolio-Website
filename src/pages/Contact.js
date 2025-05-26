import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Contact({ ref }) {
  return (
    <div ref={ref} className="ContactSectionDiv">
      <div className="contactMain">
        <div className="aboutTable">
          <div className="Label-Info">
            <h2>Date of birth: </h2>
            <h3>16 Feb 1997.</h3>
          </div>
          <div className="Label-Info">
            <h2>Address: </h2>
            <h3>Bengaluru, India.</h3>
          </div>
          <div className="Label-Info">
            <h2>Email: </h2>
            <h3>wasisharief57@gmail.com</h3>
          </div>
        </div>
        <div className="SocialMediaList">
          <h1>
            {" "}
            <a
              href="https://www.linkedin.com/in/wasiulla-sharief-3311131a4/"
              target={"_blank"}
            >
              <FaLinkedin
                className="SocialIconsSpace"
                style={{ fontSize: 30, color: "#0072b1" }}
              />
            </a>
          </h1>
          <h1>
            {" "}
            <a
              href="https://stackoverflow.com/users/12483849/wasi-sharief"
              target={"_blank"}
            >
              <FaStackOverflow color="white" className="SocialIconsSpace" />
            </a>
          </h1>

          <h1>
            {" "}
            <a
              href="https://www.instagram.com/wasi_sharief/?igsh=ZHhzZXZpY295MTQ3#"
              target={"_blank"}
            >
              <FaInstagramSquare color="white" className="SocialIconsSpace" />
            </a>
          </h1>
          <h1>
            {" "}
            <a href="https://github.com/WasiSharief" target={"_blank"}>
              <FaGithubSquare color="white" className="SocialIconsSpace" />
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}
