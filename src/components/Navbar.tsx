'use client';

import { useState } from 'react';
import { Menu, X, Phone, CalendarCheck } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full glassmorphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex flex-col">
              <div className="flex items-center">
                <span className="font-bold text-2xl text-primary-700 tracking-tight">Thyrocare</span>
                <span className="font-semibold text-xl text-primary-500 ml-1">Aarogyam</span>
              </div>
              <span className="text-xs text-slate-500 font-medium tracking-wider">CENTRE SIDDIPET</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 hover:text-primary-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+919666286611" className="flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span>+91 96662 86611</span>
            </a>
            <a href="#contact" className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center">
              <CalendarCheck className="w-4 h-4 mr-2" />
              Book Checkup
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3 px-3">
              <a href="tel:+919666286611" className="flex items-center justify-center text-primary-600 font-semibold border border-primary-200 py-3 rounded-xl">
                <Phone className="w-5 h-5 mr-2" />
                Call +91 96662 86611
              </a>
              <a href="#contact" className="flex items-center justify-center bg-primary-600 text-white font-medium py-3 rounded-xl shadow-md">
                <CalendarCheck className="w-5 h-5 mr-2" />
                Book Health Checkup
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
