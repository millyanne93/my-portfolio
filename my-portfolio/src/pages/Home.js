import React, { useState, useEffect } from "react";
import { Code, Database, PenTool, ServerCog, Smartphone } from "lucide-react"; // Icons for services
import { FaLinkedin, FaTwitter, FaBriefcase, FaEnvelope, FaGithub } from "react-icons/fa"; // Social media icons

const Home = () => {
  const phrases = [
    "Full-Stack Mobile Developer",
    "Building Apps That Matter",
    "Crafting Seamless User Experiences",
    "Turning Vision Into Reality",
  ];
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
      typeSpeed = 1500;
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      typeSpeed = 500;
    }

    const timer = setTimeout(() => {
      setText(currentPhrase.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prevCharIndex) => prevCharIndex + (isDeleting ? -1 : 1));
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white min-h-screen">
      {/* Hero Section with MW Avatar */}
      <section id="home" className="relative flex items-center justify-center min-h-screen px-6">
        <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center">
          {/* MW Avatar (Replaces Photo) */}
          <div className="md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0">
            <div className="rounded-full w-64 h-64 flex items-center justify-center shadow-2xl border-4 border-purple-500 transform transition-all hover:scale-105 duration-300 bg-gradient-to-br from-purple-500 to-indigo-600">
              <span className="text-7xl font-bold text-white">MW</span>
            </div>
          </div>

          {/* Hero Text */}
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-5xl font-bold text-purple-700 mb-4">
              {text}
              <span className="border-r-2 border-purple-500 animate-blink">&nbsp;</span>
            </h1>
            <p className="text-xl text-gray-800 dark:text-gray-100 leading-relaxed">
              Hello there, I'm Millyanne Wanjala, an <strong>Android & Full-Stack Developer</strong> building modern
              mobile applications with Kotlin and MVVM, alongside scalable web and cloud solutions.
            </p>

            {/* Social Media Links */}
            <div className="mt-6 flex justify-center md:justify-start space-x-6">
              <a
                href="https://www.linkedin.com/in/millyanne-wanjala-5365306b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.twitter.com/millyanne254"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~018f1d860f073c0488"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                <FaBriefcase size={30} />
              </a>
              <a
                href="mailto:nmillyanne20@gmail.com"
                className="text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                <FaEnvelope size={30} />
              </a>
              <a
                href="https://github.com/millyanne93"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                <FaGithub size={30} />
              </a>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full transition-all shadow-lg hover:shadow-purple-500/50"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="inline-block px-8 py-3 border-2 border-purple-500 text-purple-500 rounded-full transition-all hover:bg-purple-500 hover:text-white"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-purple-700 mb-12">Skills & Technologies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Android Development */}
            <ServiceCard
              icon={Smartphone}
              title="Android Development"
              description="I build modern Android applications using Kotlin and clean architecture principles."
              features={[
                "Kotlin & Android SDK",
                "MVVM Architecture",
                "Room Database",
                "Material Design 3",
              ]}
            />

            {/* Web Development */}
            <ServiceCard
              icon={Code}
              title="Web Development"
              description="I create stunning and responsive web applications using modern frameworks."
              features={["Custom Website Design", "Responsive Layouts", "Modern Frameworks"]}
            />

            {/* Backend Services */}
            <ServiceCard
              icon={Database}
              title="Backend Services"
              description="I build robust and scalable backend architectures for seamless data management."
              features={["API Development", "Database Optimization", "Server Management"]}
            />

            {/* DevOps Services */}
            <ServiceCard
              icon={ServerCog}
              title="DevOps Services"
              description="Automating software deployment and optimizing infrastructure for reliability."
              features={["CI/CD Pipelines", "Infrastructure as Code (IaC)", "Monitoring & Logging"]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// Service Card Component with Icons (Request Quote button removed)
const ServiceCard = ({ icon: Icon, title, description, features }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg p-8 transition-transform transform hover:-translate-y-3 hover:shadow-purple-500/50">
      <div className="flex justify-center items-center w-16 h-16 bg-purple-700 rounded-full mb-6">
        <Icon className="w-10 h-10 text-white" />
      </div>
      <h3 className="text-2xl font-semibold text-purple-900 dark:text-white mb-4">{title}</h3>
      <p className="text-gray-700 dark:text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3 text-gray-600 dark:text-gray-400">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="w-5 h-5 mr-2 bg-purple-500 text-white flex items-center justify-center rounded-full text-xs">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
