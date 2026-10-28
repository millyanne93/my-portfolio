import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectData = [
	  {
		      title: "PlanIt",
		      subtitle: "Cloud-native task management deployed on AWS EKS",
		      techStack: ["React", "Flask", "MongoDB", "AWS", "Terraform", "Kubernetes", "Docker", "Helm"],
		      githubLink: "https://github.com/millyanne93/PlanIt",
		      liveSiteLink: null,
		      problem:
		        "Self-directed project, not a client or business need. I wanted hands-on experience deploying a real application to production-grade cloud infrastructure, Kubernetes, AWS, Docker, and Terraform, instead of only reading about them.",
		      whatIDid:
		        "Containerized the frontend, backend, and database with Docker, then deployed the full stack to AWS EKS. Used Terraform to provision infrastructure as code and Helm charts to manage Kubernetes deployments. Set up CI with GitHub Actions. Monitoring and logging (Prometheus/Grafana) were planned but not completed before the project was taken down.",
		      result:
		        "The application deployed and ran successfully on EKS. No performance metrics were captured, since the deployment was intentionally torn down after verifying it worked, to avoid ongoing AWS costs. The infrastructure code remains in the repository and can be redeployed.",
		      learnings:
		        "Database passwords generated dynamically by Terraform changed on every terraform apply, I'd use AWS Secrets Manager instead. I also got billed after terraform destroy because EBS volumes persisted; I'd now add explicit lifecycle rules to ensure storage is destroyed with the rest of the stack. I'd also set up monitoring and logging from the start rather than leaving it for later.",
		    },
	  {
		      title: "EduAdapt",
		      subtitle: "AI-powered adaptive learning platform",
		      techStack: ["Node.js", "React", "MongoDB", "Gemini AI"],
		      githubLink: "https://github.com/millyanne93/eduadapt",
		      liveSiteLink: null,
		      problem:
		        "Graduation project for my ALX Backend Specialization. Students often struggle to find practice questions matched to their actual level of understanding, most platforms either give generic questions or adapt using metrics too simple to capture real gaps in knowledge. I wanted to explore whether AI could generate questions targeted at a student's specific weaknesses.",
		      whatIDid:
		        "Built a backend API where teachers generate questions using the Gemini API, students take tests and receive feedback, and access is role-based (teacher vs. student). Generated questions are stored in MongoDB with content, options, difficulty level, and topic. The backend was tested with a small pilot group of 5-10 students, 2 teachers. The frontend is still in development and not yet deployed.",
		      result:
		        "API response time for question generation: 2-5 seconds per set. Role-based auth, question generation, and test-taking all function correctly in the pilot. No production usage data beyond the pilot group yet.",
		      learnings:
		        "I embedded Gemini API calls directly into the main backend. When Google updated the API, the integration broke and I had to chase changes across the codebase. I'd decouple AI calls into their own microservice next time, so it's easier to update and test in isolation. I also hit Gemini's rate limits under load when requesting 20-30 questions at once, and should have designed around that constraint earlier instead of discovering it live. I built breadth before deployability, I'd aim for a deployable MVP first instead.",
		    },
	  {
		      title: "Trackr",
		      subtitle: "Equipment tracking system for small businesses",
		      techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
		      githubLink: "https://github.com/millyanne93/trackr",
		      liveSiteLink: "https://trackr-kd45.vercel.app/",
		      problem:
		        "Someone in a group chat asked if a tool existed for tracking business equipment. Small businesses often rely on spreadsheets or paper logs, while enterprise tracking tools are too expensive and complex for their scale. Trackr fills that middle ground; simple, affordable equipment tracking for small businesses.",
		      whatIDid:
		        "Built a full web app with authentication, role-based access (admin vs. regular user), equipment assignment and tracking, borrowing history, and real-time status updates.",
		      result:
		        "Fully deployed and publicly accessible. No active production users yet, but the live demo is verifiable,anyone can visit and use it directly, unlike PlanIt or EduAdapt.",
		      learnings:
		        "I wrote the dashboard before planning component structure, which led to a large, tightly coupled codebase that made bugs hard to trace. I'd design the frontend architecture before writing code next time. I also found a bug where new users hit an error because the history endpoint expected populated data and got an empty array; I'm fixing this by returning empty arrays instead of 404s, so the frontend can show a proper 'no history yet' state instead of failing.",
		    },
];

const ProjectSection = ({ label, children }) => (
	  <div className="mb-4">
	    <h4 className="text-xs font-semibold text-purple-700 dark:text-purple-400 uppercase tracking-wide mb-1">
	      {label}
	    </h4>
	    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{children}</p>
	  </div>
);

const ProjectCard = ({ project, featured }) => (
	  <div
	    className={`bg-white dark:bg-gray-800 rounded-xl border ${
		          featured ? "border-purple-300 dark:border-purple-700" : "border-gray-200 dark:border-gray-700"
		        } p-8`}
	  >
	    <div className="flex items-start justify-between mb-1">
	      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
	      {featured && (
		              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">
		                Featured
		              </span>
		            )}
	    </div>
	    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{project.subtitle}</p>

	    <ProjectSection label="Problem">{project.problem}</ProjectSection>
	    <ProjectSection label="What I Did">{project.whatIDid}</ProjectSection>
	    <ProjectSection label="Result">{project.result}</ProjectSection>
	    <ProjectSection label="Learnings">{project.learnings}</ProjectSection>

	    {/* Tech Stack */}
	    <div className="flex flex-wrap gap-2 my-6">
	      {project.techStack.map((tech) => (
		              <span
		                key={tech}
		                className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
		              >
		                {tech}
		              </span>
		            ))}
	    </div>

	    {/* Links */}
	    <div className="flex gap-3">
	      <a
	        href={project.githubLink}
	        target="_blank"
	        rel="noopener noreferrer"
	        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-purple-600 dark:hover:bg-purple-600 transition-colors text-sm font-medium"
	      >
	        <FaGithub />
	        Code
	      </a>
	      {project.liveSiteLink && (
		              <a
		                href={project.liveSiteLink}
		                target="_blank"
		                rel="noopener noreferrer"
		                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white transition-colors text-sm font-medium"
		              >
		                <FaExternalLinkAlt className="text-xs" />
		                Live Demo
		              </a>
		            )}
	    </div>
	  </div>
);

const Projects = () => {
	  return (
		      <section id="projects" className="min-h-screen py-16 bg-gray-50 dark:bg-gray-900">
		        <div className="max-w-4xl mx-auto px-6">
		          {/* Header */}
		          <div className="text-center mb-12">
		            <h2 className="text-4xl font-bold text-purple-700 dark:text-purple-400 mb-3">
		              Projects
		            </h2>
		            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
		              My projects
		            </p>
		          </div>

		          {/* Case Studies */}
		          <div className="space-y-8">
		            {projectData.map((project, index) => (
				                <ProjectCard key={project.title} project={project} featured={false} />
				              ))}
		          </div>
		        </div>
		      </section>
		    );
};

export default Projects;
