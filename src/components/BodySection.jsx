import React from 'react';
import './BodySection.css';
import CapabilitiesBox from './CapabilitiesBox';

const BodySection = () => {

  const Capabilities = [
    {
      image: "/icon1.svg",
      heading: "Customized for Your Natural Beauty",
      desc: "Tailors recommendations based on your unique skin tone, eye color, and hair color to create a harmonious look."
    },
    {
      image: "/icon2.svg",
      heading: "Instantly Curated Palette",
      desc: "Quickly get a personalized palette with 25 colors to wear and 10 to avoid, complete with names, hex codes, and reasons for easy styling."
    },
    {
      image: "/icon2.svg",
      heading: "Flexible to Your Style Preferences",
      desc: "Choose from options like bold, neutral, minimalist, or vibrant colors, so your palette truly reflects your personal style."
    },
    {
      image: "/FeaturedIcon.svg",
      heading: "Enhances Shopping Confidence",
      desc: "Know exactly which colors to look for when shopping, making it easier to find pieces you’ll love."
    },
    {
      image: "/icon4.svg",
      heading: "Built on Color Science",
      desc: "Utilizes principles of color theory to ensure each color complements your natural tones and undertones."
    },
    {
      image: "/icon5.svg",
      heading: "Save Time and Eliminate Guesswork",
      desc: "No more trial and error with colors that don’t suit you. Get instant recommendations that are tailored for you, making shopping easier than ever."
    },
  ];

  return (
    <div className="flex flex-col p-10 justify-center items-center space-y-10 max-w-6xl mx-auto my-10">
      <div className="header text-center space-y-4">
        <p className="cap text-[#F63D68]">Our Capabilities</p>
        <h4 className="text-2xl font-bold">Why Use Our Color Analysis Tool?</h4>
        <p className="text-gray-700 max-w-2xl">
          Your personal color palette is more than just a range of shades; it’s a path to feeling confident, radiant, and truly yourself. Our advanced color analysis tool reveals colors that harmonize with your unique skin tone, eye color, and hair color, making it easier to choose tones that enhance your natural beauty.
        </p>
      </div>
      <div className="other grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {
          // Fixing the map function to correctly render the CapabilitiesBox component
          Capabilities.map((capability, index) => {
            return (
              <CapabilitiesBox 
                key={index} 
                image={capability.image} 
                heading={capability.heading} 
                desc={capability.desc} 
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default BodySection;
