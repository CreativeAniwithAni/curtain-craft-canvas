
import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonTable = () => {
  const products = [
    {
      name: "Standard Acoustic",
      price: "$12/sq ft",
      reduction: "8-10dB",
      material: "13oz Vinyl",
      fire: false,
      warranty: "2 Years",
      indoor: true,
      outdoor: false
    },
    {
      name: "Heavy-Duty Pro",
      price: "$18/sq ft",
      reduction: "12-15dB",
      material: "18oz Quilted",
      fire: true,
      warranty: "5 Years",
      indoor: true,
      outdoor: true,
      popular: true
    },
    {
      name: "Industrial Max",
      price: "$24/sq ft",
      reduction: "15-18dB",
      material: "22oz Reinforced",
      fire: true,
      warranty: "7 Years",
      indoor: true,
      outdoor: true
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Compare Our Soundproof Curtain Models
          </h2>
          <p className="text-xl text-gray-600">
            Choose the right acoustic solution for your specific noise control needs
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="text-left p-6 font-semibold">Features</th>
                {products.map((product, index) => (
                  <th key={index} className={`text-center p-6 relative ${product.popular ? 'pt-12' : 'pt-8'}`}>
                    {product.popular && (
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                        MOST POPULAR
                      </div>
                    )}
                    <div className="font-bold text-lg">{product.name}</div>
                    <div className="text-yellow-400 text-2xl font-bold mt-1">{product.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-6 font-medium text-gray-700">Noise Reduction</td>
                {products.map((product, index) => (
                  <td key={index} className="p-6 text-center font-semibold text-gray-900">
                    {product.reduction}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="p-6 font-medium text-gray-700">Material</td>
                {products.map((product, index) => (
                  <td key={index} className="p-6 text-center text-gray-600">
                    {product.material}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-6 font-medium text-gray-700">Fire Retardant</td>
                {products.map((product, index) => (
                  <td key={index} className="p-6 text-center">
                    {product.fire ? (
                      <Check className="w-6 h-6 text-yellow-600 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-800 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="p-6 font-medium text-gray-700">Warranty</td>
                {products.map((product, index) => (
                  <td key={index} className="p-6 text-center text-gray-600">
                    {product.warranty}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-6 font-medium text-gray-700">Indoor Use</td>
                {products.map((product, index) => (
                  <td key={index} className="p-6 text-center">
                    <Check className="w-6 h-6 text-yellow-600 mx-auto" />
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-50">
                <td className="p-6 font-medium text-gray-700">Outdoor Use</td>
                {products.map((product, index) => (
                  <td key={index} className="p-6 text-center">
                    {product.outdoor ? (
                      <Check className="w-6 h-6 text-yellow-600 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-800 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-6"></td>
                {products.map((product, index) => (
                  <td key={index} className="p-6 text-center">
                    <button className={`px-6 py-3 rounded-lg font-semibold transition-colors w-full ${
                      product.popular 
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-black' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                    }`}>
                      Select Plan
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
