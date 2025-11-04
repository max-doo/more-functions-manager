
import React from 'react';
import FolderIcon from './icons/FolderIcon';
import ArchiveBoxIcon from './icons/ArchiveBoxIcon';
import CalendarIcon from './icons/CalendarIcon';
import ChartBarIcon from './icons/ChartBarIcon';
import ClipboardDocumentListIcon from './icons/ClipboardDocumentListIcon';
import CogIcon from './icons/CogIcon';
import CreditCardIcon from './icons/CreditCardIcon';
import GlobeAltIcon from './icons/GlobeAltIcon';
import MegaphoneIcon from './icons/MegaphoneIcon';
import TagIcon from './icons/TagIcon';
import UsersIcon from './icons/UsersIcon';
import WrenchScrewdriverIcon from './icons/WrenchScrewdriverIcon';

interface DynamicIconProps {
  iconName?: string;
  className?: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName, className }) => {
  const iconProps = { className };

  switch (iconName) {
    case 'ArchiveBoxIcon':
      return <ArchiveBoxIcon {...iconProps} />;
    case 'CalendarIcon':
      return <CalendarIcon {...iconProps} />;
    case 'ChartBarIcon':
      return <ChartBarIcon {...iconProps} />;
    case 'ClipboardDocumentListIcon':
      return <ClipboardDocumentListIcon {...iconProps} />;
    case 'CogIcon':
      return <CogIcon {...iconProps} />;
    case 'CreditCardIcon':
      return <CreditCardIcon {...iconProps} />;
    case 'GlobeAltIcon':
      return <GlobeAltIcon {...iconProps} />;
    case 'MegaphoneIcon':
      return <MegaphoneIcon {...iconProps} />;
    case 'TagIcon':
      return <TagIcon {...iconProps} />;
    case 'UsersIcon':
      return <UsersIcon {...iconProps} />;
    case 'WrenchScrewdriverIcon':
      return <WrenchScrewdriverIcon {...iconProps} />;
    default:
      return <FolderIcon {...iconProps} />;
  }
};

export default DynamicIcon;
