import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import local images for testimonials
import metrineImage from "../assets/images/metrine.jpg";
import graceImage from "../assets/images/grace.jpg";
import jackiyaImage from "../assets/images/jackiya.jpg";

// Timeline Component
const TimelineItem = ({ year, title, company, description }) => (
  <div className="relative mb-8 flex items-start">
    <div className="w-10 h-10 bg-purple-600 text-gray-800 dark:text-white flex items-center justify-center rounded-full font-bold text-lg">
      {year}
    </div>
    <div className="ml-6 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
      <h4 className="text-md font-semibold text-purple-600">{company}</h4>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  </div>
);

// Experience Data
const experienceTimeline = [
  {
    year: "2024",
    title: "Full-Stack Developer",
    company: "Freelance",
    description:
      "Developing and maintaining web applications for clients, focusing on modern frontend and backend technologies.",
  },
  {
    year: "2023",
    title: "Software Engineering Program",
    company: "ALX Africa",
    description:
      "Completed an intensive software engineering program covering full-stack development, DevOps, and cloud computing.",
  },
  {
    year: "2021 - 2023",
    title: "Gen AI Data Labeling",
    company: "Clickworker/Remotasks",
    description:
      "Annotated and labeled data to train AI models for media relevance, search optimization, and text analysis, ensuring high-quality datasets for machine learning applications.",
  },
  {
    year: "2018-2021",
    title: "Sales & Business Development",
    company: "AmoebaX Ltd",
    description:
      "Led sales initiatives and customer relations, leveraging technology to enhance operational efficiency.",
  },
];

// Testimonial Data (Now using local images)
const testimonials = [
  {
    id: 1,
    quote:
      "Millyanne is an outstanding developer with exceptional problem-solving skills. She collaborates well with teams and delivers high-quality work.",
    author: "Metrine Makana",
    role: "Software Engineer | AWS Cloud Practitioner",
    rating: 5,
    image: metrineImage,
  },
  {
    id: 2,
    quote:
      "Her patience, interpersonal skills, and dedication led to a promotion to sales and distribution manager. Highly recommended!",
    author: "Grace Ngina",
    role: "Former Manager at AmoebaX Ltd",
    rating: 4,
    image: graceImage,
  },
  {
    id: 3,
    quote:
      "Hardworking and reliable, she always prioritized customer satisfaction. A great team player and highly professional!",
    author: "Jackiya Tiliareng",
    role: "Customer Service | Travel Consultant | Business Development",
    rating: 5,
    image: jackiyaImage,
  },
];

const Experience = () => {
  const [showTimeline, setShowTimeline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTimeline(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Slick Slider Settings for Testimonials
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section id="experience" className="min-h-screen py-12 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Experience Timeline */}
        <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-700 mb-6 cursor-pointer hover:text-purple-500">
          Experience Timeline
        </h2>
        <div className="border-l-4 border-purple-500 pl-4">
          {experienceTimeline.map((exp, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-in-out ${
                showTimeline ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <TimelineItem {...exp} />
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <h2 className="text-3xl font-bold text-white mt-12 mb-6 cursor-pointer hover:text-purple-700">
          Testimonials
        </h2>
        <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="text-center p-6">
                <FaQuoteLeft className="text-4xl text-purple-600 mx-auto mb-4" />
                <p className="text-gray-600 text-lg mb-4">"{testimonial.quote}"</p>
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-20 h-20 rounded-full mx-auto mb-2"
                />
                <h4 className="text-gray-800 dark:text-white font-bold">{testimonial.author}</h4>
                <p className="text-purple-600">{testimonial.role}</p>
                <div className="flex justify-center mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-yellow-400 ${
                        i < testimonial.rating ? "opacity-100" : "opacity-50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Experience;
