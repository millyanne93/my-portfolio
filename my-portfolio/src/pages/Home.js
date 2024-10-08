import React, { useState, useEffect } from 'react';
import profilePhoto from '../assets/images/profile-photo.jpg';

const Home = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Crafting', 'Digital', 'Experiences', 'with', 'Precision', 'and', 'Power'];

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const timeout = setTimeout(() => {
        setCurrentWordIndex(currentWordIndex + 1);
      }, 500); // Adjust the delay to control how fast each word appears (500ms here)
      return () => clearTimeout(timeout);
    }
  }, [currentWordIndex, words.length]);

  return (
    <section id="home" className="relative bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center justify-center">

        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
            <div className="md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0">
              <img
                src={profilePhoto}
                alt="Profile Photo"
                className="rounded-full w-64 h-64 object-cover shadow-lg"
              />
            </div>

            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-5xl font-bold text-[#A28DEC]">
                {words.slice(0, currentWordIndex).join(' ')}
              </h1>
              <p className="text-xl text-gray-500">
                I'm Millyanne, a Full-Stack Developer creating seamless web applications. Based in Kenya, I combine creativity with technology to build innovative solutions.
              </p>
              <a
                href="#projects"
                className="inline-block mt-6 px-8 py-3 bg-[#A28DEC] hover:bg-[#9687E3] text-white rounded-full transition-all duration-300"
              >
                See My Projects
              </a>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section className="w-full mt-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#A28DEC] cursor-pointer hover:text-[#A28DEC]">What I Do:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">

              {/* Service Box Component */}
              {[
                {
                  icon: "🌐",
                  title: "Web Development",
                  description: "I'll bring your ideas to life with responsive websites built using HTML, CSS, JavaScript, and React.",
                },
                {
                  icon: "💻",
                  title: "Backend Services",
                  description: "I ensure your system scales efficiently with robust and reliable backend architecture, tailored to meet your needs.",
                },
                {
                  icon: "⚙️",
                  title: "DevOps",
                  description: "Lets optimize your application deployment using CI/CD and cloud services.",
                },
                {
                  icon: "📱",
                  title: "Mobile App Development",
                  description: "I’ll help you enhance your mobile presence with responsive applications built using React Native and Flutter.",
                },
                {
                  icon: "🎨",
                  title: "UI/UX Design",
                  description: "I craft intuitive, user-focused interfaces to improve the overall user experience.",
                },
                {
                  icon: "🔍",
                  title: "SEO Optimization",
                  description: "I’ll help boost your online visibility and improve search engine rankings with effective SEO strategies.",
                },
              ].map((service, index) => (
                <div key={index} className="transition-transform transform hover:scale-105 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 w-full h-48 flex flex-col justify-between">
                  <div className="flex items-center mb-2">
                    <span className="text-3xl mr-4">{service.icon}</span>
                    <h3 className="text-xl font-bold text-black-700 dark:text-gray-300">{service.title}</h3>
                  </div>
                  <p className="text-base text-black-600 dark:text-gray-400 mt-1">
                    {service.description}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Home;
