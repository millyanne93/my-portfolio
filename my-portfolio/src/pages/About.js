import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaGraduationCap,
  FaCode,
  FaBriefcase,
  FaAndroid,
  FaReact,
  FaAws,
  FaDatabase
} from "react-icons/fa";
import {
  SiKotlin,
  SiKubernetes,
  SiPython,
  SiJavascript,
  SiCplusplus, // ADD THIS for C++
  SiC 
} from "react-icons/si";

// Animated Skill Circle Component with Purple Color Scheme
const SkillCircle = ({ skill, percentage, icon: Icon }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 200);
    return () => clearTimeout(timer);
  }, [percentage]);

  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-24 h-24">
        {/* Background Circle */}
        <svg className="transform -rotate-90 w-24 h-24">
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-300 dark:text-gray-700"
          />
          {/* Progress Circle - Purple Color */}
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="#7C3AED"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
            strokeLinecap="round"
          />
        </svg>
        {/* Icon in Center - Purple Color */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="text-3xl group-hover:scale-110 transition-transform duration-300 text-purple-600" />
        </div>
      </div>
      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-2 text-center">{skill}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{percentage}%</p>
    </div>
  );
};

// Stats Card Component with Purple Color Scheme
const StatsCard = ({ number, label, icon: Icon }) => (
  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500 transform hover:scale-105 transition-all duration-300">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-3xl font-bold text-purple-700">{number}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{label}</p>
      </div>
      <Icon className="text-4xl opacity-20 text-purple-500" />
    </div>
  </div>
);

