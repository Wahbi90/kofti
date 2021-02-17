
import React, { Component } from 'react'
import './background.css'
export default class Background extends Component {
    render() {
        return (
            <div className="waveWrapper waveAnimation"   >
            <div className="waveWrapperInner bgTop">
              <div className="wave waveTop" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"></div>
            </div>
            <div className="waveWrapperInner bgMiddle">
              <div className="wave waveMiddle" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"></div>
            </div>
            <div className="waveWrapperInner bgBottom">
              <div className="wave waveBottom" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"></div>
            </div>
          </div>
        )
    }
}
