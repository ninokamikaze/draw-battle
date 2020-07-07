import React, { Component } from 'react';
import {Howl, Howler} from 'howler';

import classes from './App.css';
import Gamble from './components/Gamble/Gamble';
import Sound from './assets/audio/clave.mp3';
import Palanca from './components/Palanca/Palanca'

class App extends Component {
  state = {
    personajes: [
      "Trump",
      "Lenin Moreno",
      "Justin Bieber",
      "Pato Donald"
    ],
    accion: [
      "bailando",
      "cantando",
      "jugando 40",
      "hablando por Zoom"
    ],
    escenario: [
      "en casa de su madre",
      "en un circo",
      "mientras ve TV",
      "en un sueño"
    ],
    personajeSelec: 0,
    accionSelec: 0,
    escenarioSelec: 0
  }

  randomSelection = () => {
    const maxPersonajes = this.state.personajes.length;
    const maxAccion = this.state.accion.length;
    const maxEscenario = this.state.escenario.length;
    this.setState({
      personajeSelec: Math.floor(Math.random() * Math.floor(maxPersonajes)),
      accionSelec: Math.floor(Math.random() * Math.floor(maxAccion)),
      escenarioSelec: Math.floor(Math.random() * Math.floor(maxEscenario))
    });
    this.SoundPlay();
    console.log('random hecho')
  }

  loopRandom = () => {
    let speed= 500;
    console.log(speed);
    setTimeout(this.randomSelection, speed);
    speed = speed+25;
    setTimeout(this.randomSelection, speed);
    speed = speed+25;
    setTimeout(this.randomSelection, speed);
    speed = speed+25;
    setTimeout(this.randomSelection, speed);
    speed = speed+25;
    setTimeout(this.randomSelection, speed);
    speed = speed+25;
    setTimeout(this.randomSelection, speed);
    speed = speed+125;
    console.log(speed);
    setTimeout(this.randomSelection, speed);
    speed = speed+150;
    console.log(speed);
    setTimeout(this.randomSelection, speed);
    speed = speed+175;
    console.log(speed);
    setTimeout(this.randomSelection, speed);
    speed = speed+200;
    console.log(speed);
    setTimeout(this.randomSelection, speed);
    speed = speed+225;
    console.log(speed);
    setTimeout(this.randomSelection, speed);
    speed = speed+250;
    console.log(speed);
    setTimeout(this.randomSelection, speed);
    speed = speed+275;
    console.log(speed);
    setTimeout(this.randomSelection, speed);
    speed = speed+300;
    console.log(speed);
    setTimeout(this.randomSelection, speed);
    speed = speed+450;
    console.log(speed);
    setTimeout(this.randomSelection, speed);
    speed = speed+600;
    console.log(speed);
    setTimeout(this.randomSelection, speed);
  }

  SoundPlay = () => {
    const sound = new Howl({
      src: Sound
    })
    Howler.volume(0.2);
    sound.play();
    console.log('sound');
  }

  render() {
    return (
      <div className={classes.App}>
          <div className={classes.TitleAscii}>
            <p>    __                       __          __  __  __   
            <br/> ____/ /________ __      __   / /_  ____ _/ /_/ /_/ /__ 
            <br/> / __  / ___/ __ `/ | /| / /  / __ \/ __ `/ __/ __/ / _ \
            <br/>/ /_/ / /  / /_/ /| |/ |/ /  / /_/ / /_/ / /_/ /_/ /  __/
            <br/>\__,_/_/   \__,_/ |__/|__/  /_.___/\__,_/\__/\__/_/\___/ 
            <br/>                                                         
            <br/>                                                         
            <br/>                                             by enano eh!</p>
          </div>
          <div className={classes.Ruleta}>
            <Gamble title="personaje" select={this.state.personajes[this.state.personajeSelec]}></Gamble>
            <Gamble title="acción" select={this.state.accion[this.state.accionSelec]}></Gamble>
            <Gamble title="escenario" select={this.state.escenario[this.state.escenarioSelec]}></Gamble>
          </div>
          <div className={classes.Palanca}>
            <Palanca onClick={this.loopRandom} clicked={this.loopRandom} />
          </div>
      </div>
    );
  }
}

export default App;