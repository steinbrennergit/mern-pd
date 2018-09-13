import React from "react";
import "./AnimatedBot.css";
import { CSSTransition } from 'react-transition-group';

const AnimatedBot = () => {
  return (
    <CSSTransition
      classNames="pokedex-btm"
      timeout={2500}>
      <div className={`pokedex pokedex-btm`}>
        <div className="halfCircle" id="halfCircleBottom">
          <input className="blueCircle" id="blueCircle" type="button"></input>
        </div>
      </div>
    </CSSTransition>
  )
}

export default AnimatedBot;