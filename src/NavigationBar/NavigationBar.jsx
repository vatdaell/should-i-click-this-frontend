import React from 'react';
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="bg-fuchsia-950 text-white py-4">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <div className="flex justify-start">
          <span className="text-xl font-semibold whitespace-nowrap"><Link to={`/`}>Should I click this?</Link></span>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
