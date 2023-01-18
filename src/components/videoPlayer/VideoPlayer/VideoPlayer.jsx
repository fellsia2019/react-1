import React, { Component } from 'react';
import video from '../../../static/test.mp4'
import VideoPlayerControls from '../VideoPlayerControls/VideoPlayerControls';
import './VideoPlayer.scss'

class VideoPlayer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isPlayed: false,
      progress: 0,
      isFullScreen: false
    }
    this.videoRef = React.createRef()

    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
    this.onHandlerPlay = this.onHandlerPlay.bind(this);
    this.onHandlerPause = this.onHandlerPause.bind(this);
    this.onSetProgress = this.onSetProgress.bind(this);
    this.updateProgressBar = this.updateProgressBar.bind(this)
    this.setFullscreenState = this.setFullscreenState.bind(this)
  }

  onPlayVideo() {
    this.setIsPlayedState(true)
    this.videoRef.current.play()
  }
  onPauseVideo() {
    this.setIsPlayedState(false)
    this.videoRef.current.pause()
  }
  setIsPlayedState(newIsPlayedState) {
    this.setState({
      ...this.state,
      isPlayed: newIsPlayedState
    })
  }
  setFullscreenState() {
    this.setState({
      ...this.state,
      isFullScreen: !this.state.isFullScreen
    })
  }

  get progressPlayed() {
    return this.videoRef && this.videoRef.current && this.videoRef.current.currentTime ? this.videoRef.current.currentTime * 100 / this.videoRef.current.duration : 0
  }

  get rootClassStr() {
    const classes = ['video-player']

    if (this.state.isFullScreen) {
      classes.push('video-player--is-fullscreen')
    }

    return classes.join(' ')
  }

  updateProgressBar() {
    console.log('update:')
    this.setState({
      ...this.state,
      progress: this.progressPlayed
    })
  }

  onSetProgress(value) {
    this.videoRef.current.currentTime = value * this.videoRef.current.duration / 100
    // this.updateProgressBar()
  }
  onHandlerPlay() {
    this.setIsPlayedState(true)
  }
  onHandlerPause() {
    this.setIsPlayedState(false)
  }

  componentDidMount() {
    this.videoRef.current.addEventListener('timeupdate', this.updateProgressBar)
    this.videoRef.current.addEventListener('play', this.onHandlerPlay)
    this.videoRef.current.addEventListener('pause', this.onHandlerPause)
  }

  componentDidUpdate() {
    console.log('update',this.videoRef.current.duration, this.state.isPlayed, this.progressPlayed , '%')
  }

  render() {
    return (
      <div className={this.rootClassStr}>
        <video
          ref={this.videoRef}
          className='video-player__video'
          src={video}
        /> 
        <VideoPlayerControls
          className='video-player__controls'
          videoIsPlayed={this.state.isPlayed}
          progress={this.progressPlayed}
          onPlay={this.onPlayVideo}
          onPause={this.onPauseVideo}
          onSetProgress={this.onSetProgress}
          onSetFullscreen={this.setFullscreenState}
        />
      </div>
    );
  }
}

export default VideoPlayer;
