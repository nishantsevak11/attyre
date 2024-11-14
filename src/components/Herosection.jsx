import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa'; // Importing an icon for success
import './Herosection.css';


const Herosection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Create a URL for previewing the image
    }
  };

  const handleCreatePalette = () => {
    if (selectedImage) {
      navigate('/pallate', { state: { image: selectedImage } });
    } else {
      alert('Please upload an image first.');
    }
  };

  return (
    <div className="hero-container w-full   bg-[#F8F7F4] rounded-lg mx-auto mt-5 flex flex-col md:flex-row">
      {/* Left section - Text and upload */}
      <div className="w-full md:w-1/2 md:pr-8  flex  flex-col justify-center p-10">
        <h1 className="hero-heading text-2xl md:text-3xl font-bold mb-4">Personal Color Analysis</h1>
        <p className="text-gray-600 mb-4">
          Our <span className="text-red-500 font-semibold">AI-powered color analysis tool</span> helps you discover the colors that enhance your natural beauty, match your unique features, and fit your personal style.
        </p>
        <p className="text-gray-600 mb-6">
          Upload your photo and get instant recommendations for your perfect color palette.
        </p>
        <div className="border-2 bg-white border-gray-100 p-6 rounded-md mb-4 text-center cursor-pointer hover:border-gray-200 transition relative">
          <label className="cursor-pointer">
            <input type="file" className="hidden" onChange={handleImageChange} />
            {selectedImage ? (
              <div className="flex flex-col items-center">
                <FaCheckCircle className="text-green-500 text-4xl mb-2" />
                <p className="text-gray-600">Image uploaded successfully!</p>
              </div>
            ) : (
              
              <span className="block text-gray-500">
                <img className='m-auto border-2 border-gray-100 p-2 rounded-md mb-3' src="/upload.png" alt="" />
                <span className='text-red-500'>Click to upload</span> or drag and drop<br />
                SVG, PNG, JPG, or GIF
              </span>
            )}
          </label>
        </div>
        <button
          className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-pink-600 transition"
          onClick={handleCreatePalette}
        >
          Create your Palette
        </button>
      </div>

      <div className="right w-full h-full md:w-1/2">
        <img
          src='/hero-image.png'
          alt="Uploaded preview or color swatches"
          className="rounded-md object-cover w-full h-[50vh]"
        />
      </div>
    </div>
  );
};

export default Herosection;
