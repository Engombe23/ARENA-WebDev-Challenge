'use client'

import "./globals.css";

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

export default function Home() {

  return (
    <div className='container'>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}
