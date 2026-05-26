'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ramesh Reddy",
      role: "Patient",
      content: "Excellent customer service and free home sample collection. The technician arrived exactly on time and was very professional. Got my reports the same evening.",
      rating: 5
    },
    {
      name: "Sunitha Sharma",
      role: "Regular Patient",
      content: "Good packages and very smooth communication. Have been using Thyrocare Siddipet for my parents' regular checkups. Highly affordable and reliable.",
      rating: 5
    },
    {
      name: "Kiran Kumar",
      role: "Patient",
      content: "Fast response and quality reports. The centre is very clean and the staff guides you properly. Best health checkup experience in Siddipet.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-primary-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Patient Reviews</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What Our Patients Say</h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 text-primary-200 -translate-x-4 -translate-y-6">
            <Quote className="w-24 h-24 rotate-180 opacity-50" />
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 relative z-10 min-h-[300px] flex flex-col justify-center">
            <div className="flex text-amber-400 mb-6 justify-center">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            
            <p className="text-xl md:text-2xl text-slate-700 text-center font-medium leading-relaxed mb-8 italic">
              &quot;{testimonials[currentIndex].content}&quot;
            </p>
            
            <div className="text-center">
              <h4 className="text-lg font-bold text-slate-900">{testimonials[currentIndex].name}</h4>
              <p className="text-slate-500 text-sm">{testimonials[currentIndex].role}</p>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentIndex ? 'bg-primary-600 w-6' : 'bg-slate-300'}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors focus:outline-none"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
