import React from 'react';
import { ToppingGrid, ToppingCheckbox, CheckboxLabel } from './ToppingElements';


export function Toppings({toppings, checkTopping}){
  return(
    <ToppingGrid>
      {toppings.map((topping, i) => (<CheckboxLabel>
        <ToppingCheckbox 
          type="checkbox" 
          checked ={topping.checked}
          onClick={() => {
          checkTopping(i);
        }}/>
        {topping.name}
      </CheckboxLabel>))}
    </ToppingGrid>
  );
};