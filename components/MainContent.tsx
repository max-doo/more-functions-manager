import React, { useRef, useEffect, useCallback, useState } from 'react';
import type { MenuItem, FunctionItem } from '../types';
import FunctionCard from './FunctionCard';

interface MainContentProps {
  menuData: MenuItem[];
  pinnedFunctions: Set<string>;
  onTogglePin: (functionName: string) => void;
  setActiveMenu: (menuName: string) => void;
  onFunctionClick: (functionName:string) => void;
}

const MainContent: React.FC<MainContentProps> = ({ menuData, pinnedFunctions, onTogglePin, setActiveMenu, onFunctionClick }) => {
  const mainScrollRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const scrollTimeout = useRef<number | null>(null);
  const [activeTabs, setActiveTabs] = useState<Record<string, string>>({});

  const flattenFunctions = (items: FunctionItem[], parentItem: FunctionItem | null, parentIcon?: string): (FunctionItem & { parentName: string | null })[] => {
    let result: (FunctionItem & { parentName: string | null })[] = [];
    for (const item of items) {
      // Inherit icon from parent if not specified
      const currentIcon = item.icon || parentIcon;
      if (item.description) {
        result.push({ ...item, icon: currentIcon, parentName: parentItem ? parentItem.name : null });
      }
      if (item.children && item.children.length > 0) {
        result = result.concat(flattenFunctions(item.children, item, currentIcon));
      }
    }
    return result;
  };

  const handleScroll = useCallback(() => {
    const mainEl = mainScrollRef.current;
    if (!mainEl) return;

    if (scrollTimeout.current) {
        cancelAnimationFrame(scrollTimeout.current);
    }

    scrollTimeout.current = requestAnimationFrame(() => {
        let currentActiveMenu = '';
        // Add a 60px top offset to trigger the highlight slightly below the sticky header
        const scrollPosition = mainEl.scrollTop + 60;

        const sections = Array.from(sectionRefs.current.entries());

        for (const [name, element] of sections) {
            if (element.offsetTop <= scrollPosition) {
                currentActiveMenu = name;
            } else {
                break; 
            }
        }
        
        if (currentActiveMenu) {
            setActiveMenu(currentActiveMenu);
        }
    });

  }, [setActiveMenu]);

  useEffect(() => {
    const mainEl = mainScrollRef.current;
    if (!mainEl) return;

    mainEl.addEventListener('scroll', handleScroll);
    return () => {
        mainEl.removeEventListener('scroll', handleScroll);
        if (scrollTimeout.current) {
            cancelAnimationFrame(scrollTimeout.current);
        }
    };
  }, [handleScroll]);

  return (
    <main
      ref={mainScrollRef}
      className="h-full overflow-y-auto p-6 bg-white rounded-lg shadow-inner scroll-smooth"
    >
      {menuData.map(menuItem => {
        const menuItemName = menuItem.name;

        // A second-level item is a group if it has children. These groups will become the tabs.
        const secondLevelGroups = (menuItem.children || []).filter(item => item.children && item.children.length > 0);
        
        const tabNames = ['全部', ...secondLevelGroups.map(item => item.name)];
        const activeTab = activeTabs[menuItemName] || '全部';

        const handleTabClick = (tabName: string) => {
          setActiveTabs(prev => ({ ...prev, [menuItemName]: tabName }));
        };
        
        const allFunctions = flattenFunctions(menuItem.children, null, menuItem.icon);

        const filteredFunctions = activeTab === '全部'
          ? allFunctions
          : allFunctions.filter(func => func.parentName === activeTab);
        
        return (
          <section
            key={menuItem.name}
            id={`section-${menuItem.name}`}
            ref={el => {
              if (el) {
                sectionRefs.current.set(menuItem.name, el);
              } else {
                sectionRefs.current.delete(menuItem.name);
              }
            }}
            className="mb-8"
          >
            <div className="sticky top-[-24px] bg-white z-10 pt-4 mb-4">
              <h2 className="text-base font-semibold text-slate-600 pb-2">
                {menuItem.name}
              </h2>
              {/* Only show tabs if there are groups to filter by. */}
              {secondLevelGroups.length > 0 && (
                <div className="flex items-center border-b border-slate-200">
                  {tabNames.map(tabName => (
                    <button
                      key={tabName}
                      onClick={() => handleTabClick(tabName)}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ease-in-out -mb-px ${
                        activeTab === tabName
                          ? 'border-b-2 border-blue-500 text-blue-600'
                          : 'text-slate-500 hover:text-slate-800 border-b-2 border-transparent'
                      }`}
                    >
                      {tabName}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
              {filteredFunctions.map(func => (
                <FunctionCard
                  key={func.name}
                  parentName={func.parentName}
                  name={func.name}
                  icon={func.icon}
                  description={func.description || ''}
                  isPinned={pinnedFunctions.has(func.name)}
                  onToggle={() => onTogglePin(func.name)}
                  onFunctionClick={onFunctionClick}
                />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default MainContent;