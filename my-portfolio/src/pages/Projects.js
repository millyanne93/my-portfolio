import React from "react";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaAws, FaDocker, FaAndroid, FaCode, FaGoogle, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiMongodb, SiFlask, SiTailwindcss, SiJavascript, SiBootstrap, SiTerraform, SiKubernetes, SiHelm, SiAmazoneks, SiKotlin, SiSqlite, SiC } from "react-icons/si";
import { DiLinux } from "react-icons/di";

// Icons for tech stack
const techIcons = {
  React: <FaReact className="text-purple-500" />,
  "Node.js": <FaNodeJs className="text-purple-600" />,
  MongoDB: <SiMongodb className="text-purple-500" />,
  Python: <FaPython className="text-purple-400" />,
  Flask: <SiFlask className="text-purple-500" />,
  HTML: <FaHtml5 className="text-purple-500" />,
  CSS: <FaCss3Alt className="text-purple-500" />,
  C: <SiC className="text-purple-600" />,
  "Gemini AI": <FaGoogle className="text-purple-500" />,
  Android: <FaAndroid className="text-purple-500" />,
  Kotlin: <SiKotlin className="text-purple-600" />,
  Room: <SiSqlite className="text-purple-500" />,
  JavaScript: <SiJavascript className="text-purple-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-purple-400" />,
  Bootstrap: <SiBootstrap className="text-purple-600" />,
  "Data Structures": <FaCode className="text-purple-500" />,
  Linux: <DiLinux className="text-purple-500" />,
  AWS: <FaAws className="text-purple-500" />,
  Terraform: <SiTerraform className="text-purple-600" />,
  Kubernetes: <SiKubernetes className="text-purple-500" />,
  "Helm Charts": <SiHelm className="text-purple-400" />,
  EKS: <SiAmazoneks className="text-purple-500" />,
  Docker: <FaDocker className="text-purple-500" />,
};

// Project data
const projectData = [
  {
    title: "TaskMaster",
    description: "A modern Android to-do app built with Kotlin, following MVVM architecture, using Room for local persistence and Coroutines for async operations.",
    techStack: ["Android", "Kotlin", "Room"],
    githubLink: "https://github.com/millyanne93/TaskMaster-Android",
    featured: false,
  },
  {
    title: "Trackr",
    description: "A web-based equipment tracking system with QR scanning & real-time tracking.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/millyanne93/trackr",
    liveSiteLink: "https://trackr-kd45.vercel.app/",
    featured: false,
  },
  {
    title: "Monty Bytecode Interpreter",
    description: "A C-based interpreter for Monty ByteCode files implementing stack and queue operations, arithmetic opcodes, and memory management.",
    techStack: ["C", "Data Structures", "Linux"],
    githubLink: "https://github.com/ynot93/monty",
    featured: false,
  },
  {
    title: "Hopeful Destiny CBO",
    description: "A community-based organization website promoting youth empowerment and community development initiatives.",
    techStack: ["React", "Tailwind CSS"],
    githubLink: "https://github.com/millyanne93/Hopeful-Destiny",
    liveSiteLink: "https://hopefuldestiny.org/",
    featured: false,
  },
  {
    title: "PlanIt",
    description: "A cloud-native task management application with Kubernetes orchestration, AWS infrastructure, and automated deployment pipelines.",
    techStack: ["React", "Flask", "MongoDB", "AWS", "Terraform", "Kubernetes"],
    githubLink: "https://github.com/millyanne93/PlanIt",
    featured: false,
  },
  {
    title: "EduAdapt",
    description: "An adaptive learning platform using AI for personalized content recommendations powered by Gemini AI",
    techStack: ["Node.js", "React", "Tailwind CSS", "Gemini AI"],
    githubLink: "https://github.com/millyanne93/eduadapt",
    featured: false,
  },
  {
    title: "Tele-Thrive",
    description: "Virtual therapy platform connecting patients with therapists.",
    techStack: ["Flask", "HTML", "CSS", "JavaScript", "Bootstrap"],
    githubLink: "https://github.com/ynot93/tele-thrive",
    featured: false,
  },
  {
    title: "Portfolio",
    description: "My personal portfolio showcasing my projects & skills.",
    techStack: ["React", "Tailwind CSS"],
    githubLink: "https://github.com/millyanne93/my-portfolio",
    liveSiteLink: "https://millyanne93.github.io/my-portfolio/",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-700 dark:text-purple-400 mb-3">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of recent work showcasing expertise in mobile, web, and cloud development
          </p>
        </div>

        {/* Project Cards - Clean grid without filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-lg border border-purple-200 dark:border-purple-800 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-purple-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              )}

              {/* Card Content */}
              <div className="p-6 flex flex-col h-full">
                {/* Title */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <div key={techIndex} className="group/tech relative">
                      <span className="text-xl transition-transform duration-200 hover:scale-110 inline-block">
                        {techIcons[tech] || (
                          <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded">
                            {tech}
                          </span>
                        )}
                      </span>
                      {/* Tooltip */}
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-200 mb-1 whitespace-nowrap pointer-events-none">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-purple-600 dark:hover:bg-purple-600 transition-colors duration-200 text-sm font-medium"
                  >
                    <FaGithub />
                    Code
                  </a>
                  {project.liveSiteLink && (
                    <a
                      href={project.liveSiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-200 text-sm font-medium"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
