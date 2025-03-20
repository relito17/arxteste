import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/index';
import FormInput from './FormInput';
import MultiSelect from './MultiSelect';
import SingleSelect from './SingleSelect';
import SuccessMessage from './SuccessMessage';
import { FormData, FormErrors } from './types';
import { getServices, getBusinessTypes, getInvestmentRanges, INITIAL_FORM_DATA } from './constants';
import { formClasses } from './styles';
import { validateForm } from './validation';

const LeadMagnet = () => {
  const { language } = useLanguage();
  const t = translations[language].leadMagnet;
  
  const services = getServices(language);
  const businessTypes = getBusinessTypes(language);
  const investmentRanges = getInvestmentRanges(language);
  
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const submitFormToWebhook = async (data: FormData) => {
    try {
      const response = await fetch('https://hook.eu2.make.com/xhxe3sujhxeft5hocx6jiaun3ar9otbv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send form data');
      }

      console.log('Form successfully sent to webhook');
    } catch (error) {
      console.error('Error sending form to webhook:', error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      submitFormToWebhook(formData);
      setShowSuccess(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <section className={formClasses.section} id="lead-magnet">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={formClasses.container}>
          <h2 className="text-4xl sm:text-5xl font-anta text-center text-white mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={'Name'}
                required
                error={errors.name}
              />
              
              <FormInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={'Email'}
                required
                error={errors.email}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormInput
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder={"Company Name / Website"}
              />
              
              <FormInput
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder={"Country"}
              />
            </div>

            <SingleSelect
              options={businessTypes}
              value={formData.businessType}
              onChange={handleBusinessTypeChange}
              label={t.form.businessType}
              error={errors.businessType}
            />

            <div className="space-y-2">
              <label className={formClasses.label}>
                {t.form.services}
              </label>
              <MultiSelect
                options={services}
                value={formData.services}
                onChange={handleServicesChange}
                error={errors.services}
              />
            </div>

            <SingleSelect
              options={investmentRanges}
              value={formData.investment}
              onChange={handleInvestmentChange}
              label={t.form.investment}
              error={errors.investment}
            />

            <button type="submit" className={formClasses.button}>
              {t.form.cta}
            </button>
          </form>
        </div>
      </div>
      
      {showSuccess && <SuccessMessage />}
    </section>
  );
};

export default LeadMagnet;