import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-2">Manjarie</h2>
        <p className="text-xl text-gray-400">
          Where Every Find Is Special!
        </p>
        <p className="text-sm text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} Manjarie. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
