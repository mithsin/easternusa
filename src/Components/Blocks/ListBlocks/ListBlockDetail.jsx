import React from 'react';
import { ListBlockDetailStyle } from './styles';

const ListBlockDetail = ({flip, lgImg, sm1, sm2, sm3, sm4, description}) => {
    // flip(true): 4 images grid to right
    const props = {
        flip: flip,
    };
    const classes = ListBlockDetailStyle(props);
    return(
        <div className={ classes.ListWrapper }>
            <div>
                <h2>Discription</h2>
                <p>{ description }</p>
            </div>
            <div className={ classes.ImgWrapper }>
                <div className={ classes.FourImgs }>
                    <span className={ classes.OneImg }><img src={sm1} alt="01" /></span>
                    <span className={ classes.TwoImg }><img src={sm2} alt="02" /></span>
                    <span className={ classes.ThreeImg }><img src={sm3} alt="03" /></span>
                    <span className={ classes.FourImg }><img src={sm4} alt="04" /></span>
                </div>
                <div className={ classes.LargeImg }>
                    <img src={lgImg} alt="large" />
                </div>
            </div>
        </div>
    );
};

ListBlockDetail.defaultProps = {
    flip: false,
}

export default ListBlockDetail;