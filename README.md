AI-Powered Color Analysis Tool
Project Overview
This project is an AI-powered color analysis tool designed to help users discover colors that enhance their natural beauty, match their unique features, and fit their personal style. The tool allows users to upload a photo and pick colors based on their features such as skin tone, hair color, and eye color. After inputting additional preferences, users will receive a personalized color palette.

The project is built using React.js, CSS, and Tailwind CSS. A mock API is implemented using Mirage JS to simulate the color palette generation process, which can later be replaced with a real API.

Features
Image Upload: Users can upload their photo to start the color analysis process.
Personalized Color Palette: After uploading the photo, users can pick their hair, eye, and skin color, and generate a personalized color palette.
Feature Display: The features of the website are dynamically displayed using a JavaScript object, making it easy to update and manage.
Color Picker API: Integrated to allow users to pick specific colors from their image.
Context API: Data is stored in Context API for easy state management across components.
Responsive Design: The website is fully responsive, ensuring an optimal experience across desktop, tablet, and mobile devices.
Image Change in Palette Section: Users can change their image after the initial upload to see how the color palette adapts.
Mock API Integration: Mirage JS is used for simulating the API to generate color palettes. This mock API can be replaced with a real API later.
Technologies Used
React.js: For building the user interface and managing state.
CSS & Tailwind CSS: For styling and layout.
Mirage JS: For simulating the API calls and generating mock data.
Context API: For managing state across the app.
Project Structure
The project structure is as follows:

bash
Copy code
public/ # context Api and all the assets
/src
  /components      # React components for different sections (e.g., Navbar, Hero Section)


Additional Features:
Image Upload & Change: Users can upload and change their image in the Palette section.
Mobile View: The project is fully responsive, with a hamburger menu for mobile view (content needs to be added).
Loading Animation: Pending feature for loading animations during image upload and color palette generation.
Installation
To get started with this project, follow the steps below:

Clone the repository:

bash
Copy code
git clone https://github.com/nishantsevak11/attyre.git
Navigate to the project directory:

bash
Copy code
cd attyre
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Visit the app: Open your browser and navigate to:

arduino
Copy code
http://localhost:3000
Known Issues
Browser Compatibility: The eye-picker API is not fully compatible with all browsers. This may cause issues in some environments.
Mobile View Setup: The hamburger menu for mobile view is set up, but the content still needs to be added.
Live Demo
You can view the live application hosted on Vercel:

Live App Link : https://attyre-nishant-sevaks-projects.vercel.app/

GitHub Repository : https://github.com/nishantsevak11/attyre

Contact
Email: nishantsevak7989@gmail.com
LinkedIn: (https://www.linkedin.com/in/nishantsevak/))
