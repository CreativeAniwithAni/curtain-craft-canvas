
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const SatisfiedCustomers = () => {
  // Sample customer logos - using placeholder names for demonstration
  const customers = [
    { name: "TechCorp", logo: "TC" },
    { name: "ManufacturingPro", logo: "MP" },
    { name: "IndustrialSolutions", logo: "IS" },
    { name: "NoiseControl Inc", logo: "NC" },
    { name: "SoundGuard", logo: "SG" },
    { name: "AcousticMax", logo: "AM" },
    { name: "QuietSpace", logo: "QS" },
    { name: "SilentWork", logo: "SW" }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Satisfied Customers
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by leading companies across industries
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {customers.map((customer, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-24">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-bold text-xl">
                    {customer.logo}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default SatisfiedCustomers;
