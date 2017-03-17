import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import { Line } from 'rc-progress';

class Audio extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (!this.props.track || !nextProps.track) {
  //     return true;
  //   }
  //   console.log(this.props.track)
  //   console.log(nextProps.track);
  //   return (this.props.track.id !== nextProps.track.id);
  // }
  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.displayTime = this.displayTime.bind(this);
    this.twoDigitNum = this.twoDigitNum.bind(this);
    this.start = this.start.bind(this);
    this.state = {
      paused: false,
      percent: 0
    }
  }


  togglePlay() {
    // (this.rap.audioEl.paused) ? this.rap.audioEl.play() : this.rap.audioEl.pause();
    this.props.playPauseTrackFromAudio(this.rap.audioEl.paused);
    // this.setState({paused: !this.state.paused});
  }

  updateTime() {
    this.setState({
      currentTime: this.displayTime(this.rap.audioEl.currentTime),
      percent: 100 * this.rap.audioEl.currentTime / this.rap.audioEl.duration
    });
  }

  start() {
    this.rap.audioEl.play();
    this.setState({
      paused: false,
      currentTime: this.displayTime(this.rap.audioEl.currentTime),
      duration: this.displayTime(this.rap.audioEl.duration),
      percent: 0
    });
  }

  displayTime(seconds) {
    let seconds_rounded = Math.round(seconds);
    let hours = Math.floor(seconds_rounded / 3600);

    seconds_rounded -= (hours * 3600);
    let minutes = Math.floor(seconds_rounded / 60);

    seconds_rounded -= (minutes * 60);

    if (hours > 0) {
      return `${hours.toString()}:${this.twoDigitNum(minutes)}:${this.twoDigitNum(seconds_rounded)}`;
    } else {
      return `${minutes.toString()}:${this.twoDigitNum(seconds_rounded)}`;
    }
  }

  twoDigitNum(num) {
    if (num <= 0) {
      return "00";
    } else if (num < 10) {
      return `0${num.toString()}`;
    } else {
      return num.toString();
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.rap === undefined) {
      return;
    }
    if (newProps.paused !== this.props.paused) {
      (this.rap.audioEl.paused) ? this.rap.audioEl.play() : this.rap.audioEl.pause();
      this.setState({paused: !this.state.paused});
    }
  }

  render() {
    // console.log(this.state.paused);
    let track = this.props.track;
    if (!track) {
      return null;
    }

    let playPauseIcon = <i className="fa fa-pause play-pause" aria-hidden="true"></i>;
    if (this.state.paused) {
      playPauseIcon = <i className="fa fa-play play-pause" aria-hidden="true"></i>
    }
    return  <div className="audio">
              <div className="controls-div">
                <ul className="controls-ul">
                  <li onClick={this.togglePlay}><i className="fa fa-step-backward" aria-hidden="true"></i></li>
                  <li onClick={this.togglePlay}>{playPauseIcon}</li>
                  <li onClick={this.togglePlay}><i className="fa fa-step-forward" aria-hidden="true"></i></li>
                </ul>
              </div>
              <div className="audio-player">
                <span className="time">{this.state.currentTime}</span>
                <div className="progress-bar">
                  <Line percent={this.state.percent} strokeColor={"#f50"} strokeWidth={1} trailColor={"rgb(150, 150, 150)"}></Line>
                </div>
                <span className="time">{this.state.duration}</span>
              </div>
              <ReactAudioPlayer ref={c => this.rap = c } onListen={this.updateTime} listenInterval={1000} onCanPlay={this.start} className="hidden" id="audio" src={track.musicUrl} controls={false} preload="auto" autoplay={true}/>
              <div className="audio-details-div">
                <img src={track.imageUrl} className="audio-img"></img>
                <div className="audio-text-details">
                  <span className="track-info-artist">{track.artistName}</span>
                  <span className="track-info-title">{track.title}</span>
                </div>
              </div>
            </div>
  }
}

export default Audio;