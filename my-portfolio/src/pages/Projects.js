import React, { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGlobe, FaAws, FaDocker, FaAndroid, FaCode } from "react-icons/fa";
import { SiMongodb, SiFlask, SiTailwindcss, SiJavascript, SiBootstrap, SiTerraform, SiKubernetes, SiHelm, SiAmazoneks, SiKotlin, SiSqlite, SiC } from "react-icons/si";
import { DiLinux } from "react-icons/di";

// Icons for tech stack - Updated to use purple theme
const techIcons = {
  React: <FaReact className="text-purple-500 text-2xl" />,
  "Node.js": <FaNodeJs className="text-purple-600 text-2xl" />,
  MongoDB: <SiMongodb className="text-purple-500 text-2xl" />,
  Python: <FaPython className="text-purple-400 text-2xl" />,
  Flask: <SiFlask className="text-purple-500 text-2xl" />,
  HTML: <FaHtml5 className="text-purple-500 text-2xl" />,
  CSS: <FaCss3Alt className="text-purple-500 text-2xl" />,
  C: <SiC className="text-purple-600 text-2xl" />,
  Android: <FaAndroid className="text-purple-500 text-2xl" />,
  Kotlin: <SiKotlin className="text-purple-600 text-2xl" />,
  Room: <SiSqlite className="text-purple-500 text-2xl" />,
  Coroutines: <span className="text-purple-300 text-xs px-2 py-1 bg-purple-800 rounded">Coroutines</span>,
  MVVM: <span className="text-purple-300 text-xs px-2 py-1 bg-purple-800 rounded">MVVM</span>,
  JavaScript: <SiJavascript className="text-purple-400 text-2xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-purple-400 text-2xl" />,
  Bootstrap: <SiBootstrap className="text-purple-600 text-2xl" />,
  "Data Structures": <FaCode className="text-purple-500 text-2xl" />,
  Linux: <DiLinux className="text-purple-500 text-2xl" />,

  // DevOps & Cloud Technologies - Updated to purple
  AWS: <FaAws className="text-purple-500 text-2xl" />,
  Terraform: <SiTerraform className="text-purple-600 text-2xl" />,
  Kubernetes: <SiKubernetes className="text-purple-500 text-2xl" />,
  "Helm Charts": <SiHelm className="text-purple-400 text-2xl" />,
  EKS: <SiAmazoneks className="text-purple-500 text-2xl" />,
  Docker: <FaDocker className="text-purple-500 text-2xl" />,
};

// Category colors and main icons - Updated to purple gradients
const categoryStyles = {
  "Mobile Development": {
    gradient: "from-purple-500 to-purple-700",
    icon: <FaAndroid className="text-white" />,
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    badgeColor: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
  },
  "Full Stack": {
    gradient: "from-purple-400 to-purple-600",
    icon: <FaReact className="text-white" />,
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    badgeColor: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
  },
  "Backend": {
    gradient: "from-purple-500 to-purple-800",
    icon: <SiC className="text-white" />,
    bgColor: "bg-purple-50 dark:bg-purple-900/30",
    badgeColor: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
  },
  "Web Development": {
    gradient: "from-purple-400 to-purple-700",
    icon: <FaReact className="text-white" />,
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    badgeColor: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
  },
  "DevOps & Cloud": {
    gradient: "from-purple-500 to-purple-900",
    icon: <SiKubernetes className="text-white" />,
    bgColor: "bg-purple-50 dark:bg-purple-900/30",
    badgeColor: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
  }
};

