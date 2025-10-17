import React from 'react';
import {
  Home,
  FolderOpen,
  FileText,
  Receipt,
  Settings,
  X,
  Sparkles
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onSectionChange,
  isOpen,
  onClose
}) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'files', label: 'Files', icon: FileText },
    { id: 'invoices', label: 'Invoices', icon: Receipt },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed top-20 left-0 bottom-0 w-72 glass-effect border-r border-neutral-200/60 z-40
        transform transition-all duration-300 ease-in-out shadow-large
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 lg:hidden">
          <span className="font-semibold text-neutral-900">Navigation</span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-neutral-100 transition-all duration-200"
          >
            <X className="w-5 h-5 text-neutral-600" />
          </button>
        </div>

        <div className="p-6">
        

          <nav>
            <ul className="space-y-1.5">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        onSectionChange(item.id);
                        onClose();
                      }}
                      className={`
                        w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl text-left
                        transition-all duration-200 group relative overflow-hidden
                        ${isActive
                          ? 'bg-gradient-to-r from-brand-600 to-brand-700 text-white shadow-medium transform scale-[1.02]'
                          : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900'
                        }
                      `}
                    >
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      )}
                      <Icon className={`w-5 h-5 relative z-10 ${isActive ? 'text-white' : 'text-neutral-500 group-hover:text-brand-600'} transition-colors`} />
                      <span className="font-medium relative z-10">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-8 pt-6 border-t border-neutral-200">
            <div className="text-xs text-neutral-500 mb-2 font-medium uppercase tracking-wider">Quick Actions</div>
            <button className="w-full px-4 py-3 rounded-xl border-2 border-dashed border-neutral-300 text-neutral-600 hover:border-brand-400 hover:text-brand-700 hover:bg-brand-50 transition-all duration-200 text-sm font-medium">
              + New Project
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;