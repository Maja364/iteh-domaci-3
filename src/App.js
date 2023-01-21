 
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter  >
          <Navbar ></Navbar>
          <Routes>
             
            
          </Routes>
          <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
