import React, {useState} from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import {Menu} from './Menu/Menu';
import {GlobalStyle} from './Styles/GlobalStyle';
import { FoodDialog } from './FoodDialog/FoodDialog';
import Order from './Order/Order';
import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';
import Featured from './Featured/Featured';
import DessertMenu from './Menu/DessertMenu';
import Footer from './Footer/Footer';

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({...openFood, ...orders});

  const[isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle/>
      <FoodDialog {...openFood} {...orders}/>
      <Navbar toggle={toggle} {...orders}/>
      <Hero/>
      <Order {...orders} {...openFood} isOpen={isOpen} toggle={toggle}/> 
      <Menu {...openFood}/>
      <Featured/>
      <DessertMenu {...openFood}/>
      <Footer/>
    </>
  );
}

export default App;
