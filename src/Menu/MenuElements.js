import styled from 'styled-components';

export const MenuStyled = styled.div`
  color: #fff;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  h1{
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
  }
`;

export const FoodGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  
  
  @media screen and (max-width: 990px){
    grid-template-columns: 1fr 1fr;
    padding: 0px;
    margin: 0px;
  }

  @media screen and (max-width: 600px){
    grid-template-columns: 1fr;
    padding: 0px;
    margin: 0px;
  }

`;

export const FoodHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const FoodInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;
export const FoodPrice = styled.span`
  margin-bottom: 1rem;
  font-size: 2rem;
  span{
    font-size: 1rem;
  }
`;


export const FoodTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const FoodCard = styled.div`
  margin: 2rem 2rem;
  line-height: 2;
  width: 300px;
`;

export const Food = styled.div`
  background-image: ${({img}) => `url(${img});`};
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
  background-position: center;
  background-size: cover;
  transition: .2s ease-in-out;

  &:hover{
    box-shadow: 14px 14px #E31837;
    cursor: pointer;
  }
`;

export const FoodDesc = styled.p`
  margin-bottom: 1rem;
`;

export const FoodButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;



