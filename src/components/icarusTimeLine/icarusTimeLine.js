import React from 'react';

import {IcarusTimeLineWrapper, TimeLine, TimeLineStation, TimeLineRightCard, TimeLineWrapper, TimeLineLeftCard } from './icarusTimeLine.styled';

const IcarusTimeLine = (props) => {
   // const { timeLineData, productCard, cardHieght } = props;
    return (
        <IcarusTimeLineWrapper>
            <TimeLineWrapper>
                <TimeLine>
                    <TimeLineStation/>
                </TimeLine>
                <TimeLineRightCard>asd</TimeLineRightCard>
            </TimeLineWrapper>
        </IcarusTimeLineWrapper>
    );
};

export default IcarusTimeLine;