import React from 'react';

const Features = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-3xl font-bold mb-6">Generate video scripts to simplify your content creation</h3>
            <p className="text-gray-600 leading-relaxed">
              VEED features a handy <a href="#" className="text-blue-600 hover:underline">AI script generator</a> that can provide compelling video scripts for your AI animations. Just type a prompt and get your AI-generated script in seconds. Our artificial intelligence software will work its magic and you can go straight to our video editor to create your content! You can even use <a href="#" className="text-blue-600 hover:underline">AI avatars</a> to present information on your videos.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-3xl font-bold mb-6">Create video animations with dialogues using text to voice</h3>
            <p className="text-gray-600 leading-relaxed">
              Add dialogues to your animated videos. Convert text to voiceovers and narrations using VEED's AI text-to-speech tool. Select from several voice profiles, languages, and accents. No need to manually record your voice or hire voice actors! Add seamless voiceovers using your voice profile with our <a href="#" className="text-blue-600 hover:underline">voice cloning</a> tool.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-3xl font-bold mb-6">Complete suite of AI tools for your animated videos</h3>
            <p className="text-gray-600 leading-relaxed">
              The magic doesn't stop in our AI tools! VEED features a full range of video editing tools that let you create professional-looking videos without having to go through confusing configurations. Translate spoken audio using our <a href="#" className="text-blue-600 hover:underline">voice dubber</a>. Add instant narrations using our AI voice generator. With our intuitive timeline, snap-to-grid, and drag-and-drop interface, you can streamline your content creation process.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
            <span>Create an animated video</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;