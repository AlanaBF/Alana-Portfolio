import "./about.css"
function About() {
  return (
    <div >
      <div className="aboutMeCard">
        <h2 className="aboutMeHeader">About Me</h2>
            <h5 className="aboutMeText">
              Former Teacher turned Front End Developer, always learning and
              seeking new knowledge and skills. Very excited to bring highly
              transferable and relevant skillset into the Tech Sector. I value a
              simple and clean approach and don’t like to over complicate tasks.
              A leader, mentor, effective planner and implementor of
              organization strategies to balance day to day teaching
              requirements alongside extra curricular activities.
            </h5>
            <h2 className="skills">Skills</h2>
            <h5 className="aboutMeSkills">
              Programming: HTML, CSS, JavaScript 
              <br/>Frameworks: React.js, Node.js,
              Bootstrap 
              <br/> 
              Methodologies: Agile, Scrum, Kanban 
              <br/>
              Other: Git, Api’s
            </h5>
          </div>
      </div>
    
  );
}

export default About;
