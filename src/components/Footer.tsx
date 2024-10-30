import React from 'react';
import { Twitter, Youtube, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="hover:text-white">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white">
            <Youtube className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white">
            <Instagram className="w-6 h-6" />
          </a>
          {/* <a href="#" className="hover:text-white"><TikTok className="w-6 h-6" /></a> */}
          <a href="#" className="hover:text-white">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="text-white font-semibold mb-4">Video Editor</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Add Music to Video
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Add Subtitles to Video
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Add Text to Video
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Audio to Text
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Video Caption Generator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Video Compressor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Video Converter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Video to Text
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Video Translator
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">AI Tools</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  AI Avatars
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  AI Image Generator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  AI Video
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  AI Voice Generator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Eye Contact AI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Remove Background Noise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Text to Speech Video
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Voice Dubber
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Enterprise
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  VEED Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Articles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Video Guides
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Media Enquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-white text-3xl font-bold mr-4">VEED</div>
            <p className="text-sm">
              The easy way to create stunning videos, add subtitles and grow
              your audience.
            </p>
          </div>
          <div className="text-sm">
            © Copyright 2024 VEED
            <button className="ml-4 text-gray-400 hover:text-white">
              Cookies Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
