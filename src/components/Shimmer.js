// Shimmer.js
import React from 'react';

const Shimmer = () => {
  return (
    <div className="w-full sm:w-72 p-3 m-3 bg-gray-200 shadow-lg flex flex-col rounded-lg animate-pulse">
      <div className="mb-3 w-full h-60 bg-gray-300 rounded-md overflow-hidden">
        <div className="w-full h-full bg-gray-400" />
      </div>
      <div className="flex flex-col grow justify-between p-2">
        <div className="space-y-4">
          <div className="bg-gray-300 h-6 rounded-md" />
          <div className="bg-gray-300 h-4 rounded-md" />
          <div className="bg-gray-300 h-4 rounded-md" />
        </div>
        <div className="flex flex-row justify-between items-center mt-4 self-end w-full">
          <div className="space-y-2">
            <div className="bg-gray-300 h-4 w-16 rounded-md" />
            <div className="bg-gray-300 h-4 w-16 rounded-md" />
          </div>
          <div>
            <div className="bg-gray-300 h-8 w-24 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
