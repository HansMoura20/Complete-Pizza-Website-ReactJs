import styled from 'styled-components';
import { FaPizzaSlice } from 'react-icons/fa';
import { pizzaRed } from '../Styles/colors';

export const Nav = styled.nav`
  background: ${pizzaRed};
  height: 50px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  position: fixed;
  width: 100%;
`;

export const NavLink = styled.a`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 500px){
    position: absolute;
    left: 25px;
  }

`;


export const NavIcon = styled.div`
  display: block;
  position: absolute;
  bottom: 1px;
  right: 0;
  cursor: pointer;
  color: #fff;

  p{
    transform: translate(-175%, 100%);
    font-weight: bold;
    
  }
`;

export const BarsNum = styled.p`
display: inline;
margin-left: -20px; 
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
  margin-left: -10px
`