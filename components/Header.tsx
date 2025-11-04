
import React from 'react';
import CloseIcon from './icons/CloseIcon';
import GridIcon from './icons/GridIcon';

interface HeaderProps {
  openTabs: { name: string }[];
  activeTab: string;
  onTabClick: (name: string) => void;
  onCloseTab: (name: string) => void;
}

const Header: React.FC<HeaderProps> = ({ openTabs, activeTab, onTabClick, onCloseTab }) => {
  return (
    <header className="bg-slate-50 border-b border-slate-200 px-4 pt-3 flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-2">
        {openTabs.map(tab => (
          <button
            key={tab.name}
            onClick={() => onTabClick(tab.name)}
            className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors duration-200 ease-in-out ${
              activeTab === tab.name
                ? 'bg-green-500 text-white shadow-sm'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            <span>{tab.name}</span>
            {tab.name !== '更多功能' && (
              <span
                className="p-0.5 rounded-full hover:bg-black/20"
                onClick={(e) => {
                  e.stopPropagation();
                  onCloseTab(tab.name);
                }}
              >
                <CloseIcon className="w-3.5 h-3.5" />
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="flex items-center">
        <button className="p-2 rounded-md hover:bg-slate-200 text-slate-500">
          <GridIcon className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
