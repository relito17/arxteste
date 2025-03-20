import { Code, Smartphone, Globe, Zap, Shield, Rocket } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';


const AppDevelopment = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      
      <Navbar />
      <BackButton />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h1 className="text-6xl font-bold mb-6">
              <span className="gradient-text">Modern Apps</span>
              <br />Built for Growth
            </h1>
            <p className="text-3xl mb-8 text-gray-300">
              Web & Mobile Solutions That Drive Results
            </p>
            <p className="text-xl text-gray-400 mb-12">
              From concept to deployment, we create cutting-edge applications that combine stunning design with powerful functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Web Applications",
                description: "Responsive, fast, and scalable web apps built with modern technologies."
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications for iOS and Android."
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Custom Solutions",
                description: "Tailor-made software solutions to meet your specific business needs."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Secure Development",
                description: "Built-in security measures to protect your data and users."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Performance Optimization",
                description: "Lightning-fast performance and optimal user experience."
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Scalable Architecture",
                description: "Future-proof solutions that grow with your business."
              }
            ].map((service, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-[#FF6A00] transition-all duration-300">
                <div className="p-3 bg-[#FF6A00]/10 rounded-lg w-fit mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#FF6A00]/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your <span className="gradient-text">Next Big Thing</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's turn your vision into reality. Schedule a consultation to discuss your project.
          </p>
          <button className="bg-gradient-to-r from-[#FF6A00] to-[#f9d342] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform">
            Start Your Project
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppDevelopment;