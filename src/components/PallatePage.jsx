import React, { useEffect, useState } from 'react';
import ColorCard from './ColorCard';
import ColorCard2 from './ColorCard2';
import { useData } from '../../public/DataContext';
import './PallatePage.css'
import { Bars } from 'react-loading-icons'

const PalettePage = ({ skin, hair, eye }) => {
  const [paletteData, setPaletteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const { data} = useData();
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getColorPalette', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ skinTone: skin, hairColor: hair, eyeColor: eye }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPaletteData(data.palette);
      } catch (error) {
        console.error('Error fetching the palette data:', error);
        setError('Failed to fetch palette data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [skin, hair, eye]);

  if (loading) {
    return <p className="text-center text-lg text-gray-600  h-[80vh]">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-600">{error}</p>;
  }

  const cardStyle = {};


// Media query logic
const isMobile = window.innerWidth <= 640;
if (isMobile) {
  cardStyle.gridTemplateColumns = 'repeat(2, 1fr)';
} else {
  cardStyle.gridTemplateColumns = '';
}



  return (
    <div className="p-5 bg-white w-[80%] m-auto">

      
        <h1 className='heading-1 text-3xl text-gray-800 mb-8'>Your Personalised Pallate</h1>
        <h2 className="text-3xl font-bold text-left text-[#F63D68] mb-4">{paletteData.palette_Name}</h2>
        <p className="text-left text-sm text-gray-600 mb-8">"{paletteData.palette_Description}"</p>
      

      <div style={cardStyle} className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paletteData.recommended_colors.map((color, index) => (
          <ColorCard
            key={index}
            color={color.hex_code}
            name={color.color_name}
            tag={color.usage}
            desc={color.description}
          />
        ))}
      </div>

      <h3 className="heading-2 text-2xl text-start text-gray-700 mt-12">Colors to Avoid</h3>
      <div style={cardStyle} className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {paletteData.colors_to_avoid.map((colorObj, index) => (
          <ColorCard2
            key={index}
            color={colorObj.hex_code}
            name={colorObj.color_name}
            reason={colorObj.reason}
          />
        ))}
      </div>
    </div>
  );
};

export default PalettePage;
