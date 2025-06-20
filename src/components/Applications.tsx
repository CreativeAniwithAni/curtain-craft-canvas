
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { RunwareService } from '../services/runwareService';
import { toast } from "sonner";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Applications = () => {
  const [apiKey, setApiKey] = useState('');
  const [generatedImages, setGeneratedImages] = useState<{[key: string]: string}>({});
  const [isGenerating, setIsGenerating] = useState(false);

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
      features: ["Weather-resistant materials", "Custom dimensions", "Hinged or detachable panels"]
    },
    {
      id: 'enclosures',
      title: "Soundproofing Enclosures",
      description: "Establish a peaceful haven using our specially made sound enclosures for individuals. With its four padded walls and roof, these buildings block outside noise and provide quiet areas in noisy surroundings. Perfect for offices, warehouses, or workshops when concentrated labor, meetings, or breaks call for solitude from nearby noise sources.",
      image: generatedImages['enclosures'] || "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      features: ["Complete noise isolation", "Padded walls and roof", "Perfect for focused work"]
    }
  ];

  const generateImages = async () => {
    if (!apiKey.trim()) {
      toast.error("Please enter your Runware API key");
      return;
    }

    setIsGenerating(true);
    const runwareService = new RunwareService(apiKey);

    try {
      const prompts = [
        {
          id: 'outdoor',
          prompt: "Industrial outdoor sound blocking panel enclosure with four walls and roof, weather-resistant padded acoustic panels around large outdoor equipment, industrial setting, professional photograph"
        },
        {
          id: 'enclosures',
          prompt: "Quiet soundproof booth enclosure with padded walls and ceiling, peaceful workspace inside noisy warehouse, acoustic panels, industrial interior, professional photograph"
        }
      ];

      const newImages: {[key: string]: string} = {};

      for (const promptData of prompts) {
        try {
          const result = await runwareService.generateImage({
            positivePrompt: promptData.prompt,
            model: "runware:100@1",
            width: 400,
            height: 300,
            numberResults: 1,
            outputFormat: "WEBP"
          });
          
          newImages[promptData.id] = result.imageURL;
          toast.success(`Generated image for ${promptData.id}`);
        } catch (error) {
          console.error(`Error generating ${promptData.id} image:`, error);
          toast.error(`Failed to generate ${promptData.id} image`);
        }
      }

      setGeneratedImages(prev => ({ ...prev, ...newImages }));
    } catch (error) {
      console.error('Error generating images:', error);
      toast.error('Failed to generate images');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Industrial Applications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our specialized soundproof curtain solutions designed for specific 
            industrial applications and safety requirements.
          </p>

          {/* API Key Input for Image Generation */}
          <div className="max-w-md mx-auto mb-8 p-4 bg-gray-800 rounded-lg">
            <h3 className="text-white font-semibold mb-2">Generate AI Images</h3>
            <p className="text-gray-400 text-sm mb-3">Enter your Runware API key to generate custom images</p>
            <div className="flex gap-2">
              <Input
                type="password"
                placeholder="Enter Runware API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
              />
              <Button 
                onClick={generateImages}
                disabled={isGenerating}
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                {isGenerating ? 'Generating...' : 'Generate'}
              </Button>
            </div>
          </div>
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
