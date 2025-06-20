
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How much noise reduction can I expect from your soundproof curtains?",
      answer: "Our industrial soundproof curtains can reduce noise levels by 8-18dB depending on the model you choose. The Heavy-Duty Pro model typically achieves 12-15dB reduction, while our Industrial Max model can reach up to 18dB reduction. The actual performance depends on factors like curtain placement, room acoustics, and the frequency of the noise being controlled."
    },
    {
      question: "Are these curtains suitable for outdoor industrial applications?",
      answer: "Yes, our Heavy-Duty Pro and Industrial Max models are designed for both indoor and outdoor use. They feature weather-resistant materials that can withstand temperatures from -20°F to 180°F, UV exposure, and moisture. The reinforced construction ensures durability in harsh industrial environments."
    },
    {
      question: "How difficult is the installation process?",
      answer: "Installation is straightforward and can typically be completed in a few hours. Our track-mounted system requires minimal tools and can be installed by your maintenance team. We provide detailed installation instructions, and technical support is available if needed. For large installations, we can recommend certified installers in your area."
    },
    {
      question: "Do your curtains meet safety and compliance standards?",
      answer: "Absolutely. All our soundproof curtains are OSHA compliant for workplace noise control and meet NFPA 701 fire safety standards. They're also tested for industrial chemical resistance and comply with relevant workplace safety regulations. We provide certification documentation with every order."
    },
    {
      question: "Can the curtains be customized for specific dimensions or colors?",
      answer: "Yes, we offer full customization for dimensions, colors, and configurations. Our curtains can be manufactured to fit any space, from small equipment enclosures to large warehouse partitions. We offer a range of industrial colors and can match specific color requirements for brand consistency."
    },
    {
      question: "What's included in the warranty coverage?",
      answer: "Our warranty covers material defects, seam integrity, and acoustic performance degradation. The Standard model includes a 2-year warranty, Heavy-Duty Pro has 5 years, and Industrial Max includes 7 years. The warranty covers replacement or repair of defective materials and includes labor costs for warranty-related issues."
    },
    {
      question: "How do I maintain and clean these industrial curtains?",
      answer: "Maintenance is minimal but important for longevity. Regular cleaning with mild industrial cleaners helps maintain acoustic properties and appearance. The vinyl surface can be wiped down or pressure washed for heavy-duty cleaning. We recommend quarterly inspections of mounting hardware and annual professional cleaning for high-use installations."
    },
    {
      question: "What's the typical lead time for orders?",
      answer: "Standard sizes are usually available within 2-3 weeks. Custom orders typically require 4-6 weeks depending on complexity and current production schedule. Rush orders can be accommodated for urgent projects with additional express fees. We'll provide exact timing when you submit your specifications."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our industrial soundproof curtains
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="h-px bg-gray-200 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-yellow-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our acoustic specialists are here to help you find the perfect noise control solution for your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                Call (555) 123-NOISE
              </button>
              <button className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                Email Technical Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
