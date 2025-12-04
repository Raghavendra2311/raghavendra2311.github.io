const { useEffect, useMemo, useState } = React;

const resumeLink = "https://drive.google.com/file/d/18e__uMXvaIeGiYbPmK8Gj64ZrFNTJo0U/view?usp=sharing";

const experiences = [
  {
    role: "Data Scientist",
    company: "Illinois State Water Survey",
    location: "Champaign, IL",
    period: "May 2024 - Present",
    achievements: [
      "Built correlation-led EDA on 100k+ observations to surface predictive signals for hydrological planning.",
      "Optimized data pipelines and feature engineering to increase model throughput for research partners.",
    ],
    logo: "images/isws.png",
  },
  {
    role: "Data Engineering Intern",
    company: "RobIN Automotives",
    location: "Remote",
    period: "May 2023 - Aug 2023",
    achievements: [
      "Delivered ETL automation for vehicle telemetry using Python, SQL, and dbt-inspired transformations.",
      "Shipped dashboards that translated battery health metrics into actionable engineering decisions.",
    ],
    logo: "images/robin.png",
  },
  {
    role: "Software Development Intern",
    company: "UST",
    location: "Pune, India",
    period: "Jun 2022 - Aug 2022",
    achievements: [
      "Automated regression scenarios that cut manual QA effort by 70% and improved release cadence.",
      "Collaborated with product teams to instrument telemetry and error budgets for key services.",
    ],
    logo: "images/ust.png",
  },
];

const educations = [
  {
    school: "University of Illinois at Urbana-Champaign",
    program: "M.S. in Information Management (4.0/4.0)",
    timeline: "Expected May 2025",
    details: "Data Warehousing & BI, Information Modeling, Consulting, Methods of Data Science",
    logo: "images/uiuc-logo.png",
  },
  {
    school: "Pune Institute of Computer Technology",
    program: "B.E. in Electronics Engineering, Honors in AI & ML (3.9/4.0)",
    timeline: "Graduated Jul 2023",
    details: "OOP, Databases, Data Structures, Machine Learning & AI",
    logo: "images/sppu-logo.png",
  },
];

const skills = [
  {
    title: "AI & Data Science",
    items: ["Python", "R", "SAS", "PyTorch", "scikit-learn", "TensorFlow"],
  },
  {
    title: "Data Platforms",
    items: ["SQL", "dbt", "Airflow", "Kafka", "Docker", "GitHub"],
  },
  {
    title: "Cloud & Analytics",
    items: ["AWS (S3, Glue, Lambda, Redshift, Athena, SageMaker)", "Azure (Synapse, Databricks, Data Factory)", "Power BI", "Tableau", "Grafana"],
  },
  {
    title: "Product & Delivery",
    items: ["Experimentation", "Observability", "Storytelling", "Stakeholder alignment"],
  },
];

const achievements = [
  {
    title: "Road Safety Hackathon – IIT Delhi",
    year: "2022",
    detail: "Built AI-powered safety layers for two-wheelers; placed second runner-up with Ministry of Road Transport & Highways.",
    icon: "images/trophy1.png",
  },
  {
    title: "Patent: Shape-Changing Smart Helmet",
    year: "2024",
    detail: "Invented adaptive helmet system with advanced safety automation for riders; patent filed and awarded.",
    icon: "images/trophy2.jpeg",
  },
  {
    title: "Vision Safety Hackathon – IIT Bombay",
    year: "2022",
    detail: "First runner-up for computer-vision driven proactive road-safety assist platform.",
    icon: "images/trophy3.png",
  },
];

const projects = [
  {
    title: "Dynamic Pricing for Freight",
    blurb: "Stochastic gradient descent regression to capture seasonality and boost revenue by $1.2M.",
    tags: ["AI/ML", "Forecasting"],
    image: "images/project3.jpg",
    link: "#",
  },
  {
    title: "Amazon Customer Reviews ETL",
    blurb: "Serverless ETL with AWS Glue, Lambda, and Redshift to analyze sentiment at scale.",
    tags: ["Data Engineering", "AWS"],
    image: "images/project1.jpg",
    link: "#",
  },
  {
    title: "Equity Market Intelligence",
    blurb: "Batch + streaming pipeline feeding an interactive dashboard for equity research teams.",
    tags: ["Analytics", "Visualization"],
    image: "images/project2.jpg",
    link: "#",
  },
  {
    title: "Telemetry Reliability Suite",
    blurb: "Observability toolkit to monitor model drift and data freshness with alerting SLAs.",
    tags: ["MLOps", "Reliability"],
    image: "images/project2.jpg",
    link: "#",
  },
];

