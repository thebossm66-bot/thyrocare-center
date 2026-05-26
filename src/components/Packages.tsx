import { CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Packages() {
  const packages = [
    {
      name: "Basic Health Checkup",
      description: "Essential screening for healthy individuals.",
      price: "₹799",
      popular: false,
      tests: ["CBC (Complete Blood Count)", "Fasting Blood Sugar", "Lipid Profile", "Liver Function Test (LFT)", "Kidney Function Test (KFT)", "Urine Routine"],
    },
    {
      name: "Thyroid Special Package",
      description: "Complete thyroid care with essential vitamins.",
      price: "₹1,299",
      popular: true,
      tests: ["Thyroid Profile (T3, T4, TSH)", "Vitamin D Total", "Vitamin B12", "Calcium Total", "CBC", "Fasting Blood Sugar"],
    },
    {
      name: "Senior Citizen Package",
      description: "Comprehensive care tailored for the elderly.",
      price: "₹1,999",
      popular: false,
      tests: ["Complete Hemogram", "Diabetic Profile (HbA1c)", "Cardiac Risk Markers", "Bone Health Profile", "Iron Deficiency Profile", "Arthritis Profile"],
    }
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Health Packages</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Affordable Preventive Care</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Choose from our specially designed health checkup packages to monitor your well-being. Get more tests done at highly discounted prices.
          </p>
        </div>

        {/* Promotional Flyer */}
        <div className="max-w-4xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <div className="relative w-full aspect-[2/3] md:aspect-[3/4]">
            <Image 
              src="/images/promotional-packages.jpg" 
              alt="Aarogyam Promotional Packages - 50% Off" 
              fill
              className="object-contain bg-slate-50"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative bg-white rounded-3xl border ${pkg.popular ? 'border-primary-500 shadow-xl scale-105 z-10' : 'border-slate-200 shadow-sm'} p-8 flex flex-col transition-all duration-300 hover:shadow-xl`}>
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h4>
                <p className="text-slate-500 text-sm h-10">{pkg.description}</p>
              </div>
              
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">{pkg.price}</span>
                <span className="text-slate-500 line-through ml-2 text-sm">{(parseInt(pkg.price.replace('₹', '').replace(',', '')) * 1.5).toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.tests.map((test, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className={`w-5 h-5 mr-3 flex-shrink-0 ${pkg.popular ? 'text-primary-500' : 'text-slate-400'}`} />
                    <span className="text-slate-600 text-sm">{test}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className={`w-full py-4 rounded-xl font-bold text-center transition-all flex justify-center items-center ${pkg.popular ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl' : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200'}`}>
                Book Package
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="text-primary-600 font-medium hover:text-primary-700 hover:underline">
            View all 20+ customized packages →
          </a>
        </div>
      </div>
    </section>
  );
}
