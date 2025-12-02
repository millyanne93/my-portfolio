import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaBriefcase, FaEnvelope, FaGithub } from "react-icons/fa";

const FloatingLabelInput = ({ id, label, type = "text", value, onChange, required }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(value !== "");

  return (
    <div className="relative mb-4">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => {
          setHasValue(e.target.value !== "");
          onChange(e);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(value !== "")}
        className="w-full pt-5 pb-2 px-3 border border-gray-300 dark:border-gray-600 rounded-lg peer bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
        required={required}
      />
      <label
        htmlFor={id}
        className={`absolute left-3 transition-all duration-200 ${
          isFocused || hasValue ? "text-sm text-purple-500 top-1" : "text-base text-gray-400 top-3"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulate sending delay
    setTimeout(() => {
      if (formData.name && formData.email.includes("@") && formData.message.length > 5) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Please fill in all fields correctly.");
      }
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-800 px-6">
      <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-700 mb-6">Let's Connect</h2>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
        <FloatingLabelInput id="name" label="Name" value={formData.name} onChange={handleChange} required />
        <FloatingLabelInput id="email" label="Email" type="email" value={formData.email} onChange={handleChange} required />
        <FloatingLabelInput id="message" label="Message" type="text" value={formData.message} onChange={handleChange} required />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 mt-4 rounded-lg text-white font-semibold transition-all duration-300 ${
            isSubmitting ? "bg-gray-500 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Social Media Icons */}
      <div className="mt-8 flex space-x-6">
        <a href="https://www.linkedin.com/in/millyanne-wanjala-5365306b/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white hover:text-purple-600">
          <FaLinkedin size={30} />
        </a>
        <a href="https://www.twitter.com/millyanne254" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white hover:text-purple-600">
          <FaTwitter size={30} />
        </a>
        <a href="https://www.upwork.com/freelancers/~018f1d860f073c0488" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white hover:text-purple-600">
          <FaBriefcase size={30} />
        </a>
        <a href="mailto:nmillyanne20@gmail.com" className="text-gray-700 dark:text-white hover:text-purple-600">
          <FaEnvelope size={30} />
        </a>
        <a href="https://github.com/millyanne93" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white hover:text-purple-600">
          <FaGithub size={30} />
        </a>
      </div>

      {/* Availability & Response Time */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-white mb-2">Availability & Response Time</h3>
        <p className="text-gray-400">Monday - Friday: 9 AM - 6 PM (GMT+3)</p>
        <p className="text-gray-400">Typical response time: Within 24 hours</p>
      </div>
    </section>
  );
};

export default Contact;
