import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Pallate.css';
import { useData } from '../../public/DataContext';

const Palette = () => {
  const location = useLocation();
  const { image } = location.state || {};
  const [uploadedImage, setUploadedImage] = useState(image || "/dummy");
  const [skinColor, setSkinColor] = useState("#ffcc99");
  const [hairColor, setHairColor] = useState("#4b3f44");
  const [eyeColor, setEyeColor] = useState("#0066cc");
  const fileInputRef = React.createRef();

  const [preferences, setPreferences] = useState({
    colorIntensity: [],
    season: [],
    occasion: [],
    style: []
  });

  const handleSelect = (category, value) => {
    setPreferences((prevPreferences) => {
      const categorySelections = prevPreferences[category];
      const isSelected = categorySelections.includes(value);

      return {
        ...prevPreferences,
        [category]: isSelected
          ? categorySelections.filter((item) => item !== value) // Remove if already selected
          : [...categorySelections, value] // Add if not selected
      };
    });
  };



  // Initialize useNavigate hook
  const navigate = useNavigate();
  const { data, setData } = useData();

  const handleColorPick = async (part) => {
    if (window.EyeDropper) {
      try {
        const eyeDropper = new window.EyeDropper();
        const result = await eyeDropper.open();
        const color = result.sRGBHex;

        if (part === "skin") setSkinColor(color);
        else if (part === "hair") setHairColor(color);
        else if (part === "eye") setEyeColor(color);
      } catch (error) {
        console.error("Error using EyeDropper API:", error);
      }
    } else {
      alert("Your browser does not support the EyeDropper API.");
    }
  };



  const handleGenerateClick = () => {
    setData({
      skinColor: skinColor,
      hairColor: hairColor,
      eyeColor: eyeColor,
      preferences: preferences
    });
    console.log("Data saved");
    console.log(data);
    navigate('/pallatePage'); // Navigate to the desired route
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setUploadedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleImageError = () => {
    setUploadedImage("/dummy.png");
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="main-container ">
      <div className=''>
        <div className="header">
          <h5 className="heading-2 text-3xl font-bold text-gray-800 mb-4 text-center">
            Select Your Colors
          </h5>
          <p className="text-gray-500 mb-6 text-center">
            Use the color picker tool to identify your hair, skin, and eye colors.
            For hair and skin, choose the primary tones without focusing on highlights or shadows.
            For eyes, select the most prominent color, typically found in the center of the iris.
          </p>
        </div>

        <div className="frame flex sm:flex-row w-full gap-10">
          <div className="image-box w-[70%] ">
          <img 
              className="w-full h-auto object-cover" 
              src={uploadedImage || '/dummy.png'} 
              alt="Model" 
              onError={handleImageError} // Handle error and load fallback image
            />
          </div>
          <div className="w-[20%] sm:w-3 py-5 flex flex-col gap-4 justify-center ">
            <div className="flex flex-col items-center space-x-2">

              <button
                style={{ backgroundColor: skinColor }}
                className="border-2 border-black px-6 py-6 bg-pink-600 rounded-full text-white font-semibold hover:bg-pink-700 transition"
                onClick={() => handleColorPick("skin")}
              >
              </button>
              <p>skin</p>
            </div>
            <div className="flex flex-col items-center space-x-2">

              <button
                style={{ backgroundColor: hairColor }}
                className="border-2 border-black px-6 py-6 bg-pink-600 rounded-full text-white font-semibold hover:bg-pink-700 transition"
                onClick={() => handleColorPick("hair")}
              >
              </button>
              <p>hair</p>

            </div>
            <div className="flex flex-col items-center space-x-2">

              <button
                style={{ backgroundColor: eyeColor }}
                className="border-2 border-black px-6 py-6 bg-pink-600 rounded-full text-white font-semibold hover:bg-pink-700 transition"
                onClick={() => handleColorPick("eye")}
              >
              </button>
              <p>eye</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center my-5">
          <button className="w-full sm:w-auto text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 py-2 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700 transition" onClick={triggerFileInput}>
            Change Image
          </button>
          <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} ref={fileInputRef} />
          <button className="w-full sm:w-auto text-xs sm:text-sm md:text-base lg:text-lg btn px-4 sm:px-6 py-2 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700 transition" onClick={handleGenerateClick}>
            Generate Palette
          </button>
        </div>

      </div>
      
      {/* Additional Preferences  */}
      <div className="mt-8">
    
    <div className="max-w-[100%]  mx-auto p-4 ">
      <h2 className="heading-2 text-2xl font-semibold mb-4">Advanced Preferences - Optional</h2>

      {/* Color Intensity Preference */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Color Intensity Preference</h3>
        <p>Defines the intensity and vibrancy of the colors in the palette.</p>
        <hr className='my-3 bg-black h-0.3' />
        <div className="flex flex-wrap gap-2">
          {['Bold', 'Vibrant', 'Muted', 'Pastel', 'Soft', 'Neutral', 'Classic', 'Dark', 'Earthy', 'Warm'].map((option) => (
            <button
              key={option}
              className={`px-3 py-1 rounded-full ${
                preferences.colorIntensity.includes(option) ? 'bg-pink-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleSelect('colorIntensity', option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Seasonal Preferences */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Seasonal Preferences</h3>
        <p>Colors inspired by the mood and feel of each season.</p>
        <hr className='my-3 bg-black h-0.3' />
        <div className="flex flex-wrap gap-2">
          {['Winter', 'Spring', 'Summer', 'Autumn'].map((option) => (
            <button
              key={option}
              className={`px-3 py-1 rounded-full ${
                preferences.season.includes(option) ? 'bg-pink-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleSelect('season', option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Occasion-Based Preferences */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Occasion-Based Preferences</h3>
        <p>Find colors that fit the occasion, from casual to formal.</p>
        <hr className='my-3 bg-black h-0.3' />
        <div className="flex flex-wrap gap-2">
          {['Casual', 'Everyday', 'Work', 'Formal', 'Vacation', 'Festive', 'Sport'].map((option) => (
            <button
              key={option}
              className={`px-3 py-1 rounded-full ${
                preferences.occasion.includes(option) ? 'bg-pink-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleSelect('occasion', option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Style Preferences */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Style Preferences</h3>
        <p>Choose your style vibe to match your overall look.</p>
        <hr className='my-3 bg-black h-0.3' />
        <div className="flex flex-wrap gap-2">
          {['Modern', 'Bohemian', 'Minimalistic', 'Chic', 'Vintage'].map((option) => (
            <button
              key={option}
              className={`px-3 py-1 rounded-full  ${
                preferences.style.includes(option) ? 'bg-pink-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleSelect('style', option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <button className="w-full sm:w-auto text-xs sm:text-sm md:text-base lg:text-lg btn px-4 sm:px-6 py-2 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700 transition" onClick={handleGenerateClick}>
          Generate Palette
        </button>
    </div>

      </div>
    </div>
  );
};

export default Palette;
