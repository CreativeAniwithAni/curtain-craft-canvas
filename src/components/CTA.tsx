
import React from 'react';
import { Phone, Mail, Calculator, FileText } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Reduce Your Industrial Noise?
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get a custom quote for your facility and start creating a quieter, 
            more productive work environment today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get Your Free Assessment</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-yellow-500 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Site Evaluation</h4>
                  <p className="text-gray-300">Our acoustic specialists assess your noise levels and requirements</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-yellow-500 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Custom Design</h4>
                  <p className="text-gray-300">We create a tailored solution that fits your space and budget</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-yellow-500 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Professional Installation</h4>
                  <p className="text-gray-300">Expert installation ensures optimal performance and longevity</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                <Phone className="w-5 h-5 text-yellow-400" />
                <div>
                  <div className="font-semibold">Call Now</div>
                  <div className="text-sm text-gray-300">(555) 123-NOISE</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                <Mail className="w-5 h-5 text-yellow-400" />
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-sm text-gray-300">quotes@industrial-sound.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6 text-center">Request Quote</h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
              />
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none">
                <option value="">Select Application Type</option>
                <option value="manufacturing">Manufacturing Facility</option>
                <option value="warehouse">Warehouse/Distribution</option>
                <option value="office">Office Space</option>
                <option value="construction">Construction Site</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Tell us about your noise control needs..."
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none resize-none"
              ></textarea>
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-4 rounded-lg font-semibold transition-colors shadow-lg">
                Get Free Quote
              </button>
            </form>
            <div className="text-center mt-4 text-sm text-gray-500">
              Free consultation • No obligation • Response within 24 hours
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/10 rounded-xl p-6">
            <Calculator className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Free Quote</h4>
            <p className="text-sm text-gray-300">Custom pricing for your project</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6">
            <FileText className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Technical Specs</h4>
            <p className="text-sm text-gray-300">Detailed product documentation</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6">
            <Phone className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Expert Support</h4>
            <p className="text-sm text-gray-300">Acoustic engineering guidance</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6">
            <Mail className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h4 className="font-semibold mb-2">24hr Response</h4>
            <p className="text-sm text-gray-300">Quick turnaround on quotes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
