
import React from 'react';
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Productivity",
      description: "Reduce noise-related stress and distractions, leading to improved worker focus and efficiency.",
      stat: "23% increase in productivity"
    },
    {
      icon: Users,
      title: "Better Employee Health",
      description: "Protect workers from noise-induced hearing loss and reduce workplace stress levels.",
      stat: "OSHA compliant noise levels"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Solution",
      description: "More affordable than permanent construction while providing similar noise reduction benefits.",
      stat: "60% less than permanent walls"
    },
    {
      icon: Clock,
      title: "Quick Implementation",
      description: "Install in hours, not weeks. Perfect for temporary projects or evolving workspace needs.",
      stat: "Same-day installation"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            The Business Benefits of Noise Control
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Investing in acoustic solutions delivers measurable returns through improved 
            productivity, compliance, and employee satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{benefit.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{benefit.description}</p>
              <div className="text-blue-600 font-bold text-sm">{benefit.stat}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Industry Success Stories
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-slate-800">Automotive Manufacturing Plant</h4>
                  <p className="text-slate-600">Reduced assembly line noise by 14dB, improving worker communication and reducing fatigue complaints by 40%.</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-slate-800">Distribution Warehouse</h4>
                  <p className="text-slate-600">Created quiet zones for office staff while maintaining operational flexibility for equipment movement.</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-slate-800">Food Processing Facility</h4>
                  <p className="text-slate-600">Met OSHA compliance requirements while maintaining easy cleaning protocols in sanitary environment.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 text-white text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-lg mb-4">Successful Installations</div>
              <div className="text-3xl font-bold text-green-400 mb-2">4.8/5</div>
              <div className="text-sm">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
