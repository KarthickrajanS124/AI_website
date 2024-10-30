import React from 'react';

const Steps = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-20">
          HOW TO CONVERT TEXT TO ANIMATION:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "STEP 1",
              title: "Choose a style",
              description: "Choose the type of video you want to create. Our AI software generates videos with voices or talking avatars. And with the 'Generative AI' option, you can create animations in your preferred visual style."
            },
            {
              step: "STEP 2",
              title: "Customize",
              description: "Describe your video topic. Customize details like aspect ratio, presenter or voice, and subtitles. Edit the auto-generated script or type your own script."
            },
            {
              step: "STEP 3",
              title: "Generate animation",
              description: "Download your video or continue editing it in our video editor. You can change the music, stock footage, and animated text styles. Or add sound effects to your animation."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-sm font-semibold text-blue-600 mb-4">{item.step}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;