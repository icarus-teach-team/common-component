import React from 'react';

import {ICProdCard, ICProdCardTopBar, ICProdCardBottomBar} from './icarusProductCard.styled';

const IcarusProductCard = (props) => {
    const { width, height } = props;
    return (
        <ICProdCard width={width} height={height} >
            <ICProdCardBottomBar>
                Bar Rohan
            </ICProdCardBottomBar>
        </ICProdCard>
    );
};

export default IcarusProductCard;
