import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to My Project</h1>
        <p className="mb-4">This is the home page of your application.</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
