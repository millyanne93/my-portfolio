import React, { useRef, useState, useEffect } from 'react';

const FadeInSection = ({ children, delay }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => observer.disconnect();
  }, []);

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
