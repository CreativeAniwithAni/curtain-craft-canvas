
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo Section */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <img 
                src="/lovable-uploads/bd12a792-92ae-4f21-9948-ef310c695c14.png" 
                alt="Akon Logo" 
                className="w-16 h-auto"
              />
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Professional noise control solutions
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Standard Acoustic</li>
              <li className="hover:text-white transition-colors cursor-pointer">Heavy-Duty Pro</li>
              <li className="hover:text-white transition-colors cursor-pointer">Industrial Max</li>
              <li className="hover:text-white transition-colors cursor-pointer">Custom Solutions</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Consultation</li>
              <li className="hover:text-white transition-colors cursor-pointer">Installation</li>
              <li className="hover:text-white transition-colors cursor-pointer">Maintenance</li>
              <li className="hover:text-white transition-colors cursor-pointer">Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@akon.com</li>
              <li>Mon-Fri: 8AM-6PM</li>
              <li className="hover:text-white transition-colors cursor-pointer">Get Quote</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2024 Akon Industrial Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Warranty</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
