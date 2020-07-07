import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/animation/palanca.json';
import lottie from 'lottie-web';

class UncontrolledLottie extends Component {
render(){

    const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    speed: 2.5,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
    };

    return(
    <div>
        <Lottie
            options={defaultOptions}
            height={300}
            width={90}
        />
    </div>
    )
}
}

export default UncontrolledLottie