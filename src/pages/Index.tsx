
import React from 'react';
import Hero from '../components/Hero';
import ProductOverview from '../components/ProductOverview';
import ComparisonTable from '../components/ComparisonTable';
import Applications from '../components/Applications';
import Benefits from '../components/Benefits';
import SatisfiedCustomers from '../components/SatisfiedCustomers';
import FAQ from '../components/FAQ';
import AboutUs from '../components/AboutUs';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProductOverview />
      <ComparisonTable />
      <Applications />
      <Benefits />
      <SatisfiedCustomers />
      <FAQ />
      <AboutUs />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
