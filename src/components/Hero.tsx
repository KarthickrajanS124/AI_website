import { Wand2 } from 'lucide-react';
import '../index.css';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-100"
          src="https://cdn-site-assets.veed.io/TTV_All_Desktop_31c1f2b433/TTV_All_Desktop_31c1f2b433.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <div className="main-text">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 text-white mb-8 ">
              TEXT TO ANIMATION
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
            An AI animation generator with text-to-video, text-to-voice, stock
            footage, background music, and more!
          </p>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6">
            <div className="space-y-4">
              <div className="flex space-x-4">
                <button className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200">
                  Social media
                </button>
                <button className="px-4 py-2 rounded-full hover:bg-gray-100">
                  Business
                </button>
                <button className="px-4 py-2 rounded-full hover:bg-gray-100">
                  Training
                </button>
                <button className="px-4 py-2 rounded-full hover:bg-gray-100">
                  Other
                </button>
              </div>

              <textarea
                className="w-full h-32 p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe your topic..."
              ></textarea>

              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <button className="text-gray-600 hover:text-gray-900">
                    Viral TikTok Videos
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    Product Demo Video
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    History of Rome
                  </button>
                </div>
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
                  <Wand2 className="w-5 h-5" />
                  <span>Generate video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
