import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function loop() {

  window.requestAnimationFrame(loop);
  context.canvas.height = document.documentElement.clientHeight;
  context.canvas.width = document.documentElement.clientWidth;
  context.fillStyle = "red";
  context.fillRect(0, 0, 100, 100);

}

class BouncyBall extends React.Component {
  constructor(info){
  super(ball);
  this.state = {
    top: 0,
    width: 0,
    height: 0,
  }
}
  render() {
    return (
        <canvas>
      </canvas>
    );
  }
}

function Bounce(props){

}
ReactDOM.render(<BouncyBall />, document.getElementById('root'));
let nball = new ball(100, 100, 50)
let context = document.querySelector("canvas").getContext("2d");
const ball = function(x, y, radius) {
  this.color = "red"
  this.radius = radius;
  this.x = x;
  this.y = y;
}

loop();