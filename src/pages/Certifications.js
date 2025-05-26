import { useState } from "react";

export default function Certifications({ ref }) {
  const [Hoveron, setHover] = useState("");

  return (
    <div ref={ref} className="CertificationsSectionsDiv">
      <div className="CertificationMainDiv">
        <div className={`Certificate`}>
          <a href="https://github.com/WasiSharief/Codial" target={"_blank"}>
            <div className={`Certificate-design AIPrompt`}></div>
          </a>
          <h2 className="CertificateTitle">
            AI Prompt Engineering (From Udemy)
            <h3>
              Completed a comprehensive course covering prompt design,
              few-shot/zero-shot techniques, chain-of-thought reasoning, and
              optimization strategies for large language models like ChatGPT.
            </h3>
          </h2>
        </div>

        <div className={`Certificate`}>
          <a href="https://github.com/WasiSharief/Codial" target={"_blank"}>
            <div className={`Certificate-design Jenkins`}></div>
          </a>
          <h2 className="CertificateTitle">
            Devops CI/CD Continuous Integration With Jenkins (From Udemy)
            <h3>
              Gained hands-on experience in configuring Jenkins pipelines,
              automating builds, testing, and deployment processes in a CI/CD
              environment.
            </h3>
          </h2>
        </div>

        <div className={`Certificate`}>
          <a href="https://github.com/WasiSharief/Codial" target={"_blank"}>
            <div className={`Certificate-design Jenkins`}></div>
          </a>
          <h2 className="CertificateTitle">
            Appium Automation (From Udemy)
            <h3>
              Learned mobile automation testing using Appium, covering real
              device/emulator setup, test scripting, and integration with
              frameworks like TestNG and Selenium.
            </h3>
          </h2>
        </div>

        <div className={`Certificate`}>
          <a href="https://github.com/WasiSharief/Codial" target={"_blank"}>
            <div className={`Certificate-design backend`}></div>
          </a>
          <h2 className="CertificateTitle">
            Backend Development (From Coding Ninjas)
            <h3>
              Built scalable backend applications using Node.js, Express.js, and
              MongoDB, with hands-on experience in RESTful APIs, authentication,
              and deployment.
            </h3>
          </h2>
        </div>

        <div className={`Certificate`}>
          <a href="https://github.com/WasiSharief/Codial" target={"_blank"}>
            <div className={`Certificate-design Fullstack-Frontend`}></div>
          </a>
          <h2 className="CertificateTitle">
            Full Stack Development - Front End (From Coding Ninjas)
            <h3>
              Gained expertise in building responsive user interfaces using
              HTML, CSS, JavaScript, and React, with a focus on component-based
              architecture and state management.
            </h3>
          </h2>
        </div>

        <div className={`Certificate`}>
          <a href="https://github.com/WasiSharief/Codial" target={"_blank"}>
            <div className={`Certificate-design react`}></div>
          </a>
          <h2 className="CertificateTitle">
            ReactJS (From Udemy)
            <h3>
              Developed dynamic and responsive web applications using ReactJS,
              covering components, hooks, state management, and routing.
            </h3>
          </h2>
        </div>

        <div className={`Certificate`}>
          <a href="https://github.com/WasiSharief/Codial" target={"_blank"}>
            <div className={`Certificate-design automation`}></div>
          </a>
          <h2 className="CertificateTitle">
            Industrial Automation Testing (From Xelate)
            <h3>
              Learnt Automation testing with JAVA and selenium and API testing
              with real time projects.
            </h3>
          </h2>
        </div>
      </div>
    </div>
  );
}
