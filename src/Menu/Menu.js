import React from 'react';
import styled from 'styled-components';
import {foods} from "../Data/FoodData";
import {FoodLabel, Food, FoodGrid} from "./FoodGrid";

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 100px 50px 20px;
  margin: 0 auto;

  @media screen and (max-width: 500px){
    h1{
      font-size: 25px;
    }
  }
`;

const Menu = () => {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, foods]) => (
      <>
      <h1>{sectionName}</h1>
        <FoodGrid>
  {/* Loop through the foods array and return each element */}
        {foods.map(food => (
          <Food img={food.img}>
            <FoodLabel>{food.name}</FoodLabel>
          </Food>
          ))}
        </FoodGrid>
      </>
      ))}
    </MenuStyled>
  );
}

export default Menu
