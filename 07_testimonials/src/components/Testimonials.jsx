import React, { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This is the best Product I've ever used",
      author: "Mani Kandan",
    },
    {
      quote: "I highly recommended this product to everyone!",
      author: "Dhanya",
    },
    {
      quote: "This product has changed completely in my life",
      author: "Vignesh",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
    // (0 + 2) % 3
    console.log((currentIndex + testimonials.length - 1) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
    console.log((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="quote">{testimonials[currentIndex].quote}</div>
      <div className="author">- {testimonials[currentIndex].author}</div>
      <testimonials className="nav">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </testimonials>
    </div>
  );
};

export default Testimonials;
