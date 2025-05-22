export default function About({ ref }) {
 
 
 
  return (
    <div ref={ref} className="AboutSection">
      <div className="aboutDiscriptionDiv">
        <h2>

          <h3 className="globalColor">I'm Wasi ulla Sharief.</h3>
          &nbsp;A Software Engineer
          with around 4 years of experience, currently working at <h3 className="globalColor"><a href="https://www.synechron.com/en-in" target={"_blank"}>Synechron</a></h3>. 
          <br></br>I specialize in Building  and Testing scalable Web applications, Apps, API Services,
          combining strong skills with a solid foundation in Test
          Automation. My expertise includes developing Automation frameworks
          from scratch, Developing Websites and integrating customized AI chatbots into websites
          for enhanced user interaction. I'm certified in Automation Testing, Full Stack Development
          (JavaScript & React), SDET practices, AI Prompt Engineering, and CI/CD 
          integrations using Jenkins. Focused on delivering high-quality software to the Team / Company I work for and
          constantly exploring new Technologies..
        </h2>
      </div>
      <div className="aboutTable">
      <div className="Label-Info">
            <h2>Education: </h2>
            <h3>Bachelor of Computer Applications (BCA - 2019) </h3>
      </div>
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
    </div>
  );
}
