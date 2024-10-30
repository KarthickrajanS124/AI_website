import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Which AI tool converts text to video animations?",
      answer: "VEED's AI text-to-video tool converts your text into professional animated videos. Simply input your text, choose your preferences, and let our AI create a video for you."
    },
    {
      question: "How do I convert text to video?",
      answer: "Converting text to video with VEED is simple: 1) Enter your text or script 2) Choose your preferred style and settings 3) Let our AI generate your video 4) Edit and customize as needed."
    },
    {
      question: "What types of animations can I create with VEED?",
      answer: "With VEED, you can create various types of animations including explainer videos, social media content, educational materials, product demos, and more. Our AI tools support multiple animation styles and formats."
    },
    {
      question: "Is there a limit to how much text I can convert to speech?",
      answer: "While there are some practical limits, VEED can handle most standard script lengths. For optimal results, we recommend breaking longer content into smaller segments."
    }
  ];

  const tools = [
    "AI Ad Generator", "AI Animation Generator", "AI Art Video Generator", "AI Commercial Generator", 
    "AI Marketing Video Generator", "AI Movie Generator", "AI Music Video Generator", "AI Reel Generator",
    "AI Stock Video Generator", "AI Text to Video", "AI Video Editor", "AI Video Generator",
    "AI Video Maker", "AI Visual Generator", "AI YouTube Video Maker", "Animate from Audio",
    "Article to Video", "Blog to Video", "Faceless Videos", "Idea to Video",
    "Script to Video", "TikTok Video Generator", "Video Generators", "YouTube Shorts Maker"
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-12">FAQ</h2>
        
        <div className="space-y-4 mb-20">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <Plus className={`w-5 h-5 transform transition-transform ${
                  openIndex === index ? 'rotate-45' : ''
                }`} />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-4xl font-bold mb-8">DISCOVER MORE</h2>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <a
                key={index}
                href="#"
                className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors"
              >
                {tool}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;