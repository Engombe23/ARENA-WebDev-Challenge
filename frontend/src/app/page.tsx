'use client'

import "./globals.css";

import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

export default function Home() {

  return (
    <div className='container'>
      <HeroSection />
      <Footer/>
    </div>
  );
}
