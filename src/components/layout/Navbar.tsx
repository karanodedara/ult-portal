import React, { useState } from 'react';
import { Bell, Menu, User, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 glass-effect border-b border-neutral-200/60 z-50 shadow-soft">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2.5 rounded-lg hover:bg-neutral-100 transition-all duration-200 hover:scale-105"
          >
            <Menu className="w-5 h-5 text-neutral-700" />
          </button>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-brand rounded-xl flex items-center justify-center shadow-medium transform hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-base">A</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-neutral-900 tracking-tight">AgencyHub</span>
              <div className="text-xs text-neutral-500 -mt-1">Premium Portal</div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button className="relative p-2.5 rounded-lg hover:bg-neutral-100 transition-all duration-200 group">
            <Bell className="w-5 h-5 text-neutral-600 group-hover:text-brand-600 transition-colors" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-500 rounded-full animate-pulse shadow-lg"></span>
          </button>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-neutral-100 transition-all duration-200 group"
            >
              <div className="w-9 h-9 gradient-accent rounded-lg flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-200">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="hidden md:block text-left">
                <div className="text-sm font-semibold text-neutral-900">Sarah Chen</div>
                <div className="text-xs text-neutral-500">Administrator</div>
              </div>
              <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-large border border-neutral-200/60 py-2 animate-slide-down">
                <div className="px-4 py-3 border-b border-neutral-100">
                  <div className="text-sm font-semibold text-neutral-900">Sarah Chen</div>
                  <div className="text-xs text-neutral-500 mt-0.5">sarah.chen@agency.com</div>
                </div>
                <div className="py-2">
                  <a href="#" className="flex items-center px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors">
                    <User className="w-4 h-4 mr-3 text-neutral-400" />
                    View Profile
                  </a>
                  <a href="#" className="flex items-center px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors">
                    <Bell className="w-4 h-4 mr-3 text-neutral-400" />
                    Notifications
                  </a>
                </div>
                <div className="border-t border-neutral-100 pt-2">
                  <a href="#" className="flex items-center px-4 py-2.5 text-sm text-danger-600 hover:bg-danger-50 transition-colors font-medium">
                    Sign out
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;