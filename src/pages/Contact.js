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
            <h2>Address: </h2>
            <h3>Bengaluru, India.</h3>
          </div>
          <div className="Label-Info">
            <h2>Email: </h2>
            <h3>wasisharief57@gmail.com</h3>
          </div>
          <div className="Label-Info copyright">
            <h4>© 2025 WasiUllaSharief - All Rights Reserved </h4>
          </div>
        </div>
        <div className="SocialMediaList contactSocialMedia">
          <h1>
            {" "}
            <a
              href="https://www.linkedin.com/in/wasiulla-sharief-3311131a4/"
              target={"_blank"}
            >
              <FaLinkedin
                className="SocialIconsSpace"
                style={{ fontSize: 50, color: "#0072b1" }}
              />
            </a>
          </h1>
          <h1>
            {" "}
            <a
              href="https://stackoverflow.com/users/12483849/wasi-sharief"
              target={"_blank"}
            >
              <FaStackOverflow  style={{ fontSize: 50, color: "Yellow" }} className="SocialIconsSpace" />
            </a>
          </h1>

          <h1>
            {" "}
            <a
              href="https://www.instagram.com/wasi_sharief/?igsh=ZHhzZXZpY295MTQ3#"
              target={"_blank"}
            >
              <FaInstagramSquare style={{ fontSize: 50, color: "#d62976" }} className="SocialIconsSpace" />
            </a>
          </h1>
          <h1>
            {" "}
            <a href="https://github.com/WasiSharief" target={"_blank"}>
              <FaGithubSquare style={{ fontSize: 50, color: "white" }} className="SocialIconsSpace" />
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}
