import React from 'react';

const articles = [
  {
    title: "6 Best AI Avatar Generators in 2024 (The Only List You'll Need)",
    description: "Searching for the best AI avatar generator? We got you. Check out this expert round-up of the must-try generators out there.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    title: "8 Best AI Voice Generators to Try in 2024",
    description: "Searching for the best AI voice generator? We tested the top ones so you don't have to. Check out our comprehensive reviews of the best AI voice generators in this listicle.",
    image: "https://images.unsplash.com/photo-1576826862199-c1f9a5c31c83?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "VEED AI Principles: The Philosophy Guiding Us into the Future",
    description: "Learn all about the principles that guide us at VEED about the responsible use of artificial intelligence technologies in this post.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    gradient: "from-cyan-500 to-blue-500"
  }
];

const MoreFromVeed = () => {
  return (
    <div className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-12 text-center">MORE FROM VEED</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {articles.map((article, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-gray-800 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <div className={`absolute inset-0 bg-gradient-to-r ${article.gradient} opacity-75`}></div>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{article.title}</h3>
                <p className="text-gray-400">{article.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-5xl font-bold mb-4">
            When it comes to<br />amazing videos, all you<br />need is VEED
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MoreFromVeed;