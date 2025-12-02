import React, { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGlobe, FaAws, FaDocker } from "react-icons/fa";
import { SiMongodb, SiFlask, SiTailwindcss, SiJavascript, SiBootstrap, SiTerraform, SiKubernetes, SiHelm, SiAmazoneks } from "react-icons/si";
import { DiLinux } from "react-icons/di";
import trackrScreenshot from "../assets/images/trackr.png";
import eduAdaptScreenshot from "../assets/images/eduadapt.png";
import teleThriveScreenshot from "../assets/images/telethrive.png";
import portfolioScreenshot from "../assets/images/Portfolio.png";
import planitScreenshot from "../assets/images/planit.png";
import hopefulDestinyScreenshot from "../assets/images/hopeful-destiny.png";

// Icons for tech stack
const techIcons = {
  React: <FaReact className="text-blue-500 text-2xl" />,
  "Node.js": <FaNodeJs className="text-green-500 text-2xl" />,
  MongoDB: <SiMongodb className="text-green-600 text-2xl" />,
  Python: <FaPython className="text-yellow-400 text-2xl" />,
  Flask: <SiFlask className="text-black text-2xl" />,
  HTML: <FaHtml5 className="text-orange-500 text-2xl" />,
  CSS: <FaCss3Alt className="text-blue-500 text-2xl" />,
  JavaScript: <SiJavascript className="text-yellow-500 text-2xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-500 text-2xl" />,
  Bootstrap: <SiBootstrap className="text-purple-600 text-2xl" />,
  "Live Demo": <FaGlobe className="text-gray-400 text-2xl" />,
  
  // DevOps & Cloud Technologies
  AWS: <FaAws className="text-orange-400 text-2xl" />,
  Terraform: <SiTerraform className="text-purple-500 text-2xl" />,
  Kubernetes: <SiKubernetes className="text-blue-600 text-2xl" />,
  "Helm Charts": <SiHelm className="text-blue-400 text-2xl" />,
  EKS: <SiAmazoneks className="text-orange-500 text-2xl" />,
  Docker: <FaDocker className="text-blue-500 text-2xl" />,
  "CI/CD": <DiLinux className="text-gray-600 text-2xl" />, // You can replace with a better CI/CD icon if available
};

