const { useEffect, useMemo, useState } = React;

const resumeLink = "https://drive.google.com/file/d/11DFh-LI5Gq0OtqQ6MszgsHQkCAEo5N_o/view?usp=share_link";

const experiences = [
  {
    role: "Data Analytics Engineer",
    company: "Illinois State Water Survey",
    location: "Champaign, IL",
    period: "May 2024 - Present",
    achievements: [
      "Consolidated 25+ years of daily water data across 42+ parameters with data-quality controls for reliable cross-station comparisons.",
      "Built a scalable Python (Pandas, NumPy) time-series pipeline for 1.7M+ rows with ingestion, validation, and interpolation.",
      "Designed a reusable SQL framework over 600M+ records to generate trend analytics and KPI scorecards for 30+ stations.",
    ],
    logo: "images/isws.png",
  },
  {
    role: "Data Analyst",
    company: "Polygon Health Analytics",
    location: "Philadelphia, PA",
    period: "Jun 2025 - Aug 2025",
    achievements: [
      "Automated an AWS Glue (PySpark) pipeline to standardize text data with NLP mapping and maintain <24-hour freshness in S3.",
      "Engineered incremental loads into Amazon RDS (PostgreSQL) with de-duplication for clean test-vs-control reporting.",
      "Built six React dashboards, cutting time-to-insight from days to minutes for 100+ researchers.",
    ],
    logo: "images/robin.png",
  },
  {
    role: "Project Manager",
    company: "iSchool Experiential Learning - Marketing Analytics",
    location: "Champaign, IL",
    period: "Jan 2024 - May 2024",
    achievements: [
      "Conducted an in-depth market analysis of digital wellness and health technologies for athletes, identifying three high-growth segments.",
      "Led a cross-functional team to build a strategic roadmap covering pricing, product-market fit, partnerships, and marketing analytics.",
      "Enabled a projected 70%+ ROI increase and achieved a 25% faster time-to-market through alignment with consumer trends.",
    ],
    logo: "images/uiuc-logo.png",
  },
  {
    role: "Data Analyst Intern",
    company: "RobIN Automotives",
    location: "Pune, India",
    period: "Nov 2021 - Apr 2022",
    achievements: [
      "Collaborated on 54 ECU parameters and built a Python ingestion + preprocessing pipeline, improving ML readiness by 60%.",
      "Trained a TensorFlow neural network for drive-range estimation, improving accuracy by 40%.",
      "Published KPI dashboards in Python Matplotlib segmented by battery type and usage profiles to guide testing.",
    ],
    logo: "images/robin.png",
  },
];

const educations = [
  {
    school: "University of Illinois Urbana-Champaign",
    program: "M.S. in Information Management (GPA 4.0/4.0)",
    timeline: "May 2025",
    details: "Data Warehousing & Business Intelligence, Information Modeling, Machine Learning Cloud, Data Science, Statistical Modeling, Applied Business Research",
    logo: "images/uiuc-logo.png",
  },
  {
    school: "Pune Institute of Computer Technology",
    program: "B.E. in Electronics and Telecommunications (GPA 3.9/4.0)",
    timeline: "Jul 2023",
    details: "Object Oriented Programming, Data Structures, Database Management, Mathematics Skills",
    logo: "images/sppu-logo.png",
  },
];

const skills = [
  {
    title: "Programming & Analytics",
    items: ["Python (Pandas, NumPy, Matplotlib, Seaborn, scikit-learn)", "R", "SQL", "PySpark", "C++"],
  },
  {
    title: "Business Intelligence",
    items: ["Microsoft Power BI", "Tableau", "SAP Business Objects", "MS Office"],
  },
  {
    title: "Cloud & Data Platforms",
    items: ["AWS (Glue, Databricks, S3, RDS, Athena)", "Google Cloud (GCS, Dataproc, BigQuery, Composer)", "MongoDB", "GitHub"],
  },
  {
    title: "Analytics & Statistics",
    items: ["A/B Testing", "Hypothesis Testing", "Confidence Intervals", "Feature Importance", "Experimental Design"],
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
    title: "Financial Market ETL and Dashboard",
    blurb: "Engineered three ETL pipelines for 3M+ rows and 13,000+ assets with AWS Lambda + RDS, plus Power BI dashboards for trend and predictive insights.",
    tags: ["AWS", "Data Engineering", "Visualization"],
    image: "images/FinancialETL.png",
    link: "#",
  },
  {
    title: "Hospital Operations Dashboard and ETL",
    blurb: "Built a Looker Studio dashboard for 1,200+ facilities and a BigQuery ETL that transforms 2M+ daily HHS records for benchmarking.",
    tags: ["Google Cloud", "Analytics", "BI"],
    image: "images/HospitalETL.png",
    link: "#",
  },
  {
    title: "Diabetes Readmission Risk Prediction",
    blurb: "Deployed PySpark ETL on Dataproc for 100k+ records and built a 78% accuracy classifier for 30-day readmission risk.",
    tags: ["Google Cloud", "Analytics", "Data Engineering"],
    image: "images/DiabetesPred.png",
    link: "#",
  },
  {
    title: "GCP Ads Feature Adoption Analytics",
    blurb: "Built a BigQuery + Cloud Storage pipeline to ingest 5M+ events and compute 12+ feature adoption KPIs.",
    tags: ["Analytics", "Google Cloud", "Data Engineering"],
    image: "images/AdsFeatureAdoption.png",
    link: "#",
  },
  {
    title: "GCP Ads Looker Studio Insights",
    blurb: "Delivered dashboards tying spend, CTR/CVR, and ROAS to uncover high-value, low-adoption segments.",
    tags: ["Visualization", "BI", "Analytics"],
    image: "images/AdsLooker.png",
    link: "#",
  },
  {
    title: "Amazon Reviews Dashboard",
    blurb: "Streamlined AWS Glue ETL for 400k+ reviews with Parquet output, reducing scan volume by 68%.",
    tags: ["AWS", "Data Engineering"],
    image: "images/AmazonReviews.png",
    link: "#",
  },
];

