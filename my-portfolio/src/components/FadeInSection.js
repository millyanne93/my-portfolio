import React, { useRef, useState, useEffect } from 'react';

const FadeInSection = ({ children }) => {
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
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
