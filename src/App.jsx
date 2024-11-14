import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pallate from './components/Pallate'; 
import Footer from './components/Footer';
import Home from './pages/Home';
import PallatePage from './components/PallatePage';


function App() {
  return (
   
      <Router>
      <div className='flex flex-col w-[100%] '>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pallate" element={<Pallate />} />
          <Route path="/pallatePage" element={<PallatePage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
