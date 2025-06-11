export default function Work({ ref }) {
  return (
    <div ref={ref} className="WorkSectionDiv">
      <div className="workMaindiv">
        <div className="company">
          <div className="companyduration">

            <div className="companylabeldiv">
              <h1><a href="https://www.synechron.com/en-in" target={"_blank"}>Synechron (2021 - Present)</a></h1>
            </div>

            <div className="WorkDetails">
              <h2 className="defaultcolor">
                As SDET (Software Development Engineer in Test)
              </h2>

              <div className="listdiv">
                <ul className="worklist">
                  <li>
                    <h3>
                      Had found multiple Major bugs in production post joining the team and Developed BDD framework from scratch following company standards and wrote 200+ Automation scripts increasing Automation coverage to 50%.
                    </h3>
                  </li>
                  <li>
                    <h3>Automated Regression testing Suite and executed through Jenkins Job which reduced release testing time from 6 Days to 4 Days, reduced 30% time and increased team velocity.</h3>
                  </li>
                  <li>
                    <h3>Had worked on Reducing Jenkins Job Regression execution time by 40% from 2.5Hrs to 1.5Hr using parallel execution with Maven, TestNG & Selenum Grid.</h3>
                  </li>
                  <li>
                    <h3>Maintained Great Rapport with Clients and Stake Holders, Hosted Scrum calls in multiple occasions and as a Module lead completed multiple releases and provided documented QA signoffs for both BAU and Non-BAU releases</h3>
                  </li>
                  <li>
                    <h3>Used Excel with VB Scripts for Test Data conditioning and reducing time taken for 1 test data from 5minutes to 30Seconds. </h3>
                  </li>
                </ul>
              </div>
              <h2 className="defaultcolor">
                As SDE (Software Development Engineer)
              </h2>

              <ul className="worklist">
                  <li>
                    <h3>
                    As an SDE & SDET, I bridged the technical gap between Development and QA by providing the QA team with in-depth insights into software applications, ensuring high-quality software delivery from the development team to clients.
                      </h3>
                  </li>
                  <li>
                    <h3>
                    Developed high-quality, responsive, and reusable components from designs and wireframes using React.js, enabling cross-platform consistency and reducing bounce rate by 20%.
                      </h3>
                  </li>
                  <li>
                    <h3>
                    Replaced Redux with React Context API to streamline state management, resulting in a 25% reduction in bundle size and a 30% improvement in component render efficiency across key modules.
                      </h3>
                  </li>
                  <li>
                    <h3>
                    Reduced application downtime by 25% during sprints by integrating mocked APIs to replace dependent real APIs during outages, enabling more consistent and uninterrupted delivery.
                    </h3>
                  </li>
                  <li>
                    <h3>
                    Implemented JWT-based authentication in server APIs, replacing traditional tokens and cookies, which enhanced API security and reduced unauthorized access incidents by 30%
                      </h3>
                  </li>
                  </ul>
            </div>

            
          </div>
          <div className="companyduration">
            <div className="companylabeldiv">
              <h1 className="Company2" ><a href="https://www.linkedin.com/company/moosa-socmedia/?originalSubdomain=inn" target={"_blank"}>Moosa Socmedia (2019 - 2020)</a></h1>
            </div>

            <div className="WorkDetails">
              <h2 className="defaultcolor Company2-role">
                As SDET Intern (Software Development Engineer in Test)
              </h2>

              <div className="listdiv">
                <ul className="worklist">
                  <li>
                    <h3>
                    Identified and reported critical bugs, enhancing product stability and quality during the testing lifecycle.</h3>
                  </li>
                  <li>
                    <h3>
                    Developed and maintained automation test scripts, contributing to multiple frameworks including Hybrid, BDD, and Data-Driven frameworks.</h3>
                  </li>
                  </ul>
                  </div>
                  </div>
                
              </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
