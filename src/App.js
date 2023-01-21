 
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Kontakt from './Kontakt';
import { useState } from 'react';
import Pocetna from './Pocetna';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const [pregledi] = useState([
    {
      id: 1,      
      naziv: "Krvna slika",    
      ljubimac:"Maks",
      rasa:"Labrador",
      cena: 1000,
      veterinar:"Ana Pavlovic",
      datum:"2023-01-21"
      
    },
    {
      id: 2,      
      naziv: "Pregled usiju",    
      ljubimac:"Aron",
      rasa:"Terijer",
      cena: 1500,
      veterinar:"Ana Pavlovic",
      datum:"2023-01-21"
      
    },
    {
      id: 3,      
      naziv: "Snimak abdomena",    
      ljubimac:"Bili",
      rasa:"Buldog",
      cena: 1000,
      veterinar:"Ana Pavlovic",
      datum:"2023-01-21"
      
    },
    {
      id: 4,      
      naziv: "Ultrazvuk",    
      ljubimac:"Lola",
      rasa:"Maltezer",
      cena: 2500,
      veterinar:"Nikola Jankovic",
      datum:"2023-01-21"
      
    },
    
  ])
  return (
    <div className="App">
      <BrowserRouter  >
          <Navbar ></Navbar>
          <Routes>
         <Route path="/" element={<Pocetna pregledi={pregledi}></Pocetna>}></Route>

         <Route path="/kontakt" element={<Kontakt></Kontakt>}></Route>
             
            
          </Routes>
          <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
