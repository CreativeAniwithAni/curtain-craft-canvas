
import React from 'react';
import { Shield, Volume2, Factory } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Industrial Soundproof Curtains for 
              <span className="text-yellow-400"> Noise Control</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              Reduce workplace noise by up to 15dB with our heavy-duty acoustic barrier curtains. 
              Perfect for manufacturing facilities, warehouses, and industrial environments.
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-yellow-400" />
                <span>OSHA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-yellow-400" />
                <span>15dB Reduction</span>
              </div>
              <div className="flex items-center gap-2">
                <Factory className="w-5 h-5 text-yellow-400" />
                <span>Industrial Grade</span>
              </div>
            </div>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
              Get Free Quote
            </button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 mb-4">
                <h3 className="text-2xl font-bold mb-4">Noise Reduction Results</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Manufacturing Floor</span>
                    <span className="font-bold text-yellow-300">-12dB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Warehouse Operations</span>
                    <span className="font-bold text-yellow-300">-15dB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Equipment Enclosures</span>
                    <span className="font-bold text-yellow-300">-18dB</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">85%</div>
                <div className="text-sm">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
