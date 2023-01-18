import React, { Component } from 'react';
import './VideoPlayerControls.scss'

class VideoPlayerControls extends Component {

  constructor(props) {
    super(props)
    this.handlerClickPlay = this.handlerClickPlay.bind(this);
    this.handlerClickPause = this.handlerClickPause.bind(this);
    this.handlerSetProgress = this.handlerSetProgress.bind(this);
    this.handlerSetFullscreen = this.handlerSetFullscreen.bind(this);
  }

  get rootClassesStr() {
    const rootClasses = ['video-player-controls']

    if (this.props.className) {
      rootClasses.push(this.props.className)
    }

    return rootClasses.join(' ')
  }

  handlerClickPlay() {
    this.props.onPlay()
  }
  handlerClickPause() {
    this.props.onPause()
  }
  handlerSetProgress(e) {
    const targetRect = e.target.getBoundingClientRect()
    const resultPostion = e.clientX - targetRect.x
    const progress = resultPostion * 100 / targetRect.width

    this.props.onSetProgress(progress)
  }
  handlerSetFullscreen() {
    this.props.onSetFullscreen()
  }

  render() {
    return (
      <div className={this.rootClassesStr}>
        <div className="video-player-controls__actions">
          { this.props.videoIsPlayed
            ?
              <button
                className="video-player-controls__btn-pause video-player-controls__btn-control"
                onClick={this.handlerClickPause}
              >
                ||
              </button>
            :
              <button 
                className="video-player-controls__btn-play video-player-controls__btn-control"
                onClick={this.handlerClickPlay}
              >
                &#x25BA;
              </button>
          }
          
        </div>
        <button
          className="video-player-controls__progress"
          onClick={this.handlerSetProgress}
        >
          <div
            className="video-player-controls__progress-bar"
            style={{width: `${this.props.progress}%`}}
          ></div>
        </button>
        <button
          className="video-player-controls__fullscreen-btn video-player-controls__btn-control"
          onClick={this.handlerSetFullscreen}
        >
          &#x25A0;
        </button>
      </div>
    );
  }
}

export default VideoPlayerControls;
