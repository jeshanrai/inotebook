import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (<>
<Router>
  <Navbar />
  <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/About" element={<About />} />
  </Routes>
</Router>
  
    
    </>
  )
}

export default App;
