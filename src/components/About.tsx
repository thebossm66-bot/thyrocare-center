import { ShieldCheck, Stethoscope, HeartPulse, Microscope } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary-600" />,
      title: "Patient Trust",
      description: "Over 50,000+ satisfied patients trust us for their regular health checkups and diagnostics."
    },
    {
      icon: <Microscope className="w-8 h-8 text-primary-600" />,
      title: "Precision Diagnostics",
      description: "State-of-the-art automated equipment ensuring 100% accurate and error-free reports."
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-primary-600" />,
      title: "Customer-First Care",
      description: "Friendly staff, painless sample collection, and smooth communication from booking to reports."
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-primary-600" />,
      title: "Experienced Handling",
      description: "Expert phlebotomists trained to handle samples with utmost care and strict hygiene protocols."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">About Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Committed to Your Health and Wellness</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            At Thyrocare Aarogyam Centre Siddipet, we believe that preventive care is the foundation of a healthy life. We are dedicated to providing accessible, affordable, and highly accurate diagnostic services right at your doorstep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-primary-100 transition-all duration-300 group">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
