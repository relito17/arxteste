import { FormData, FormErrors } from './types';

export const validateForm = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!formData.name.trim()) {
    errors.name = 'Please fill out this field';
  }

  if (!formData.email.trim()) {
    errors.email = 'Please fill out this field';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.businessType) {
    errors.businessType = 'Please select your business type';
  }

  if (!formData.investment) {
    errors.investment = 'Please select your investment range';
  }

  if (!formData.services || formData.services.length < 1) {
    errors.services = 'Please select at least one service';
  } else if (formData.services.length > 4) {
    errors.services = 'You can select up to 4 services';
  }

  return errors;
};