const socials = [
  { icon: "fa-brands fa-linkedin-in", url: "https://www.linkedin.com/in/raghavendra2311/", label: "LinkedIn" },
  { icon: "fa-brands fa-github", url: "https://github.com/Raghavendra2311", label: "GitHub" },
  { icon: "fa-solid fa-envelope", url: "mailto:raghavkharosekar@gmail.com", label: "Email" },
];

const navLinks = [
  { label: "About", href: "about" },
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "Contact", href: "contact" },
];

const stats = [
  { label: "Projects shipped", value: "24+" },
  { label: "Hackathon podiums", value: "3" },
  { label: "Stakeholders served", value: "15+" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="topbar">
      <div className="topbar__brand" onClick={() => handleNavClick("hero")}>Raghav Kharosekar</div>
      <nav className={`topbar__nav ${isOpen ? "topbar__nav--open" : ""}`}>
        {navLinks.map((link) => (
          <button key={link.href} onClick={() => handleNavClick(link.href)}>
            {link.label}
          </button>
        ))}
        <a className="pill" href={resumeLink} target="_blank" rel="noreferrer">
          Resume
        </a>
      </nav>
      <button className="topbar__toggle" onClick={() => setIsOpen((v) => !v)} aria-label="Toggle navigation">
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <p className="eyebrow">Data Science · AI · Platforms</p>
        <h1>
          <span className="accent">Raghav</span> crafts human-centered, intelligent systems that translate messy data into decisive outcomes.
        </h1>
        <p className="lede">
          I build AI-led experiences, automate insights, and ship cloud-native analytics for teams that need reliability and speed without sacrificing polish.
        </p>
        <div className="hero__cta">
          <a className="button" href="https://github.com/Raghavendra2311" target="_blank" rel="noreferrer">
            Explore GitHub
          </a>
          <a className="button button--ghost" href={resumeLink} target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </div>
        <div className="hero__badges">
          <div className="badge">AI-first roadmaps</div>
          <div className="badge">End-to-end delivery</div>
          <div className="badge">Operational excellence</div>
        </div>
        <div className="hero__socials">
          {socials.map((social) => (
            <a key={social.url} href={social.url} target="_blank" rel="noreferrer" aria-label={social.label}>
              <i className={social.icon} />
            </a>
          ))}
        </div>
        <div className="hero__stats">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className="stat__value">{stat.value}</div>
              <div className="stat__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero__profile">
        <div className="profile-card">
          <div className="profile-card__image" style={{ backgroundImage: "url('IMG_2345 2.JPG')" }} />
          <div className="profile-card__body">
            <p className="eyebrow">Currently</p>
            <h3>Data Scientist @ ISWS</h3>
            <p>Building analytics that safeguard water resources and accelerate scientific decisions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section__header">
        <p className="eyebrow">Trajectory</p>
        <h2>Impact in motion</h2>
        <p className="lede">Blending research rigor, engineering craft, and stakeholder empathy.</p>
      </div>
      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.company} className="timeline__item">
            <div className="timeline__meta">
              <img src={exp.logo} alt={`${exp.company} logo`} />
              <div>
                <p className="eyebrow">{exp.period}</p>
                <h3>{exp.role}</h3>
                <p className="subdued">{exp.company} · {exp.location}</p>
              </div>
            </div>
            <ul>
              {exp.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section section--grid">
      <div className="section__header">
        <p className="eyebrow">Foundations</p>
        <h2>Education</h2>
      </div>
      <div className="cards">
        {educations.map((edu) => (
          <article className="card" key={edu.school}>
            <div className="card__header">
              <img src={edu.logo} alt={`${edu.school} logo`} />
              <div>
                <h3>{edu.school}</h3>
                <p className="subdued">{edu.program}</p>
                <p className="eyebrow">{edu.timeline}</p>
              </div>
            </div>
            <p className="subdued">{edu.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section__header">
        <p className="eyebrow">Toolkit</p>
        <h2>Skills that ship</h2>
      </div>
      <div className="cards cards--skills">
        {skills.map((group) => (
          <article className="card card--skill" key={group.title}>
            <div className="card__title-row">
              <h3>{group.title}</h3>
            </div>
            <div className="chips">
              {group.items.map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");

  const filters = useMemo(() => ["All", "AI/ML", "Data Engineering", "Analytics", "MLOps", "Visualization", "AWS", "Forecasting", "Reliability"], []);

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.tags.some((tag) => tag === filter));
  }, [filter]);

  return (
    <section id="projects" className="section">
      <div className="section__header">
        <p className="eyebrow">Selected Work</p>
        <h2>Projects & Products</h2>
        <p className="lede">High-signal builds across pricing, observability, ETL, and visualization.</p>
      </div>
      <div className="filters">
        {filters.map((item) => (
          <button key={item} className={filter === item ? "pill pill--active" : "pill"} onClick={() => setFilter(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="cards cards--projects">
        {filteredProjects.map((project) => (
          <article className="card card--project" key={project.title}>
            <div className="card__image" style={{ backgroundImage: `url(${project.image})` }} />
            <div className="card__body">
              <h3>{project.title}</h3>
              <p className="subdued">{project.blurb}</p>
              <div className="chips">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="section section--grid">
      <div className="section__header">
        <p className="eyebrow">Highlights</p>
        <h2>Awards & Recognition</h2>
      </div>
      <div className="cards cards--achievements">
        {achievements.map((item) => (
          <article className="card card--achievement" key={item.title}>
            <div className="card__header">
              <img src={item.icon} alt="Trophy" />
              <div>
                <p className="eyebrow">{item.year}</p>
                <h3>{item.title}</h3>
              </div>
            </div>
            <p className="subdued">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section section--grid">
      <div className="section__header">
        <p className="eyebrow">About</p>
        <h2>Crunching numbers, dropping insights</h2>
        <p className="lede">I engineer data products that pair measurable impact with delightful execution.</p>
      </div>
      <div className="about">
        <div className="about__text">
          <p>
            From founding member at RobIN Automotives to leading automation at UST Global and now tackling environmental analytics at ISWS, I blend experimentation, platform thinking, and pragmatic delivery.
          </p>
          <p>
            I thrive where AI, cloud, and storytelling converge to unlock new value. Whether designing resilient pipelines, building predictive models, or guiding stakeholders through insights, I bring focus, clarity, and momentum.
          </p>
          <div className="hero__badges">
            <div className="badge">Hackathon winner ×2</div>
            <div className="badge">Patent holder</div>
            <div className="badge">4.0 GPA at UIUC</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    fetch("https://formspree.io/f/mdknrjpl", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(() => {
        alert("Thanks for reaching out! I'll respond shortly.");
        form.reset();
      })
      .catch(() => {
        alert("Hmm, there was an issue submitting the form. Please email me directly.");
      });
  };

  return (
    <section id="contact" className="section">
      <div className="section__header">
        <p className="eyebrow">Let’s talk</p>
        <h2>Ready to build together?</h2>
      </div>
      <div className="contact">
        <form className="contact__form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" type="text" required />
          </label>
          <label>
            Email
            <input name="email" type="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" required />
          </label>
          <button type="submit" className="button">Send message</button>
        </form>
        <div className="contact__links">
          {socials.map((social) => (
            <a key={social.url} href={social.url} target="_blank" rel="noreferrer" className="pill pill--ghost">
              <i className={social.icon} /> {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Raghavendra Kharosekar. Built with React.</p>
      <div className="footer__links">
        <a href={resumeLink} target="_blank" rel="noreferrer">Resume</a>
        <a href="https://github.com/Raghavendra2311" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:raghavkharosekar@gmail.com">Email</a>
      </div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    const onResize = () => document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
