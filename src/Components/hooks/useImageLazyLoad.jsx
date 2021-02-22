import React from 'react';
const styles = {
    width: "100%",
    height: "100%",
};

const useImageLazyLoad = (src, alt='image') => {
    const imgSrc = src.split('upload/')

    return (
        <picture>
            <source media="(min-width: 1440px)" srcset={`${imgSrc[0]}/upload/w_1440/${imgSrc[1]}`} />
            <source media="(min-width: 940px)" srcset={`${imgSrc[0]}/upload/w_1240/${imgSrc[1]}`} />
            <source media="(min-width: 541px)" srcset={`${imgSrc[0]}/upload/w_740/${imgSrc[1]}`} />
            <source media="(max-width: 540px)" srcset={`${imgSrc[0]}/upload/w_540/${imgSrc[1]}`} />
            <img src={src} alt={alt} style={styles} loading="lazy"/>
        </picture>
    );
};

export default useImageLazyLoad;