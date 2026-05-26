import { Droplet, Activity, UserCheck, Home, PlusCircle, CalendarHeart, Sun, Pill } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Blood Tests",
      description: "Comprehensive blood testing for all parameters with precise automated analysis.",
      icon: <Droplet className="w-8 h-8 text-primary-500" />,
      benefits: ["Painless collection", "Same day reports", "Hygienic process"]
    },
    {
      title: "Thyroid Profiles",
      description: "Advanced T3, T4, and TSH testing for accurate thyroid gland function monitoring.",
      icon: <Activity className="w-8 h-8 text-secondary-500" />,
      benefits: ["Highly sensitive", "Doctor recommended", "Trend analysis"]
    },
    {
      title: "Full Body Checkups",
      description: "Complete health screening covering vital organs, vitamins, and minerals.",
      icon: <UserCheck className="w-8 h-8 text-primary-500" />,
      benefits: ["60+ Parameters", "Cost-effective", "Preventive care"]
    },
    {
      title: "Home Sample Collection",
      description: "Get tested from the comfort of your home. Free collection by expert technicians.",
      icon: <Home className="w-8 h-8 text-secondary-500" />,
      benefits: ["Zero travel", "Convenient timing", "Expert phlebotomists"]
    },
    {
      title: "Diabetes Screening",
      description: "HbA1c, fasting, and post-prandial tests to monitor and manage blood sugar levels.",
      icon: <PlusCircle className="w-8 h-8 text-primary-500" />,
      benefits: ["Accurate HbA1c", "Quick results", "Fasting not always required"]
    },
    {
      title: "Senior Citizen Packages",
      description: "Specialized preventive care packages tailored for the elderly.",
      icon: <CalendarHeart className="w-8 h-8 text-secondary-500" />,
      benefits: ["Bone health", "Cardiac markers", "Gentle care"]
    },
    {
      title: "Vitamin Testing",
      description: "Check Vitamin D, B12, and other essential nutrients to avoid deficiencies.",
      icon: <Sun className="w-8 h-8 text-primary-500" />,
      benefits: ["Bone strength", "Energy levels", "Immunity check"]
    },
    {
      title: "Wellness Packages",
      description: "Tailored wellness packages for men and women of all age groups.",
      icon: <Pill className="w-8 h-8 text-secondary-500" />,
      benefits: ["Gender specific", "Hormone panels", "Complete overview"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -left-40 top-40 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Comprehensive Diagnostics</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            We offer a wide range of pathology and diagnostic services to cater to all your healthcare needs, ensuring quality and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h4>
              <p className="text-slate-600 mb-6 text-sm line-clamp-2">{service.description}</p>
              
              <ul className="space-y-2 mb-6 border-t border-slate-50 pt-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mr-2"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="inline-flex font-medium text-primary-600 hover:text-primary-700 text-sm group">
                Book Now
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
