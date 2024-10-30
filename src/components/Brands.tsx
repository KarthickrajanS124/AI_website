import React from 'react';

const Brands = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center items-center">
            <img
              className="h-12 opacity-50 hover:opacity-100 transition-opacity"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Netflix_icon.svg/1200px-Netflix_icon.svg.png"
              alt="Netflix"
            />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <img
              className="h-12 opacity-50 hover:opacity-100 transition-opacity"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
              alt="Amazon"
            />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <img
              className="h-12 opacity-50 hover:opacity-100 transition-opacity"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="Google"
            />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <img
              className="h-12 opacity-50 hover:opacity-100 transition-opacity"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png"
              alt="Meta"
            />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <img
              className="h-12 opacity-50 hover:opacity-100 transition-opacity"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/BBC_logo_white.svg/1200px-BBC_logo_white.svg.png"
              alt="BBC"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;