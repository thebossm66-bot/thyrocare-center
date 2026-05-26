import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Get in Touch With Us</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Have questions about our packages or need to book a home collection? Reach out to us.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/* Contact Information & Map */}
          <div className="p-8 md:p-12 bg-primary-700 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-primary-600 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-secondary-600 rounded-full blur-3xl opacity-50"></div>
            
            <div className="relative z-10">
              <h4 className="text-2xl font-bold mb-8">Contact Information</h4>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-300 mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-primary-200 mb-1">Phone Number</p>
                    <p className="font-semibold text-lg">+91 96662 86611</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-300 mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-primary-200 mb-1">Clinic Address</p>
                    <p className="font-semibold leading-relaxed">H No 8, 2-67/1/A, Shivaji Nagar,<br />Siddipet, Telangana 502103</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary-300 mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-primary-200 mb-1">Business Hours</p>
                    <p className="font-semibold">Mon - Sun: 6:00 AM - 9:00 PM</p>
                    <p className="text-sm mt-1 text-primary-100">Home Collection available from 6:00 AM</p>
                  </div>
                </div>
              </div>
              
              {/* Map Embed */}
              <div className="w-full h-48 bg-primary-800 rounded-xl overflow-hidden border border-primary-600/50 flex items-center justify-center relative">
                <iframe 
                  src="https://maps.google.com/maps?q=H+No+8,+2-67/1/A,+Shivaji+Nagar,+Siddipet,+Telangana+502103&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  className="absolute inset-0"
                  title="Thyrocare Aarogyam Centre Siddipet Location"
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="p-8 md:p-12">
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Book an Appointment</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="+91 00000 00000" />
                </div>
              </div>
              
              <div>
                <label htmlFor="test" className="block text-sm font-medium text-slate-700 mb-2">Test Required / Package</label>
                <select id="test" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white">
                  <option value="">Select a test</option>
                  <option value="full-body">Full Body Checkup</option>
                  <option value="thyroid">Thyroid Profile</option>
                  <option value="blood-test">Routine Blood Test</option>
                  <option value="diabetes">Diabetes Screening</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="Any specific requirements..."></textarea>
              </div>
              
              <button type="button" className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">
                Submit Request
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
