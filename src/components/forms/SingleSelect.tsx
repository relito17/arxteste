import React from 'react';
import { SelectOption } from './types';

interface SingleSelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  error?: string;
  className?: string;
}

const SingleSelect: React.FC<SingleSelectProps> = ({
  options,
  value,
  onChange,
  label,
  error
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`px-3 py-2 rounded-lg text-xs sm:text-sm transition-all duration-300
              ${
                value === option.value
                  ? 'bg-[#FF6A00] text-white hover:bg-[#FF8A00]'
                  : 'bg-gray-900/50 text-gray-300 hover:bg-gray-800/50 border border-gray-700 hover:border-[#FF6A00]/50'
              }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      {error && <p className="text-red-500 text-xs sm:text-sm mt-2">{error}</p>}
    </div>
  );
};

export default SingleSelect;