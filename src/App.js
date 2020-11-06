import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './Navbar/Navbar';



const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3{
    font-family: 'Righteous', cursive;
  }

`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <Navbar/>
      <div>Hello SliceLine</div>
    </>
 
  );
}

export default App;
