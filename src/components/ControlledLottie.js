import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../assets/animation/palanca.json'

class ControlledLottie extends Component {
state = {isStopped: false, isPaused: false}

render(){
    const defaultOptions = {
    loop: 0,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
    };

    return(
    <div className="controlled">
        <h1>Controlled Lottie</h1>
        <p>Uses state manipulation to start, stop and pause animations</p>
        <Lottie options={defaultOptions}
            height={300}
            width={90}
            isStopped={this.state.isStopped}
            isPaused={this.state.isPaused}
            onComplete={() => this.setState({isStopped: true})}
        />
        {/* <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>Stop</button>
        <button style={buttonStyle} onClick={() => this.setState({isStopped: false, isPaused: false })}>Play</button>
        <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>Pause</button> */}
    </div>
    );
}
}

export default ControlledLottie