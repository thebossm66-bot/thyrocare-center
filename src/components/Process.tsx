import { PhoneCall, MapPin, TestTube2, FileDigit } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      title: "Book Appointment",
      description: "Call us or book your checkup online easily.",
      icon: <PhoneCall className="w-8 h-8 text-white" />,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Sample Collection",
      description: "Free home collection or visit our center.",
      icon: <MapPin className="w-8 h-8 text-white" />,
      color: "from-indigo-400 to-indigo-600"
    },
    {
      title: "Lab Testing",
      description: "Accurate analysis using advanced equipment.",
      icon: <TestTube2 className="w-8 h-8 text-white" />,
      color: "from-teal-400 to-teal-600"
    },
    {
      title: "Get Digital Reports",
      description: "Fast reports delivered directly to your WhatsApp.",
      icon: <FileDigit className="w-8 h-8 text-white" />,
      color: "from-primary-400 to-primary-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">How It Works</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Simple 4-Step Process</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            We&apos;ve made it incredibly easy for you to get your health checkups done without any hassle.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg mb-6 transform group-hover:-translate-y-2 transition-transform duration-300 relative`}>
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-white text-slate-900 font-bold rounded-full flex items-center justify-center shadow-sm border border-slate-100">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
