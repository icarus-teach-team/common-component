import styled, { keyframes } from 'styled-components';

export const IcarusTimeLineWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const TimeLineWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    height: 300px;
`;

export const TimeLine = styled.div`
    border-left: 2px dotted #005386;
    content: '';
    display: flex;
    width: 1px;
    height: inherit;
    align-self: center;
    justify-content: center;

`;

export const TimeLineStation = styled.div`
    position: absolute;
    display: flex;
    align-self: center;
    height: 30px;
    width: 30px;
    background-color: #005386;
    border-radius: 50%;
`;

export const TimeLineRightCard = styled.div`
    height: 200px;
    width: 300px;
    background: blue;
    margin-left: 50px;
`;

export const TimeLineLeftCard = styled.div`
    display: flex;
    align-self: center;
    height: 200px;
    width: 300px;
    background: blue;
    margin-right: 50px;
`;

export const DemoTimeLine = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;

    &:after {
        border-left: 2px dotted red;
        content: '';
        position: absolute;
        width: 2px;
        top: 0;
        bottom: 0;
        left: 50%;
        height: 300px;
    }
`;

export const DemoContainer = styled.div`
    position: relative;
    background-color: inherit;
    width: 50%;

    &:after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        right: -17px;
        background-color: red;
        border: 4px solid #FF9F55;
        top: 15px;
        border-radius: 50%;
        z-index: 1;
    }
`;

export const DemoContent = styled.div`
    padding: 20px 30px;
    background-color: red;
    position: relative;
    border-radius: 6px;
`;

export const Left = styled.div`
    left: 0;
`;

export const Right = styled.div`
    left: 50%;
`;