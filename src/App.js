
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlbumsList from "./components/AlbumsList.js";
import Album from "./components/Album.js";





function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AlbumsList />} />
        <Route path="/dd/:id" element={<Album />} />
        <Route path="*" element={<h2>Ресурс не найден</h2>} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
