import React, { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import profilePhoto from "../assets/images/me.jpeg";

// Skill Bar Component
const SkillBar = ({ skill, percentage, color }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-gray-900 dark:text-white">{skill}</span>
      <span className="text-gray-900 dark:text-white">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-300 dark:w-full bg-gray-700 rounded-full h-2.5">
      <div
        className="h-2.5 rounded-full transition-all duration-1000"
        style={{ width: `${percentage}%`, backgroundColor: color }}
      ></div>
    </div>
  </div>
);

const About = () => {
  const sectionsRef = useRef([]);
  const [visibleSections, setVisibleSections] = useState([]);
  const [activeTab, setActiveTab] = useState("background");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prevSections) => [...prevSections, entry.target.id]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section id="about" className="min-h-screen py-12 bg-white dark:bg-gray-800 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">

        {/* Left Column: About Info & Skills */}
        <div className="flex flex-col">
          <div
            id="aboutMe"
            ref={(el) => (sectionsRef.current[0] = el)}
            className={`transition-opacity duration-700 ease-in-out ${
              visibleSections.includes("aboutMe") ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-700 flex items-center mb-4 cursor-pointer hover:text-[#A28DEC]">
              <FaUser className="mr-2 text-purple-700" /> About Me
            </h3>
            <p className="text-gray-700 dark:text-white">
             I'm a results-driven <strong>Android & Full-Stack Developer</strong> with a strong foundation in
             software engineering and a background in business development. I specialize in building
             <strong>modern Android applications using Kotlin and MVVM</strong>, alongside scalable web
             applications and cloud-native systems. 
            </p>
          </div>

          {/* Tabs for Background, Skills, Education */}
          <div className="mt-8">
            <div className="flex space-x-4 mb-6">
              {["background", "skills", "education"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md transition ${
                    activeTab === tab
                      ? "bg-purple-300 dark:bg-purple-700 text-gray-900 dark:text-white"
                      : "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-purple-500"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "background" && (
              <div className="text-gray-700 dark:text-white">
                <p>
                  With experience in <strong>full-stack development, DevOps automation, and cloud services</strong>,
                  I have contributed to <strong>building intelligent applications</strong> that bridge the gap between
                  business and technology. My expertise includes <strong>Infrastructure as Code (IaC) with Terraform</strong>,
                  <strong>container orchestration with Kubernetes and Docker</strong>, and <strong>cloud-native 
                  application deployment on AWS EKS</strong>. I thrive in collaborative environments and continuously 
                  seek to innovate through code while maintaining robust, scalable infrastructure.
                </p>
              </div>
            )}

            {activeTab === "skills" && (
              <div className="max-h-96 overflow-y-auto pr-2">
                {/* Frontend & Backend */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Frontend & Backend</h4>
                  <SkillBar skill="React & JavaScript" percentage={90} color="#61dafb" />
                  <SkillBar skill="Node.js & Express" percentage={85} color="#3c873a" />
                  <SkillBar skill="Python" percentage={80} color="#fdd835" />
                  <SkillBar skill="Django & Flask" percentage={80} color="#092E20" />
                  <SkillBar skill="MongoDB & MySQL" percentage={80} color="#4DB33D" />
                </div>
                {/* Mobile Development */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-500 mb-3">Mobile Development (Android)</h4>
                  <SkillBar skill="Kotlin" percentage={80} color="#7F52FF" />
                  <SkillBar skill="Android SDK" percentage={75} color="#3DDC84" />
                  <SkillBar skill="MVVM Architecture" percentage={80} color="#4CAF50" />
                  <SkillBar skill="Room (SQLite)" percentage={75} color="#4285F4" />
                  <SkillBar skill="Coroutines & Async" percentage={70} color="#FF9800" />
                  <SkillBar skill="Material Design 3" percentage={70} color="#9C27B0" />
                </div>

                {/* DevOps & Cloud */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-orange-400 mb-3">DevOps & Cloud Infrastructure</h4>
                  <SkillBar skill="AWS (EC2, S3, RDS, EKS)" percentage={75} color="#FF9900" />
                  <SkillBar skill="Terraform (Infrastructure as Code)" percentage={80} color="#7B42BC" />
                  <SkillBar skill="Kubernetes & Docker" percentage={85} color="#326CE5" />
                  <SkillBar skill="Helm Charts & Package Management" percentage={75} color="#0F1689" />
                  <SkillBar skill="CI/CD (GitHub Actions, Jenkins)" percentage={85} color="#2088FF" />
                  <SkillBar skill="Container Registry & Image Management" percentage={80} color="#0db7ed" />
                </div>

                {/* Additional Skills */}
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Specialized Skills</h4>
                  <SkillBar skill="AI Data Labeling & Analysis" percentage={70} color="#A28DEC" />
                  <SkillBar skill="Linux System Administration" percentage={75} color="#FCC624" />
                  <SkillBar skill="Git Version Control & Collaboration" percentage={90} color="#F05032" />
                </div>
              </div>
            )}

            {activeTab === "education" && (
              <div className="text-gray-700 dark:text-white">
                <p className="mb-2">📌 <strong>Bachelor's in Information Science</strong> - Maasai Mara University (2012 - 2016)</p>
                <p className="mb-2">📌 <strong>Software Engineering</strong> - ALX Africa (2023 - 2024)</p>
                <p className="mb-2">📌 <strong>Fundamentals of Project Management</strong> - Coursera (2022)</p>
                <p className="mb-2">📌 <strong>AWS Cloud Practitioner Certification</strong> (April 2025)</p>
                <p className="mb-2">📌 <strong>Kubernetes Administrator (CKA)</strong> (Planned 2025)</p>
                <p>📌 <strong>Terraform Associate Certification</strong> (Planned 2025)</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Profile Image & Timeline */}
        <div className="flex flex-col items-center md:items-end">
          <img
            src={profilePhoto}
            alt="Profile"
            className="rounded-full w-72 h-72 object-cover shadow-lg border-4 border-purple-500"
          />

          {/* Timeline Section */}
          <div className="mt-8 w-full">
            <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-700 mb-4">Professional Journey</h3>
            <div className="border-l-4 border-purple-500 pl-4 space-y-4">
              <div>
                <h4 className="text-gray-700 dark:text-white font-semibold">2024 - Present</h4>
                <p className="text-gray-400">Full-Stack Developer, & DevOps Engineer</p>
                <p className="text-gray-500 text-sm">Android development alongside web and cloud systems</p>
              </div>
              <div>
                <h4 className="text-gray-700 dark:text-white font-semibold">2023 - 2024</h4>
                <p className="text-gray-400">Software Engineering at ALX Africa</p>
                <p className="text-gray-500 text-sm">Full-stack development, system design, algorithms</p>
              </div>
              <div>
                <h4 className="text-gray-700 dark:text-white font-semibold">2021-2023</h4>
                <p className="text-gray-400">Gen AI Data Labeling - Clickworker / Remotasks</p>
                <p className="text-gray-500 text-sm">AI model training, data analysis, quality assurance</p>
              </div>
              <div>
                <h4 className="text-gray-700 dark:text-white font-semibold">2018 - 2021</h4>
                <p className="text-gray-400">Business Development/Sales at AmoebaX Ltd</p>
                <p className="text-gray-500 text-sm">Strategic partnerships, client relations, growth strategy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .max-h-96::-webkit-scrollbar {
          width: 6px;
        }

        .max-h-96::-webkit-scrollbar-track {
          background: #374151;
          border-radius: 3px;
        }

        .max-h-96::-webkit-scrollbar-thumb {
          background: #6B7280;
          border-radius: 3px;
        }

        .max-h-96::-webkit-scrollbar-thumb:hover {
          background: #9CA3AF;
        }
      `}</style>
    </section>
  );
};

export default About;
