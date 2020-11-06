import styled from 'styled-components';
import {Title} from "../Styles/title";

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 0 30px;
  

  @media screen and (max-width: 990px){
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 500px){
    font-size: 15px;
    padding: 0;
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
  margin-top: 5px;
  transition-property: box-shadow margin-top filter;
  transition-duration: .1s;
  box-shadow: 0px 0px 2px 0px grey;

  &:hover{
    cursor: pointer;
    filter: contrast(100%);
    margin-top: 0px;
    margin-bottom: 5px;
    box-shadow: 0px 5px 10px 0px grey;
  }

  @media screen and (max-width: 700px){
    font-size: 15px;
  }
`
