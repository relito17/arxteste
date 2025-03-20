export interface FormData {
  name: string;
  email: string;
  companyName: string;
  businessType: string;
  services: string[];
  investment: string;
  country: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  businessType?: string;
  investment?: string;
  services?: string; // Change from string[] to string
}

export interface ServiceOption {
  value: string;
  label: string;
}

export interface SelectOption {
  value: string;
  label: string;
}