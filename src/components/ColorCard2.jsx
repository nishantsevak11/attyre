import React from 'react';

const ColorCard2 = ({ color, name, reason }) => {

    


  return (
    <div  className="max-w-[300px] border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white">
      <div className="h-32" style={{ backgroundColor: color }}></div>
      <div className="p-4 text-start">
        <h4 className="text-md font-semibold mb-2">{name}</h4>
        <p className="text-sm text-gray-500 mt-2">{reason}</p>
      </div>
    </div>
  );
};

export default ColorCard2;
