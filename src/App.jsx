import React, { useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  Menu,
  X,
  Code2,
  Database,
  Layers3,
  MonitorSmartphone,
  ExternalLink
} from "lucide-react";

// ==============================
// SKILLS
// ==============================

const skills = [
  {
    name: "HTML5",
    level: "Frontend",
    icon: MonitorSmartphone
  },
  {
    name: "CSS3",
    level: "Frontend",
    icon: Code2
  },
  {
    name: "JavaScript",
    level: "Frontend",
    icon: Code2
  },
  {
    name: "Bootstrap",
    level: "UI",
    icon: Layers3
  },
  {
    name: "Python",
    level: "Backend",
    icon: Code2
  },
  {
    name: "Django",
    level: "Backend",
    icon: Layers3
  },
  {
    name: "MySQL / SQL",
    level: "Database",
    icon: Database
  },
  {
    name: "React.js",
    level: "Frontend",
    icon: Code2
  }
];

// ==============================
// PROJECT
// ==============================

const projects = [
  {
    title: "Ask Expert",
    tag: "Full Stack Q&A Platform",

    description:
      "A role-based Q&A platform connecting users with domain experts across different categories. The system includes secure authentication, expert discovery, personal chat, question history, and database-driven functionality.",

    stack: [
      "Python",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "HTML5",
      "CSS3"
    ],

    featured: true
  }
];

// ==============================
// APP
// ==============================

