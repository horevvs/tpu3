
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlbumsList from "./components/AlbumsList.js";
import Album from "./components/Album.js";
import Notfound from "./components/Notfound.js";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AlbumsList />} />
        <Route path="/dd/:id" element={<Album />} />
        <Route path="*" element={< Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
