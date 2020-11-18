import React from 'react';
import { MenuStyled, FoodInfo, Food, FoodGrid,FoodHeading, FoodTitle, FoodPrice, FoodCard, FoodDesc, FoodButton} from "./MenuElements";
import { formatPrice } from "../Data/FoodData";
import {desserts} from "../Data/FoodData";

const DessertMenu = ({setOpenFood}) => {
  return (
    <MenuStyled>
      <FoodHeading id="dessert-section">Sweet Treats for You</FoodHeading>
      {Object.entries(desserts).map(([sectionName, desserts]) => (
      <>
        <FoodGrid>
          {desserts.map((dessert, index) => {
            return(
              <FoodCard key={index}>
                <Food img={dessert.img} onClick={() => {setOpenFood(dessert)}}/>
                  <FoodInfo>
                    <FoodTitle>{dessert.name}</FoodTitle>
                    <FoodDesc>{dessert.desc}</FoodDesc>
                    <FoodPrice>{formatPrice(dessert.price)}</FoodPrice>
                    <FoodButton onClick={() => {setOpenFood(dessert)}}>Add to Card</FoodButton>
                  </FoodInfo>
              </FoodCard>
            );
          })}
        </FoodGrid>

      </>
      ))}
    </MenuStyled>
  );
}

export default DessertMenu
