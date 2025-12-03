// import React from 'react'
// import Lottie from 'react-lottie';
// import * as animationData from './animation/Pulsing Circle.json';
// import './why-choose.css'

// const Bg_animation = () => {

//     const defaultOptions = {
//         loop: true,
//         autoplay: true,
//         animationData: animationData,
//         rendererSettings: {
//             preserveAspectRatio: "xMidYMid slice"
//         }
//     };
//     return (
//         <>
//             <Lottie
//                 options={defaultOptions}
//                 // height={70}
//                 // width={70}
//             />
//         </>
//     )
// }

// export default Bg_animation

import React from 'react';
import Lottie from 'react-lottie';
import animationData from './animation/Pulsing Circle.json';
import './why-choose.css';

const Bg_animation = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="lottie-bg-wrapper">
            <Lottie
                options={defaultOptions}
                height={250}   // adjust size
                width={250}
            />
        </div>
    );
}

export default Bg_animation;
