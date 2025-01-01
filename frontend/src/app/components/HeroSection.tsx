'use client'

import QuizForm from './QuizForm';

const HeroSection = () => (
  <section className="flex flex-col items-center text-center p-10">
    <h1 className="text-4xl font-bold mb-4">Discover Your Digital Arena</h1>
    <p className="text-4xl font-bold mb-6">Connect, collaborate and explore like never before</p>
    <p className="text-4xl font-bold mb-6">Fill out the form below</p>
    <QuizForm/>
  </section>
)

export default HeroSection;