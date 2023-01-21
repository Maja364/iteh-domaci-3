 
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Kontakt from './Kontakt';

function App() {
  return (
    <div className="App">
      <BrowserRouter  >
          <Navbar ></Navbar>
          <Routes>
         <Route path="/kontakt" element={<Kontakt></Kontakt>}></Route>
             
            
          </Routes>
          <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
