import { useContext } from "react";
import { ScrollMenuContext } from "../context/ScrollMenuContext";

export default function Skills({ ref, CurrentSection }) {
  return (
    <div ref={ref}>
      <div className="skillSection">
        <div className="skillmaindiv">
          <div className="sdetDiv">
            <h1 className="skillHeading">SDET Skills</h1>

            <div class="container">
              <div class="skill">
                <h3>JAVA</h3>
                <h4>75%</h4>
                <span class="skill-bar"></span>
                <span class={`fill-bar ${CurrentSection === 'Skill' ? 'java' : ''}`}></span>
              </div>
              <div class="skill">
                <h3>Selenium</h3>
                <h4>85%</h4>
                <span class="skill-bar"></span>
                <span class={`fill-bar ${CurrentSection === 'Skill' ? 'selenium' : ''}`}></span>
              </div>
              <div class="skill">
                <h3>Rest API</h3>
                <h4>55%</h4>
                <span class="skill-bar"></span>
                <span class={`fill-bar ${CurrentSection === 'Skill' ? 'restapi' : ''}`}></span>
              </div>
              <div class="skill">
                <h3>Appium</h3>
                <h4>60%</h4>
                <span class="skill-bar"></span>
                <span class={`fill-bar ${CurrentSection === 'Skill' ? 'appium' : ''}`}></span>
              </div>
              <div class="skill">
                <h3>MySQL</h3>
                <h4>50%</h4>
                <span class="skill-bar"></span>
                <span class={`fill-bar ${CurrentSection === 'Skill' ? 'mysql' : ''}`}></span>
              </div>
              <div class="skill">
                <h3>VB Script</h3>
                <h4>50%</h4>
                <span class="skill-bar"></span>
                <span class={`fill-bar ${CurrentSection === 'Skill' ? 'vbscript' : ''}`}></span>
              </div>
              <div class="skill">
                <h3>Jenkins / CICD</h3>
                <h4>50%</h4>
                <span class="skill-bar"></span>
                <span class={`fill-bar ${CurrentSection === 'Skill' ? 'vbscript' : ''}`}></span>
              </div>
            
            </div>
          </div>



          <div className="sdeDiv">
            <h1 className="skillHeading">SDE Skills</h1>
            <div class="container">
              <div class="skill">
                <h3>JavaScript</h3>
                <h4>80%</h4>
                <span class="skill-bar"></span>
                <span class={`fill-bar ${CurrentSection === 'Skill' ? 'javascript' : ''}`}></span>
              </div>
              <div class="skill">
                <h3>ReactJS</h3>
                <h4>75%</h4>
                <span class="skill-bar"></span>
                <span class={`fill-bar ${CurrentSection === 'Skill' ? 'reactjs' : ''}`}></span>
              </div>
              <div class="skill">
                <h3>HTML / CSS</h3>
                <h4>90%</h4>
                <span class="skill-bar"></span>
                <span class={`fill-bar ${CurrentSection === 'Skill' ? 'htmlcss' : ''}`}></span>
              </div>
              <div class="skill">
                <h3>NodeJS / ExpressJS</h3>
                <h4>55%</h4>
                <span class="skill-bar"></span>
                <span class={`fill-bar ${CurrentSection === 'Skill' ? 'node' : ''}`}></span>
              </div>
              <div class="skill">
                <h3>React Native</h3>
                <h4>50%</h4>
                <span class="skill-bar"></span>
                <span class={`fill-bar ${CurrentSection === 'Skill' ? 'reactnative' : ''}`}></span>
              </div>
              <div class="skill">
                <h3>MongoDB</h3>
                <h4>50%</h4>
                <span class="skill-bar"></span>
                <span class={`fill-bar ${CurrentSection === 'Skill' ? 'mongodb' : ''}`}></span>
              </div>
              <div class="skill">
                <h3>AWS - EC2</h3>
                <h4>50%</h4>
                <span class="skill-bar"></span>
                <span class={`fill-bar ${CurrentSection === 'Skill' ? 'mongodb' : ''}`}></span>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
