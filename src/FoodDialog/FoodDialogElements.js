import styled from 'styled-components';
import { Title } from "../Styles/title";
import { pizzaRed } from "../Styles/colors";
import { FaTimes } from 'react-icons/fa';

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  max-height: calc(100% - 100px);

  @media screen and (max-width: 520px){
    width: 100%;
  }
 
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0px 40px;
  padding-bottom: 80px;

  @media screen and (max-width: 780px){
    padding: 10px 10px 10px 70px;
  }
  @media screen and (max-width: 500px){
    padding: 10px 10px 10px 40px;
  }
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: white;
  height: 40px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${pizzaRed};

  &:hover{
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }

  ${({disabled}) => disabled && 
  `
    opacity: .5;
    background-color: grey;
    pointer-events: none;
  `
  }
`;

export const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

export const DialogBanner = styled.div`
  min-height: 250px;
  margin-bottom: 20px;
  ${({ img }) => (img ? `background-image: url(${img});` : `min-height: 75px;`)}
  background-position: center;
  background-size: cover;
  
  `;

export const CloseIcon = styled(FaTimes)`
color: #000;
background-color: #e7e7e7;
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