import React from 'react';
import { useHistory } from 'react-router-dom';
import { CardItemStyle } from './styles';
import { SubmitButton } from 'Components/MUI/ButtonTypes';

const CardItem = ({cardStatus}) => {
    let history = useHistory();
    const classes = CardItemStyle();
    const percentageOfHouseMarketValue = () => 
        Math.round((parseInt(cardStatus.loanRequest) / parseInt(cardStatus.estMarketValue)) * 100);
        
    return(
        <ul className={classes.CardItem}>
            <li className={classes.CardImgWrapper}>
                <img
                    className={classes.img} 
                    src={cardStatus.coverImg}
                    alt='card image' />
            </li>

            <li className={classes.CardLocationLi}>
                <span>
                    {cardStatus.investors} Investors
                </span>
                <span>
                    {cardStatus?.propertyDetails?.location?.city}, {cardStatus?.propertyDetails?.location?.state}
                </span>
            </li>
            <li className={classes.CardTitleLi}>
                {cardStatus.title}
                <span>
                    Ask ${cardStatus.accumulated}, {percentageOfHouseMarketValue()}% of est. market value
                </span>
            </li>
            {/* <li className={classes.CardByLi}>${cardStatus.accumulated}, {percentageOfHouseMarketValue()}% of est. market value</li>  */}
            <li className={classes.CardByLi}>by: {cardStatus.by}</li>
            <li className={classes.CardBtnWrapper}>
                <SubmitButton
                    label="EXPLORE"
                    onClick={()=> history.push(`/project-detail/${cardStatus.projectId}`)}
                />
            </li>
        </ul>
    );
};

export default CardItem;