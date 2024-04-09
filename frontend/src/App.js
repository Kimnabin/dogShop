import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import DogsPage from './components/Dogs/Dogspage';
import Cart from './components/Cart/Cart';
import NavBar from './Navbar/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { cartContext } from './Contexts/CartContext';

function App() {
  const [allDogs, setAllDogs] = useState([]);
  const [myCart, addToCart] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
  async function getData() {
      const res = await axios.get("/v1/dogs");
      return res;
    }
    getData().then((res) => {
      setAllDogs(res.data);
    });
    getData().catch((err) => {
      console.log("get data error >> ", err);
    });
  },[]);
  return (
    <cartContext.Provider value={{myCart, addToCart, total, setTotal}}>
    <div className="App">
      <Router>
        <NavBar />
        <div className='page-container'>  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dogs" element={<DogsPage allDogs={allDogs} />} />
            <Route path="/checkout" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </div>
    </cartContext.Provider>
  );
}

export default App;
