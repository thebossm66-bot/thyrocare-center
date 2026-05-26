import Link from 'next/link';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA Strip */}
      <div className="bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Take charge of your health today.</h2>
              <p className="text-primary-100">Get accurate diagnostic reports with free home sample collection.</p>
            </div>
            <a href="#contact" className="bg-white text-primary-700 hover:bg-slate-50 px-8 py-3 rounded-full font-bold shadow-lg transition-all flex items-center">
              Book Home Collection <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-bold text-2xl text-white tracking-tight">Thyrocare</span>
                <span className="font-semibold text-xl text-primary-400 ml-1">Aarogyam</span>
              </div>
              <span className="text-xs text-slate-400 font-medium tracking-wider">CENTRE SIDDIPET</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted local diagnostic partner in Siddipet, providing fast, accurate reports and affordable health packages.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-primary-400 transition-colors">Our Services</Link></li>
              <li><Link href="#packages" className="hover:text-primary-400 transition-colors">Health Packages</Link></li>
              <li><Link href="#testimonials" className="hover:text-primary-400 transition-colors">Patient Reviews</Link></li>
              <li><Link href="#contact" className="hover:text-primary-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Top Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#services" className="hover:text-primary-400 transition-colors">Full Body Checkups</Link></li>
              <li><Link href="#services" className="hover:text-primary-400 transition-colors">Thyroid Profiles</Link></li>
              <li><Link href="#services" className="hover:text-primary-400 transition-colors">Blood Tests</Link></li>
              <li><Link href="#services" className="hover:text-primary-400 transition-colors">Diabetes Screening</Link></li>
              <li><Link href="#services" className="hover:text-primary-400 transition-colors">Home Sample Collection</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0 mt-0.5" />
                <span>H No 8, 2-67/1/A, Shivaji Nagar,<br />Siddipet, Telangana 502103</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                <a href="tel:+919666286611" className="hover:text-primary-400 transition-colors">+91 96662 86611</a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0 mt-0.5" />
                <span>Mon - Sun: 6:00 AM - 9:00 PM<br />Home Collection: 6:00 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Thyrocare Aarogyam Centre Siddipet. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
