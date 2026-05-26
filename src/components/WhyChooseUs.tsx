import { FileSignature, Clock3, MapPin, BadgeIndianRupee, HeadphonesIcon, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Accurate Lab Reports",
      description: "Fully automated processes ensuring zero human error.",
      icon: <FileSignature className="w-6 h-6 text-white" />
    },
    {
      title: "Quick Turnaround",
      description: "Get your digital reports on the same day via WhatsApp.",
      icon: <Clock3 className="w-6 h-6 text-white" />
    },
    {
      title: "Free Home Collection",
      description: "Trained professionals collect samples from your doorstep.",
      icon: <MapPin className="w-6 h-6 text-white" />
    },
    {
      title: "Affordable Pricing",
      description: "High-quality diagnostics at prices that don't hurt your wallet.",
      icon: <BadgeIndianRupee className="w-6 h-6 text-white" />
    },
    {
      title: "Friendly Support",
      description: "Our customer service team is always ready to assist you.",
      icon: <HeadphonesIcon className="w-6 h-6 text-white" />
    },
    {
      title: "Trusted by Locals",
      description: "The preferred diagnostic partner for thousands in Siddipet.",
      icon: <Users className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4ccab7 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          
          <div className="lg:col-span-1">
            <h2 className="text-primary-400 font-semibold tracking-wide uppercase text-sm mb-2">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Setting the Standard in Healthcare</h3>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              We combine advanced technology with compassionate care to deliver diagnostic services you can rely on.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-900/50 rounded-full flex items-center justify-center mr-4 border border-primary-800">
                  <span className="text-primary-400 font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">Book Appointment</h4>
                  <p className="text-slate-400 text-sm">Call or book online</p>
                </div>
              </div>
              <div className="w-0.5 h-6 bg-slate-800 ml-6"></div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-900/50 rounded-full flex items-center justify-center mr-4 border border-primary-800">
                  <span className="text-primary-400 font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">Give Sample</h4>
                  <p className="text-slate-400 text-sm">At home or centre</p>
                </div>
              </div>
              <div className="w-0.5 h-6 bg-slate-800 ml-6"></div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-900/50 rounded-full flex items-center justify-center mr-4 border border-primary-800">
                  <span className="text-primary-400 font-bold text-xl">3</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">Get Reports</h4>
                  <p className="text-slate-400 text-sm">Digital & accurate</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    {reason.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{reason.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
