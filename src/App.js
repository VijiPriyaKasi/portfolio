import './App.css';

function App() {
  return (
    <div className="App">

      {/* Navbar */}
      <nav className="navbar">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
        
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Viji Priya Kasi</h1>
        <h2>Software Engineer</h2>

        <p>
          1.8 Years Experience in Industrial IoT, MES and SCADA
          Application Development
        </p>

        <a
          href="mailto:vijipriyakasi2002@gmail.com"
          className="btn"
        >
          Contact Me
        </a>
      </header>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          Software Engineer with 1.8 years of experience in Industrial IoT,
          MES and SCADA application development using Ignition.
          Experienced in Python, SQL, Java, Spring Boot, C# and .NET.
          Passionate about building scalable software solutions and
          learning new technologies.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="card-container">
          <div className="card">
            <h3>Programming Languages</h3>
            <p>Java, Python, C#, JavaScript, SQL</p>
          </div>

          <div className="card">
            <h3>Frameworks</h3>
            <p>Spring Boot, ASP.NET, MVC, J2EE</p>
          </div>

          <div className="card">
            <h3>Databases</h3>
            <p>PostgreSQL, SQL Server</p>
          </div>

          <div className="card">
            <h3>Tools</h3>
            <p>Ignition SCADA, Postman, VS Code, IntelliJ IDEA</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <h2>Experience</h2>

        <div className="card">
          <h3>Software Engineer - Capgemini</h3>

          <ul>
            <li>Developed MES and SCADA applications using Ignition.</li>
            <li>Designed Ignition Perspective screens.</li>
            <li>Developed application logic using Python and SQL.</li>
            <li>Supported testing, deployment and client requirements.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="card">
          <h3>Hotel Booking System</h3>

          <p>
            Developed a Hotel Booking System using ASP.NET Core MVC,
            Web API, Entity Framework Core and SQL Server.
          </p>

          <p>
            Implemented User, Hotel, Room and Reservation modules with
            authentication and authorization.
          </p>
        </div>
      </section>

      {/* Certifications */}
    <section id="certifications" className="section">
      <h2>Certifications</h2>

    <div className="card-container">

    <div className="card">
      <a
        href="/certificates/SpringBoot.jpg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>Spring Boot</h3>
      </a>
    </div>

    <div className="card">
      <a
        href="/certificates/Python.jpg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>Python Bootcamp</h3>
      </a>
    </div>

    <div className="card">
      <a
        href="/certificates/SQL.jpg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>SQL Bootcamp</h3>
      </a>
    </div>

    <div className="card">
      <a
        href="/certificates/React.jpg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>React JS</h3>
      </a>
    </div>

    <div className="card">
      <a
        href="/certificates/Neo4j.jpg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>Neo4j</h3>
      </a>
    </div>

    <div className="card">
      <a
        href="/certificates/Software Testing.jpg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>Software Testing Bootcamp</h3>
      </a>
    </div>

    <div className="card">
      <a
        href="/certificates/Cloud Computing.jpg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>Cloud Computing</h3>
      </a>
    </div>

  </div>
</section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>

        <p>Email: vijipriyakasi2002@gmail.com</p>
        <p>Location: Coimbatore, Tamil Nadu</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Viji Priya Kasi. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;