// Project data
const projectData = [
  {
    title: "TaskMaster",
    description: "A modern Android to-do app built with Kotlin, following MVVM architecture, using Room for local persistence and Coroutines for async operations.",
    techStack: ["Android", "Kotlin", "MVVM", "Room", "Coroutines"],
    githubLink: "https://github.com/millyanne93/TaskMaster-Android",
    category: "Mobile Development",
    featured: true,
  },
  {
    title: "Trackr",
    description: "A web-based equipment tracking system with QR scanning & real-time tracking.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/millyanne93/trackr",
    liveSiteLink: "https://trackr-kd45.vercel.app/",
    category: "Full Stack",
    featured: true,
  },
  {
    title: "Monty Bytecode Interpreter",
    description: "A C-based interpreter for Monty ByteCode files implementing stack and queue operations, arithmetic opcodes, and memory management.",
    techStack: ["C", "Data Structures", "Linux"],
    githubLink: "https://github.com/ynot93/monty",
    category: "Backend",
    featured: false,
  },
  {
    title: "Hopeful Destiny CBO",
    description: "A community-based organization website promoting youth empowerment and community development initiatives.",
    techStack: ["React", "Tailwind CSS"],
    githubLink: "https://github.com/millyanne93/Hopeful-Destiny",
    liveSiteLink: "https://hopefuldestiny.org/",
    category: "Web Development",
    featured: false,
  },
  {
    title: "PlanIt",
    description: "A cloud-native task management application with Kubernetes orchestration, AWS infrastructure, and automated deployment pipelines.",
    techStack: ["React", "Flask", "MongoDB", "AWS", "Terraform", "Kubernetes", "Helm Charts", "EKS", "Docker"],
    githubLink: "https://github.com/millyanne93/PlanIt",
    category: "DevOps & Cloud",
    featured: false,
  },
  {
    title: "EduAdapt",
    description: "An adaptive learning platform using AI for personalized content.",
    techStack: ["Node.js", "React", "Tailwind CSS"],
    githubLink: "https://github.com/millyanne93/eduadapt",
    category: "Full Stack",
    featured: false,
  },
  {
    title: "Tele-Thrive",
    description: "Virtual therapy platform connecting patients with therapists.",
    techStack: ["Flask", "HTML", "CSS", "JavaScript", "Bootstrap"],
    githubLink: "https://github.com/ynot93/tele-thrive",
    category: "Backend",
    featured: false,
  },
  {
    title: "Portfolio",
    description: "My personal portfolio showcasing my projects & skills.",
    techStack: ["React", "Tailwind CSS"],
    githubLink: "https://github.com/millyanne93/my-portfolio",
    liveSiteLink: "https://millyanne93.github.io/my-portfolio/",
    category: "Web Development",
    featured: false,
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isFlipped, setIsFlipped] = useState({});
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
    <section id="projects" className="min-h-screen py-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-6">My Projects</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Explore my recent work showcasing expertise in Android, Web, and Cloud development.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-10 gap-3">
          {["All", "Mobile Development", "Web Development", "Backend", "Full Stack", "DevOps & Cloud"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`filter-btn px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                filter === category
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-purple-100 dark:hover:bg-gray-600 hover:text-purple-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const categoryStyle = categoryStyles[project.category];

            return (
              <div
                key={index}
                className={`project-card transform transition-all duration-500 ${
                  animateFiltered ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`flip-card cursor-pointer ${isFlipped[index] ? 'is-flipped' : ''} hover:shadow-2xl transition-shadow duration-300`}
                  onClick={() => handleCardFlip(index)}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="flip-card-inner transition-transform duration-700">
                    {/* Front Side */}
                    <div className={`flip-card-front ${categoryStyle.bgColor} p-6 rounded-xl shadow-lg flex flex-col`}>
                      {/* Category Icon Header */}
                      <div className={`w-full h-32 bg-gradient-to-br ${categoryStyle.gradient} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}>
                        <div className="text-6xl transform transition-transform duration-300 hover:scale-110">
                          {categoryStyle.icon}
                        </div>

                        {/* Featured Badge - Updated to purple */}
                        {project.featured && (
                          <span className="absolute top-2 right-2 bg-purple-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">
                        {project.title}
                      </h3>

                      {/* Category Badge - Updated */}
                      <div className="text-center mb-3">
                        <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${categoryStyle.badgeColor}`}>
                          {project.category}
                        </span>
                      </div>

                      {/* Tech Stack Preview (First 3) */}
                      <div className="flex justify-center gap-3 mt-auto">
                        {project.techStack.slice(0, 3).map((tech, techIndex) => (
                          <div key={techIndex} className="transform hover:scale-125 transition-transform">
                            {techIcons[tech]}
                          </div>
                        ))}
                        {project.techStack.length > 3 && (
                          <div className="text-purple-600 dark:text-purple-400 text-sm self-center">
                            +{project.techStack.length - 3} more
                          </div>
                        )}
                      </div>

                      {/* Click to view hint */}
                      <div className="text-center mt-4 text-xs text-purple-600 dark:text-purple-400">
                        Click for details
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="flip-card-back bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col justify-between border-2 border-purple-500">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-3">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-center mb-4 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Full Tech Stack */}
                      <div className="flex justify-center flex-wrap gap-2 mb-4 max-h-24 overflow-y-auto">
                        {project.techStack.map((tech, techIndex) => (
                          <div key={techIndex} className="group relative">
                            <span className="transform transition-transform hover:scale-125 duration-300 block">
                              {techIcons[tech] || (
                                <span className="text-purple-300 text-xs px-2 py-1 bg-purple-800 dark:bg-purple-900 rounded">
                                  {tech}
                                </span>
                              )}
                            </span>
                            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-purple-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-1 whitespace-nowrap z-10">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Project Links */}
                      <div className="flex justify-center gap-3">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm font-semibold"
                        >
                          View Code
                        </a>
                        {project.liveSiteLink && (
                          <a
                            href={project.liveSiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="px-4 py-2 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 text-sm font-semibold"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>

                      {/* Click to flip back */}
                      <div className="text-center mt-3 text-xs text-purple-600 dark:text-purple-400">
                        Click to flip back
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CSS for flip animation */}
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
          height: 400px;
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
          border-radius: 0.75rem;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        /* Custom scrollbar - Updated to purple */
        .max-h-24::-webkit-scrollbar {
          width: 4px;
        }

        .max-h-24::-webkit-scrollbar-track {
          background: #4c1d95;
          border-radius: 2px;
        }

        .max-h-24::-webkit-scrollbar-thumb {
          background: #7c3aed;
          border-radius: 2px;
        }

        .max-h-24::-webkit-scrollbar-thumb:hover {
          background: #a78bfa;
        }
      `}</style>
    </section>
  );
};

export default Projects;
