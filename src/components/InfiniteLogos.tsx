import React from 'react';

const logos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Netflix_icon.svg/1200px-Netflix_icon.svg.png",
    alt: "Netflix"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
    alt: "Amazon"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    alt: "Google"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png",
    alt: "Meta"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/BBC_logo_white.svg/1200px-BBC_logo_white.svg.png",
    alt: "BBC"
  }
];

const InfiniteLogos = () => {
  return (
    <div className="bg-gray-50 py-16 overflow-hidden">
      <div className="relative">
        <div className="flex space-x-16 animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-none w-32 h-20 flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogos;