import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer"
import NavBar from "./Components/NavBar"
import Create from './Pages/Create';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Edit from './Pages/Edit';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
        <NavBar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
         <Route path="/Create" element={<Create/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
           <Route path="/Edit" element={<Edit/>}></Route>

      </Routes>
      <div>
        <Footer/>
      </div>
      
      </BrowserRouter>
      
    </div>
  );
};

export default App;