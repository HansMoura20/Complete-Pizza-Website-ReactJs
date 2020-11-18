import React from 'react';
import {foods} from "../Data/FoodData";
// import {FoodLabel, Food, FoodGrid} from "./FoodGrid";
import { formatPrice } from "../Data/FoodData";
import { MenuStyled, FoodInfo, Food, FoodGrid,FoodHeading, FoodTitle, FoodPrice, FoodCard, FoodDesc, FoodButton} from "./MenuElements";

export function Menu({setOpenFood}){
  return (
    <MenuStyled>
      <FoodHeading id="menu-section">Choose your favorite</FoodHeading>
      {Object.entries(foods).map(([sectionName, foods]) => (
      <>
        <FoodGrid>
          {foods.map((food, index) => {
            return(
              <FoodCard key={index}>
                <Food img={food.img} onClick={() => {setOpenFood(food)}}/>
                  <FoodInfo>
                    <FoodTitle>{food.name}</FoodTitle>
                    <FoodDesc>{food.desc}</FoodDesc>
                    <FoodPrice><span>From</span> {formatPrice(food.price)}*</FoodPrice>
                    <FoodButton onClick={() => {setOpenFood(food)}}>Add to Card</FoodButton>
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


