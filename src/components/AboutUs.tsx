
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          About Us
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
          Akon provides services to companies both large and small. Our staff of experts ensures that excellent services and products are supplied to each and every customer.
        </p>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 text-lg">
          Learn About Us
        </Button>
      </div>
    </section>
  );
};

export default AboutUs;
