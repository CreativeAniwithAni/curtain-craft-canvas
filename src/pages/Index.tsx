
import React from 'react';
import Hero from '../components/Hero';
import ProductOverview from '../components/ProductOverview';
import ComparisonTable from '../components/ComparisonTable';
import Benefits from '../components/Benefits';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProductOverview />
      <ComparisonTable />
      <Benefits />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Index;
