import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "VEED has been game-changing. It's allowed us to create gorgeous content for social promotion and ad units with ease.",
    author: "Max Alfer",
    position: "Director of Audience Development",
    company: "NBCUniversal",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/NBC_Universal_logo.svg/200px-NBC_Universal_logo.svg.png"
  },
  {
    quote: "I love using VEED. The subtitles are the most accurate I've seen on the market. It's helped take my content to the next level.",
    author: "Laura Haleydt",
    position: "Brand Marketing Manager",
    company: "Carlsberg Importers",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Carlsberg_Group_logo.svg/200px-Carlsberg_Group_logo.svg.png"
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">LOVED BY CREATORS.</h2>
          <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            LOVED BY THE FORTUNE 500
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-between items-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 -translate-x-1/2 bg-white rounded-full p-4 shadow-lg hover:bg-gray-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 ${
                    index === currentSlide ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
                  }`}
                >
                  <div className="mb-6">
                    <p className="text-2xl font-medium mb-8">{testimonial.quote}</p>
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                        <p className="text-sm text-gray-600">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                  <img
                    src={testimonial.logo}
                    alt={testimonial.company}
                    className="h-8 object-contain"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 translate-x-1/2 bg-white rounded-full p-4 shadow-lg hover:bg-gray-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;