import React, { useEffect, useRef, createRef } from "react";

import classes from './Palanca.css';
import lottie from "lottie-web";
import animation from "../../assets/animation/palanca.json";

let animObj = null;

class Palanca extends React.Component {
    componentDidMount() {
    console.log('componentDidMount');
    
    //call the loadAnimation to start the animation
    animObj = lottie.loadAnimation({
        container: this.animBox, // the dom element that will contain the animation
        renderer: 'svg',
        loop: 0,
        autoplay: false,
        animationData: animation // the path to the animation json
    });
    }
    handlePlay = () => {
        animObj.setSpeed(2);
        animObj.stop();
        animObj.play();
        this.props.clicked();
    };
    render() {
    return (
        <div className={classes.AnimationContainer} ref={ ref => this.animBox = ref} onClick={this.handlePlay}></div>
    );
    }
}

export default Palanca;