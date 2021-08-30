import logo from './logo.svg';
import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Card from './Card';
import {CartProvider} from 'react-use-cart';
function App() {
  return (
    <>
    <CartProvider>
     <Home></Home>
     <Card></Card>
     </CartProvider>
    </>
    );
}

export default App;
 