import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <div className="flex justify-start">
          <a href="#"><span className="text-xl font-semibold whitespace-nowrap">Should I click this?</span></a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
