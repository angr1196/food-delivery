
import React from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartContextProvider from './store/CartContextProvider';


function App() {

  const [cartIsVisible, setCartisVisible] = useState(false);

  const showCartHandler=()=>{
  setCartisVisible(true)
  }
  
  const hideCartHandler =()=>{
    setCartisVisible(false);
  }
  

  return (
    <CartContextProvider>
      <Header onShowCart={showCartHandler}/>
      {cartIsVisible && <Cart onHideCart={hideCartHandler}/>}
      <main>
        <Meals />
      </main>
      </CartContextProvider>
  );
}

export default App;
