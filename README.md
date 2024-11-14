# AI-Powered Color Analysis Tool

## Overview
Welcome to the **AI-powered color analysis tool** project! This tool helps users discover the colors that enhance their natural beauty, match their unique features, and fit their personal style. The user can upload their photo, pick colors, and input additional information to generate a personalized color palette.

## Features
- **Image Upload**: Users can upload their photo for analysis.
- **Color Picker**: Users can select their hair, eye, and skin color from the uploaded image to match the colors.
- **Personalized Palette**: After selecting the colors, the app generates a personalized color palette.
- **Dynamic Feature Display**: All features of the website are dynamically displayed using a JavaScript object.
- **Responsive Design**: The website is fully responsive and works well across all devices.

## Tech Stack
- **Frontend**: React.js, CSS, Tailwind CSS
- **API**: Mock API using Mirage.js
- **State Management**: Context API

## Project Structure
The project consists of several main components:

### 1. **Home Page**
   - **Navbar**: Contains navigation links.
   - **Hero Section**: Users can upload their images.
   - **Features Section**: A list of all website features, displayed dynamically.
   
### 2. **Palette Section**
   - After the image upload, the user can view and select colors from the uploaded image.
   - The **color picker API** allows users to pick hair, eye, and skin colors from the photo. (Note: The `eyePicker` API is not compatible with all browsers.)
   - Additional information can be selected to refine the palette.

### 3. **Palette Page**
   - After generating the palette, users are redirected to a new page where they can view their recommended color palettes.
   
### 4. **Mobile View**
   - **Hamburger Menu**: The mobile view uses a hamburger menu. The structure is set up, but content still needs to be added.

## How It Works
1. Users upload a photo through the **Hero Section**.
2. After uploading, they can select their hair, eye, and skin color from the image using the **color picker API**.
3. Additional information (such as preferences) is collected.
4. When the user clicks on **Generate Palette**, the selected data is saved in the **Context API**.
5. The user is then navigated to the **Palette Page**, where the generated color palettes are displayed.

## Links

[Live App Link](https://attyre-nishant-sevaks-projects.vercel.app/)
[GitHub Repository](https://github.com/nishantsevak11/attyre)





