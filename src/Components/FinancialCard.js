import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FinancialCard = ({ title, value, icon, timeFrame, percentChange }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <div className="flex justify-between mb-2">
        <span className="text-gray-500 text-sm">{title}</span>
        {icon}
      </div>
      <div className="text-2xl font-bold mb-1">
        {title === "Savings Ratio" ? `${(value * 100).toFixed(1)}%` : `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
      </div>
      <div className="flex items-center text-xs">
        <span className={`${percentChange >= 0 ? 'text-green-500' : 'text-red-500'} flex items-center`}>
          {percentChange >= 0 ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          {Math.abs(percentChange)}%
        </span>
        <span className="text-gray-500 ml-1">from last {timeFrame}</span>
      </div>
    </div>
  );
};

export default FinancialCard;