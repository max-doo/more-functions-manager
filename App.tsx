
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { MENU_DATA } from './constants';
import type { MenuItem } from './types';

const App: React.FC = () => {
  const [menuData] = useState<MenuItem[]>(MENU_DATA);
  const [activeMenu, setActiveMenu] = useState<string>(menuData[0]?.name || '');
  const [pinnedFunctions, setPinnedFunctions] = useState<Set<string>>(new Set());
  
  const [openTabs, setOpenTabs] = useState<{ name: string }[]>([{ name: '更多功能' }]);
  const [activeTab, setActiveTab] = useState<string>('更多功能');

  const handleTogglePin = (functionName: string) => {
    setPinnedFunctions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(functionName)) {
        newSet.delete(functionName);
      } else {
        newSet.add(functionName);
      }
      return newSet;
    });
  };

  const handleMenuClick = (menuName: string) => {
    setActiveMenu(menuName);
    const sectionId = `section-${menuName}`;
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFunctionClick = (functionName: string) => {
    if (!openTabs.some(tab => tab.name === functionName)) {
      setOpenTabs(prevTabs => [...prevTabs, { name: functionName }]);
    }
    setActiveTab(functionName);
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  
  const handleCloseTab = (tabNameToClose: string) => {
    const tabIndex = openTabs.findIndex(tab => tab.name === tabNameToClose);
    const newTabs = openTabs.filter(tab => tab.name !== tabNameToClose);
    
    if (activeTab === tabNameToClose) {
      const newActiveTab = newTabs[tabIndex - 1] || newTabs[0];
      setActiveTab(newActiveTab.name);
    }
    setOpenTabs(newTabs);
  };

  const renderContent = () => {
    if (activeTab === '更多功能') {
      return (
        <MainContent
          menuData={menuData}
          pinnedFunctions={pinnedFunctions}
          onTogglePin={handleTogglePin}
          setActiveMenu={setActiveMenu}
          onFunctionClick={handleFunctionClick}
        />
      );
    }
    return (
      <div className="h-full p-6 bg-white rounded-lg shadow-inner">
        <h1 className="text-2xl font-bold mb-4">{activeTab}</h1>
        <p className="text-slate-600">This is a placeholder page for the "{activeTab}" function.</p>
        <p className="text-slate-500 mt-2">The actual function content and UI would be displayed here.</p>
      </div>
    );
  };


  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-800">
      <Sidebar 
        menuData={menuData} 
        activeMenu={activeMenu} 
        onMenuClick={handleMenuClick} 
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          openTabs={openTabs}
          activeTab={activeTab}
          onTabClick={handleTabClick}
          onCloseTab={handleCloseTab}
        />
        <div className="flex-1 overflow-hidden p-4 pl-0">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default App;
