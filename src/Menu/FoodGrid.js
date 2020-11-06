import styled from 'styled-components';
import {Title} from "../Styles/title";

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  

  @media screen and (max-width: 990px){
    grid-template-columns: 1fr 1fr;
  }

`

export const FoodLabel = styled.div`
  background-color: rgba(255, 255, 255, .8);
  max-width: 150px;
  padding: 5px;

`

export const Food = styled(Title)`
  height: 100px;
  padding: 10px;
  font-size: 20px;
  /* create dynamic images */
  background-image: ${({img}) => `url(${img});`};
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
  border-radius: 7px;
  box-shadow: 0px 0px 10px 0px grey;
  &:hover{
    cursor: pointer;
    opacity: 0.7;
  }

  @media screen and (max-width: 700px){
    font-size: 15px;
  }
`
