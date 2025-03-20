import { useEffect} from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import { useLocation } from 'react-router-dom';

const   TermsOfService = () => {
  const location = useLocation();


  useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <BackButton />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-300">
              By accessing or using ARxAutomate's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-gray-300">
              Permission is granted to temporarily access the materials on ARxAutomate's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Service Description</h2>
            <p className="text-gray-300">
              ARxAutomate provides AI-powered automation solutions for businesses. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
            <p className="text-gray-300 mb-4">You agree to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Provide accurate information</li>
              <li>Maintain the security of your account</li>
              <li>Use the services in compliance with all applicable laws</li>
              <li>Not interfere with the proper working of the services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-gray-300">
              All content, features, and functionality on our website are owned by ARxAutomate and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-300">
              ARxAutomate shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p className="text-gray-300">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p className="text-gray-300">
              If you have any questions about these Terms, please contact us at angelo@tryarxautomate.com
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;