import React from 'react';
import { Link } from "react-scroll";
import { FeaturedContainer, FeaturedButton } from './FeaturedElement';

const Featured = () => {
  return (
    <FeaturedContainer>
      <h1>Try Our Delicious Desserts</h1>
      <p>Life Is Short Make It Sweet</p>
      <Link
        activeClass="active"
        to="dessert-section"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
          <FeaturedButton>Order Now</FeaturedButton>
        </Link>
    </FeaturedContainer>
  );
};

export default Featured;
