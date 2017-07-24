import React, {Component} from 'react';

class Timer extends Component{

  constructor(){
    super();
    this.state = {
      timer: null,
      timeSpent: null,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      trackTimer: false
    }
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
  }

  addLeadingZero(time) {

    if (time <= 9) {
      return "0" + Math.floor(time);
    } else {
      return time;
    }

  }

  startTimer(){

    var self = this;
    var seconds = self.state.seconds;
    var minutes = self.state.minutes;
    var hours = self.state.hours;
    var days = self.state.days;

		self.state.timer = setInterval(function () {

        if (seconds == 59) {
          seconds = 0;
          minutes = Math.floor(minutes) + 1;
        } else {
          seconds = Math.floor(seconds) + 1;
        }
        seconds = self.addLeadingZero(seconds);

        if (minutes == 59) {
          minutes = 0;
          hours = Math.floor(hours) + 1;
        }
        minutes = self.addLeadingZero(minutes);

        if (hours == 24) {
          hours = 0;
          days = Math.floor(days) + 1;
        }

        var timeSpent = hours + " hours " + minutes + " minutes " + seconds + " seconds";

        self.setState({
          timeSpent: timeSpent,
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        })

      }, 1000)

      self.setState({ trackTimer: true })

  }

  pauseTimer(){
    clearInterval(this.state.timer);
		this.setState({ trackTimer: false })
  }

  render(){
    return(
      <div>
        <button onClick={this.startTimer}>
          Start Timer
        </button>
        <button onClick={this.pauseTimer}>
          Pause Timer
        </button>
        <br />
        {this.state.timeSpent}
      </div>
    );
  }
}

export default Timer;
