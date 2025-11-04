
import React from 'react';
import type { MenuItem } from '../types';

interface SidebarProps {
  menuData: MenuItem[];
  activeMenu: string;
  onMenuClick: (name: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ menuData, activeMenu, onMenuClick }) => {
  return (
    <aside className="w-40 bg-white flex-shrink-0 shadow-sm">
      <nav className="pt-4">
        <ul>
          {menuData.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.name}`}
                onClick={(e) => {
                  e.preventDefault();
                  onMenuClick(item.name);
                }}
                className={`block py-3 px-6 text-sm transition-all duration-200 ease-in-out relative ${
                  activeMenu === item.name
                    ? 'text-blue-600 font-semibold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {activeMenu === item.name && <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r-full"></span>}
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
