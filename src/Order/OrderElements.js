import styled from 'styled-components';
import {DialogContent} from "../FoodDialog/FoodDialogElements";
import { FaTimes } from 'react-icons/fa';

export const OrderStyled = styled.div`
  position: fixed;
  z-index: 10;
  width: 340px;
  height: 100%;
  background-color: white;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
  top: 0px;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
`;
export const CloseIcon = styled(FaTimes)`
color: #000;
transition: 0.2s ease-in-out;

  &:hover {
      cursor: pointer;
      color: #FDC500;
      background-color: black; 
    }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

export const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
  ${({ editable }) =>
    editable
      ? `
    &:hover {
      cursor: pointer;
      background-color: #e7e7e7;
    }
  `
      : `
    pointer-events: none; 
  `}
`;

export const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

export const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
`;