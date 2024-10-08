import React, { useEffect, useState } from 'react';
import { FaBriefcase, FaQuoteLeft } from 'react-icons/fa';

// Experience highlights data
const experienceHighlights = [
  {
    id: 1,
    title: 'Full-Stack Software Development',
    description: 'As a full-stack developer, I have led the design and development of scalable web applications, ensuring optimal performance and delivering user-friendly interfaces.',
  },
  {
    id: 2,
    title: 'Transition from Business to Tech',
    description: 'Leveraging over 3 years of experience in business development and sales, I have seamlessly transitioned into software engineering, applying cross-disciplinary skills to build innovative solutions.',
  },
  {
    id: 3,
    title: 'Mentorship and Team Collaboration',
    description: 'I have provided mentorship and technical guidance, reviewing code for junior student developers and collaborating within teams to foster a culture of learning and improvement.',
  },
  {
    id: 4,
    title: 'Project Leadership & Agile Management',
    description: 'As a project leader, I have managed end-to-end development cycles, utilizing Agile methodologies to ensure timely delivery, team collaboration, and continuous process improvement.',
  },
];

// Testimonial data (manual entry)
const testimonials = [
  {
    id: 1,
    quote: 'I had the pleasure of working with Millyanne during our software engineering program, and I was consistently impressed by her technical skills and excellent communication. She excels in problem-solving and can explain complex concepts in a clear, approachable way. Her ability to collaborate with both technical and non-technical team members makes her an outstanding team player. Driven, detail-oriented, and always eager to learn, Millyanne is sure to succeed in any software engineering role. I highly recommend her.',
    author: 'Metrine Makana, Software Engineer | AWS Cloud Practitioner',
    link: 'https://www.linkedin.com/in/millyanne-wanjala-5365306b/details/recommendations/',
  },
  {
    id: 2,
    quote: `It is with pleasure that I recommend Millyanne Wanjala, who worked at AmoebaX Ltd as a sales and customer success representative. 
    Her patience, interpersonal skills, and dedication led to a promotion to sales and distribution manager. Millyanne has shown remarkable growth and 
    commitment to achieving company goals, earning her a positive reputation among customers.`,
    author: 'Grace Ngina, Former Manager at AmoebaX Ltd',
  },
  // Add more testimonials 
];

const Experience = () => {
  const [showTestimonials, setShowTestimonials] = useState(false);

  // This effect will trigger the testimonials to show with an animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTestimonials(true);
    }, 300); // delay for a nice effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="experience" className="min-h-screen py-12 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Experience Highlights Section */}
        <h2 className="text-3xl font-bold text-white mb-6 cursor-pointer hover:text-[#A28DEC]">
          Experience Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceHighlights.map((experience) => (
            <div
              key={experience.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                <FaBriefcase className="mr-2 text-[#A28DEC]" /> {experience.title}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{experience.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <h2 className="text-3xl font-bold text-white mt-12 mb-6 cursor-pointer hover:text-[#A28DEC]">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`bg-gray-700 dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform duration-500 ease-in-out ${
                showTestimonials ? 'translate-x-0 opacity-100' : 'translate-x-[-100%] opacity-0'
              }`}
              style={{
                transition: 'transform 0.5s, opacity 0.5s',
                transform: showTestimonials ? 'translateX(0)' : 'translateX(-100%)',
                opacity: showTestimonials ? 1 : 0,
              }}
            >
              <p className="text-base text-gray-300">
                <FaQuoteLeft className="mr-2 text-[#A28DEC]" /> "{testimonial.quote}"
              </p>
              <p className="mt-4 text-lg font-bold text-gray-300">
                - {testimonial.author}
                <a
                  href={testimonial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A28DEC] hover:underline ml-2"
                >
                  (LinkedIn)
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
