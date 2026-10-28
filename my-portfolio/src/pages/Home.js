import React from "react";
import { Code, Network } from "lucide-react";
import { FaLinkedin, FaTwitter, FaBriefcase, FaEnvelope, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative flex items-center justify-center min-h-screen px-6">
        <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center">
          {/* MW Monogram */}
          <div className="md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0">
            <div className="rounded-full w-56 h-56 flex items-center justify-center border-4 border-purple-600 bg-purple-600">
              <span className="text-6xl font-bold text-white">MW</span>
            </div>
          </div>

          {/* Hero Text */}
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-400 mb-4">
              I build dependable backend systems that survive real-world failures.
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I build and deploy reliable APIs with authentication, AI integration, and cloud infrastructure.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex justify-center md:justify-start space-x-6">
              <a href="https://www.linkedin.com/in/millyanne-wanjala-5365306b/" target="_blank" rel="noopener noreferrer"
                 className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                 aria-label="LinkedIn">
                <FaLinkedin size={26} />
              </a>
              <a href="https://www.twitter.com/millyanne254" target="_blank" rel="noopener noreferrer"
                 className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                 aria-label="Twitter">
                <FaTwitter size={26} />
              </a>
              <a href="https://www.upwork.com/freelancers/~018f1d860f073c0488" target="_blank" rel="noopener noreferrer"
                 className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                 aria-label="Upwork">
                <FaBriefcase size={26} />
              </a>
              <a href="mailto:nmillyanne20@gmail.com"
                 className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                 aria-label="Email">
                <FaEnvelope size={26} />
              </a>
              <a href="https://github.com/millyanne93" target="_blank" rel="noopener noreferrer"
                 className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                 aria-label="GitHub">
                <FaGithub size={26} />
              </a>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#projects"
                 className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
                View My Work
              </a>
              <a href="#contact"
                 className="inline-block px-8 py-3 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg font-medium hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-12 text-center">
            What I Build
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon={Code}
              title="API & Backend Services"
              description="I build secure, dependable APIs that handle authentication and return useful errors instead of crashes."
              features={["Express & TypeScript", "PostgreSQL & Supabase", "Authentication & authorization", "API documentation & testing"]}
            />
            <ServiceCard
              icon={Network}
              title="Cloud Infrastructure & DevOps"
              description="I design and deploy infrastructure on AWS using Kubernetes and Terraform, with automated CI/CD pipelines and secure networking."
              features={["AWS & Kubernetes", "Terraform (IaC)", "Docker & Helm", "CI/CD pipelines"]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon: Icon, title, description, features }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-8">
      <div className="flex justify-center items-center w-14 h-14 bg-purple-100 dark:bg-purple-900/40 rounded-full mb-6">
        <Icon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
