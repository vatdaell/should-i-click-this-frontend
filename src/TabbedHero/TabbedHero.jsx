import React, { useState } from 'react';
import LinkForm from './LinkForm';
import DomainForm from './DomainForm';

const TabbedHero = () => {
  const [activeTab, setActiveTab] = useState('linkVerifier');

  return (
      <div className="container mx-auto">
        <div className="flex justify-start mt-4 mr-4">
          <button
            className={`px-4 py-2 mx-1 ${activeTab === 'linkVerifier' ? 'text-black bg-white' : 'text-white bg-gray-700'}  rounded-tl-lg rounded-tr-lg`}
            onClick={() => setActiveTab('linkVerifier')}
          >
            Link Verifier
          </button>
          <button
            className={`px-4 py-2 mx-1 ${activeTab === 'domainVerifier' ? 'text-black bg-white' : 'text-white bg-gray-700'}  rounded-tl-lg rounded-tr-lg`}
            onClick={() => setActiveTab('domainVerifier')}
          >
            Domain Verifier
          </button>
        </div>
        <div>
          {activeTab === 'linkVerifier' && <LinkForm/>}
          {activeTab === 'domainVerifier' && <DomainForm/>}
        </div>
      </div>
  );
};

export default TabbedHero;
