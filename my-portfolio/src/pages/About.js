import React, { useState, useRef, useEffect } from 'react';
import { animated, useSpring } from 'react-spring'; 
import { FaUser, FaGraduationCap, FaLaptopCode, FaBriefcase, FaHeart, FaHandshake } from 'react-icons/fa';

const Section = ({ title, icon: Icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  
  const [contentHeight, setContentHeight] = useState(0);
  
  // Use scrollHeight instead of getBoundingClientRect for reliable height calculation
  const expand = useSpring({
    height: isOpen ? contentHeight : 0,
    overflow: isOpen ? 'visible' : 'hidden', // Ensure overflow is hidden when collapsed
    config: { tension: 200, friction: 20 },
  });

  useEffect(() => {
    if (contentRef.current) {
      // Update content height on open/close and ensure all content is included
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, children]); // Recalculate height when children change

  return (
    <div className="mt-6">
      <h3
        className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center cursor-pointer hover:text-teal-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon className="mr-2" /> {title}
      </h3>
      <animated.div style={expand}>
        <div ref={contentRef} className="mt-4 text-black-700 dark:text-gray-300">
          {children}
        </div>
      </animated.div>
    </div>
  );
};

const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">

        {/* About Me Section */}
        <Section title="About Me" icon={FaUser}>
          <p>
            I am a passionate full-stack developer with a background in customer service and business development.
            My mission is to combine my technical expertise with a deep understanding of client needs to build seamless digital solutions.
          </p>
        </Section>

        {/* Education Section */}
        <Section title="Education" icon={FaGraduationCap}>
          <p>- Bachelor's in Information Sciences, Maasai Mara University</p>
          <p>- Software Engineering Program, African Leadership Experience</p>
          <p>- Fundamentals of Project Management, Coursera</p>
        </Section>

        {/* Technical Skills Section */}
        <Section title="Technical Skills" icon={FaLaptopCode}>
          <div className="space-y-4">
            <SkillBar skill="HTML, CSS, JavaScript" level="90%" />
            <SkillBar skill="React, Vue.js" level="80%" />
            <SkillBar skill="Node.js, Express, Django, Flask" level="85%" />
            <SkillBar skill="MongoDB, MySQL, SQLite" level="75%" />
            <SkillBar skill="Python, C, JavaScript" level="90%" />
            <SkillBar skill="Docker, Git, Postman, Trello" level="85%" />
          </div>
        </Section>

        {/* Experience Highlights Section */}
        <Section title="Experience Highlights" icon={FaBriefcase}>
          <ul className="space-y-4">
            <li>Developed a custom equipment tracking system for a mid-sized company, improving asset management efficiency by 30%.</li>
            <li>Built and deployed a task management app for freelance clients using React and Node.js, increasing project completion rates.</li>
            <li>Worked closely with clients to deliver user-centric web applications, from initial design to final deployment.</li>
          </ul>
        </Section>

        {/* Hobbies and Interests Section */}
        <Section title="Hobbies and Interests" icon={FaHeart}>
          <p>
            Outside of coding, I enjoy exploring new technology trends, traveling, and working on creative projects.
            I am also an avid reader and love to spend my free time volunteering for community projects.
          </p>
        </Section>

        {/* Let's Connect Section */}
        <Section title="Let's Connect" icon={FaHandshake}>
          <p>
            Interested in working together or just want to chat? Feel free to{' '}
            <a href="/contact" className="text-teal-500">reach out</a>.
          </p>
        </Section>

      </div>
    </section>
  );
};

// SkillBar component for dynamic skill bars
const SkillBar = ({ skill, level }) => {
  return (
    <div className="mb-4">
      <label className="text-black-700 dark:text-gray-300">{skill}</label>
      <div className="w-full bg-black-200 dark:bg-gray-700 rounded-full h-2">
        <div className="bg-teal-500 h-2 rounded-full" style={{ width: level }}></div>
      </div>
    </div>
  );
};

export default About;
