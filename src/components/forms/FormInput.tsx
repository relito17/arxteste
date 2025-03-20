import React from 'react';

interface FormInputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  error?: string;
  className?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  error
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={required ? `${placeholder} *` : placeholder}
        className={`w-full px-4 py-3 rounded-lg bg-gray-900/50 border ${
          error ? 'border-red-500' : 'border-gray-700'
        } text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-all duration-300 text-sm sm:text-base`}
      />
      {error && (
        <p className="absolute -bottom-6 left-0 text-red-500 text-xs sm:text-sm">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;