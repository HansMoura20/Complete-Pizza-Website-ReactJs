import React from 'react';
import { formatPrice } from "../Data/FoodData";
import { QuantityInput } from "./QuantityInput";
import { useQuantity } from "../Hooks/useQuantity";
import { Toppings } from "./Toppings";
import { useToppings } from "../Hooks/useToppings";
import { useChoice } from "../Hooks/useChoice";
import { Choices } from "./Choices";
import { Dialog, DialogContent, DialogFooter, ConfirmButton, DialogShadow, DialogBanner, CloseIcon, Icon } from './FoodDialogElements';

  const pricePerTopping = 2;

export function getPrice(order){
  return order.quantity * (order.price + order.toppings.filter(t => t.checked).length * pricePerTopping);
}

function hasToppings(food){
  return food.section === 'Pizza';
}

function FoodDialogContainer({openFood, setOpenFood, setOrders, orders}){
  const quantity = useQuantity(openFood && openFood.quantity);
  const toppings = useToppings(openFood.toppings);
  const choiceRadio = useChoice(openFood.choice);
  const isEditing = openFood.index > -1;

  

  function close(){
    setOpenFood();
  }
  
  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings,
    choice: choiceRadio.value
  }

  function editOrder(){
    const newOrders = [...orders];
    newOrders[order.index] = order;
    setOrders(newOrders);
    close();
  }

  function addToOrder(){
    setOrders([...orders, order]);
    close();
  }

  return (
    openFood ? (
      <>
      <DialogShadow onClick={close}/>
      <Dialog>
        <Icon onClick={close}>
          <CloseIcon/>
        </Icon>
        <DialogBanner img={openFood.img}>
          {/* <DialogBannerName>{openFood.name}</DialogBannerName> */}
        </DialogBanner>
        <DialogContent>
          <QuantityInput quantity={quantity}/>
          {hasToppings(openFood) && (
            <>
              <h3>Would you like toppings?</h3>
              <Toppings {...toppings}/>
            </>
          )}
          {openFood.choices && <Choices openFood={openFood} choiceRadio={choiceRadio}/>}
        </DialogContent>
        <DialogFooter>
          <ConfirmButton 
            onClick={isEditing ? editOrder : addToOrder} 
            disabled={openFood.choices && !choiceRadio.value}>
            {isEditing ? `Update order: ` : `Add to order: `}
            {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
    ) : null
  ); 
}

export function FoodDialog(props){
  if(!props.openFood) return null;
  return <FoodDialogContainer {...props}/>
}