import React, { Component } from 'react';
import l1 from "./Photos/sami.jpg";
import "./App.css";

class CheckpointComponent extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: 'Saafi Sami',
        profession: 'Software Engineer',
        imgSrc: l1,
      },
      show: false, // Initialize show state to false
      startDate: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        startDate: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showProfile = () => {
    this.setState({ show: true });
  };

  hideProfile = () => {
    this.setState({ show: false });
  };

  render() {
    const { fullName, profession, imgSrc } = this.state.person;
    const { show, startDate } = this.state;
    const timeSinceMount = Math.floor((new Date() - startDate) / 1000);

    return (
      <div>
        {show ? (
          <div>
            <h1>{fullName}</h1>
            <img src={imgSrc} alt={fullName} />
            <h2>{profession}</h2>
            <button onClick={this.hideProfile}>Hide Profile</button>
          </div>
        ) : (
          <button onClick={this.showProfile}>Show Profile</button>
        )}
      
      </div>
    );
  }
}

export default CheckpointComponent;
