import React from 'react';
import { ServiceOption } from './types';
import { X } from 'lucide-react';

interface MultiSelectProps {
  options: ServiceOption[];
  value: string[];
  onChange: (value: string[]) => void;
  error?: string;
  onClearError?: () => void;
  className?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, value, onChange, error, onClearError }) => {
  const handleToggle = (optionValue: string) => {
    const newValue = value.includes(optionValue)
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue];
    onChange(newValue);
    if (onClearError) {
      onClearError();
    }
  };

  const isSelected = (optionValue: string) => value.includes(optionValue);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option.value}
            type="button"
            onClick={() => handleToggle(option.value)}
            className={`px-3 py-2 rounded-lg text-xs sm:text-sm transition-all duration-300 flex items-center gap-2
              ${
                isSelected(option.value)
                  ? 'bg-[#FF6A00] text-white hover:bg-[#FF8A00]'
                  : 'bg-gray-900/50 text-gray-300 hover:bg-gray-800/50 border border-gray-700 hover:border-[#FF6A00]/50'
              }`}
          >
            {option.label}
            {isSelected(option.value) && (
              <X className="w-3 h-3 sm:w-4 sm:h-4 text-white/80" />
            )}
          </button>
        ))}
      </div>
      {error && (
        <p className="text-xs sm:text-sm text-red-500 mt-2">{error}</p>
      )}
    </div>
  );
};

export default MultiSelect;