// Project data
const projectData = [
  {
    title: "Trackr",
    description: "A web-based equipment tracking system with QR scanning & real-time tracking.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/millyanne93/trackr",
    liveSiteLink: "https://trackr-kd45.vercel.app/",
    screenshot: trackrScreenshot,
    category: "Full Stack",
    featured: true,
  },
  {
    title: "Hopeful Destiny CBO",
    description: "A community-based organization website promoting youth empowerment and community development initiatives.",
    techStack: ["React", "Tailwind CSS"],
    githubLink: "https://github.com/millyanne93/hopeful-destiny-cbo", // Update with your actual repo
    liveSiteLink: "https://hopeful-destiny-cbo.vercel.app/", // Update with your actual live site
    screenshot: hopefulDestinyScreenshot,
    category: "Web Development",
    featured: false,
  },
  {
    title: "PlanIt",
    description: "A cloud-native task management application with Kubernetes orchestration, AWS infrastructure, and automated deployment pipelines.",
    techStack: ["React", "Flask", "MongoDB", "AWS", "Terraform", "Kubernetes", "Helm Charts", "EKS", "Docker"],
    githubLink: "https://github.com/millyanne93/PlanIt",
    screenshot: planitScreenshot,
    category: "DevOps & Cloud",
  },
  {
    title: "EduAdapt",
    description: "An adaptive learning platform using AI for personalized content.",
    techStack: ["Node.js", "React", "Tailwind CSS"],
    githubLink: "https://github.com/millyanne93/eduadapt",
    screenshot: eduAdaptScreenshot,
    category: "Full Stack",
  },
  {
    title: "Tele-Thrive",
    description: "Virtual therapy platform connecting patients with therapists.",
    techStack: ["Flask", "HTML", "CSS", "JavaScript", "Bootstrap"],
    githubLink: "https://github.com/ynot93/tele-thrive",
    screenshot: teleThriveScreenshot,
    category: "Backend",
  },
  {
    title: "Portfolio",
    description: "My personal portfolio showcasing my projects & skills.",
    techStack: ["React", "Tailwind CSS"],
    githubLink: "https://github.com/millyanne93/my-portfolio",
    liveSiteLink: "https://millyanne93.github.io/my-portfolio/",
    screenshot: portfolioScreenshot,
    category: "Web Development",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isFlipped, setIsFlipped] = useState({});
  const [activeProject, setActiveProject] = useState(null);
  const [animateFiltered, setAnimateFiltered] = useState(false);

  // Filter projects dynamically
  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((project) => project.category === filter);

  // Handle filter changes with animation
  useEffect(() => {
    setAnimateFiltered(true);
    const timer = setTimeout(() => {
      setAnimateFiltered(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [filter]);

  // Handle card flip
  const handleCardFlip = (index) => {
    setIsFlipped(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="projects" className="min-h-screen py-16 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-6">My Projects</h2>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Explore my recent work and see how I've helped clients transform ideas into reality.
        </p>

        {/* Filter Buttons with Hover Effect - Updated categories */}
        <div className="flex flex-wrap justify-center mb-10 space-x-2">
          {["All", "Web Development", "Backend", "Full Stack", "DevOps & Cloud"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`filter-btn px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105 ${
                filter === category
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "text-white hover:text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards with Enhanced Interactivity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`project-card transform transition-all duration-500 ${
                animateFiltered ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
              } ${activeProject === index ? "md:col-span-2 lg:col-span-3 z-10" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`flip-card cursor-pointer ${isFlipped[index] ? 'is-flipped' : ''} hover:shadow-xl hover:shadow-purple-600/20 transition-shadow duration-300`}
                onClick={() => handleCardFlip(index)}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="flip-card-inner transition-transform duration-700">
                  {/* Front Side with Hover Effects */}
                  <div className="flip-card-front bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg group">
                      <img
                        src={project.screenshot}
                        alt={project.title}
                        className={`w-full h-48 object-cover rounded-lg transition-all duration-500 ${
                          hoveredProject === index ? "scale-110 brightness-75" : ""
                        }`}
                      />
                      <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        hoveredProject === index ? "bg-black/30" : ""
                      }`}>
                        <span className="text-white font-medium bg-purple-600 px-4 py-2 rounded-md">View Details</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white text-center">{project.title}</h3>

                    {/* Featured Badge */}
                    {project.featured && (
                      <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Back Side with Enhanced Design */}
                  <div className="flip-card-back bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between relative">
                    <div>
                      <h3 className="text-xl font-semibold text-white text-center mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-center mb-4 text-sm leading-relaxed">{project.description}</p>
                    </div>

                    {/* Tech Stack with Tooltip - Enhanced for more items */}
                    <div className="flex justify-center flex-wrap gap-2 mb-4 max-h-20 overflow-y-auto">
                      {project.techStack.map((tech, techIndex) => (
                        <div key={techIndex} className="group relative">
                          <span className="transform transition-transform hover:scale-125 duration-300 block">
                            {techIcons[tech] || <span className="text-gray-400 text-xs px-2 py-1 bg-gray-800 rounded">{tech}</span>}
                          </span>
                          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-1 whitespace-nowrap z-10">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Project Links with Animation */}
                    <div className="flex justify-center space-x-4">
                      <a
                        href={project.githubLink}
                        onClick={(e) => e.stopPropagation()}
                        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                      >
                        View Code
                      </a>
                      {project.liveSiteLink && (
                        <a
                          href={project.liveSiteLink}
                          onClick={(e) => e.stopPropagation()}
                          className="px-4 py-2 border border-purple-600 text-purple-400 rounded-md hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>

                    {/* Tap to flip back hint */}
                    <div className="absolute bottom-2 right-2 text-xs text-gray-500">
                      Tap to flip back
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add CSS for flip animation */}
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
          height: 350px;
          width: 100%;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .is-flipped .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 0.5rem;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .project-card.show {
          animation: fadeIn 0.5s forwards;
        }

        /* Custom scrollbar for tech stack */
        .max-h-20::-webkit-scrollbar {
          width: 4px;
        }

        .max-h-20::-webkit-scrollbar-track {
          background: #374151;
          border-radius: 2px;
        }

        .max-h-20::-webkit-scrollbar-thumb {
          background: #6B7280;
          border-radius: 2px;
        }

        .max-h-20::-webkit-scrollbar-thumb:hover {
          background: #9CA3AF;
        }
      `}</style>
    </section>
  );
};

export default Projects;
