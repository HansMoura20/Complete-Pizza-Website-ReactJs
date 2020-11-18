import React from 'react';
import { Link } from "react-scroll";
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';

const Hero = () => {
  return (
    <div>
      <HeroContainer id="hero-section">
        <HeroContent>
          <HeroItems>
            <HeroH1>Greatest Pizza Ever</HeroH1>
            <HeroP>Ready in 60 seconds</HeroP>
            <Link
              activeClass="active"
              to="menu-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                <HeroBtn>Place Order</HeroBtn>
              </Link>
            
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </div>
  )
}

export default Hero



