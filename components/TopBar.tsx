import React from 'react';
import { PhoneIcon, MailIcon } from '../constants';

const TopBar: React.FC = () => {
  return (
    <div className="bg-blue-600 dark:bg-blue-900 py-2 px-4 hidden sm:block">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs sm:text-sm text-white">
        <div className="flex items-center space-x-4 sm:space-x-6">
          <a href="tel:+967779080460" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
            <PhoneIcon className="w-4 h-4" />
            <span>+967 779 080 460</span>
          </a>
          <a href="mailto:mohammed.dev0xinj@gmail.com" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
            <MailIcon className="w-4 h-4" />
            <span>mohammed.dev0xinj@gmail.com</span>
          </a>
        </div>
        <div className="text-blue-100 dark:text-blue-300">
          Available 24/7 for your security needs
        </div>
      </div>
    </div>
  );
};

export default TopBar;

