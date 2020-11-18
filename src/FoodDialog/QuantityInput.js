import React from 'react';
import { QuantityInputStyled, IncrementContainer, IncrementButton } from './QuantityInputElements';

export function QuantityInput({quantity}){
  return(
    <IncrementContainer>
      <div>Quantity:</div>
      <IncrementButton 
        onClick={() => {
          quantity.setValue(quantity.value - 1);
        }} disabled={quantity.value === 1}>
        -
        </IncrementButton>
      <QuantityInputStyled {...quantity}/>
      <IncrementButton
        onClick={() => {
          quantity.setValue(quantity.value + 1);
        }}
      >
      +
      </IncrementButton>
    </IncrementContainer>
  ) 
}