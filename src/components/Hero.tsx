'use client';

import { ArrowRight, PhoneCall, CheckCircle2, Star, Clock } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-36 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-primary-50/50" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full blur-3xl opacity-60 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm border border-primary-100 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-primary-700">Premium Diagnostics in Siddipet</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Advanced Diagnostic Care for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Healthier Tomorrow</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Accurate reports, affordable health packages, and free home sample collection in Siddipet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#contact" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-full text-white bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl transition-all">
                Book Health Checkup
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="tel:+919666286611" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-full text-primary-700 bg-white border-2 border-primary-100 hover:border-primary-200 hover:bg-primary-50 transition-all shadow-sm">
                <PhoneCall className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" />
                Accurate Reports
              </div>
              <div className="flex items-center text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" />
                Free Home Collection
              </div>
              <div className="flex items-center text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" />
                Affordable Packages
              </div>
              <div className="flex items-center text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" />
                Fast Service
              </div>
            </div>
          </div>
          
          {/* Image/Illustration */}
          <div className="relative lg:ml-10 mt-10 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white h-[500px]">
              <Image 
                src="/images/hero-lab.png" 
                alt="Modern Healthcare Laboratory" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 glassmorphism p-4 rounded-xl shadow-glass border border-white/40 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-amber-100 p-3 rounded-full">
                <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
              </div>
              <div>
                <p className="font-bold text-slate-900">4.6★ Rating</p>
                <p className="text-xs text-slate-600">Trusted Local Centre</p>
              </div>
            </div>
            
            <div className="absolute top-1/4 -right-8 glassmorphism p-4 rounded-xl shadow-glass border border-white/40 flex items-center gap-4 hidden sm:flex">
              <div className="bg-primary-100 p-3 rounded-full">
                <Clock className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Fast Delivery</p>
                <p className="text-xs text-slate-600">Quick Reports</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
