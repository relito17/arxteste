import { Settings, Cpu, Workflow, Bot, Gauge, Lock } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';


const CustomAutomation = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      
      <Navbar />
      <BackButton />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h1 className="text-6xl font-bold mb-6">
              <span className="gradient-text">Custom Automation</span>
              <br />That Works for You
            </h1>
            <p className="text-3xl mb-8 text-gray-300">
              Streamline Your Operations with Intelligent Automation
            </p>
            <p className="text-xl text-gray-400 mb-12">
              Transform your business processes with custom automation solutions that increase efficiency, reduce errors, and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Workflow className="w-8 h-8" />,
                title: "Workflow Automation",
                description: "Streamline complex business processes with intelligent workflows."
              },
              {
                icon: <Bot className="w-8 h-8" />,
                title: "AI Integration",
                description: "Leverage artificial intelligence to make smarter automation decisions."
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Process Optimization",
                description: "Identify and eliminate bottlenecks in your operations."
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Secure Integration",
                description: "Safe and secure integration with your existing systems."
              },
              {
                icon: <Gauge className="w-8 h-8" />,
                title: "Performance Metrics",
                description: "Real-time monitoring and analytics of your automated processes."
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: "Custom Solutions",
                description: "Tailor-made automation solutions for your unique needs."
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-[#FF6A00] transition-all duration-300">
                <div className="p-3 bg-[#FF6A00]/10 rounded-lg w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#FF6A00]/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="gradient-text">Automate</span> Your Success?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how custom automation can transform your business operations.
          </p>
          <button className="bg-gradient-to-r from-[#FF6A00] to-[#f9d342] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform">
            Schedule Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomAutomation;