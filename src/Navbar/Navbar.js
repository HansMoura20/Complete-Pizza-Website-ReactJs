import React from 'react';
import { Link } from "react-scroll";
import { Nav, NavLink, NavIcon, Bars, BarsNum} from './NavbarElements';

const Navbar = ({orders, toggle}) => {
  return (
    <>
      <Nav>
        <Link
          activeClass="active"
          to="hero-section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>
            <NavLink>Pizza</NavLink>
          </Link>
        
        {
        orders.length === 0 ? (
        <NavIcon onClick={toggle}>
          <p>Order</p>
          <Bars/> 
          <BarsNum>0</BarsNum>
          </NavIcon> ) 
          : 
          ( <NavIcon onClick={toggle}>
              <p>Orders</p>
              <Bars/> 
              <BarsNum>{orders.length}</BarsNum>
            </NavIcon> )
          }
      </Nav>
    </>
  )
}

export default Navbar
