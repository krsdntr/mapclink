import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Benefits from './components/Benefits';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Profile from './components/Profile';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProblemSolution />
        <Benefits />
        <Pricing />
        <Process />
        <Portfolio />
        <Profile />
      </main>
      <Footer />
    </div>
  );
}