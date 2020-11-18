import styled from 'styled-components';

export const ToppingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 780px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 470px){
    font-size: 12px;
  }
`;

export const ToppingCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;

  @media screen and (max-width: 470px){
    margin-right: 5px;
  }
`;

export const CheckboxLabel = styled.label`
  cursor: pointer;
`;