// Timeline Item Component with Purple Color Scheme
const TimelineItem = ({ year, title, company, description, responsibilities, icon: Icon }) => (
  <div className="flex gap-4 group">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-purple-600 transition-transform group-hover:scale-110">
        <Icon className="text-white text-xl" />
      </div>
      <div className="w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent"></div>
    </div>
    <div className="pb-8 flex-1">
      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
        <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">{year}</p>
        <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-1">{title}</h4>
        <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">{company}</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
        
        {/* Key Responsibilities */}
        {responsibilities && responsibilities.length > 0 && (
          <div className="mt-3">
            <p className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-2">Key Responsibilities:</p>
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

// ✅ UPDATED experienceTimeline (YOUR REVISED VERSION)
const experienceTimeline = [
  {
    year: "2025",
    title: "Contract Web Developer",
    company: "Hopeful Destiny CBO",
    description:
      "Contracted to design and develop a modern, responsive website for a community-based organization focused on youth empowerment and community development.",
    responsibilities: [
      "Designed and delivered a fully responsive React website using Tailwind CSS, improving mobile usability and accessibility",
      "Built reusable UI components and subtle animations to enhance user engagement",
      "Collaborated with stakeholders to translate organizational needs into scalable frontend features"
    ],
    icon: FaReact
  },
  {
    year: "2024 - Present",
    title: "Android Developer & Full-Stack Engineer",
    company: "Independent Projects",
    description:
      "Building modern mobile and web applications using Android/Kotlin, React, and cloud technologies with focus on MVVM architecture and DevOps practices.",
    responsibilities: [
      "Built TaskMaster — an Android task management app using Kotlin, MVVM, Room, and Coroutines → GitHub: github.com/millyanne93/TaskMaster-Android",
      "Developed Trackr — a role-based equipment tracking system with full CRUD operations → GitHub: github.com/millyanne93/Trackr",
      "Designed PlanIt — a cloud-native task management system using Kubernetes, Terraform (IaC), and AWS EKS"
    ],
    icon: FaAndroid
  },
  {
    year: "2023 - 2024",
    title: "Junior Software Developer",
    company: "ALX Africa - Software Engineering Program",
    description:
      "Intensive full-stack software engineering training program with hands-on projects covering web development, backend systems, algorithms, and system design.",
    responsibilities: [
      "Developed EduAdapt, an adaptive learning platform using React and Node.js",
      "Built Tele-Thrive, a virtual therapy platform using Flask and JavaScript",
      "Implemented a Monty ByteCode Interpreter in C, focusing on memory management and algorithmic logic"
    ],
    icon: FaCode
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
      "Worked with distributed teams under tight delivery timelines"
    ],
    icon: FaBriefcase
  },
  {
    year: "2018 - 2021",
    title: "Sales & Business Development Officer",
    company: "AmoebaX Ltd",
    description:
      "Led sales initiatives and customer relations while supporting technology-driven business operations.",
    responsibilities: [
      "Led client engagement and requirement gathering, strengthening stakeholder communication skills",
      "Used CRM systems and data analysis to improve operational efficiency",
      "Developed a user-centric mindset that now informs software design decisions"
    ],
    icon: FaBriefcase
  }
];

// ✅ CLEANED About COMPONENT STATE
const About = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showTimeline, setShowTimeline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTimeline(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="min-h-screen py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-700 mb-4 flex items-center justify-center gap-3">
            <FaUser className="text-purple-600" />
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transforming ideas into powerful digital solutions through code, creativity, and continuous learning.
          </p>
        </div>

        {/* Quick Stats - All Purple */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatsCard number="8+" label="Projects Completed" icon={FaCode} />
          <StatsCard number="5+" label="Technologies" icon={FaBriefcase} />
          <StatsCard number="2+" label="Years Coding" icon={FaGraduationCap} />
          <StatsCard number="100%" label="Commitment" icon={FaAndroid} />
        </div>

        {/* Tab Navigation - Purple Theme */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { id: "overview", label: "Overview", icon: FaUser },
            { id: "skills", label: "Skills", icon: FaCode },
            { id: "experience", label: "Experience", icon: FaBriefcase },
            { id: "education", label: "Education", icon: FaGraduationCap },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50 scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-700 hover:text-purple-700"
              }`}
            >
              <tab.icon className={activeTab === tab.id ? "text-white" : "text-purple-600"} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 min-h-96">

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold text-purple-700 mb-6">
                Android & Full-Stack Developer
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    I'm a results-driven <strong className="text-purple-600">Android & Full-Stack Developer</strong> with a passion for building modern, scalable applications. My expertise spans expertise spans <strong className="text-purple-600">systems programming with C/C++</strong>, mobile development with <strong className="text-purple-600">Kotlin and MVVM architecture</strong>, alongside robust web applications and cloud-native systems.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    With experience in <strong className="text-purple-600">DevOps automation, Infrastructure as Code (IaC)</strong>, and <strong className="text-purple-600">container orchestration</strong>, I bridge the gap between development and operations, ensuring seamless deployment and scalability.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    I thrive in collaborative environments, continuously innovate through code, and am committed to delivering high-quality digital products that solve real-world problems.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                      <FaAndroid className="text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Mobile Development</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Building modern Android apps with Kotlin, MVVM, and Material Design</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                      <FaReact className="text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Web Development</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Creating responsive web apps with React, Node.js, and modern frameworks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                      <FaAws className="text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Cloud & DevOps</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Automating infrastructure with AWS, Kubernetes, and Terraform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold text-purple-700 mb-8 text-center">
                Technical Expertise
              </h3>

              {/* Mobile Development */}
              <div className="mb-10">
                <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-6 flex items-center gap-2">
                  <FaAndroid /> Mobile Development (Android)
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  <SkillCircle skill="Kotlin" percentage={80} icon={SiKotlin} />
                  <SkillCircle skill="Android SDK" percentage={75} icon={FaAndroid} />
                  <SkillCircle skill="MVVM" percentage={80} icon={FaCode} />
                  <SkillCircle skill="Room DB" percentage={75} icon={FaDatabase} />
                  <SkillCircle skill="Coroutines" percentage={70} icon={FaCode} />
                  <SkillCircle skill="Material 3" percentage={70} icon={FaAndroid} />
                </div>
              </div>
              {/* NEW: Systems Programming Section */}
    	      <div className="mb-10">
                <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-6 flex items-center gap-2">
                  <FaCode /> Systems Programming
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  <SkillCircle skill="C" percentage={85} icon={SiC} />
                  <SkillCircle skill="C++" percentage={75} icon={SiCplusplus} />
                  <SkillCircle skill="Data Structures" percentage={80} icon={FaCode} />
                  <SkillCircle skill="Algorithms" percentage={80} icon={FaCode} />
                  <SkillCircle skill="Linux" percentage={70} icon={FaCode} />
                </div>
              </div>

              {/* Web Development */}
              <div className="mb-10">
                <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-6 flex items-center gap-2">
                  <FaReact /> Web Development
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  <SkillCircle skill="React" percentage={90} icon={FaReact} />
                  <SkillCircle skill="Node.js" percentage={85} icon={FaCode} />
                  <SkillCircle skill="JavaScript" percentage={90} icon={SiJavascript} />
                  <SkillCircle skill="Python" percentage={80} icon={SiPython} />
                  <SkillCircle skill="MongoDB" percentage={80} icon={FaDatabase} />
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div>
                <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-6 flex items-center gap-2">
                  <FaAws /> Cloud & DevOps
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  <SkillCircle skill="AWS" percentage={75} icon={FaAws} />
                  <SkillCircle skill="Kubernetes" percentage={85} icon={SiKubernetes} />
                  <SkillCircle skill="Docker" percentage={85} icon={FaCode} />
                  <SkillCircle skill="Terraform" percentage={80} icon={FaCode} />
                  <SkillCircle skill="CI/CD" percentage={85} icon={FaCode} />
                </div>
              </div>
            </div>
          )}

          {/* ✅ UPDATED Experience Tab with GitHub CTA */}
          {activeTab === "experience" && (
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold text-purple-700 mb-8">
                Professional Experience
              </h3>

              <div className="space-y-4">
                {experienceTimeline.map((exp, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-in-out ${
                      showTimeline
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <TimelineItem {...exp} />
                  </div>
                ))}
              </div>

              {/* GitHub CTA */}
              <div className="mt-12 text-center">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Want to see how I build real applications?
                </p>
                <a
                  href="https://github.com/millyanne93"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors duration-300"
                >
                  View My GitHub →
                </a>
              </div>
            </div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold text-purple-700 mb-8">
                Education & Certifications
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <FaGraduationCap className="text-3xl text-purple-600 dark:text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">Bachelor's in Information Science</h4>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold">Maasai Mara University</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">2012 - 2016</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <FaCode className="text-3xl text-purple-600 dark:text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">Software Engineering Program</h4>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold">ALX Africa</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">2023 - 2024</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg">
                    <h4 className="font-bold text-gray-900 dark:text-white">AWS Cloud Practitioner</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Expected: April 2025</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg">
                    <h4 className="font-bold text-gray-900 dark:text-white">Kubernetes Administrator (CKA)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Planned: 2025</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg">
                    <h4 className="font-bold text-gray-900 dark:text-white">Terraform Associate</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Planned: 2025</p>
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

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default About;