const socials = [
  { iconImage: "images/linkedin-contact.png", url: "https://www.linkedin.com/in/raghavendra2311/", label: "LinkedIn" },
  { iconImage: "images/github-contact.png", url: "https://github.com/Raghavendra2311", label: "GitHub" },
  { iconImage: "images/email-contact.png", url: "mailto:kharosekarraghav@gmail.com", label: "Email" },
];

const navLinks = [
  { label: "About", href: "about" },
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "Contact", href: "contact" },
];

const stats = [
  { label: "Years of data consolidated", value: "25+" },
  { label: "Rows processed", value: "1.7M+" },
  { label: "Records analyzed", value: "600M+" },
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
        <p className="eyebrow">Data Analytics · BI · Cloud Platforms</p>
        <h1>
          <span className="accent">Raghav</span> turns complex data into trusted decisions for product, research, and operations leaders.
        </h1>
        <p className="lede">
          Data analytics engineer focused on scalable pipelines, stakeholder-ready dashboards, and experimentation-driven insights across public sector and healthcare.
        </p>
        <div className="hero__cta">
          <a className="button" href="https://www.linkedin.com/in/raghavendra2311/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="button button--ghost" href={resumeLink} target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </div>
        <div className="hero__badges">
          <div className="badge">ETL + data quality</div>
          <div className="badge">BI storytelling</div>
          <div className="badge">Cloud analytics</div>
        </div>
        <div className="hero__socials">
          {socials.map((social) => (
            <a key={social.url} href={social.url} target="_blank" rel="noreferrer" aria-label={social.label}>
              {social.iconImage ? (
                <img src={social.iconImage} alt="" aria-hidden="true" />
              ) : (
                <i className={social.icon} />
              )}
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
          <div className="profile-card__image" style={{ backgroundImage: "url('images/IMG_2345 2.JPG')" }} />
          <div className="profile-card__body">
            <p className="eyebrow">Currently</p>
            <h3>Data Analytics Engineer @ ISWS</h3>
            <p>Modernizing environmental datasets and KPI scorecards for statewide water monitoring.</p>
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
        <p className="lede">Delivering reliable pipelines, analytics, and BI for real-world decisions.</p>
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

  const filters = useMemo(() => ["All", "Data Engineering", "Analytics", "Visualization", "AWS", "Google Cloud", "BI"], []);

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.tags.some((tag) => tag === filter));
  }, [filter]);

  return (
    <section id="projects" className="section">
      <div className="section__header">
        <p className="eyebrow">Selected Work</p>
        <h2>Projects & Products</h2>
        <p className="lede">End-to-end analytics builds across cloud, BI, and experimentation.</p>
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
        <h2>Scale highlights</h2>
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
        <h2>Data professional focused on clarity</h2>
        <p className="lede">I build analytics products that are dependable, explainable, and ready for executive decisions.</p>
      </div>
      <div className="about">
        <div className="about__text">
          <p>
            I partner with research, product, and operations teams to translate complex data into dependable insights. My work spans environmental analytics, healthcare dashboards, and cloud ETL automation.
          </p>
          <p>
            Whether it’s standardizing raw text data, building KPI scorecards, or optimizing large-scale pipelines, I prioritize data quality, reproducibility, and storytelling that drives action.
          </p>
          <div className="hero__badges">
            <div className="badge">4.0 GPA at UIUC</div>
            <div className="badge">Cloud + BI focus</div>
            <div className="badge">Analytics leadership</div>
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
              {social.iconImage ? (
                <img src={social.iconImage} alt="" aria-hidden="true" />
              ) : (
                <i className={social.icon} />
              )}
              {social.label}
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
        <a href="mailto:kharosekarraghav@gmail.com">Email</a>
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
