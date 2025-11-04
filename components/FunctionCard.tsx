
import React from 'react';
import DynamicIcon from './DynamicIcon';

interface FunctionCardProps {
  name: string;
  parentName: string | null;
  description: string;
  isPinned: boolean;
  onToggle: () => void;
  onFunctionClick: (functionName: string) => void;
  icon?: string;
}

const ToggleSwitch: React.FC<{ checked: boolean; onChange: () => void; id: string }> = ({ checked, onChange, id }) => {
  return (
    <label htmlFor={id} className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" id={id} checked={checked} onChange={onChange} className="sr-only peer" />
      <div className="w-10 h-5 bg-slate-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
    </label>
  );
};

const FunctionCard: React.FC<FunctionCardProps> = ({ name, parentName, description, isPinned, onToggle, onFunctionClick, icon }) => {
  const toggleId = `toggle-${name.replace(/\s+/g, '-')}`;

  return (
    <div 
      className={`bg-white rounded-lg p-4 flex flex-col hover:shadow-lg hover:border-blue-400 hover:border-2 transition-all duration-200 ease-in-out cursor-pointer ${
        isPinned ? 'border-2 border-blue-400' : 'border border-slate-200'
      }`}
      onClick={() => onFunctionClick(name)}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 p-2 rounded-md">
            <DynamicIcon iconName={icon} className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex-1 text-left">
            {parentName && <p className="text-xs text-slate-500">{parentName}</p>}
            <h3 className="font-semibold text-slate-800 text-base">{name}</h3>
          </div>
        </div>
        <div 
          className="text-center flex-shrink-0 ml-2"
          onClick={(e) => e.stopPropagation()}
        >
          <ToggleSwitch id={toggleId} checked={isPinned} onChange={onToggle} />
          <p className="text-xs text-slate-500 mt-1">开启功能</p>
        </div>
      </div>
      <p className="text-xs text-slate-600 flex-grow leading-relaxed text-left">
        {description}
      </p>
    </div>
  );
};

export default FunctionCard;
