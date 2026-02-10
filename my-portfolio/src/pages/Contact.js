import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const contactLinks = [
    {
      icon: <FaLinkedin className="text-4xl mb-3" />,
      label: "LinkedIn",
      description: "Professional profile & experience",
      href: "https://www.linkedin.com/in/millyanne-wanjala-5365306b/",
      external: true,
    },
    {
      icon: <FaEnvelope className="text-4xl mb-3" />,
      label: "Email",
      description: "nmillyanne20@gmail.com",
      href: "mailto:nmillyanne20@gmail.com?subject=Hello%20Millyanne",
      external: false,
    },
    {
      icon: <FaGithub className="text-4xl mb-3" />,
      label: "GitHub",
      description: "Code, projects & contributions",
      href: "https://github.com/millyanne93",
      external: true,
    },
    {
      icon: <FaTwitter className="text-4xl mb-3" />,
      label: "Twitter",
      description: "@millyanne254",
      href: "https://www.twitter.com/millyanne254",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-800 px-6 py-20"
    >
      <h2 className="text-3xl font-bold text-purple-700 mb-4">
        Let’s Connect
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mb-10 text-center max-w-xl">
        I’m open to Android development roles, full-stack opportunities, and
        technical collaborations. Feel free to reach out through any of the
        platforms below.
      </p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
          >
            <div className="text-purple-600">{link.icon}</div>

            <h3 className="font-semibold text-gray-900 dark:text-white">
              {link.label}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 break-all">
              {link.description}
            </p>
          </a>
        ))}
      </div>

      {/* Availability */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          Availability
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Monday – Friday · 9 AM – 6 PM (GMT+3)
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Typical response time: within 24 hours
        </p>
      </div>
    </section>
  );
};

export default Contact;
