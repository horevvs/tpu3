
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlbumsList from "./components/AlbumsList.js";
import Album from "./components/Album.js";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AlbumsList/>} />
        <Route path=":id" element={<Album />} />
        <Route path="*" element={<h2>Ресурс не найден</h2>} />
        {/* <Route path="/2" element={<AlbumsList/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}





// function App() {
//   return (
//     <>
//       <AlbumsList />
//     </>
//   )


// }

export default App;
