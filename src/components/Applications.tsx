
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Applications = () => {
  const applications = [
    {
      title: "Manufacturing Floor Noise Control",
      description: "Heavy-duty soundproof curtains designed to reduce noise pollution from manufacturing equipment, assembly lines, and production machinery. Create quieter work environments while maintaining operational efficiency.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      features: ["Sound absorption up to 85%", "Fire-resistant materials", "Easy installation system"]
    },
    {
      title: "Industrial Warehouse Sound Barriers",
      description: "Flexible acoustic curtain solutions for warehouse environments to control noise from forklifts, conveyor systems, and loading dock operations. Ideal for creating noise zones and protecting workers.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
      features: ["Portable and adjustable", "Weather resistant", "High durability rating"]
    },
    {
      title: "Power Plant & Energy Facility Acoustic Control",
      description: "Specialized soundproof curtains engineered for power generation facilities, compressor stations, and energy plants. Meets strict industrial safety and environmental noise regulations.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=300&fit=crop",
      features: ["OSHA compliant", "Temperature resistant", "Anti-static properties"]
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Industrial Applications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our specialized soundproof curtain solutions designed for specific 
            industrial applications and safety requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={app.image} 
                  alt={app.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {app.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {app.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {app.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-gradient-to-r from-red-800 to-red-900 hover:from-red-900 hover:to-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group">
                  More Info
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-black">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-lg mb-6">
              Our engineering team can design custom soundproof curtain solutions for your specific industrial needs.
            </p>
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Engineering Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
