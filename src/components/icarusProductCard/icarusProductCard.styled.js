import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ICProdCardTopBar = styled.div `
    height: 70px;
    background-color: #ff6666;
    box-shadow: 0 8px 6px -6px black;
`;

export const ICProdCardBottomBar = styled.div `
    animation: 1s ${fadeIn} ease-out;
    height: 50px;
    background-color: #005386;
    box-shadow: 0 8px 6px -6px black;
    color: #fff;
    position: absolute;
    bottom: 0;
    width: inherit;
    display: none;
`;

export const ICProdCard = styled.div `
    border-radius: 20px;
    cursor: pointer;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    background-color: lightgray;
    position: relative;

    &:hover ${ICProdCardBottomBar} {
        display: initial;
    }
`;