import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './Pulsing Circle.json';

const Vdo_animation = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <>
            <Lottie
                options={defaultOptions}
            // height={70}
            // width={70}
            />
        </>
    )
}

export default Vdo_animation