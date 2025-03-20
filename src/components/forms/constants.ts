

export const getServices = (language: string) => [
  { 
    value: 'customer-support', 
    label: language === 'en' ? 'Customer Support AI Agent' : 'Agente de Suporte IA' 
  },
  { 
    value: 'automated-outreach', 
    label: language === 'en' ? 'Automated AI-Powered Outreach' : 'Divulgação Automatizada' 
  },
  { 
    value: 'ai-website', 
    label: language === 'en' ? 'AI-Driven Website' : 'Website Impulsionado por IA' 
  },
  { 
    value: 'workflow-automation', 
    label: language === 'en' ? 'Workflow Automation' : 'Automação de Fluxos de Trabalho' 
  }
];

export const getBusinessTypes = (language: string) => [
  { 
    value: 'startup', 
    label: language === 'en' ? 'Startup' : 'Startup' 
  },
  { 
    value: 'small', 
    label: language === 'en' ? 'Small Business' : 'Pequena Empresa' 
  },
  { 
    value: 'midsize', 
    label: language === 'en' ? 'Midsize Business' : 'Média Empresa' 
  },
  { 
    value: 'enterprise', 
    label: language === 'en' ? 'Enterprise / Corporation' : 'Grande Empresa / Corporação' 
  }
];

export const getInvestmentRanges = (language: string) => [
  { 
    value: 'less-1k', 
    label: language === 'en' ? '< 1K' : '< 1K' 
  },
  { 
    value: '1k-5k', 
    label: language === 'en' ? '1-5K' : '1-5K' 
  },
  { 
    value: '5k-10k', 
    label: language === 'en' ? '5-10K' : '5-10K' 
  },
  { 
    value: 'more-10k', 
    label: language === 'en' ? '> 10K' : '> 10K' 
  }
];

export const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  companyName: '',
  businessType: '',
  services: [],
  investment: '',
  country: ''
};