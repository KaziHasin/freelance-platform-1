import React from 'react';

interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  id?: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({ label, icon, id, ...props }) => {
  const inputId =
    id || props.name || `input-${label?.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div>
      <label
        htmlFor={inputId}
        className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          type="number"
          {...props}
          className={`w-full ${icon ? 'pl-10' : 'pl-4'} py-3 
            border border-gray-200 dark:border-gray-600 rounded-lg 
            focus:border-indigo-500 hover:border-indigo-500 
            focus:ring-0 focus:outline-none dark:focus:border-indigo-500 
            dark:bg-gray-700 dark:text-white 
            transition-colors duration-200 ease-in-out`}
        />
      </div>
    </div>
  );
};
