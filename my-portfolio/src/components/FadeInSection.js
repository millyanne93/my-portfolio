import React, { useRef, useState, useEffect } from 'react';
import 'intersection-observer';

const FadeInSection = ({ children, delay }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log(entry.isIntersecting); // Debugging line
        setVisible(entry.isIntersecting);
      });
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    // Cleanup function to disconnect the observer
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current); // Unobserve the element
      }
      observer.disconnect(); // Disconnect the observer
    };
  }, []); // Empty dependency array to run only on mount/unmount

  return (
    <div
      className={`fade-in-section ${isVisible ? 'visible' : ''}`}
      style={{
        transitionDelay: `${delay}ms`, // Add transition delay based on index or delay prop
      }}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
