
import React from 'react';
import { Zap, Wrench, Recycle, Award } from 'lucide-react';

const ProductOverview = () => {
  const features = [
    {
      icon: Zap,
      title: "Superior Sound Absorption",
      description: "Our quilted vinyl curtains feature high-density foam cores that effectively absorb and dampen industrial noise, creating quieter work environments."
    },
    {
      icon: Wrench,
      title: "Easy Installation",
      description: "Track-mounted system allows for quick installation and flexible positioning. No specialized tools required - perfect for temporary or permanent applications."
    },
    {
      icon: Recycle,
      title: "Durable Materials",
      description: "Heavy-duty 18oz vinyl construction withstands industrial environments, chemicals, and daily wear while maintaining acoustic properties."
    },
    {
      icon: Award,
      title: "OSHA Compliance",
      description: "Meets all safety regulations for workplace noise control, helping you maintain a compliant and safe working environment for your team."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Soundproof Industrial Curtains?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engineered for industrial environments, our acoustic barrier curtains provide 
            effective noise control while maintaining operational flexibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Technical Specifications
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Material:</span>
                  <span>18oz Quilted Vinyl</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Noise Reduction:</span>
                  <span>Up to 15dB</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Temperature Range:</span>
                  <span>-20°F to 180°F</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Fire Rating:</span>
                  <span>NFPA 701 Compliant</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Warranty:</span>
                  <span>5 Years</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Applications</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Manufacturing equipment enclosures</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Warehouse noise barriers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Office space separation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Construction site barriers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
