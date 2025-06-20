
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { RunwareService } from '../services/runwareService';
import { toast } from 'sonner';

const Applications = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<{[key: string]: string}>({});

  const applications = [
    {
      id: 'manufacturing',
      title: "Manufacturing Floor Noise Control",
      description: "Heavy-duty soundproof curtains designed to reduce noise pollution from manufacturing equipment, assembly lines, and production machinery. Create quieter work environments while maintaining operational efficiency.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      features: ["Sound absorption up to 85%", "Fire-resistant materials", "Easy installation system"]
    },
    {
      id: 'outdoor',
      title: "Outdoor Sound Blocking Panels",
      description: "Completely enclose outdoor equipment with specially designed, padded industrial sound panels for demanding surroundings. Four walls and an optional roof make up these weather-resistant enclosures, therefore creating a complete sound barrier. Designed to fit your precise dimensions, they lower noise levels, improve safety, and provide simple access using either hinged or detachable wall panels.",
      image: generatedImages['outdoor'] || "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
      features: ["Weather-resistant materials", "Custom dimensions", "Hinged or detachable panels"],
      canRegenerate: true
    },
    {
      id: 'enclosures',
      title: "Soundproofing Enclosures",
      description: "Establish a peaceful haven using our specially made sound enclosures for individuals. With its four padded walls and roof, these buildings block outside noise and provide quiet areas in noisy surroundings. Perfect for offices, warehouses, or workshops when concentrated labor, meetings, or breaks call for solitude from nearby noise sources.",
      image: generatedImages['enclosures'] || "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      features: ["Complete noise isolation", "Padded walls and roof", "Perfect for focused work"],
      canRegenerate: true
    }
  ];

  const generateImage = async (applicationId: string, prompt: string) => {
    const apiKey = localStorage.getItem('runware_api_key');
    if (!apiKey) {
      toast.error('Please set your Runware API key first');
      return;
    }

    setIsGenerating(true);
    try {
      const runwareService = new RunwareService(apiKey);
      const result = await runwareService.generateImage({
        positivePrompt: prompt,
        model: "runware:100@1",
        numberResults: 1,
        outputFormat: "WEBP",
        CFGScale: 1,
        scheduler: "FlowMatchEulerDiscreteScheduler",
      });

      setGeneratedImages(prev => ({
        ...prev,
        [applicationId]: result.imageURL
      }));
      
      toast.success('Image generated successfully!');
    } catch (error) {
      console.error('Error generating image:', error);
      toast.error('Failed to generate image. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRegenerateEnclosures = () => {
    const prompt = "Large industrial soundproof container with heavy-duty doors, rectangular metal enclosure box for noise isolation, industrial setting, padded interior walls visible through open door, professional photography, clean modern design";
    generateImage('enclosures', prompt);
  };

  const handleRegenerateOutdoor = () => {
    const prompt = "Industrial outdoor sound blocking panels and enclosures, weather-resistant soundproof barriers around equipment, industrial facility with noise control panels, hinged access doors, professional industrial photography";
    generateImage('outdoor', prompt);
  };

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
                {app.canRegenerate && (
                  <button
                    onClick={app.id === 'enclosures' ? handleRegenerateEnclosures : handleRegenerateOutdoor}
                    disabled={isGenerating}
                    className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors disabled:opacity-50"
                  >
                    {isGenerating ? 'Generating...' : 'Regenerate'}
                  </button>
                )}
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
