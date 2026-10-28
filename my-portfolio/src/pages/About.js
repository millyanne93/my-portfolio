import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaGraduationCap,
  FaCode,
  FaBriefcase,
  FaReact,
  FaAws,
  FaDatabase,
  FaNetworkWired,
} from "react-icons/fa";

const SkillBadgeGroup = ({ title, skills }) => (
  <div className="mb-8">
    <h4 className="text-sm font-semibold text-purple-700 dark:text-purple-400 mb-3 uppercase tracking-wide">
      {title}
    </h4>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="text-sm px-3 py-1.5 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-800"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const StatsCard = ({ number, label, icon: Icon }) => (
  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 border-l-4 border-l-purple-500">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-3xl font-bold text-purple-700 dark:text-purple-400">{number}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{label}</p>
      </div>
      <Icon className="text-4xl opacity-20 text-purple-500" />
    </div>
  </div>
);

const TimelineItem = ({ year, title, company, description, responsibilities, icon: Icon }) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-600 flex-shrink-0">
        <Icon className="text-white text-lg" />
      </div>
      <div className="w-0.5 h-full bg-purple-200 dark:bg-purple-800"></div>
    </div>
    <div className="pb-8 flex-1">
      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">{year}</p>
        <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-1">{title}</h4>
        <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">{company}</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>

        {responsibilities && responsibilities.length > 0 && (
          <div className="mt-3">
            <p className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-2">Key work:</p>
            <ul className="list-disc list-inside space-y-1">
              {responsibilities.map((resp, index) => (
                <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>
);

const experienceTimeline = [
  {
    year: "2026 - Present",
    title: "Backend AI Engineering Intern",
    company: "FlyRank AI",
    description:
      "Building and maintaining backend infrastructure for a growing AI platform. Work spans API development, database migration, authentication, and data collection pipelines.",
    responsibilities: [
      "Built a CRUD API with Express and TypeScript, implementing input validation, error handling, and OpenAPI documentation served via Swagger UI",
      "Migrated the data layer from SQLite to PostgreSQL after identifying concurrency and scalability limitations, containerizing the full application stack with Docker and Docker Compose",
      "Implemented secure authentication using Supabase Auth, with JWT-based protected routes, reusable middleware for token verification, and token blacklisting on logout",
      "Designed and deployed a polite web scraper extracting structured data from 60+ pages, with local caching, automatic retry logic, and a run report summarizing success rates and errors",
    ],
    icon: FaDatabase,
  },
  {
    year: "2025 - Present",
    title: "Sole Developer & Technical Lead",
    company: "Hopeful Destiny CBO",
    description:
      "Contracted to design and develop a website for a community-based organization focused on youth empowerment and community development.",
    responsibilities: [
      "Built and delivered a responsive React website with Tailwind CSS, establishing the organization's digital foundation",
      "Sole point of contact for translating stakeholder needs into technical requirements",
      "Manage ongoing technical operations, including deployment monitoring and content updates",
    ],
    icon: FaReact,
  },
  {
    year: "2024 - Present",
    title: "Backend Engineer",
    company: "Independent Projects",
    description:
      "Building backend systems and cloud-native infrastructure across independent projects.",
    responsibilities: [
      "Build backend APIs with role-based access control and full CRUD operations",
      "Design and deploy cloud-native systems on AWS EKS using Kubernetes and Terraform (IaC)",
      "Build secure, scalable AWS networking (VPC, subnets, security groups, NACLs, load balancers)",
      "Implement monitoring and troubleshooting with CloudWatch and VPC Flow Logs",
    ],
    icon: FaAws,
  },
  {
    year: "2023 - 2024",
    title: "Junior Software Developer",
    company: "ALX Africa - Software Engineering Program",
    description:
      "Intensive software engineering training program with hands-on projects covering backend systems, algorithms, and system design.",
    responsibilities: [
      "Developed EduAdapt, an adaptive learning platform using React and Node.js",
      "Built Tele-Thrive, a virtual therapy platform using Flask and JavaScript",
      "Implemented a Monty ByteCode Interpreter in C, focusing on memory management and algorithmic logic",
    ],
    icon: FaCode,
  },
  {
    year: "2021 - 2023",
    title: "AI Data Annotation Specialist",
    company: "Clickworker / Remotasks",
    description:
      "Annotated and validated datasets used to train machine learning models for NLP and search relevance.",
    responsibilities: [
      "Labeled large datasets with high accuracy for AI model training",
      "Performed quality checks on AI-generated outputs",
    ],
    icon: FaBriefcase,
  },
  {
    year: "2018 - 2021",
    title: "Sales & Business Development Officer",
    company: "AmoebaX Ltd",
    description:
      "Led sales initiatives and customer relations while supporting technology-driven business operations.",
    responsibilities: [
      "Led client engagement and requirement gathering",
      "Used CRM systems and data analysis to improve operational efficiency",
    ],
    icon: FaBriefcase,
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section id="about" className="min-h-screen py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-700 dark:text-purple-400 mb-4 flex items-center justify-center gap-3">
            <FaUser />
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Backend engineer focused on reliability, APIs, auth, and cloud deployment.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            { id: "overview", label: "Overview", icon: FaUser },
            { id: "skills", label: "Skills", icon: FaCode },
            { id: "experience", label: "Experience", icon: FaBriefcase },
            { id: "education", label: "Education", icon: FaGraduationCap },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-purple-600 text-white"
                  : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-purple-400"
              }`}
            >
              <tab.icon className={activeTab === tab.id ? "text-white" : "text-purple-600"} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 min-h-96">
          {activeTab === "overview" && (
            <div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-6">
                Backend Engineer | Cloud Infrastructure
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    I'm a backend engineer who builds dependable APIs and cloud infrastructure.
                    I've deployed applications to AWS with Kubernetes, integrated AI services into
                    production systems, and built authentication that protects user data.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    My work focuses on reliability: building APIs that stay correct when things go
                    wrong, not just when everything works.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center flex-shrink-0">
                      <FaDatabase className="text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">API & Backend Services</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Secure, dependable APIs that handle authentication and errors correctly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center flex-shrink-0">
                      <FaNetworkWired className="text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Cloud Infrastructure & DevOps</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">AWS infrastructure with Kubernetes and Terraform, automated CI/CD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-8">
                Technical Expertise
              </h3>
              <SkillBadgeGroup
                title="API & Backend Services"
                skills={["TypeScript", "Node.js", "Express", "Python", "PostgreSQL", "Supabase", "MongoDB"]}
              />
              <SkillBadgeGroup
                title="Cloud Infrastructure & DevOps"
                skills={["AWS", "Kubernetes", "Docker", "Terraform", "Helm Charts", "CI/CD", "GitHub Actions"]}
              />
            </div>
          )}

          {activeTab === "experience" && (
            <div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-8">
                Professional Experience
              </h3>
              <div className="space-y-4">
                {experienceTimeline.map((exp, index) => (
                  <TimelineItem key={index} {...exp} />
                ))}
              </div>
              <div className="mt-12 text-center">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Want to see how I build real applications?
                </p>
                <a
                  href="https://github.com/millyanne93"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
                >
                  View My GitHub →
                </a>
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-8">
                Education & Certifications
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <FaGraduationCap className="text-2xl text-purple-600 dark:text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">Bachelor's in Information Science</h4>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold">Maasai Mara University</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">2012 - 2016</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <FaCode className="text-2xl text-purple-600 dark:text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">Software Engineering Program</h4>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold">ALX Africa</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">2023 - 2024</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        <strong>Relevant coursework:</strong> Network protocols (TCP/IP, HTTP/HTTPS), systems programming (C/C++), algorithm design, backend development
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg">
                    <h4 className="font-bold text-gray-900 dark:text-white">AWS Cloud Practitioner</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">April 2025</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg">
                    <h4 className="font-bold text-gray-900 dark:text-white">Kubernetes Administrator (CKA)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2026 (In Progress)</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg">
                    <h4 className="font-bold text-gray-900 dark:text-white">Terraform Associate</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2026 (Planned)</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg">
                    <h4 className="font-bold text-gray-900 dark:text-white">Project Management Fundamentals</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Coursera - 2022</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
