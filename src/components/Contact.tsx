'use client';

import { useState } from 'react';
import { MapPin, Phone, Clock, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  phone: string;
  test: string;
  collectionType: 'clinic' | 'home';
  address: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    test: '',
    collectionType: 'clinic',
    address: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.test) {
      setStatus('error');
      setStatusMessage('Please fill in your name, phone number, and select a test.');
      return;
    }

    const phoneClean = formData.phone.replace(/\D/g, '');
    if (phoneClean.length < 10) {
      setStatus('error');
      setStatusMessage('Please enter a valid 10-digit phone number.');
      return;
    }

    if (formData.collectionType === 'home' && !formData.address.trim()) {
      setStatus('error');
      setStatusMessage('Please provide your address for home sample collection.');
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setStatusMessage(data.message || 'Booking submitted! We will contact you shortly.');
        // Reset form after success
        setFormData({
          name: '',
          phone: '',
          test: '',
          collectionType: 'clinic',
          address: '',
          preferredDate: '',
          preferredTime: '',
          message: '',
        });
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network error. Please check your connection or call us at +91 96662 86611.');
    }
  };

  // Get tomorrow's date as minimum selectable date
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

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
          
          {/* Booking Form */}
          <div className="p-8 md:p-12">
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Book an Appointment</h4>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    id="contact-name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" 
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" 
                    placeholder="+91 00000 00000"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="contact-test" className="block text-sm font-medium text-slate-700 mb-2">Test Required / Package *</label>
                <select 
                  id="contact-test"
                  name="test"
                  value={formData.test}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white"
                  required
                >
                  <option value="">Select a test</option>
                  <option value="full-body">Full Body Checkup</option>
                  <option value="thyroid">Thyroid Profile</option>
                  <option value="blood-test">Routine Blood Test</option>
                  <option value="diabetes">Diabetes Screening</option>
                  <option value="vitamin">Vitamin Testing (D & B12)</option>
                  <option value="lipid">Lipid Profile & Liver Function</option>
                  <option value="senior">Senior Citizen Package</option>
                  <option value="women">Women Wellness Package</option>
                  <option value="men">Men Wellness Package</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              {/* Collection Type Toggle */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Sample Collection</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, collectionType: 'clinic' }))}
                    className={`py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all ${
                      formData.collectionType === 'clinic'
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    🏥 Visit Clinic
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, collectionType: 'home' }))}
                    className={`py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all ${
                      formData.collectionType === 'home'
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    🏠 Home Collection (Free)
                  </button>
                </div>
              </div>

              {/* Home collection address (conditional) */}
              {formData.collectionType === 'home' && (
                <div className="animate-in slide-in-from-top-2">
                  <label htmlFor="contact-address" className="block text-sm font-medium text-slate-700 mb-2">Home Address *</label>
                  <input 
                    type="text" 
                    id="contact-address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" 
                    placeholder="Enter your full address in Siddipet"
                    required
                  />
                </div>
              )}

              {/* Date & Time Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-date" className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    id="contact-date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={getMinDate()}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" 
                  />
                </div>
                <div>
                  <label htmlFor="contact-time" className="block text-sm font-medium text-slate-700 mb-2">Preferred Time</label>
                  <select 
                    id="contact-time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white"
                  >
                    <option value="">Select time slot</option>
                    <option value="6:00 AM - 8:00 AM">6:00 AM - 8:00 AM (Early Morning)</option>
                    <option value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM (Morning)</option>
                    <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM (Late Morning)</option>
                    <option value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM (Afternoon)</option>
                    <option value="2:00 PM - 5:00 PM">2:00 PM - 5:00 PM (Evening)</option>
                    <option value="5:00 PM - 9:00 PM">5:00 PM - 9:00 PM (Late Evening)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                <textarea 
                  id="contact-message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3} 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" 
                  placeholder="Any specific requirements..."
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">{statusMessage}</p>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">{statusMessage}</p>
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 disabled:cursor-not-allowed text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Booking Request'
                )}
              </button>

              <p className="text-xs text-slate-400 text-center">
                Or call us directly at <a href="tel:+919666286611" className="text-primary-500 font-medium hover:underline">+91 96662 86611</a>
              </p>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
