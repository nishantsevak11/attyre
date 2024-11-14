import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './mirage-server';
import { DataProvider } from '../public/DataContext';

createRoot(document.getElementById('root')).render(
    <DataProvider>
      <App/>
    </DataProvider>
)
