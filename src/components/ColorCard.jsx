import React from 'react';

const ColorCard = ({ color, name, tag, desc }) => {
  return (
    <div className="max-w-[300px] border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white">
      <div className="h-32" style={{ backgroundColor: color }}></div>
      <div className="py-2 px-3 text-start">
        <h4 className="text-md font-semibold ">{name}</h4>
        <p className="text-sm text-gray-500">{tag}</p>
        <p className="text-sm text-gray-500 mt-2">{desc}</p>
      </div>
    </div>
  );
};

export default ColorCard;
