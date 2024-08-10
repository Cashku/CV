import "./body.css";
function Body() {
  return (
    <div className="eksperienc">
      {/* <!-- Education Section --> */}
      <h2>Education</h2>
      <h3>University of Tirana</h3>
      <p>Bachelor of Science in Computer Science,</p>

      {/* <!-- Work Experience Section --> */}
      <h2>Work Experience</h2>
      <h3>Example Company</h3>
      <p>Web Developer, 2019 - Present</p>
      <ul>
        <li>
          Developed and maintained the company website using HTML, CSS, and
          JavaScript.
        </li>
        <li>
          Collaborated with the design team to create a user-friendly interface.
        </li>
        <li>
          Improved website performance and optimized code for better SEO
          rankings.
        </li>
      </ul>

      {/* <!-- Skills Section --> */}
      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Git</li>
        <li>SQL</li>
      </ul>
    </div>
  );
}

export default Body;
