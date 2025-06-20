
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Applications = () => {
  const applications = [
    {
      title: "Containment Curtains for Lathe or Grinder Projectiles",
      description: "Heavy-duty industrial curtains designed to contain sparks, debris, and projectiles from machining operations. Perfect for lathes, grinders, and cutting equipment protection.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      features: ["Spark resistant material", "Heavy-duty construction", "Easy installation"]
    },
    {
      title: "Brake Press Guarding: Why Steel Mesh Works Well",
      description: "Combine the flexibility of curtains with steel mesh reinforcement for ultimate protection around brake press operations and heavy machinery.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      features: ["Steel mesh reinforced", "Impact resistant", "OSHA compliant"]
    },
    {
      title: "OSHA Approved for Flying Projectiles",
      description: "Certified protection solutions that meet all OSHA requirements for flying projectile containment in industrial environments.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      features: ["OSHA certified", "Flying projectile protection", "Industrial grade"]
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
              Our engineering team can design custom applications for your specific industrial needs.
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
