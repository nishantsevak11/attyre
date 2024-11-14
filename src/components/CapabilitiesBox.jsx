import React from 'react';
import './CapabilitiesBox.css'; // Add this CSS file for custom styling if needed

const CapabilitiesBox = ({image,heading,desc}) => {
  return (
    <div className="flex flex-col items-center text-center p-5 border rounded-lg shadow-sm hover:shadow-md transition-shadow ">
      <img src={image} alt="User Icon" className="w-12 h-12 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{heading}</h3>
      <p className="text-gray-600">
        {desc}
      </p>
    </div>
  );
};

export default CapabilitiesBox;
