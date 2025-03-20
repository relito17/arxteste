import React, { useState } from 'react';
import { validateForm } from './forms/validation';
import { X, Loader, Send } from 'lucide-react';
import FormInput from './forms/FormInput';
import MultiSelect from './forms/MultiSelect';
import SingleSelect from './forms/SingleSelect';
import SuccessMessage from './forms/SuccessMessage';

interface ContactFormProps {
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  companyName?: string;
  country?: string;
  businessType?: string;
  services?: string;
  investment?: string;
}

const ContactForm = ({ onClose }: ContactFormProps) => {
  const businessTypes = ['Startup', 'Small Business', 'Midsize Business', 'Enterprise / Corporation'];
  const services = [
    'Customer Support AI Agent',
    'Automated AI-Powered Outreach',
    'Website Development',
    'Custom Automation',
    'AI Voice Caller Assistant',
    'CRM Integration',
    'Lead Generation',
    'Social Media Automation',
    'Marketing Analytics'
  ];
  const budgetRanges = ['<1k', '1-5k', '5-10k', '>10k'];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    country: '',
    businessType: '',
    services: [] as string[],
    investment: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitFormToWebhook = async (data: any) => {
    try {
      const response = await fetch('https://hook.eu2.make.com/xhxe3sujhxeft5hocx6jiaun3ar9otbv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to send form data');
      }
    } catch (error) {
      console.error('Error sending form to webhook:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleServicesChange = (selectedServices: string[]) => {
    setFormData(prev => ({ ...prev, services: selectedServices }));
    if (errors.services && selectedServices.length > 0) {
      setErrors(prev => ({ ...prev, services: undefined }));
    }
  };

  const handleBusinessTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, businessType: value }));
    if (errors.businessType) {
      setErrors(prev => ({ ...prev, businessType: undefined }));
    }
  };

  const handleInvestmentChange = (value: string) => {
    setFormData(prev => ({ ...prev, investment: value }));
    if (errors.investment) {
      setErrors(prev => ({ ...prev, investment: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      submitFormToWebhook(formData);
      setShowSuccess(true);

      setTimeout(() => {
        setIsLoading(false);
        window.location.reload();
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-start justify-center overflow-y-auto">
      <div className="min-h-screen w-full flex items-center justify-center p-4">
        <div className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-2xl w-full max-w-3xl border border-gray-800/50 relative my-4">
          {/* Close Button - Fixed position on mobile */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800/50 transition-colors z-50 bg-gray-900"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>

          {/* Form Header */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Share your vision with us, and we'll help bring it to life.
            </p>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  error={errors.name}
                />
                
                <FormInput
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  error={errors.email}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company name"
                />
                
                <FormInput
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                />
              </div>
            </div>

            <div className="space-y-4">
              <SingleSelect
                options={businessTypes.map(type => ({ value: type, label: type }))}
                value={formData.businessType}
                onChange={handleBusinessTypeChange}
                label="Business Type *"
                error={errors.businessType}
              />

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Services Interested In *
                </label>
                <MultiSelect
                  options={services.map(service => ({ value: service, label: service }))}
                  value={formData.services}
                  onChange={handleServicesChange}
                  error={errors.services}
                />
              </div>

              <SingleSelect
                options={budgetRanges.map(range => ({ value: range, label: range }))}
                value={formData.investment}
                onChange={handleInvestmentChange}
                label="Investment Budget *"
                error={errors.investment}
              />

              {/* Message Input */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What is on your mind?"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-all duration-300 min-h-[120px] resize-y"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#FF6A00] to-[#f9d342] text-black px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Success Message */}
          {showSuccess && <SuccessMessage isLoading={isLoading} />}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