function App() {
  const [open, setOpen] = useState(false);

  // Smooth scrolling
  const go = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth"
      });

    setOpen(false);
  };

  return (
    <div className="app">

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="navbar">

        <div className="container nav-inner">

          {/* Logo */}

          <button
            className="brand"
            onClick={() => go("home")}
          >
            <span className="brand-mark">
              S
            </span>

            <span>
              Swetha
              <span className="accent"> M</span>
            </span>
          </button>


          {/* Navigation */}

          <nav
            className={
              open
                ? "nav-links open"
                : "nav-links"
            }
          >

            {[
              "home",
              "about",
              "skills",
              "projects",
              "experience",
              "education",
              "contact"
            ].map((item) => (

              <button
                key={item}
                onClick={() => go(item)}
              >
                {item
                  .charAt(0)
                  .toUpperCase() +
                  item.slice(1)}
              </button>

            ))}


            {/* Resume */}

            <a
              className="nav-resume"
              href="/Swetha M - Full Stack Developer Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
              <ExternalLink size={15} />
            </a>

          </nav>


          {/* Mobile menu */}

          <button
            className="menu-btn"
            onClick={() =>
              setOpen(!open)
            }
            aria-label="Toggle menu"
          >

            {open ? (
              <X />
            ) : (
              <Menu />
            )}

          </button>

        </div>

      </header>


      <main>

        {/* =========================
            HOME
        ========================= */}

        <section
          id="home"
          className="hero"
        >

          <div className="hero-grid container">

            <div className="hero-copy">

              <p className="eyebrow">
                MCA GRADUATE · FULL STACK DEVELOPER
              </p>


              <h1>

                Building clean, useful &{" "}

                <span className="gradient-text">
                  database-driven
                </span>{" "}

                web experiences.

              </h1>


              <p className="hero-text">

                I’m Swetha M, an MCA graduate
                with practical full-stack
                development experience through
                my internship at Techvolt Software.
                I enjoy building responsive,
                database-driven web applications
                using frontend and backend
                technologies.

              </p>


              {/* Buttons */}

              <div className="hero-actions">

                <button
                  className="btn primary"
                  onClick={() =>
                    go("projects")
                  }
                >
                  View Project
                  <ArrowUpRight size={18} />
                </button>


                <button
                  className="btn secondary"
                  onClick={() =>
                    go("contact")
                  }
                >
                  Contact Me
                  <Mail size={18} />
                </button>

              </div>


              {/* Social links */}

              <div className="social-row">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={19} />
                  GitHub
                </a>


                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={19} />
                  LinkedIn
                </a>


                <a
                  href="https://www.naukri.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Naukri
                </a>

              </div>

            </div>


            {/* Profile Card */}

            <div className="hero-card-wrap">

              <div className="glow"></div>


              <div className="profile-card">

                <div className="profile-top">

                  <span className="status-dot"></span>

                  Available for opportunities

                </div>


                <div className="avatar">
                  SM
                </div>


                <h2>
                  Swetha M
                </h2>


                <p>
                  Full Stack Developer
                </p>


                <div className="mini-stats">

                  <div>
                    <strong>
                      MCA
                    </strong>

                    <span>
                      2024–2026
                    </span>
                  </div>


                  <div>
                    <strong>
                      8.88
                    </strong>

                    <span>
                      CGPA / 10
                    </span>
                  </div>


                  <div>
                    <strong>
                      1
                    </strong>

                    <span>
                      Project
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>


          <div className="scroll-cue">

            SCROLL TO EXPLORE

            <span>
              ↓
            </span>

          </div>

        </section>


        {/* =========================
            ABOUT
        ========================= */}

        <section
          id="about"
          className="section"
        >

          <div className="container two-col">

            <div>

              <p className="section-label">
                01 / ABOUT
              </p>


              <h2>
                Curious developer,
                practical builder.
              </h2>

            </div>


            <div className="section-content">

              <p>

                I’m an MCA graduate focused
                on full-stack web development.
                During my internship at
                Techvolt Software, I worked
                on <strong>Ask Expert</strong>,
                a role-based Q&A platform
                connecting users with domain
                experts.

              </p>


              <p>

                My technical skills include
                HTML, CSS, JavaScript,
                Bootstrap, Python, SQL/MySQL,
                Django and React.js. I’m
                interested in building
                responsive, secure and
                user-friendly applications.

              </p>

            </div>

          </div>

        </section>


        {/* =========================
            SKILLS
        ========================= */}

        <section
          id="skills"
          className="section section-dark"
        >

          <div className="container">

            <div className="section-heading">

              <div>

                <p className="section-label">
                  02 / SKILLS
                </p>

                <h2>
                  My technical toolkit.
                </h2>

              </div>


              <p>

                Technologies I use to
                design interfaces, build
                application logic and work
                with databases.

              </p>

            </div>


            <div className="skills-grid">

              {skills.map(
                ({
                  name,
                  level,
                  icon: Icon
                }) => (

                  <div
                    className="skill-card"
                    key={name}
                  >

                    <div className="skill-icon">

                      <Icon size={21} />

                    </div>


                    <div>

                      <h3>
                        {name}
                      </h3>

                      <span>
                        {level}
                      </span>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </section>


        {/* =========================
            PROJECT
        ========================= */}

        <section
          id="projects"
          className="section project-section"
        >
          <div className="container">

            <div className="project-header">
              <div>
                <p className="section-label">03 / PROJECT</p>
                <h2>Featured Project</h2>
              </div>

              <div className="project-index">01</div>
            </div>

            <div className="project-container">

              <div className="project-intro">
                <span className="project-category">
                  FULL STACK WEB APPLICATION
                </span>

                <h3>Ask Expert</h3>

                <p className="project-short-title">
                  Integrated Knowledge &amp; Expert Support System
                </p>

                <p className="project-description">
                  A role-based Q&amp;A platform that connects users with
                  domain experts across different categories. The application
                  provides authentication, expert discovery, question
                  management, personal chat and question history.
                </p>

                <div className="project-technologies">
                  <p className="technology-title">Technologies</p>

                  <div className="technology-list">
                    <span>Python</span>
                    <span>MySQL</span>
                    <span>JavaScript</span>
                    <span>Bootstrap</span>
                    <span>HTML5</span>
                    <span>CSS3</span>
                  </div>
                </div>
              </div>

              <div className="project-details">

                <div className="project-detail-block">
                  <span className="detail-number">01</span>
                  <div>
                    <h4>Project Overview</h4>
                    <p>
                      A platform where users can ask questions and discover
                      experts based on different categories.
                    </p>
                  </div>
                </div>

                <div className="project-detail-block">
                  <span className="detail-number">02</span>
                  <div>
                    <h4>Role-Based Access</h4>
                    <p>
                      Different user roles have controlled access to the
                      platform functionality.
                    </p>
                  </div>
                </div>

                <div className="project-detail-block">
                  <span className="detail-number">03</span>
                  <div>
                    <h4>Expert Discovery</h4>
                    <p>
                      Users can discover experts according to their required
                      category.
                    </p>
                  </div>
                </div>

                <div className="project-detail-block">
                  <span className="detail-number">04</span>
                  <div>
                    <h4>Question History</h4>
                    <p>
                      Users can view and manage their previous questions and
                      interactions.
                    </p>
                  </div>
                </div>

                <div className="project-detail-block">
                  <span className="detail-number">05</span>
                  <div>
                    <h4>Personal Chat</h4>
                    <p>
                      Users can communicate directly with experts through
                      personal chat.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="project-bottom">
              <div>
                <span>PROJECT TYPE</span>
                <strong>Full Stack Web Application</strong>
              </div>

              <div>
                <span>ROLE</span>
                <strong>Full Stack Developer</strong>
              </div>

              <div>
                <span>PROJECT</span>
                <strong>Ask Expert</strong>
              </div>
            </div>

          </div>
        </section>

        {/* =========================
            EXPERIENCE
        ========================= */}

        <section
          id="experience"
          className="section section-soft"
        >

          <div className="container two-col">

            <div>

              <p className="section-label">
                04 / EXPERIENCE
              </p>


              <h2>
                Hands-on development
                experience.
              </h2>

            </div>


            <div className="timeline">

              <div className="timeline-item">

                <span className="timeline-dot"></span>


                <p className="period">
                  FEB 2026 — JUL 2026
                </p>


                <h3>
                  Full Stack Developer Intern
                </h3>


                <h4>
                  Techvolt Software Pvt Ltd
                  · Coimbatore
                </h4>


                <p>

                  Worked on the Ask Expert
                  platform, implementing
                  role-based access, Q&A
                  workflows, expert discovery,
                  personal chat, question
                  history and responsive
                  frontend components.

                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            EDUCATION
        ========================= */}

        <section
          id="education"
          className="section"
        >

          <div className="container">

            <p className="section-label">
              05 / EDUCATION
            </p>


            <h2>
              Academic background.
            </h2>


            <div className="education-list">

              {/* MCA */}

              <div className="education-card">

                <div>

                  <span className="edu-year">
                    2024 — 2026
                  </span>


                  <h3>
                    Master of Computer
                    Applications (MCA)
                  </h3>


                  <p>
                    Karpagam Academy Of
                    Higher Education
                  </p>

                </div>


                <strong>
                  8.88 / 10
                </strong>

              </div>


              {/* B.Com */}

              <div className="education-card">

                <div>

                  <span className="edu-year">
                    2021 — 2024
                  </span>


                  <h3>
                    Bachelor of Commerce
                    (B.Com)
                  </h3>


                  <p>
                    Kongu Arts And Science
                    College (Autonomous)
                  </p>

                </div>


                <strong>
                  7.56 / 10
                </strong>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            RESUME
        ========================= */}

        <section
          id="resume"
          className="section resume-section"
        >

          <div className="container resume-box">

            <div>

              <p className="section-label">
                06 / RESUME
              </p>


              <h2>
                Want the complete profile?
              </h2>


              <p>

                Open my resume for education,
                internship experience, project
                details and skills.

              </p>

            </div>


            <a
              className="btn primary"
              href="/Swetha M - Full Stack Developer Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >

              Open Resume

              <Download size={18} />

            </a>

          </div>

        </section>


        {/* =========================
            CONTACT
        ========================= */}

        <section
          id="contact"
          className="section contact-section"
        >

          <div className="container contact-grid">

            <div>

              <p className="section-label">
                07 / CONTACT
              </p>


              <h2>
                Let’s build something
                useful.
              </h2>


              <p className="contact-copy">

                I’m open to Full Stack
                Developer and related
                software development
                opportunities.

              </p>

            </div>


            <div className="contact-details">

              {/* Email */}

              <a
                href="mailto:swethakavi30@gmail.com"
              >

                <Mail />

                <span>

                  <small>
                    Email
                  </small>

                  swethakavi30@gmail.com

                </span>

              </a>


              {/* Phone */}

              <a
                href="tel:+919361642850"
              >

                <Phone />

                <span>

                  <small>
                    Phone
                  </small>

                  +91 9361642850

                </span>

              </a>


              {/* Location */}

              <div>

                <MapPin />

                <span>

                  <small>
                    Location
                  </small>

                  Udumalpet, Tamil Nadu

                </span>

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <footer>

        <div className="container footer-inner">

          <span>
            © 2026 Swetha M
          </span>


          <span>
            MCA Graduate · Full Stack Developer
          </span>


          <div>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>


            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;