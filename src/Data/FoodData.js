import pizza1 from '../img/pizza-1.jpg';
import pizza2 from '../img/pizza-2.jpg';
import pizza3 from '../img/pizza-3.jpg';
import pizza4 from '../img/pizza-4.jpg';
import pizza5 from '../img/pizza-5.jpg';
import pizza6 from '../img/pizza-6.jpg';
import dessert1 from '../img/dessert-1.jpg';
import dessert2 from '../img/dessert-2.jpg';
import dessert3 from '../img/dessert-3.jpg';

export function formatPrice(price){
  return price.toLocaleString('en-AU', {
      style: 'currency',
      currency: 'AUD'
    })
}

export const foodItems = [
  {
    name: "Supreme Pizza",
    img: pizza1,
    section: "Pizza",
    desc: 'Pepperoni, Italian sausage, Sliced Onions, Sliced Green Pepper, Mushroom,Black Olives',
    price: 18.20
  },
  {
    name: "Hawaiian Paradise",
    img: pizza2,
    section: "Pizza",
    desc: 'Pizza Sauce, Cheddar Cheese, Pineapple Slices, Ham, Mozzarella Cheese,Italian seasoning',
    price: 16.30
  },
  {
    name: "Cheese Pizza",
    img: pizza3,
    section: "Pizza",
    desc: 'Garlic, Mozzarella Cheese, Fontina cheese, Grana Padano Cheese, Italian seasoning, Quark Cheese',
    price: 19
  },
  {
    name: "Pepperoni Pizza",
    img: pizza4,
    section: "Pizza",
    desc: 'Tomato Passata, Mozzarella Cheese, Hot Pepperoni, Dried Oregano',
    price: 20.20
  },
  {
    name: "Chicken Pizza",
    img: pizza5,
    section: "Pizza",
    desc: 'BBQ Chicken breast, Onion, Italian seasoning, Quark Cheese',
    price: 16.50
  },
  {
    name: "Meat Lovers",
    img: pizza6,
    section: "Pizza",
    desc: 'Bacon, Ham, Pepperoni, Hot Sausage, Mozzarella Cheese, BBQ Sauce',
    price: 17.80
  }
];

export const dessertItems =[
  {
      name: "Doughlicious",
      img: dessert1,
      section: "Dessert",
      desc: 'Belgian chocolate glazed donuts covered in icing with sprinkles on top',
      price: 6
  },
  {
    name: "Brownie Bunch",
    img: dessert2,
    section: "Dessert",
    desc: 'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
    price: 5.50
  },
  {
    name: "Caramel Wonder",
    img: dessert3,
    section: "Dessert",
    desc: 'Vanilla ice cream covered with caramel and chocolate glaze topped with a coco stick',
    price: 8.20
  }, 

];

export const foods = foodItems.reduce((res, food) => {
  if(!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food)
  return res;
}, {});

export const desserts = dessertItems.reduce((res, dessert) => {
  if(!res[dessert.section]) {
    res[dessert.section] = [];
  }
  res[dessert.section].push(dessert)
  return res;
}, {});




